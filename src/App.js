import React, { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Stars, Text } from '@react-three/drei';
import { useMouse } from '@react-three/cannon';
import { DoubleSide, MeshStandardMaterial } from 'three';

import CreditCard from './components/debit_card1';
import Machine from './components/machine';
import Model from './components/debitCardReader';
export default function App() {
  const [count, setCount] = useState(0);
  const machineRef = useRef();

  const handleWheel = (e) => {
    // e.preventDefault(false)
    if(count >= 0.0 && count <= 66.0){
      setCount((prevCount) => prevCount + e.deltaY / 90.90908893868948);
    } else if(count<0.0){
      setCount(0)
    } else {setCount(66)}
    console.log(count)
  };

  return (
    <div className="App" style={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
      <Canvas camera={{ fov: 60 }} onWheel={handleWheel}>
        <ambientLight intensity={10.5} position={[0, 2, 0]} />
        <pointLight position={[10, 10, 10]} />
        <Stars />
        <PerspectiveCamera makeDefault position={[0, 0.6, 0.3]} />
        <OrbitControls enableZoom={false}/>
        <CreditCardWithAnimation position={[-0.1, 0.5, 0.1]} count={count}/>
        {/* <Machine ref={machineRef} /> */}
        <Text
          fontSize={0.5}
          color={'black'}
          rotation={[-1.3,0,0]}
          scale={[0.022,0.022,0.02]}
          position={[0, 0.173, -0.05]}
          anchorX="center"
          anchorY="middle"
        >
          {count > 50 ? "Card ": ""}
          {count > 52 ? "Info ": ""}
        </Text>
        <Text
          fontSize={0.5}
          color={'blue'}
          rotation={[-1.3,0,0]}
          scale={[0.018,0.018,0.018]}
          position={[0, 0.17, -0.035]}
          anchorX="center"
          anchorY="middle"
        >
          {count > 54 ? "Card ": ""}
          {count > 56 ? "Number ": ""}
        </Text>
        <Text
          fontSize={0.5}
          color={'red'}
          rotation={[-1.3,0,0]}
          scale={[0.012,0.012,0.012]}
          position={[0, 0.168, -0.023]}
          anchorX="center"
          anchorY="middle"
        >
          {count > 58 ? "4404-": ""}
          {count > 60 ? "0300-": ""}
          {count > 62 ? "9873-": ""}
          {count > 64 ? "1234": ""}
        </Text>
        <Model scale={[0.0022,0.0022,0.002]} rotation={[0,-1.57,0]} position = {[0,0.12, -0.01]}/>
        <PaperMesh count={count}/>
      </Canvas>
    </div>
  );
}
function PaperMesh({ count }) {
  const paper = useRef();
  useEffect(() => {
    const animate = () => {
      if (paper.current) {
        if (count > 48) {
          paper.current.position.z = -0.007*(count - 48);
          paper.current.position.y = 0.142
        } else {
          paper.current.position.y = 0.14
        }
      }
    };

    animate(); // Initial call
    const intervalId = setInterval(animate, 100); // Call every 100ms

    return () => clearInterval(intervalId); 
  }, [count]);

  return (
    <mesh position={[0, 0.127, 0]} rotation={[-1.5, 0, 0]} ref={paper} scale={[0.9,1,1]}>
      <planeGeometry args={[0.08, 0.14, 2]} />
      <meshStandardMaterial color="yellow" side={DoubleSide} />
    </mesh>
  );
}
function CreditCardWithAnimation({ count }) {
  const creditCardRef = useRef();
  const lastposition = [-0.003, 0.128, 0.17];

  const position = [0.123, 0.128, 0];
  useEffect(() => {
    const animate = () => {
      if (creditCardRef.current) {
        if (count >=0 && count <= 20) {
          creditCardRef.current.position.z = 0+0.015*count;
          creditCardRef.current.position.y = 0.128 + 0.0025*count
          // creditCardRef.current.rotation.y = Math.PI+(Math.tan(1/4)/20)*count
          // creditCardRef.current.rotation.x = -Math.PI/2
          // creditCardRef.current.rotation.y = 0
        }
        else
        if (count > 20 && count <= 40 ) {
          console.log(creditCardRef.current.position)
          creditCardRef.current.position.z = 0.3 - 0.0055*(count-20);
          creditCardRef.current.position.y = 0.178 - 0.0025*(count-20)
          creditCardRef.current.position.x = 0.123 - 0.0063*(count-20)
          // creditCardRef.current.rotation.x = Math.PI/2-Math.tan(1/4)*(1-0.05*(count-20)) 
          // creditCardRef.current.rotation.y = -Math.PI
        } else if (count > 40 && count <=50) {
          creditCardRef.current.position.z = 0.18 - 0.008*(count-45)
          creditCardRef.current.position.y = 0.128
          creditCardRef.current.position.x = -0.003
        } else if (count > 50 ){
          creditCardRef.current.position.x = -0.003;
          creditCardRef.current.position.y = 0.128;
          creditCardRef.current.position.z = 0.11;
        }
      }
    };

    animate(); // Initial call
    const intervalId = setInterval(animate, 100);
    return () => clearInterval(intervalId); 
  }, [count]);

  return <CreditCard position={position} rotation={[-Math.PI / 2, 0, Math.PI / 2]} ref={creditCardRef} />;
}
