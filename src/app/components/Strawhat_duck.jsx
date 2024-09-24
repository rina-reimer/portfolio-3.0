/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 public/strawhat_duck.glb --transform 
Files: public/strawhat_duck.glb [711.02KB] > /Users/rinareimer/Desktop/coding-projects/portfolio-3.0-1/strawhat_duck-transformed.glb [72.46KB] (90%)
Author: LiliumLetifer (https://sketchfab.com/LiliumLetifer)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/strawhat-duck-f7a566abe0fa4cc8962e30aa5526dcb3
Title: Strawhat Duck
*/

import React, {useRef} from 'react'
import { useGLTF } from '@react-three/drei'
import { Canvas, useFrame } from "@react-three/fiber"
import useMousePosition from "./useMousePosition"
import { easing } from "maath"


export function Model(props) {
  const { nodes, materials } = useGLTF('/strawhat_duck-transformed.glb')
  const mousePosition = useMousePosition();
  // This reference will give us direct access to the mesh
  const duck = useRef();
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => {
    easing.dampE(
      duck.current.rotation,
      [mousePosition.y / window.innerHeight * 1.5 - window.innerHeight / 3, 0, -mousePosition.x / window.innerWidth * 2 + 1000],
      1,
      0.1
    );
  });
  return (
    <group {...props} dispose={null} ref={duck}>
      <mesh geometry={nodes.defaultMaterial.geometry} material={materials.Material} rotation={[-Math.PI, 0, 0]} scale={1.6} />
      <mesh geometry={nodes.defaultMaterial_1.geometry} material={materials.Outline} rotation={[-Math.PI, 0, 0]} scale={1.6} />
    </group>
  )
}

useGLTF.preload('/strawhat_duck-transformed.glb')