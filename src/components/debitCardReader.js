import { forwardRef } from 'react'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const Model =  forwardRef((props, ref) => {
  const gltf = useLoader(GLTFLoader, '/glb/debit_card_reader/scene.gltf')
  return <primitive object={gltf.scene} {...props} ref={ref}/>
})

export default Model