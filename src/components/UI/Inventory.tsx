import {
  useEntities,
  useEntity,
  useEntityComponents,
  useEntityHasTags,
  useEntityProps,
} from "@leanscope/ecs-engine";
import React, { useContext, useEffect, useRef, useState } from "react";


import { motion } from "framer-motion";
import { ECSContext, Entity, System } from "@leanscope/ecs-engine";


import {
  IoEnterOutline,
  IoInformationCircleOutline,
  IoPushOutline,
} from "react-icons/io5";
import { EntityProps } from "@leanscope/ecs-engine/react-api/classes/EntityProps";

import { delay } from "../Delay";
import { Tags } from "../../base/Constants";
import { ItemTypes, getItemType } from "../Items";
import { NameFacet, ValueFacet } from "../../app/GameFacets";
import OptionRow from "../../stil libary/OptionRow";
import OptionSheetOutline from "../../stil libary/OptionSheetOutline";

const Item = (props: EntityProps) => {
  console.log(props.entity)
  const [nameFacet] = useEntityComponents(props.entity, NameFacet)
  const [abc, valueFacet] = useEntityComponents(
    props.entity,
    NameFacet,
    ValueFacet
  );

  console.log(nameFacet)

  const name = "nameFacet.props.name;"
  const value = "valueFacet.props.value;"

  const type = getItemType(name);
  const [isVisible, setIsVisible] = useState(false);

  function dropItem() {
    // console.log(itemEntity)
    props.entity.addComponent(new ValueFacet({ value: 4 }));
  }

  function useItem() {
    if (type == ItemTypes.FOOD) {
      console.log(1);
    }
  }

  return (
    <>
      <div
        onClick={() => {
          setIsVisible(!isVisible);
        }}
        className={`flex items-center bg-black rounded-lg bg-opacity-10   hover:opacity-60  transition-all h-full w-full ${
          isVisible && "opacity-60"
        }`}
      >
        <div className="w-full  flex h-fit  justify-center ">
          <div className=" w-6 h-6 rounded   bg-slate-200" />
        </div>
        <p className="absolute text-xs mt-10 ml-2  text-[rgb(243,241,242)]   ">
          {value}
          {value  && "x"}
        </p>
      </div>

      <div className="absolute top-6 left-[6.5rem]  ">
        <OptionSheetOutline
          setIsVisible={setIsVisible}
          isVisible={isVisible}
          content={
            <>
              <OptionRow
                icon={<IoInformationCircleOutline />}
                s={`${name} ${value}${value && "x"}`}
                space={true}
                first={true}
              />
              <OptionRow
                func={useItem}
                s={"Benutzen"}
                icon={<IoEnterOutline />}
              />
              <OptionRow
                func={dropItem}
                destructive={true}
                s={"Weg werfen"}
                icon={<IoPushOutline />}
                last={true}
              />
            </>
          }
        />
      </div>
    </>
  );
};

const Inventory = () => {
  const refOne = useRef<HTMLDivElement>(null);

  const [itemEntities] = useEntities((e: Entity) => e.has(Tags.ITEM));

  const [itemSlots, setItemSlots] = useState<readonly Entity[]>(itemEntities);
  const [tools, setTools] = useState<Entity[]>([]);
  const [importandItems, setImportandItems] = useState<Entity[]>([]);

  const [active, setActive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setItemSlots(itemEntities);
  }, [itemEntities]);

  useEffect(() => {
    if (itemSlots && itemSlots.length < 8) {
      const fillerItems = Array(8 - itemSlots.length).fill(null);
      setItemSlots((prevItems) => [...prevItems, ...fillerItems]);
    }

    if (tools && tools.length < 3) {
      const fillerItems = Array(3 - tools.length).fill(null);
      setTools((prevTools) => [...prevTools, ...fillerItems]);
    }

    if (importandItems && importandItems.length < 2) {
      const fillerItems = Array(2 - importandItems.length).fill(null);
      setImportandItems((prevImportandItems) => [
        ...prevImportandItems,
        ...fillerItems,
      ]);
    }
  }, [itemSlots, tools, importandItems]);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
  }, []);

  function handleClickOutside(e: MouseEvent) {
    if (refOne.current && !refOne.current.contains(e.target as Node)) {
      setIsVisible((prevVisible) => !prevVisible);
    }
  }

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "e") {
        setIsVisible((prevVisible) => !prevVisible);
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      setActive(true);
    } else {
      deaktivate();
    }
  }, [isVisible]);

  async function deaktivate() {
    await delay(100);
    setActive(false);
  }

  return (
    <>
      {active && (
        <motion.div
          transition={{ duration: 0.2 }}
          animate={{ opacity: isVisible ? 100 : 0 }}
          initial={{ opacity: 0 }}
          className="fixed backdrop-blur flex items-center justify-center w-screen h-screen"
        >
          <motion.div
            ref={refOne}
            transition={{ duration: 0.2 }}
            animate={{ scale: isVisible ? 1 : 0 }}
            initial={{ scale: 0 }}
            className="fixed flex w-[30rem] p-6 border border-black border-opacity-10 bg-opacity-20 rounded-lg backdrop-blur-xl h-[23rem]   bg-black "
          >
            <div className=" w-fit row-span-4 flex flex-wrap  ">
              {itemSlots?.map((entity, idx) => (
                <div
                key={idx}
                  onClick={() => {
                    if (true) {
                      setIsVisible(true);
                    }
                  }}
                  className={`bg-black bg-opacity-10 m-2  rounded-lg w-16 h-16 border-black border-opacity-10`}
                >
                  {entity && (
                    <React.Fragment>
                      <Item entity={entity}   /> 
                    </React.Fragment>
                  )}
                </div>
              ))}
            </div>

            <div className=" w-fit   ">
              {tools?.map((item, idx) => (
                <div   key={idx} className="bg-black flex justify-center items-center m-2 ml-1 mb-4 hover:opacity-60 transi rounded-lg w-[5.7rem] h-[5.7rem] bg-opacity-10  border-black border-opacity-10">
                  {item && (
                    <div>
                      <div className=" w-6 h-6 rounded bg-slate-200" />
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className=" w-fit ml-  ">
              {importandItems?.map((item, idx) => (
                <div   key={idx} className="bg-black flex justify-center items-center m-2 mb-4 hover:opacity-60 transi rounded-lg w-36 h-36 bg-opacity-10  border-black border-opacity-10">
                  {item && (
                    <div>
                      <div className=" w-6 h-6 rounded bg-slate-200" />
                    </div>
                  )}
                </div>
              ))}
            </div>
            {/* <div className="ml-5 text-white">
              <div className="bg-black flex justify-center items-center my-8 mb-4 hover:opacity-60  rounded-lg w-10 h-10 bg-opacity-40 ">
                <IoLeaf />
              </div>
              <div className="bg-black flex justify-center items-center my-8 mb-4 hover:opacity-60  rounded-lg w-10 h-10 bg-opacity-40 ">
                <IoNutrition />
              </div>
              <div className="bg-black flex justify-center items-center my-8 mb-4 hover:opacity-60  rounded-lg w-10 h-10 bg-opacity-40 ">
                <IoShirt />
              </div>
              <div className="bg-black flex justify-center items-center my-8 mb-4 hover:opacity-60  rounded-lg w-10 h-10 bg-opacity-40 ">
                <IoStar />
              </div>
            </div> */}
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Inventory;
