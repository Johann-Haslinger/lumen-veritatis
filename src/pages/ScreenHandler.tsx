import React, { useEffect } from 'react';
import { Entity, useEntities, useEntity, useEntityComponents } from '@leanscope/ecs-engine';
import { GameStateFacet } from '../app/GameFacets';
import Game from './Game';
import { EntityProps } from '@leanscope/ecs-engine/react-api/classes/EntityProps';

const Handler = (props: EntityProps) => {
  const gameStateFacet = useEntityComponents(props.entity, GameStateFacet);
  console.log(gameStateFacet);
  return <div className=" bg-black   fixed top-0">{true && <Game />}</div>;
};

const ScreenHandler = () => {
  const [gameStateEntities] = useEntities((e) => e.hasComponent(GameStateFacet));
  
  useEffect(() => {
    console.log(gameStateEntities.length);
  }, [gameStateEntities]);
  // console.log(gameStateEntities.length)
  return <>{gameStateEntities.length !== 0 && <Handler entity={gameStateEntities[0]} />}</>;
};

export default ScreenHandler;
