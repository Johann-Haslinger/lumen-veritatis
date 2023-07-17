import React, { useEffect } from 'react';
import FullScreenCanvas from '../components/three/FullScrenCanvas.tsx';
import NavBar from '../components/UI/NavBar.tsx';
import Inventory from '../components/UI/Inventory.tsx';
import Player from '../components/three/Player.tsx';
import ItemWorld from '../components/three/ItemWorld.tsx';

const Game: React.FC = () => {
  // const { setTheme } = useStateContext();

  const world: number[][][] = [
    [
      // Ebene 1 (Hintergrund)
      [1, 1, 2, 1, 1],
      [1, 1, 2, 2, 1],
      [1, 2, 1, 2, 1],
      [2, 2, 2, 2, 2],
      [1, 2, 2, 1, 1],
    ],
    [
      // Ebene 3 (Vordergrund)
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ],
  ];

  const terrainColors: { [key: number]: { color: string; opacity: number } } = {
    0: { color: '#ffffff', opacity: 0 }, // Leeres Gelände mit Opazität 0
    1: { color: 'rgb(90,121,80)', opacity: 1 }, // Gras 1
    2: { color: 'rgb(112,134,79)', opacity: 1 }, // Gras 2
    3: { color: '#ff0000', opacity: 1 }, // Spieler
  };

  useEffect(() => {
    // setTheme('rgb(243,243,248)');
  }, []);

  return (
    <div className="bg-system-blue w-screen h-screen fixed top-0 left-0">
      <FullScreenCanvas>
        {/* Hintergrund Layer */}
        {world[0].map((row, rowIndex) =>
          row.map((terrainId, colIndex) => {
            const { color, opacity } = terrainColors[terrainId];
            return (
              <TerrainTile
                key={`background-${rowIndex}-${colIndex}`}
                position={[colIndex, rowIndex, 0]}
                color={color}
                opacity={opacity}
              />
            );
          }),
        )}

        <ItemWorld />
        {/* Spieler */}
        <Player/>

        {/* Vordergrund Layer */}
        {world[1].map((row, rowIndex) =>
          row.map((terrainId, colIndex) => {
            const { color, opacity } = terrainColors[terrainId];
            return (
              <TerrainTile
                key={`foreground-${rowIndex}-${colIndex}`}
                position={[colIndex, rowIndex, 2]}
                color={color}
                opacity={opacity}
              />
            );
          }),
        )}
      </FullScreenCanvas>

      <NavBar />
      <Inventory />
    </div>
  );
};

interface TerrainTileProps {
  position: [number, number, number];
  color: string;
  opacity: number;
}

const TerrainTile: React.FC<TerrainTileProps> = ({ position, color, opacity }) => (
  <mesh position={position}>
    <boxGeometry args={[1, 1, 0]} />
    <meshBasicMaterial color={color} transparent opacity={opacity} /> {/* Anpassung der Opazität */}
  </mesh>
);

export default Game;
