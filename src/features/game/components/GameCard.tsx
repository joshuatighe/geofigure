"use client";

import { useState } from "react";
import { Button } from "../../../components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { CategoryButton } from "./CategoryButton";

type GameCardProps = {
  name: string;
  emoji: string;
  score: number;
  highScore: number;
};

const GameCard = ({ name, emoji, score, highScore }: GameCardProps) => {
  const [selectedButton, setSelectedButton] = useState(0);

  const handleButtonClick = (id: number) => {
    setSelectedButton(id);
  };

  return (
    <Card className="max-w-[420px]">
      <CardHeader>
        <div className="flex justify-between w-full max-w-[420px]">
          <div>
            <span className="font-semibold">Score:</span> {score}
          </div>
          <div>
            <span className="font-semibold">Best:</span> {highScore}
          </div>
        </div>
        <CardTitle className="text-center text-6xl">{emoji}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-center mb-4">
          Choose the best category for{" "}
          <span className="font-semibold">{name}</span> based on rankings!
        </p>

        <div className="flex flex-col gap-y-2.5">
          <CategoryButton
            emoji="🏙️"
            label="Human development index"
            id={0}
            isSelected={selectedButton === 0}
            onClick={handleButtonClick}
          />
          <CategoryButton
            emoji="📈"
            label="GDP per capita"
            id={1}
            isSelected={selectedButton === 1}
            onClick={handleButtonClick}
          />
          <CategoryButton
            emoji="🏠"
            label="Population"
            id={2}
            isSelected={selectedButton === 2}
            onClick={handleButtonClick}
          />
          <CategoryButton
            emoji="🏭"
            label="Pollution"
            id={3}
            isSelected={selectedButton === 3}
            onClick={handleButtonClick}
          />
          <CategoryButton
            emoji="🚨"
            label="Crime rate"
            id={4}
            isSelected={selectedButton === 4}
            onClick={handleButtonClick}
          />
          <CategoryButton
            emoji="🗺️"
            label="Area"
            id={5}
            isSelected={selectedButton === 5}
            onClick={handleButtonClick}
          />
        </div>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button className="text-md">Restart</Button>
      </CardFooter>
    </Card>
  );
};

export { GameCard };
