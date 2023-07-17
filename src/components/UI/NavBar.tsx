import React, { useEffect, useState } from 'react';
// import SideBarIcon from '../../../../Icons/SideBarIcon';
import { IoHeart, IoHeartOutline, IoLeafOutline, IoPause, IoPauseOutline } from 'react-icons/io5';

import { motion } from 'framer-motion';
import { useEntity } from '@leanscope/ecs-engine';

const NavBar: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  // const [playerEntity] = useEntity((e) => e.hasTag(Tags.PLAYER));
  // const maxHealth = playerEntity?.get(HealthFacet)?.props.healthValue[1];
  // const currentHealth = playerEntity?.get(HealthFacet)?.props.healthValue[0];
  // const [gameStateEntity] = useEntity((e) => e.has(GameStateFacet));

  // useEffect(() => {
  //   if (currentHealth === 0) {
  //     gameStateEntity?.addComponent(new GameStateFacet({ gameState: GameStates.GAME_OVER }));
  //   }
  // }, [currentHealth]);
  let maxHealth = 3
  let currentHealth = 3

  return (
    <motion.div
      style={{
        background: 'linear-gradient(to top, rgba(247,247,247, 0.8) 0%, rgba(247,247,247,1) 100%)',
      }}
      className="fixed w-screen border-b-[rgba(215,214,215,0.72)] border-b-2 left-0 top-0 h-12  bg-[)] bg-opacity-80 backdrop-blur-lg  flex justify-between "
    >
      <div className="p-3 " onClick={() => setActiveMenu(!activeMenu)}>
        {/* {!activeMenu && <SideBarIcon />} */}
      </div>

      <div className=" text-system-blue transform scale-x-[-1] text-2xl flex space-x-3 p-3">
        {Array.from({ length: maxHealth }, (_, idx) =>
          currentHealth > idx ? <IoHeart key={idx} /> : <IoHeartOutline key={idx} />,
        )}
      </div>
    </motion.div>
  );
};

export default NavBar;
