import React from "react";
import { Card, Button } from "flowbite-react";
const Feedback = () => {
  return (
    <main className="flex items-center justify-center">
      
      <Card className="max-w-sm bg-gray-800">
        <h5 className="text-2xl font-bold tracking-tight text-slate-50" name="">
          Andrea Denver, Colorado
        </h5>
        <p className="font-normal text-slate-50">
          I absolutely adore the trendy styles this store offers. The clothes
          fit so well and they look amazing on a curvy figure. I really
          appreciate this option and the quality of the goods is so great that I
          will order product in the future. Thank you so much for making me feel
          beautiful!
        </p>
        <Button className="bg-slate-700/95 ">
          Read more
          <svg
            className="-mr-1 ml-2 h-4 w-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Button>
      </Card>
    </main>
  );
};

export default Feedback;
