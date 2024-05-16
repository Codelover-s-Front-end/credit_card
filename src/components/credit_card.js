import React, { forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'

const CreditCard = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF('/glb/credit_card3.glb')
  return (
    <group {...props} dispose={null} ref={ref}>
      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tarjeta1_mirror_0.geometry}
          material={materials.mirror}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tarjeta1_metal_letters_0.geometry}
          material={materials.metal_letters}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tarjeta1_card_blinn_0.geometry}
          material={materials.card_blinn}
        />
      </group>
    </group>
  )
})
useGLTF.preload('/glb/credit_card3.glb')
export default CreditCard;