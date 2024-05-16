import React, { useState, forwardRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useSpring, animated, config } from '@react-spring/three';

const CreditCard = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF('/glb/debit_card.glb');

  const [active, setActive] = useState(false);
  const { scale } = useSpring({
    scale: active? 1.1 : 1.1,
    config: config.wobbly,
  });

  return (
    <animated.group {...props} ref={ref} dispose={null} onClick={() => setActive(!active)} scale={scale}>
      <group rotation={[Math.PI / 1, 0, 0]} scale={0.015}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4.geometry}
            material={materials.card}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6.geometry}
            material={materials.text1}
            position={[-2.995, 0, 0.935]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_8.geometry}
            material={materials.text2}
            position={[-2.121, 0, 1.747]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_10.geometry}
            material={materials.copperthing}
          />
        </group>
      </group>
    </animated.group>
  );
});

export default CreditCard;