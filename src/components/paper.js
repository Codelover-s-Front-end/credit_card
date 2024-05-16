import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Paper(props) {
  const { nodes, materials } = useGLTF('/glb/paper.glb')
  console.log(nodes)
  console.log(materials)
  return (
    <group {...props} dispose={null}>
      <group>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_2.geometry}
              material={materials.initialShadingGroup}
            />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/glb/paper.glb')