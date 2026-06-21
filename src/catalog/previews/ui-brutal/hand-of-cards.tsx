import { HandOfCards } from "@/components/ui-brutal/hand-of-cards";
import { Card, CardHeader, CardTitle } from "@/components/ui-brutal/card";

const HandOfCardsPreview = () => {
  return (
    <div className="borderp-4 min-w-5xl rounded-lg">
      <HandOfCards
        cardHeight="23rem"
        cardWidth="17rem"
        className="min-h-128"
        overlap={108}
        spread={9}
      >
        <Card hue="orange" className="flex flex-col justify-between text-white">
          <CardHeader>
            <CardTitle>Working Knowledge</CardTitle>
          </CardHeader>
        </Card>

        <Card hue="white">
          <CardHeader>
            <CardTitle>Practical Demonstration</CardTitle>
          </CardHeader>
        </Card>

        <Card hue="blue" className="flex flex-col justify-between text-white">
          <CardHeader>
            <CardTitle>Collaborate with AI</CardTitle>
          </CardHeader>
        </Card>

        <Card hue="greenish" className="flex flex-col justify-between">
          <CardHeader>
            <CardTitle>Means & Methods</CardTitle>
          </CardHeader>
        </Card>

        <Card className="flex flex-col justify-between bg-stone-950 text-stone-100">
          <CardHeader>
            <CardTitle>Interface Kit</CardTitle>
          </CardHeader>
        </Card>
      </HandOfCards>
    </div>
  );
};

export default HandOfCardsPreview;
