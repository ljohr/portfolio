import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Loader from "../components/Loader";

import Macintosh from "../models/Macintosh.jsx";
import Table from "../models/Table.jsx";

const Home = () => {
  const adjustMacForScreen = () => {
    let screenScale = [4, 4, 4];
    let screenPosition = [0, 0.5, 0];
    let macRotation = [0.45, 3.15, 0];

    // if (window.innerWidth < 768) {
    //   screenScale = [0.9, 0.9, 0.9];
    // } else {
    //   screenScale = [4, 4, 4];
    // }

    return [screenScale, screenPosition, macRotation];
  };

  const [macScale, macPosition, macRotation] = adjustMacForScreen();

  return (
    <section className="homeSection">
      <Canvas camera={{ near: 0.1, far: 1000, position: [0, 0, 10] }}>
        <Suspense fallback={<Loader />}>
          <directionalLight position={[3, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <hemisphereLight />
          <Macintosh
            position={macPosition}
            scale={macScale}
            rotation={macRotation}
          />
          <OrbitControls
            enableZoom={true}
            minDistance={8}
            maxDistance={20}
            enablePan={true}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
