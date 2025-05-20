import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui-smooth/accordion";
import { Separator } from "@/components/ui-smooth/separator";
import * as Charts from "./charts/_charts";

const ChartPreview = () => {
  return (
    <div className="flex flex-col gap-2 rounded-lg border p-4">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <h2>Charts</h2>
          </AccordionTrigger>
          <AccordionContent>
            <div
              id="examples"
              className="grid flex-1 scroll-mt-20 items-start gap-10 md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:gap-10"
            >
              <Charts.ChartAreaStacked />
              <Charts.ChartBarMultiple />
              <Charts.ChartPieDonutText />
            </div>
            <Separator />
            <div
              id="area-chart"
              className="grid flex-1 scroll-mt-20 items-start gap-10 md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:gap-10"
            >
              <Charts.ChartAreaDefault />
              <Charts.ChartAreaLinear />
              <Charts.ChartAreaStep />
              <Charts.ChartAreaStacked />
              <Charts.ChartAreaStackedExpand />
              <Charts.ChartAreaLegend />
              <Charts.ChartAreaIcons />
              <Charts.ChartAreaGradient />
              <Charts.ChartAreaAxes />

              <div className="md:col-span-2 lg:col-span-3">
                <Charts.ChartAreaInteractive />
              </div>
            </div>
            <Separator />
            <div
              id="bar-chart"
              className="grid flex-1 scroll-mt-20 items-start gap-10 md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:gap-10"
            >
              <Charts.ChartBarDefault />
              <Charts.ChartBarHorizontal />
              <Charts.ChartBarMultiple />
              <Charts.ChartBarLabel />
              <Charts.ChartBarLabelCustom />
              <Charts.ChartBarMixed />
              <Charts.ChartBarStacked />
              <Charts.ChartBarActive />
              <Charts.ChartBarNegative />

              <div className="md:col-span-2 lg:col-span-3">
                <Charts.ChartBarInteractive />
              </div>
            </div>
            <Separator />
            <div
              id="line-chart"
              className="grid flex-1 scroll-mt-20 items-start gap-10 md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:gap-10"
            >
              <Charts.ChartLineDefault />
              <Charts.ChartLineLinear />
              <Charts.ChartLineStep />
              <Charts.ChartLineMultiple />
              <Charts.ChartLineDots />
              <Charts.ChartLineDotsCustom />
              <Charts.ChartLineDotsColors />
              <Charts.ChartLineLabel />
              <Charts.ChartLineLabelCustom />

              <div className="md:col-span-2 lg:col-span-3">
                <Charts.ChartLineInteractive />
              </div>
            </div>
            <Separator />
            <div
              id="pie-chart"
              className="grid flex-1 scroll-mt-20 items-start gap-10 md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:gap-10"
            >
              <Charts.ChartPieSimple />
              <Charts.ChartPieSeparatorNone />
              <Charts.ChartPieLabel />
              <Charts.ChartPieLabelCustom />
              <Charts.ChartPieLabelList />
              <Charts.ChartPieLegend />
              <Charts.ChartPieDonut />
              <Charts.ChartPieDonutActive />
              <Charts.ChartPieDonutText />
              <Charts.ChartPieStacked />
              <Charts.ChartPieInteractive />
            </div>
            <Separator />
            <div
              id="radar-chart"
              className="grid flex-1 scroll-mt-20 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-10"
            >
              <Charts.ChartRadarDefault />
              <Charts.ChartRadarDots />
              <Charts.ChartRadarMultiple />
              <Charts.ChartRadarLinesOnly />
              <Charts.ChartRadarLabelCustom />
              <Charts.ChartRadarRadius />
              <Charts.ChartRadarGridCustom />
              <Charts.ChartRadarGridFill />
              <Charts.ChartRadarGridNone />
              <Charts.ChartRadarGridCircle />
              <Charts.ChartRadarGridCircleNoLines />
              <Charts.ChartRadarGridCircleFill />
              <Charts.ChartRadarLegend />
              <Charts.ChartRadarIcons />
            </div>
            <Separator />
            <div
              id="radial-chart"
              className="grid flex-1 scroll-mt-20 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-10"
            >
              <Charts.ChartRadialSimple />
              <Charts.ChartRadialLabel />
              <Charts.ChartRadialGrid />
              <Charts.ChartRadialText />
              <Charts.ChartRadialShape />
              <Charts.ChartRadialStacked />
            </div>
            <Separator />
            <div
              id="tooltip"
              className="chart-wrapper grid flex-1 scroll-mt-20 items-start gap-10 md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:gap-10"
            >
              <Charts.ChartTooltipDefault />
              <Charts.ChartTooltipIndicatorLine />
              <Charts.ChartTooltipIndicatorNone />
              <Charts.ChartTooltipLabelCustom />
              <Charts.ChartTooltipLabelFormatter />
              <Charts.ChartTooltipLabelNone />
              <Charts.ChartTooltipFormatter />
              <Charts.ChartTooltipIcons />
              <Charts.ChartTooltipAdvanced />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
export default ChartPreview;

//https://ui.shadcn.com/charts
//https://github.com/shadcn-ui/ui-smooth/blob/main/apps/www/app/(app)/charts/page.tsx
