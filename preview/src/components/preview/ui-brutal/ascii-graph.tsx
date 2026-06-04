import {
  ASCIIGraph,
  ASCIIGraphHeader,
  ASCIIGraphTitle,
  ASCIIGraphDescription,
  ASCIIGraphFooter,
  ASCIIGraphContent,
  ASCIIGraphNodes,
  ASCIIGraphNode,
  ASCIIGraphEdges,
  ASCIIGraphEdge,
} from "@/components/ui-brutal/ascii-graph";

const ASCIIGraphPreview = () => {
  return (
    <ASCIIGraph>
      <ASCIIGraphHeader>
        <ASCIIGraphTitle></ASCIIGraphTitle>
        <ASCIIGraphDescription></ASCIIGraphDescription>
      </ASCIIGraphHeader>
      <ASCIIGraphContent>
        <ASCIIGraphNodes>
          <ASCIIGraphNode variant="default" id="A" />
          <ASCIIGraphNode variant="secondary" id="B" />
        </ASCIIGraphNodes>
        <ASCIIGraphEdges>
          <ASCIIGraphEdge variant="arrow" from="A" to="B" />
        </ASCIIGraphEdges>
      </ASCIIGraphContent>
      <ASCIIGraphFooter></ASCIIGraphFooter>
    </ASCIIGraph>
  );
};
export default ASCIIGraphPreview;
