import {
  RouteMap,
  type RouteMapMarker,
  type RouteMapPath,
} from "@/blocks/ui-brutal/route-map";

const lisbonFlightPath: RouteMapPath = {
  coordinates: [
    { latitude: 38.6929, longitude: -9.4215 },
    { latitude: 38.6952, longitude: -9.3184 },
    { latitude: 38.7036, longitude: -9.2279 },
    { latitude: 38.7122, longitude: -9.1507 },
    { latitude: 38.7198, longitude: -9.0973 },
  ],
  color: "#111827",
  outlineColor: "#ffffff",
  width: 5,
  outlineWidth: 2,
  pointColor: "#f9a8d4",
  pointRadius: 7,
  pointStrokeColor: "#111827",
  pointStrokeWidth: 3,
};

const routeMarkers: RouteMapMarker[] = [
  {
    id: "start",
    label: "Start",
    coordinate: lisbonFlightPath.coordinates[0],
    color: "#c4b5fd",
    size: "md",
  },
  {
    id: "checkpoint",
    label: "Checkpoint",
    coordinate: lisbonFlightPath.coordinates[2],
    color: "#fde68a",
    size: "sm",
  },
  {
    id: "end",
    label: "End",
    coordinate: lisbonFlightPath.coordinates[4],
    color: "#99f6e4",
    size: "md",
  },
];

const RouteMapPreview = () => {
  return (
    <div className="w-full max-w-6xl p-2">
      <RouteMap
        className="h-[620px]"
        initialView={{
          center: { latitude: 38.7073, longitude: -9.2582 },
          zoom: 10,
        }}
        path={lisbonFlightPath}
        markers={routeMarkers}
        currentLocation={{ latitude: 38.7167, longitude: -9.1169 }}
        fitPadding={96}
      />
    </div>
  );
};

export default RouteMapPreview;
