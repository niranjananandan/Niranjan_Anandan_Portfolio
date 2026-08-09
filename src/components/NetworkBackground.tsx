import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const ParticleNetwork = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  const particleCount = 200;
  const maxDistance = 3.0;

  const [positions, velocities, colors] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const col = new Float32Array(particleCount * 3);
    const vel = [];
    const color = new THREE.Color("#0ea5e9");
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
      col[i * 3] = color.r;
      col[i * 3 + 1] = color.g;
      col[i * 3 + 2] = color.b;
      vel.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02
        )
      );
    }
    return [pos, vel, col];
  }, [particleCount]);

  const lineGeometry = useMemo(() => new THREE.BufferGeometry(), []);
  
  useFrame(() => {
    if (!pointsRef.current || !linesRef.current) return;

    const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
    
    // Update particle positions
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] += velocities[i].x;
      positions[i * 3 + 1] += velocities[i].y;
      positions[i * 3 + 2] += velocities[i].z;

      // Bounce off walls
      if (Math.abs(positions[i * 3]) > 10) velocities[i].x *= -1;
      if (Math.abs(positions[i * 3 + 1]) > 10) velocities[i].y *= -1;
      if (Math.abs(positions[i * 3 + 2]) > 10) velocities[i].z *= -1;
    }
    
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    
    // Update lines connecting particles
    const linePositions = [];
    const lineColors = [];
    
    for (let i = 0; i < particleCount; i++) {
      for (let j = i + 1; j < particleCount; j++) {
        const dx = positions[i * 3] - positions[j * 3];
        const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
        const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
        const distSq = dx * dx + dy * dy + dz * dz;

        if (distSq < maxDistance * maxDistance) {
          linePositions.push(
            positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2],
            positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2]
          );
          
          const alpha = 1.0 - Math.sqrt(distSq) / maxDistance;
          // Premium Blue #0ea5e9 -> r:0.05, g:0.65, b:0.91
          lineColors.push(
            0.05, 0.65, 0.91, alpha,
            0.05, 0.65, 0.91, alpha
          );
        }
      }
    }
    
    lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    lineGeometry.setAttribute('color', new THREE.Float32BufferAttribute(lineColors, 4));
    
    // Slight rotation to the whole network
    pointsRef.current.rotation.y += 0.001;
    pointsRef.current.rotation.x += 0.0005;
    linesRef.current.rotation.y += 0.001;
    linesRef.current.rotation.x += 0.0005;
  });

  return (
    <>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
            args={[positions, 3]}
          />
          <bufferAttribute
            attach="attributes-color"
            count={colors.length / 3}
            array={colors}
            itemSize={3}
            args={[colors, 3]}
          />
        </bufferGeometry>
        <pointsMaterial size={0.06} vertexColors transparent opacity={0.8} />
      </points>
      
      <lineSegments ref={linesRef} geometry={lineGeometry}>
        <lineBasicMaterial vertexColors transparent opacity={0.6} />
      </lineSegments>
    </>
  );
};

const NetworkBackground = () => {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, background: '#050505' }}>
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <fog attach="fog" args={['#050505', 5, 15]} />
        <ParticleNetwork />
      </Canvas>
    </div>
  );
};

export default NetworkBackground;
