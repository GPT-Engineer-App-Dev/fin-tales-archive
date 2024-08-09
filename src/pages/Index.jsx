import React, { useState } from "react";
import { Fish, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const fishFacts = [
  "There are over 34,000 known species of fish.",
  "The smallest known fish is the Paedocypris progenetica, measuring only 7.9 mm.",
  "The largest fish is the whale shark, which can grow up to 40 feet long.",
  "Some species of fish can fly, while others can climb trees.",
  "Fish have been on Earth for more than 500 million years.",
];

const Index = () => {
  const [factIndex, setFactIndex] = useState(0);

  const nextFact = () => {
    setFactIndex((prevIndex) => (prevIndex + 1) % fishFacts.length);
  };

  return (
    <div className="min-h-screen bg-blue-50 p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-600 mb-4 flex items-center justify-center">
            <Fish className="mr-2" size={36} />
            Fantastic Fish Facts
          </h1>
          <p className="text-xl text-gray-600">Dive into the fascinating world of fish!</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Colorful Coral Reef</CardTitle>
              <CardDescription>A vibrant ecosystem teeming with fish</CardDescription>
            </CardHeader>
            <CardContent>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Reef_fish_and_corals.jpg"
                alt="Coral reef with colorful fish"
                className="w-full h-64 object-cover rounded-md"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Deep Sea Anglerfish</CardTitle>
              <CardDescription>A mysterious creature from the ocean depths</CardDescription>
            </CardHeader>
            <CardContent>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/1f/Humpback_anglerfish.png"
                alt="Deep sea anglerfish"
                className="w-full h-64 object-cover rounded-md"
              />
            </CardContent>
          </Card>
        </div>

        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Info className="mr-2" size={24} />
              Fish Fact of the Day
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg mb-4">{fishFacts[factIndex]}</p>
            <Button onClick={nextFact}>Next Fact</Button>
          </CardContent>
        </Card>

        <footer className="text-center text-gray-600">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <p>Hover for a fun fish pun!</p>
              </TooltipTrigger>
              <TooltipContent>
                <p>Why don't fish wear armor? Because they have scales!</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </footer>
      </div>
    </div>
  );
};

export default Index;
