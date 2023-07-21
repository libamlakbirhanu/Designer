import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";

import state from "../store";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";
import { CustomButton } from "../components";

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation("left")}>
          <motion.header {...slideAnimation("down")}>
            <img src="./threejs.png" alt="logo" className="w-8 h-8" />
          </motion.header>

          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">
                LET&apos;S <br className="xl:block hidden" />
                GO BIH.
              </h1>
            </motion.div>

            <motion.div {...headTextAnimation}>
              <p className="max-w-md font-normal text-gray-600 text-base">
                Create your own shit with our brand new 3d customization tool.{" "}
                <strong>unleash your imagination</strong> and define your own
                style
              </p>

              <CustomButton
                type="filled"
                title="Customize IT"
                handleClick={() => (state.intro = false)}
                customStyles="w-fit px-4 py-2.5 mt-2 font-bold"
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;
