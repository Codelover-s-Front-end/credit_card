import React, { useRef, forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Machine = ((props, ref)=> {
  const { nodes, materials } = useGLTF('/glb/broken_card_reader_terrassa_catalunya.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.model_tex_u1_v1_0.geometry}
          material={materials.tex_u1_v1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.model_tex_u1_v1_0_1.geometry}
          material={materials.tex_u1_v1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.model_tex_u1_v1_0_2.geometry}
          material={materials.tex_u1_v1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.model_tex_u1_v1_0_3.geometry}
          material={materials.tex_u1_v1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.model_tex_u1_v1_0_4.geometry}
          material={materials.tex_u1_v1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.model_tex_u1_v1_0_5.geometry}
          material={materials.tex_u1_v1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.model_tex_u1_v1_0_6.geometry}
          material={materials.tex_u1_v1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.model_tex_u1_v1_0_7.geometry}
          material={materials.tex_u1_v1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.model_tex_u1_v1_0_8.geometry}
          material={materials.tex_u1_v1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.model_tex_u1_v1_0_9.geometry}
          material={materials.tex_u1_v1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.model_tex_u1_v1_0_10.geometry}
          material={materials.tex_u1_v1}
        />
      </group>
    </group>
  )
})
export default Machine;