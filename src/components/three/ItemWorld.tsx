import React from "react";
import { Entity, useEntities, useEntityComponents, useEntityProps } from "@leanscope/ecs-engine";
import { PositionFacet } from "../../app/GameFacets";
import { Tags } from "../../base/Constants";
import ItemsInWorldSystem from "../../systems/ItemsInWorldSystem";


interface ItemInWorldProps {
  entity: Entity; // Set the appropriate type for the Entity here
}

const ItemInWorld: React.FC<ItemInWorldProps> = ({ entity }) => {
  const [position] = useEntityComponents(entity, PositionFacet);

  const itemPosition: [number, number] = [2, 2]; // Provide the correct item position here
  return (
    <>
      {itemPosition && (
        <mesh position={[itemPosition[0], itemPosition[1], 0]}>
          <boxGeometry args={[0.3, 0.3, 0.1]} />
          <meshBasicMaterial color="white" />
        </mesh>
      )}
    </>
  );
};

const ItemWorld = () => {
  const [itemsInWorldEntities] = useEntities((e) => e.has(Tags.ITEM_IN_WORLD));

  return (
    <>
      <ItemsInWorldSystem />
      {itemsInWorldEntities.map((entity, idx) => (
        <ItemInWorld entity={entity} key={idx} />
      ))}
    </>
  );
};

export default ItemWorld;
