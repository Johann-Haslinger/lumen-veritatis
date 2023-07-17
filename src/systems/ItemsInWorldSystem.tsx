import { useContext, useEffect, useState } from "react";
import { ECSContext, Entity, System } from "@leanscope/ecs-engine";
import { NameFacet, PointsFacet, PositionFacet, TypeFacet, ValueFacet } from "../app/GameFacets";
import { Tags } from "../base/Constants";
import { Items } from "../components/Items";

const ItemsInWorldSystem: React.FC = () => {
  const ecs = useContext(ECSContext);

  useEffect(() => {
    console.log("added items in world");

    const itemEntity = new Entity();
    ecs.engine.addEntity(itemEntity);
    itemEntity.addComponent(new NameFacet({ name: Items.APPLE }));
    itemEntity.addComponent(new ValueFacet({ value: 1 }));
    itemEntity.addComponent(new PositionFacet({ positionValue: [2, 2] }));
    itemEntity.addComponent(new TypeFacet({ typeName: "sd" }));
    itemEntity.addComponent(new PointsFacet({ pointsValue: 1 }));
    itemEntity.addTag(Tags.ITEM_IN_WORLD);

    return () => {
      ecs.engine.removeEntity(itemEntity);
    };
  }, [ecs]);

  return <></>;
};

export default ItemsInWorldSystem;
