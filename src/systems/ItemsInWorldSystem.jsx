import { useContext, useEffect, useState } from "react";
import { ECSContext, Entity, System } from "@leanscope/ecs-engine";
import { NameFacet, PointsFacet, PositionFacet, TypeFacet, ValueFacet } from "../app/GameFacets";
import { Tags } from "../base/Constants";
import { ItemTypes, Items } from "../components/LumenVeritatis/VideoGame/components/Items";

const ItemsInWorldSystem = () => {
  const ecs = useContext(ECSContext);

  useEffect(() => {
    console.log("added items in world");

    const itemEntity = new Entity();
    ecs.engine.addEntity(itemEntity);
    itemEntity.addComponent(new NameFacet({ nameValue: Items.APPLE }));
    itemEntity.addComponent(new ValueFacet({ value: 1 }));
    itemEntity.addComponent(new PositionFacet({  positionValue: [2, 2] }));
    itemEntity.addComponent(new TypeFacet({ type:"sd" }));
    itemEntity.addComponent(new PointsFacet({  healingPoints: 1 }));
    itemEntity.addTag(Tags.ITEM_IN_WORLD);

    return () => {
      ecs.engine.removeEntity(itemEntity);
    };
  }, []);

  return <></>;
};

export default ItemsInWorldSystem;
