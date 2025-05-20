import {
  ASCIIGraph,
  ASCIIGraphHeader,
  ASCIIGraphTitle,
  ASCIIGraphDescription,
  ASCIIGraphFooter,
} from "@/components/ui-brutal/ascii-graph";

const ASCIIGraphPreview = () => {
  return (
    <ASCIIGraph>
      <ASCIIGraphHeader>
        <ASCIIGraphTitle></ASCIIGraphTitle>
        <ASCIIGraphDescription></ASCIIGraphDescription>
      </ASCIIGraphHeader>
      <ASCIIGraphContent>
        <Nodes>
          <Node variant="default" id="A" />
          <Node variant="secondary" id="B" />
        </Nodes>
        <Edges>
          <Edge variant="arrow" from="A" to="B" />
        </Edges>
      </ASCIIGraphContent>
      <ASCIIGraphFooter></ASCIIGraphFooter>
    </ASCIIGraph>
  );
};
export default ASCIIGraphPreview;
