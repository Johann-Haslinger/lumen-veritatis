import React from "react";
import Game from "./VideoGame/pages/Game";
import {
  useEntities,
  useEntity,
  useEntityComponents,
} from "@leanscope/ecs-engine";
import { GameStateFacet, GameStates } from "../../app/GameFacets";
import { Facet } from "../../base/Facet";

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
