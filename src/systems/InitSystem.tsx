import { useContext, useEffect, useState } from "react";
import {
  GameStateFacet,
  GameStates,
  PositionFacet,
  HealthFacet,
  NameFacet,
  ValueFacet,
  VisibilityFacet,
} from "../app/GameFacets";
import { Tags } from "../base/Constants";
import { ECSContext, Entity, System } from "@leanscope/ecs-engine";
import { Items } from "../components/Items";

const InitSystem = () => {
  const ecs = useContext(ECSContext);

  useEffect(() => {
    console.log("app init");
    ecs.engine.clear();

    // ------ Items ------

    // Apple
    const appleEntity = new Entity();
    ecs.engine.addEntity(appleEntity);
    appleEntity.addComponent(new NameFacet({ name: Items.APPLE }));
    appleEntity.addComponent(new ValueFacet({ value: 5 }));
    appleEntity.addTag(Tags.ITEM);
    appleEntity.addTag(Tags.INVENTORY);

    // Stone
    const stoneEntity = new Entity();
    ecs.engine.addEntity(stoneEntity);
    stoneEntity.addComponent(new NameFacet({ name: Items.STONE }));
    stoneEntity.addComponent(new ValueFacet({ value: 1 }));
    stoneEntity.addTag(Tags.ITEM);

    // Sword
    const swordEntity = new Entity();
    ecs.engine.addEntity(swordEntity);
    swordEntity.addComponent(new NameFacet({ name: Items.SWORD }));

    swordEntity.addTag(Tags.ITEM);

    // Mushroom
    const mushroomEntity = new Entity();
    ecs.engine.addEntity(mushroomEntity);
    mushroomEntity.addComponent(new NameFacet({ name: Items.MUSHROOM }));
    mushroomEntity.addComponent(new ValueFacet({ value: 1 }));
    mushroomEntity.addTag(Tags.ITEM);

    // ------ other ------

    // Player
    const playerEntity = new Entity();
    ecs.engine.addEntity(playerEntity);
    playerEntity.addComponent(new PositionFacet({ positionValue: [3, 3] }));
    playerEntity.addComponent(new HealthFacet({ healthValue: [2, 3] }));
    playerEntity.addTag(Tags.PLAYER);

    // Inventory
    const inventoryEntity = new Entity();
    ecs.engine.addEntity(inventoryEntity);
    playerEntity.addComponent(new VisibilityFacet({ isVisible: false }));

  
    // Gamestate
    const gameStateEntity = new Entity();
    ecs.engine.addEntity(gameStateEntity);
    gameStateEntity.addComponent(new GameStateFacet({ gameState: GameStates.PLAYING }));

    // console.log("Game state entity added", ecs.engine.entities);

    return () => {
      ecs.engine.removeEntity(gameStateEntity);
      ecs.engine.removeEntity(playerEntity);
      ecs.engine.removeEntity(inventoryEntity);
      ecs.engine.removeEntity(stoneEntity);
      ecs.engine.removeEntity(appleEntity);
      ecs.engine.removeEntity(mushroomEntity);
      ecs.engine.removeEntity(swordEntity);
    };
  }, []);

  const [blacklistedIdentifiableSystems] = useState();

  return <></>;
};

export default InitSystem;
