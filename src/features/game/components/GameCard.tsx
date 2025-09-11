import { Button } from "../../../components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { CategoryButton } from "./CategoryButton";

const GameCard = () => {
  return (
    <Card className="max-w-[420px]">
      <CardHeader>
        <div className="flex justify-between w-full max-w-[420px]">
          <div>
            <span className="font-semibold">Score:</span> 5
          </div>
          <div>
            <span className="font-semibold">Best:</span> 10
          </div>
        </div>
        <CardTitle className="text-center text-6xl">🇮🇪</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-center mb-4">
          Choose the best category for{" "}
          <span className="font-semibold">Ireland</span> based on rankings!
        </p>

        <div className="flex flex-col gap-y-2.5">
          <CategoryButton emoji="🏙️" label="Human development index" />
          <CategoryButton emoji="📈" label="GDP per capita" />
          <CategoryButton emoji="🏠" label="Population" />
          <CategoryButton emoji="🏭" label="Pollution" />
          <CategoryButton emoji="🚨" label="Crime rate" />
          <CategoryButton emoji="🗺️" label="Area" />
        </div>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button className="text-md">Restart</Button>
      </CardFooter>
    </Card>
  );
};

export { GameCard };
