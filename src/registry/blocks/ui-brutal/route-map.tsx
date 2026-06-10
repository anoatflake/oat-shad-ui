import * as React from "react";
import type {
  GeoJSONSource,
  Map as MapLibreMap,
  MapMouseEvent,
  Marker as MapLibreMarker,
  PaddingOptions,
  StyleSpecification,
} from "maplibre-gl";
import type { FeatureCollection, LineString, Point } from "geojson";
import { LocateFixed, Minus, Plus } from "lucide-react";
import "maplibre-gl/dist/maplibre-gl.css";

export interface Coordinate {
  latitude: number;
  longitude: number;
}

export interface RouteMapView {
  center: Coordinate;
  zoom: number;
  bearing?: number;
  pitch?: number;
}

export interface RouteMapPath {
  coordinates: Coordinate[];
  color?: string;
  outlineColor?: string;
  width?: number;
  outlineWidth?: number;
  pointColor?: string;
  pointRadius?: number;
  pointStrokeColor?: string;
  pointStrokeWidth?: number;
}

export interface RouteMapMarker {
  id: string;
  coordinate: Coordinate;
  label?: string;
  ariaLabel?: string;
  color?: string;
  ringColor?: string;
  showRing?: boolean;
  size?: "sm" | "md" | "lg";
  pulse?: boolean;
}

export interface RouteMapClickEvent {
  coordinate: Coordinate;
  originalEvent: MapMouseEvent;
}

export type RouteMapControlsPosition =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right";

export interface RouteMapControlsConfig {
  zoom?: boolean;
  recenter?: boolean;
  position?: RouteMapControlsPosition;
}

export type RouteMapProps = Omit<
  React.ComponentPropsWithoutRef<"div">,
  "children" | "onError"
> & {
  initialView?: RouteMapView;
  path?: RouteMapPath;
  markers?: RouteMapMarker[];
  currentLocation?: Coordinate | null;
  showCurrentLocation?: boolean;
  showPathPoints?: boolean;
  autoFitPath?: boolean;
  fitPadding?: number | PaddingOptions;
  controls?: boolean | RouteMapControlsConfig;
  onMapClick?: (event: RouteMapClickEvent) => void;
  onMarkerClick?: (marker: RouteMapMarker) => void;
  onViewChange?: (view: RouteMapView) => void;
  onError?: (error: unknown) => void;
};

const MAP_STYLE: StyleSpecification = {
  version: 8,
  sources: {
    "openstreetmap-tiles": {
      type: "raster",
      tiles: ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
      tileSize: 256,
      attribution:
        '<a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>',
    },
  },
  layers: [
    {
      id: "route-map-background",
      type: "background",
      paint: {
        "background-color": "#d7ebe9",
      },
    },
    {
      id: "openstreetmap-tiles",
      type: "raster",
      source: "openstreetmap-tiles",
    },
  ],
};
const PATH_SOURCE_ID = "route-map-path";
const PATH_OUTLINE_LAYER_ID = "route-map-path-outline";
const PATH_LAYER_ID = "route-map-path-line";
const POINT_SOURCE_ID = "route-map-path-points";
const POINT_LAYER_ID = "route-map-path-point-circles";

const DEFAULT_INITIAL_VIEW: RouteMapView = {
  center: {
    latitude: 36.7164,
    longitude: -4.421,
  },
  zoom: 11,
  bearing: 0,
  pitch: 0,
};

const DEFAULT_PATH_COLOR = "#111827";
const DEFAULT_PATH_OUTLINE_COLOR = "#ffffff";
const DEFAULT_POINT_COLOR = "#f9a8d4";
const DEFAULT_POINT_STROKE_COLOR = "#111827";
const DEFAULT_CURRENT_COLOR = "#14b8a6";
const DEFAULT_CURRENT_RING_COLOR = "rgba(20, 184, 166, 0.32)";
const DEFAULT_FIT_PADDING = 72;

const CONTROL_POSITION_CLASSES: Record<RouteMapControlsPosition, string> = {
  "top-left": "left-4 top-4",
  "top-right": "right-4 top-4",
  "bottom-left": "bottom-4 left-4",
  "bottom-right": "bottom-4 right-4",
};

const EMPTY_LINE_DATA: FeatureCollection<LineString> = {
  type: "FeatureCollection",
  features: [],
};

const EMPTY_POINT_DATA: FeatureCollection<Point> = {
  type: "FeatureCollection",
  features: [],
};

function RouteMap({
  className,
  initialView,
  path,
  markers = [],
  currentLocation,
  showCurrentLocation = true,
  showPathPoints = true,
  autoFitPath = true,
  fitPadding = DEFAULT_FIT_PADDING,
  controls = true,
  onMapClick,
  onMarkerClick,
  onViewChange,
  onError,
  ...props
}: RouteMapProps) {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const mapRef = React.useRef<MapLibreMap | null>(null);
  const markerRefs = React.useRef<MapLibreMarker[]>([]);
  const initialViewRef = React.useRef(resolveInitialView(initialView));
  const autoFitKeyRef = React.useRef<string | null>(null);
  const onMapClickRef = useLatest(onMapClick);
  const onMarkerClickRef = useLatest(onMarkerClick);
  const onViewChangeRef = useLatest(onViewChange);
  const onErrorRef = useLatest(onError);
  const [isMapReady, setIsMapReady] = React.useState(false);
  const [mapError, setMapError] = React.useState<string | null>(null);

  const normalizedControls = normalizeControls(controls);
  const pathKey = getPathKey(path);

  const fitCoordinates = React.useCallback(
    (coordinates: Coordinate[]) => {
      const map = mapRef.current;
      if (!map || coordinates.length === 0) {
        return;
      }

      if (coordinates.length === 1 || coordinatesSharePosition(coordinates)) {
        map.easeTo({
          center: toLngLat(coordinates[0]),
          zoom: Math.max(map.getZoom(), initialViewRef.current.zoom),
          duration: 600,
        });
        return;
      }

      const bounds = getBounds(coordinates);

      map.fitBounds(bounds, {
        padding: fitPadding,
        duration: 700,
        maxZoom: 16,
      });
    },
    [fitPadding],
  );

  const recenter = React.useCallback(() => {
    const map = mapRef.current;
    if (!map) {
      return;
    }

    const coordinates = getRecenterCoordinates(
      path,
      markers,
      showCurrentLocation ? currentLocation : null,
    );

    if (coordinates.length > 0) {
      fitCoordinates(coordinates);
      return;
    }

    map.easeTo({
      center: toLngLat(initialViewRef.current.center),
      zoom: initialViewRef.current.zoom,
      bearing: initialViewRef.current.bearing ?? 0,
      pitch: initialViewRef.current.pitch ?? 0,
      duration: 600,
    });
  }, [currentLocation, fitCoordinates, markers, path, showCurrentLocation]);

  React.useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    const resizeTarget: Element = container;
    let cancelled = false;
    let resizeObserver: ResizeObserver | null = null;

    async function setupMap() {
      try {
        const maplibregl = await import("maplibre-gl");

        if (cancelled || !containerRef.current) {
          return;
        }

        const view = initialViewRef.current;
        const map = new maplibregl.Map({
          container: containerRef.current,
          style: MAP_STYLE,
          center: toLngLat(view.center),
          zoom: view.zoom,
          bearing: view.bearing ?? 0,
          pitch: view.pitch ?? 0,
          attributionControl: {
            compact: true,
          },
        });

        mapRef.current = map;

        map.on("load", () => {
          setIsMapReady(true);
          map.resize();
        });

        map.on("moveend", () => {
          onViewChangeRef.current?.({
            center: fromLngLat(map.getCenter()),
            zoom: map.getZoom(),
            bearing: map.getBearing(),
            pitch: map.getPitch(),
          });
        });

        map.on("click", (event) => {
          onMapClickRef.current?.({
            coordinate: fromLngLat(event.lngLat),
            originalEvent: event,
          });
        });

        map.on("error", (event) => {
          const message = getErrorMessage(event);

          setMapError(message);
          onErrorRef.current?.(event);
        });

        if (typeof ResizeObserver !== "undefined") {
          resizeObserver = new ResizeObserver(() => map.resize());
          resizeObserver.observe(resizeTarget);
        }
      } catch (error) {
        setMapError(getErrorMessage(error));
        onErrorRef.current?.(error);
      }
    }

    void setupMap();

    return () => {
      cancelled = true;
      resizeObserver?.disconnect();
      markerRefs.current.forEach((marker) => marker.remove());
      markerRefs.current = [];
      mapRef.current?.remove();
      mapRef.current = null;
      setIsMapReady(false);
    };
  }, [onErrorRef, onMapClickRef, onViewChangeRef]);

  React.useEffect(() => {
    const map = mapRef.current;

    if (!map || !isMapReady) {
      return;
    }

    syncPathLayers(map, path, showPathPoints);
  }, [isMapReady, path, showPathPoints]);

  React.useEffect(() => {
    const map = mapRef.current;

    if (!map || !isMapReady || !autoFitPath || !path?.coordinates.length) {
      return;
    }

    if (autoFitKeyRef.current === pathKey) {
      return;
    }

    autoFitKeyRef.current = pathKey ?? null;
    fitCoordinates(
      getRecenterCoordinates(
        path,
        [],
        showCurrentLocation ? currentLocation : null,
      ),
    );
  }, [
    autoFitPath,
    currentLocation,
    fitCoordinates,
    isMapReady,
    path,
    pathKey,
    showCurrentLocation,
  ]);

  React.useEffect(() => {
    const map = mapRef.current;

    if (!map || !isMapReady) {
      return;
    }

    const currentMap: MapLibreMap = map;
    let isDisposed = false;

    async function syncMarkers() {
      const maplibregl = await import("maplibre-gl");

      if (isDisposed || !mapRef.current) {
        return;
      }

      markerRefs.current.forEach((marker) => marker.remove());
      markerRefs.current = [];

      const markerList = getRenderedMarkers(
        markers,
        showCurrentLocation ? currentLocation : null,
      );

      markerRefs.current = markerList.map((marker) => {
        const element = createMarkerElement(marker, () => {
          onMarkerClickRef.current?.(marker);
        });

        return new maplibregl.Marker({
          element,
          anchor: "center",
        })
          .setLngLat(toLngLat(marker.coordinate))
          .addTo(currentMap);
      });
    }

    void syncMarkers();

    return () => {
      isDisposed = true;
      markerRefs.current.forEach((marker) => marker.remove());
      markerRefs.current = [];
    };
  }, [
    currentLocation,
    isMapReady,
    markers,
    onMarkerClickRef,
    showCurrentLocation,
  ]);

  return (
    <div
      data-slot="route-map"
      className={cx(
        "border-outline bg-muted relative isolate h-[640px] min-h-[420px] w-full overflow-hidden rounded-md border-2 shadow-[8px_8px_hsl(var(--outline))]",
        "[&_.maplibregl-ctrl-attrib]:border-outline [&_.maplibregl-ctrl-attrib]:bg-brutal-surface/90 [&_.maplibregl-ctrl-attrib]:text-brutal-surface-foreground [&_.maplibregl-ctrl-attrib]:rounded-sm [&_.maplibregl-ctrl-attrib]:border-2 [&_.maplibregl-ctrl-attrib]:px-1.5 [&_.maplibregl-ctrl-attrib]:py-0.5 [&_.maplibregl-ctrl-attrib]:text-[10px] [&_.maplibregl-ctrl-attrib]:font-semibold",
        className,
      )}
      {...props}
    >
      <div
        ref={containerRef}
        className="absolute inset-0"
        style={{
          height: "100%",
          inset: 0,
          position: "absolute",
          width: "100%",
        }}
      />

      {mapError ? (
        <div className="border-outline bg-brutal-surface text-brutal-surface-foreground absolute top-4 left-4 z-10 max-w-[min(24rem,calc(100%-2rem))] rounded-sm border-2 px-3 py-2 text-sm font-bold shadow-[4px_4px_hsl(var(--outline))]">
          {mapError}
        </div>
      ) : null}

      {normalizedControls ? (
        <div
          className={cx(
            "absolute z-10 flex flex-col gap-2",
            CONTROL_POSITION_CLASSES[normalizedControls.position],
          )}
        >
          {normalizedControls.zoom ? (
            <>
              <RouteMapControlButton
                label="Zoom in"
                disabled={!isMapReady}
                onClick={() => mapRef.current?.zoomIn({ duration: 250 })}
              >
                <Plus />
              </RouteMapControlButton>
              <RouteMapControlButton
                label="Zoom out"
                disabled={!isMapReady}
                onClick={() => mapRef.current?.zoomOut({ duration: 250 })}
              >
                <Minus />
              </RouteMapControlButton>
            </>
          ) : null}
          {normalizedControls.recenter ? (
            <RouteMapControlButton
              label="Recenter map"
              disabled={!isMapReady}
              onClick={recenter}
            >
              <LocateFixed />
            </RouteMapControlButton>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

function RouteMapControlButton({
  label,
  disabled,
  onClick,
  children,
}: {
  label: string;
  disabled?: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      disabled={disabled}
      onClick={(event) => {
        event.stopPropagation();
        onClick();
      }}
      className="border-outline bg-brutal-surface text-brutal-surface-foreground focus-visible:outline-outline inline-flex size-11 items-center justify-center rounded-sm border-2 shadow-[4px_4px_hsl(var(--outline))] transition-shadow hover:shadow-[2px_2px_hsl(var(--outline))] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dashed disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-5"
    >
      {children}
    </button>
  );
}

function syncPathLayers(
  map: MapLibreMap,
  path: RouteMapPath | undefined,
  showPathPoints: boolean,
) {
  const lineData = getLineData(path);
  const pointData = showPathPoints ? getPointData(path) : EMPTY_POINT_DATA;
  const pathColor = path?.color ?? DEFAULT_PATH_COLOR;
  const outlineColor = path?.outlineColor ?? DEFAULT_PATH_OUTLINE_COLOR;
  const pathWidth = path?.width ?? 5;
  const outlineWidth = path?.outlineWidth ?? 2;
  const pointColor = path?.pointColor ?? DEFAULT_POINT_COLOR;
  const pointRadius = path?.pointRadius ?? 7;
  const pointStrokeColor = path?.pointStrokeColor ?? DEFAULT_POINT_STROKE_COLOR;
  const pointStrokeWidth = path?.pointStrokeWidth ?? 3;

  ensureGeoJsonSource(map, PATH_SOURCE_ID, lineData);
  ensureGeoJsonSource(map, POINT_SOURCE_ID, pointData);

  if (!map.getLayer(PATH_OUTLINE_LAYER_ID)) {
    map.addLayer({
      id: PATH_OUTLINE_LAYER_ID,
      type: "line",
      source: PATH_SOURCE_ID,
      layout: {
        "line-cap": "round",
        "line-join": "round",
      },
      paint: {
        "line-color": outlineColor,
        "line-width": pathWidth + outlineWidth * 2,
      },
    });
  }

  if (!map.getLayer(PATH_LAYER_ID)) {
    map.addLayer({
      id: PATH_LAYER_ID,
      type: "line",
      source: PATH_SOURCE_ID,
      layout: {
        "line-cap": "round",
        "line-join": "round",
      },
      paint: {
        "line-color": pathColor,
        "line-width": pathWidth,
      },
    });
  }

  if (!map.getLayer(POINT_LAYER_ID)) {
    map.addLayer({
      id: POINT_LAYER_ID,
      type: "circle",
      source: POINT_SOURCE_ID,
      paint: {
        "circle-color": pointColor,
        "circle-radius": pointRadius,
        "circle-stroke-color": pointStrokeColor,
        "circle-stroke-width": pointStrokeWidth,
      },
    });
  }

  map.setPaintProperty(PATH_OUTLINE_LAYER_ID, "line-color", outlineColor);
  map.setPaintProperty(
    PATH_OUTLINE_LAYER_ID,
    "line-width",
    pathWidth + outlineWidth * 2,
  );
  map.setPaintProperty(PATH_LAYER_ID, "line-color", pathColor);
  map.setPaintProperty(PATH_LAYER_ID, "line-width", pathWidth);
  map.setPaintProperty(POINT_LAYER_ID, "circle-color", pointColor);
  map.setPaintProperty(POINT_LAYER_ID, "circle-radius", pointRadius);
  map.setPaintProperty(POINT_LAYER_ID, "circle-stroke-color", pointStrokeColor);
  map.setPaintProperty(POINT_LAYER_ID, "circle-stroke-width", pointStrokeWidth);
}

function ensureGeoJsonSource(
  map: MapLibreMap,
  sourceId: string,
  data: FeatureCollection<LineString> | FeatureCollection<Point>,
) {
  const source = map.getSource(sourceId) as GeoJSONSource | undefined;

  if (source) {
    source.setData(data);
    return;
  }

  map.addSource(sourceId, {
    type: "geojson",
    data,
  });
}

function getLineData(
  path: RouteMapPath | undefined,
): FeatureCollection<LineString> {
  if (!path || path.coordinates.length < 2) {
    return EMPTY_LINE_DATA;
  }

  return {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {},
        geometry: {
          type: "LineString",
          coordinates: path.coordinates.map(toLngLat),
        },
      },
    ],
  };
}

function getPointData(
  path: RouteMapPath | undefined,
): FeatureCollection<Point> {
  if (!path || path.coordinates.length === 0) {
    return EMPTY_POINT_DATA;
  }

  return {
    type: "FeatureCollection",
    features: path.coordinates.map((coordinate, index) => ({
      type: "Feature",
      properties: {
        index,
      },
      geometry: {
        type: "Point",
        coordinates: toLngLat(coordinate),
      },
    })),
  };
}

function getRenderedMarkers(
  markers: RouteMapMarker[],
  currentLocation: Coordinate | null | undefined,
) {
  if (!currentLocation) {
    return markers;
  }

  return [
    ...markers,
    {
      id: "current-location",
      coordinate: currentLocation,
      label: "Current location",
      ariaLabel: "Current location",
      color: DEFAULT_CURRENT_COLOR,
      ringColor: DEFAULT_CURRENT_RING_COLOR,
      size: "lg",
      pulse: true,
    } satisfies RouteMapMarker,
  ];
}

function createMarkerElement(marker: RouteMapMarker, onClick: () => void) {
  const size = marker.size === "lg" ? 46 : marker.size === "sm" ? 24 : 32;
  const dotSize = Math.max(12, Math.round(size * 0.54));
  const element = document.createElement("button");
  const ring = document.createElement("span");
  const dot = document.createElement("span");

  element.type = "button";
  element.title = marker.label ?? marker.ariaLabel ?? marker.id;
  element.setAttribute(
    "aria-label",
    marker.ariaLabel ?? marker.label ?? marker.id,
  );
  element.className =
    "pointer-events-auto relative z-10 flex items-center justify-center rounded-full border-4 border-outline bg-transparent p-0 text-brutal-surface-foreground shadow-[3px_3px_0_rgba(17,24,39,0.85)] focus-visible:outline-dashed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-outline";
  element.style.width = `${size}px`;
  element.style.height = `${size}px`;
  element.style.cursor = "pointer";

  if (marker.showRing || marker.pulse) {
    ring.className = "absolute rounded-full";
    ring.style.inset = marker.pulse ? "-10px" : "-6px";
    ring.style.backgroundColor =
      marker.ringColor ?? "rgba(249, 168, 212, 0.32)";

    if (marker.pulse) {
      ring.className = `${ring.className} animate-ping`;
    }

    element.append(ring);
  }

  dot.className = "relative rounded-full border-4 border-outline";
  dot.style.width = `${dotSize}px`;
  dot.style.height = `${dotSize}px`;
  dot.style.backgroundColor = marker.color ?? DEFAULT_POINT_COLOR;

  element.append(dot);
  element.addEventListener("click", (event) => {
    event.stopPropagation();
    onClick();
  });

  return element;
}

function normalizeControls(
  controls: boolean | RouteMapControlsConfig,
): Required<RouteMapControlsConfig> | null {
  if (!controls) {
    return null;
  }

  if (controls === true) {
    return {
      zoom: true,
      recenter: true,
      position: "top-right",
    };
  }

  return {
    zoom: controls.zoom ?? true,
    recenter: controls.recenter ?? true,
    position: controls.position ?? "top-right",
  };
}

function resolveInitialView(
  initialView: RouteMapView | undefined,
): RouteMapView {
  return {
    ...DEFAULT_INITIAL_VIEW,
    ...initialView,
    center: initialView?.center ?? DEFAULT_INITIAL_VIEW.center,
  };
}

function getPathKey(path: RouteMapPath | undefined) {
  return path?.coordinates
    .map((coordinate) => `${coordinate.longitude},${coordinate.latitude}`)
    .join("|");
}

function getRecenterCoordinates(
  path: RouteMapPath | undefined,
  markers: RouteMapMarker[],
  currentLocation: Coordinate | null | undefined,
) {
  const coordinates = path?.coordinates.length ? [...path.coordinates] : [];

  if (!coordinates.length) {
    coordinates.push(...markers.map((marker) => marker.coordinate));
  }

  if (currentLocation) {
    coordinates.push(currentLocation);
  }

  return coordinates;
}

function coordinatesSharePosition(coordinates: Coordinate[]) {
  const first = coordinates[0];

  return coordinates.every(
    (coordinate) =>
      coordinate.latitude === first.latitude &&
      coordinate.longitude === first.longitude,
  );
}

function getBounds(coordinates: Coordinate[]) {
  const longitudes = coordinates.map((coordinate) => coordinate.longitude);
  const latitudes = coordinates.map((coordinate) => coordinate.latitude);

  return [
    [Math.min(...longitudes), Math.min(...latitudes)],
    [Math.max(...longitudes), Math.max(...latitudes)],
  ] as [[number, number], [number, number]];
}

function toLngLat(coordinate: Coordinate): [number, number] {
  return [coordinate.longitude, coordinate.latitude];
}

function fromLngLat(lngLat: { lng: number; lat: number }): Coordinate {
  return {
    latitude: lngLat.lat,
    longitude: lngLat.lng,
  };
}

function getErrorMessage(error: unknown) {
  if (isRecord(error)) {
    if (typeof error.message === "string") {
      return error.message;
    }

    if (isRecord(error.error) && typeof error.error.message === "string") {
      return error.error.message;
    }
  }

  if (error instanceof Error) {
    return error.message;
  }

  return "Map failed to load.";
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function useLatest<T>(value: T) {
  const ref = React.useRef(value);

  React.useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref;
}

export { RouteMap };
