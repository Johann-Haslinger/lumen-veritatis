import React from "react";
import {
  useEntities,
  useEntity,
  useEntityComponents,
} from "@leanscope/ecs-engine";
import { GameStateFacet } from "../app/GameFacets";
import Game from "./Game";


const ScreenHandler = () => {
  // const [gameStateEntity] = useEntity((e) => e.has(GameStateFacet));
  const [gameStateEntities] = useEntities((e) =>
    e.hasComponent(GameStateFacet)
  );
  const gameStateEntity = gameStateEntities[0];
  // const [components] = useEntityComponents(gameStateEntity);
  console.log(gameStateEntity);

  return <div className=" bg-black   fixed top-0">{true && <Game />}</div>;
};

export default ScreenHandler;
