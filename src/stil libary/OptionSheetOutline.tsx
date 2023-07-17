import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { delay } from "../components/Delay";


interface OptionSheetOutlineProps {
  isVisible: boolean;
  setIsVisible: (visible: boolean) => void;
  content: React.ReactNode;
}

const OptionSheetOutline: React.FC<OptionSheetOutlineProps> = ({
  isVisible,
  setIsVisible,
  content,
}) => {
  const [active, setActive] = useState(false);
  const refOne = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isVisible) {
      setActive(true);
    } else {
      handleBackClick();
    }
  }, [isVisible]);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  function handleClickOutside(e: MouseEvent) {
    if (refOne.current && !refOne.current.contains(e.target as Node)) {
      handleBackClick();
    }
  }

  async function handleBackClick() {
    setIsVisible(false);
    await delay(100);
    setActive(false);
  }

  return (
    <>
      {active && (
        <motion.div
          ref={refOne}
          initial={{ opacity: 0, scale: 0.0 }}
          animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.0 }}
          transition={{ duration: 0.2 }}
          className="bg-[rgb(243,241,242)] text-black w-56  md:w-64     right-3 backdrop-blur-lg bg-opacity-100  rounded-lg   "
        >
          {content}
        </motion.div>
      )}
    </>
  );
};

export default OptionSheetOutline;
