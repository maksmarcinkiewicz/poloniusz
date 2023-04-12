import React from "react";
import ResizablePanel from "./ResizablePanel";
import { useState } from "react";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import useMeasure from "react-use-measure";

let duration = 0.5;

const TeamMember = ({ name, designation, image, orderNumber }) => {
  console.log(orderNumber);
  let [foo, setFoo] = useState(false);
  let [count, setCount] = useState(0);
  return (
    <div id={orderNumber} className="flex flex-col p-8 carousel-item ">
      <div className="flex items-center gap-10">
        <img src={image} alt={name} className="w-1/3 rounded-full" />
        <div>
          <h3 className="team-member__name">{name}</h3>
          <h4 className="">{designation}</h4>
        </div>
      </div>

      <MotionConfig transition={{ duration, type: "tween" }}>
        <div className="flex  flex-col text-black text-justify">
          <div className="w-full max-w-sm pt-8">
            <ResizablePanel>
              {count % 3 === 2 ? (
                <p className="w-10/12">
                  And something longer. Sed ut perspiciatis unde omnis iste
                  natus error sit voluptatem accusantium doloremque laudantium,
                  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
                  et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
              ) : count % 3 === 1 ? (
                <p className="w-10/12">
                  Something a bit longer. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Repudiandae modi vel odio.
                </p>
              ) : (
                <p>Something short.</p>
              )}
            </ResizablePanel>
            <div className="mb-8 flex justify-between">
              <button className="btn" onClick={() => setCount(count + 1)}>
                Read More
              </button>
            </div>
          </div>
        </div>
      </MotionConfig>
    </div>
  );
};

export default TeamMember;
