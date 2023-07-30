import React, { useEffect, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import {
  Entity,
  useEntities,
  useEntity,
  useEntityComponents,
  useEntityProps,
} from '@leanscope/ecs-engine';
import { EntityProps } from '@leanscope/ecs-engine/react-api/classes/EntityProps';
import { Tags } from '../../base/Constants';
import { PositionFacet } from '../../app/GameFacets';

const Player = () => {
  const [playerEntites] = useEntities((e) => e.hasTag(Tags.PLAYER));
  let playerEntity = playerEntites[0];

 

  useEffect(() => {
    playerEntity = playerEntites[0];

    
  }, [playerEntites]);


  const [playerPosition, setPlayerPosition] = useState([2, 2]);

  // // const [components] = useEntityComponents(playerEntity);
  const speed = 0.1;
  // const smoothness = 0.2;

  const previousPositionRef = useRef([1, 1]);
  //const keysPressedRef = useRef<KeyboardEvent>(null);

  let isUpPressed = false;

  // useEffect(() => {
  //   setPlayerPosition(playerEntity?.get(PositionFacet)?.props.positionValue);
  // }, [playerEntity?.get(PositionFacet)?.props.positionValue]);

  const handleKeyDown = (event: KeyboardEvent) => {
    const { key } = event;
    // const [x, y] = playerPositionFacet.props.positionValue;

    let dx = 0;
    let dy = 0;

    if (key === 'ArrowUp') {
      isUpPressed = true;
    } else {
      isUpPressed = false;
    }

    if (isUpPressed) {
      dy += speed;
    }

    if (key === 'ArrowDown') {
      dy += speed;
    }

    // if (keysPressed["ArrowUp"] || keysPressed["w"])
    //   if (keysPressed["ArrowDown"] || keysPressed["s"]) dy -= speed;
    // if (keysPressed["ArrowLeft"] || keysPressed["a"]) dx -= speed;
    // if (keysPressed["ArrowRight"] || keysPressed["d"]) dx += speed;

    // playerEntity.addComponent(
    //   new PositionFacet({ positionValue: [x + dx, y + dy] })
    // );
  };

  // const handleKeyUp = (event: KeyboardEvent) => {
  //   const { key } = event;
  //   const [x, y] = playerPosition;

  //   const keysPressed = { ...keysPressedRef.current };
  //   delete keysPressed[key];
  //   keysPressedRef.current = keysPressed;

  //   let dx = 0;
  //   let dy = 0;

  //   if (keysPressed["ArrowUp"] || keysPressed["w"]) dy += speed;
  //   if (keysPressed["ArrowDown"] || keysPressed["s"]) dy -= speed;
  //   if (keysPressed["ArrowLeft"] || keysPressed["a"]) dx -= speed;
  //   if (keysPressed["ArrowRight"] || keysPressed["d"]) dx += speed;

  //   playerEntity.addComponent(
  //     new PositionFacet({ positionValue: [x + dx, y + dx] })
  //   );
  // };

  // useEffect(() => {
  //   window.addEventListener("keydown", handleKeyDown);
  //   window.addEventListener("keyup", handleKeyUp);

  //   return () => {
  //     window.removeEventListener("keydown", handleKeyDown);
  //     window.removeEventListener("keyup", handleKeyUp);
  //   };
  // }, [playerPosition]);

  // useFrame(({ camera }) => {
  //   const [x, y] = playerPosition ? playerPosition : [1, 1];
  //   const [prevX, prevY] = previousPositionRef.current;

  //   const smoothX = prevX + (x - prevX) * smoothness;
  //   const smoothY = prevY + (y - prevY) * smoothness;
  //   camera.position.x = smoothX;
  //   camera.position.y = smoothY;

  //   previousPositionRef.current = [smoothX, smoothY];
  // });

  return (
    <>
     
    </>
  );
};

export default Player;
