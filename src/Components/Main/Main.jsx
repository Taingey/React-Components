import React from "react";
import { Card } from "flowbite-react";
import Data from "../../Data/Data.json";
import { Footer } from "../Footer";
import Feedback from "./Feedback";
export const Main = () => {
  return (
    <main className="max-w-full h-full flex relative overflow-y-hidden">
      <div className="w-full flex flex-wrap items-center justify-center rounded-tl grid-flow-col auto-cols-max gap-4 overflow-y-scroll ">
        {Data.map((e, id) => (
          <div key={id}>
            <Card
              className="max-w-sm w-full h-full rounded-lg flex-shrink-0 flex-grow bg-gray-800"
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc={e.image}
            >
              <h5 className="text-2xl font-bold tracking-tight text-slate-50">
                {e.title}
              </h5>
              <p className="font-normal text-slate-50">{e.description}</p>
              <div className="text-2xl flex items-center justify-between font-bold text-slate-50">
                <button className="rounded-lg bg-slate-700/95 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:focus:bg-slate-800/95">
                  Add to cart
                </button>
                <p>{e.price}</p>
              </div>
            </Card>
          </div>
        ))}
        <div className="grid gap-3 mt-5">
          <h2 className="text-4xl text-slate-50 font-bold">Feedback</h2>
          <div className="w-full flex flex-wrap items-center justify-center rounded-tl grid-flow-col auto-cols-max gap-4">
            <Feedback />
            <Feedback />
            <Feedback />
          </div>
        </div>

        <Footer />
      </div>
    </main>
  );
};
