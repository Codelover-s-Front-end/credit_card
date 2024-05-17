import React, { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Stars } from '@react-three/drei';
import { useMouse } from '@react-three/cannon';
import { DoubleSide, MeshStandardMaterial } from 'three';
import Model from './components/debitCardReader';
import CreditCard from './components/debit_card1';
import Machine from './components/machine';

export default function App() {
  const [count, setCount] = useState(0);
  const machineRef = useRef();

  const handleWheel = (e) => {
    e.preventDefault(false)
    if(count >= 0.0 && count <= 20.0){
      setCount((prevCount) => prevCount + e.deltaY / 90.90908893868948);
    } else if(count<0.0){
      setCount(0)
    } else {setCount(20)}
  };

  return (
    <div className="App" style={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
      <Canvas camera={{ fov: 60 }} >
        <ambientLight intensity={10.5} position={[0, 2, 0]} />
        <pointLight position={[10, 10, 10]} />
        <Stars />
        <PerspectiveCamera makeDefault position={[0, 0.6, 0.3]} />
        <OrbitControls enableZoom={true}/>
        <CreditCardWithAnimation position={[-0.1, 0.5, 0.1]} />
        <Machine ref={machineRef} />
        <PaperMesh />
        <Model />
      </Canvas>
    </div>
  );
}
function PaperMesh() {
  const paper = useRef()
  var i = 0
  useFrame(({clock}) => {
    if(paper.current){
      i++
      if(i>350 && i<=400){
        const easedPositionX = 0 - (0.0022) * (i-350)
        paper.current.position.x = 0
        paper.current.position.y = 0.127
        paper.current.position.z = easedPositionX
      }
    }
  })
  return (
    <mesh position={[0, 0.127, 0]} rotation={[-1.5, 0, 0]} ref={paper}>
      <planeGeometry args={[0.08, 0.14, 1]} /> {/* Create a plane geometry */}
      <meshStandardMaterial color="yellow" side={DoubleSide} /> {/* Use a material */}
    </mesh>
  );
}
function CreditCardWithAnimation() {
  const creditCardRef = useRef();
  const position = [-0.003,0.128,0.17]
  var i = 0
  useFrame(({ clock }) => {
    if (creditCardRef.current) {
      creditCardRef.current.position.x = 0.103
      creditCardRef.current.position.y = 0.085
      creditCardRef.current.position.z = 0.03
      
      const a = clock.getElapsedTime();
      i++; // Keep incrementing i
  
      // Calculate eased rotation based on i
      // const easedRotationX = -Math.sin(0.0025)* Math.PI * i;
      
      if (i <= 50) {
        const easedPositionY = 0.085+0.0018*i
        creditCardRef.current.position.y = easedPositionY 
        creditCardRef.current.position.x = 0.103
        creditCardRef.current.position.z = 0.03
      }
      if (i>50 && i <= 150) {
        const easedPositionX = 0.03+0.0028*(i-50)
        creditCardRef.current.position.z = easedPositionX 
        creditCardRef.current.position.y = 0.175
        creditCardRef.current.position.x = 0.103
      }
      if (i>150 && i<=200){
        creditCardRef.current.position.x = 0.103 
        creditCardRef.current.position.y = 0.175
        creditCardRef.current.position.z = 0.31
      }
      if (i>200 && i <= 300) {
        const easedPositionX = 0.103-0.001076*(i-200)
        const easedPositionY = 0.175-0.00048*(i-200)
        const easedPositionZ = 0.31-0.00115*(i-200)
      
        creditCardRef.current.position.x = easedPositionX 
        creditCardRef.current.position.y = easedPositionY
        creditCardRef.current.position.z = easedPositionZ
      }
      if (i>300 && i <= 350) {
        creditCardRef.current.position.x = -0.0046
        creditCardRef.current.position.y = 0.127
        creditCardRef.current.position.z = 0.165
      }
      if (i>300 && i < 350){
        const easedPositionZ = 0.195-0.0003*(i-300)
        creditCardRef.current.position.x = -0.0046
        creditCardRef.current.position.y = 0.127
        creditCardRef.current.position.z = easedPositionZ
      }
      if( i>350){
        creditCardRef.current.position.x = -0.0046
        creditCardRef.current.position.y = 0.127
        creditCardRef.current.position.z = 0.165
      }
  
    }
  });

  return <CreditCard 
    position={position}
    rotation={[-Math.PI / 2, 0, Math.PI /2]} 
    ref={creditCardRef} />;
}