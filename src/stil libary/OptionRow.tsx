import React, { ReactNode } from "react";
import {
  IoChevronForward,
  IoChevronForwardCircleOutline,
  IoChevronForwardOutline,
} from "react-icons/io5";

interface OptionRowProps {
  s: string;
  icon: ReactNode;
  further?: boolean;
  space?: boolean;
  last?: boolean;
  func?: () => void;
  first?: boolean;
  destructive?: boolean;
}

const OptionRow: React.FC<OptionRowProps> = ({
  s,
  icon,
  further,
  space,
  last,
  func,
  first,
  destructive,
}) => {
  return (
    <>
      <div
        onClick={func}
        className={`flex justify-between p-2 w-full  hover:bg-[rgb(235,232,233)] border-[rgb(223,221,222)]
        ${first ? "pt-3 rounded-t-lg" : !last ? " border-b " : "rounded-b-lg"} ${
          space && " border-b-8"
        } ${destructive ? " text-[#FF3B30]" : ""}`}
      >
        <div className="flex">
          <div className="w-6 ">
            {further && (
              <IoChevronForwardOutline className="text-xl ml-0.5 mt-0.5" />
            )}
          </div>
          <p>{s}</p>
        </div>
        <div className="text-xl mr-1">{icon}</div>
      </div>
    </>
  );
};

export default OptionRow;
