import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

function MetallicObject() {
  const meshRef = useRef<Mesh>(null);
  const groupRef = useRef<any>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.003;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }

    if (groupRef.current) {
      const mouseX = (state.mouse.x * Math.PI) / 10;
      const mouseY = (state.mouse.y * Math.PI) / 10;
      groupRef.current.rotation.y = mouseX;
      groupRef.current.rotation.x = mouseY;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <torusKnotGeometry args={[1.2, 0.35, 128, 32, 2, 3]} />
        <meshStandardMaterial
          color="#e8e8e8"
          metalness={0.95}
          roughness={0.15}
          envMapIntensity={1.5}
        />
      </mesh>

      <mesh position={[-1.5, 0.8, -1]}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial
          color="#b8b8b8"
          metalness={1}
          roughness={0.1}
        />
      </mesh>

      <mesh position={[1.8, -0.5, -0.5]}>
        <boxGeometry args={[0.4, 0.4, 0.4]} />
        <meshStandardMaterial
          color="#d0d0d0"
          metalness={0.9}
          roughness={0.2}
        />
      </mesh>
    </group>
  );
}

export default MetallicObject;
