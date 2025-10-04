"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Sparkles } from "@react-three/drei";
import * as THREE from "three";

// Galaxy component
function Galaxy({
  position,
  scale = 1,
  color = "#6366f1",
}: {
  position: [number, number, number];
  scale?: number;
  color?: string;
}) {
  const galaxyRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    if (galaxyRef.current) {
      galaxyRef.current.rotation.z += 0.00002;
      galaxyRef.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.001) * 0.001;
    }
  });

  return (
    <group ref={galaxyRef} position={position} scale={scale}>
      <Sparkles
        count={200}
        size={2}
        scale={[4, 0.1, 4]}
        speed={0.3}
        color={color}
        opacity={0.3}
      />
      <Sparkles
        count={100}
        size={4}
        scale={[2, 0.05, 2]}
        speed={0.1}
        color={color}
        opacity={0.6}
      />
    </group>
  );
}

// Shooting stars component
function ShootingStar({
  startPosition,
  endPosition,
  delay = 0,
}: {
  startPosition: [number, number, number];
  endPosition: [number, number, number];
  delay?: number;
}) {
  const starRef = useRef<THREE.Mesh>(null!);
  const trailRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    if (starRef.current && trailRef.current) {
      const elapsed = state.clock.elapsedTime - delay;
      if (elapsed > 0) {
        const progress = (elapsed % 8) / 8; // 8 second cycle

        if (progress < 0.8) {
          // Visible for 80% of cycle
          const t = progress / 0.8;
          const x = THREE.MathUtils.lerp(startPosition[0], endPosition[0], t);
          const y = THREE.MathUtils.lerp(startPosition[1], endPosition[1], t);
          const z = THREE.MathUtils.lerp(startPosition[2], endPosition[2], t);

          starRef.current.position.set(x, y, z);
          trailRef.current.position.set(x - 0.5, y, z);

          starRef.current.visible = true;
          trailRef.current.visible = true;

          // Fade out near the end
          const opacity = t > 0.7 ? 1 - (t - 0.7) / 0.3 : 1;
          if (
            starRef.current.material &&
            "opacity" in starRef.current.material
          ) {
            (starRef.current.material as THREE.MeshBasicMaterial).opacity =
              opacity;
          }
          if (
            trailRef.current.material &&
            "opacity" in trailRef.current.material
          ) {
            (trailRef.current.material as THREE.MeshBasicMaterial).opacity =
              opacity * 0.5;
          }
        } else {
          starRef.current.visible = false;
          trailRef.current.visible = false;
        }
      }
    }
  });

  return (
    <group>
      <mesh ref={starRef}>
        <sphereGeometry args={[0.02, 8, 8]} />
        <meshBasicMaterial color="#ffffff" transparent />
      </mesh>
      <mesh ref={trailRef}>
        <cylinderGeometry args={[0.001, 0.005, 1, 4]} />
        <meshBasicMaterial color="#ffffff" transparent />
      </mesh>
    </group>
  );
}

// Main 3D cosmic scene
function CosmicScene() {
  return (
    <>
      {/* Animated starfield */}
      <Stars
        radius={300}
        depth={100}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={0.5}
      />

      {/* Galaxies */}
      <Galaxy position={[4, 0, -5]} scale={2} color="#6366f1" />
      <Galaxy position={[0, 0, 0]} scale={3} color="#8b5cf6" />
      <Galaxy position={[-5, -2, -10]} scale={10} color="gray" />

      {/* Shooting stars */}
      <ShootingStar
        startPosition={[-30, 20, -10]}
        endPosition={[30, -20, -50]}
        delay={0}
      />
      <ShootingStar
        startPosition={[50, 20, -10]}
        endPosition={[30, -20, 0]}
        delay={1}
      />
      <ShootingStar
        startPosition={[25, -15, -5]}
        endPosition={[-25, 15, -45]}
        delay={2}
      />
      <ShootingStar
        startPosition={[25, -2, -5]}
        endPosition={[-25, 30, -45]}
        delay={3}
      />
      <ShootingStar
        startPosition={[10, 25, -8]}
        endPosition={[-15, -4, -40]}
        delay={4}
      />
      <ShootingStar
        startPosition={[10, 25, -8]}
        endPosition={[-15, -20, -20]}
        delay={5}
      />
      <ShootingStar
        startPosition={[-35, 5, -15]}
        endPosition={[20, -50, -35]}
        delay={6}
      />
    </>
  );
}

export default function CosmicBackground() {
  return (
    <div className="absolute inset-0">
      <Canvas className="z-10" camera={{ position: [2, 2, 1], fov: 60 }}>
        {/* {!isMobile && <OrbitControls enableZoom={false} />} */}
        <CosmicScene />
      </Canvas>
    </div>
  );
}
