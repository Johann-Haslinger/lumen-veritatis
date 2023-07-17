import React from "react";

interface ItemProps {
  position: [number, number];
  name: string;
  value: number;
}

const Item: React.FC<ItemProps> = ({ position }) => {
  return (
    <mesh position={[position[0], position[1], 0]}>
      <boxGeometry args={[0.5, 0.5, 0.1]} />
      <meshBasicMaterial color="rgb(91,80,74)" />
    </mesh>
  );
};

export default Item;
