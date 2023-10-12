import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import { Model } from '../Model';


const animation = () => {

    // Ambient light 0.6 prede
    
return (

    <Canvas
    camera={{ position: [2, 0, 12.25], fov: 15 }}
    style={{
       backgroundColor: 'lavender',
       width: '50vw',
       height: '50vh',
    }}
 >  
    <ambientLight intensity={0.1} />    
    <ambientLight intensity={0.1} />
    <directionalLight intensity={0.4} />
    <Suspense fallback={null}>
       <Model position={[0.025, -0.9, 0]} />
    </Suspense>
    <OrbitControls />
 </Canvas>

)






}

export default animation