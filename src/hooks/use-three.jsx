import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Composant pour les points et les connexions
const Network = ({ numPoints = 50, maxDistance = 4 }) => {
    const pointsRef = useRef();

    // Génération aléatoire des points
    const points = useMemo(() => {
        return new Array(numPoints).fill().map(() => ({
            position: new THREE.Vector3(
                (Math.random() - 0.5) * 20,
                (Math.random() - 0.5) * 12,
                (Math.random() - 0.5) * 5
            ),
            velocity: new THREE.Vector3(
                (Math.random() - 0.5) * 0.02,
                (Math.random() - 0.5) * 0.02,
                (Math.random() - 0.5) * 0.02
            ),
        }));
    }, [numPoints]);

    // Animation des points et des lignes
    useFrame(() => {
        const positions = pointsRef.current.geometry.attributes.position.array;

        let idx = 0;
        // Mise à jour des lignes
        for (let i = 0; i < numPoints; i++) {
            const p1 = points[i];
            p1.position.add(p1.velocity);

            // Rebondir sur les bords
            if (Math.abs(p1.position.x) > 10) p1.velocity.x *= -1;
            if (Math.abs(p1.position.y) > 6) p1.velocity.y *= -1;
            if (Math.abs(p1.position.z) > 5) p1.velocity.z *= -1;

            for (let j = i + 1; j < numPoints; j++) {
                const p2 = points[j];
                const distance = p1.position.distanceTo(p2.position);
                if (distance < maxDistance) {
                    // Ajouter les positions pour le lineSegments
                    positions[idx++] = p1.position.x;
                    positions[idx++] = p1.position.y;
                    positions[idx++] = p1.position.z;

                    positions[idx++] = p2.position.x;
                    positions[idx++] = p2.position.y;
                    positions[idx++] = p2.position.z;
                }
            }
        }
        pointsRef.current.geometry.attributes.position.needsUpdate = true;
    });

    // Taille maximale de positions pour lineSegments
    const maxLines = (numPoints * (numPoints - 1)) / 2;
    const positionsArray = new Float32Array(maxLines * 2 * 3);

    return (
        <lineSegments ref={pointsRef}>
            <bufferGeometry attach="geometry">
                <bufferAttribute
                    attachObject={['attributes', 'position']}
                    count={positionsArray.length / 3}
                    array={positionsArray}
                    itemSize={3}
                />
            </bufferGeometry>
            <lineBasicMaterial
                attach="material"
                color="whitesmoke"
                transparent
                opacity={0.5}
            />
        </lineSegments>
    );
};

const BackgroundAnimation = () => {
    return (
        <Canvas
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                zIndex: -1,
                background: '#1a1a1a', // background doux
            }}
            camera={{ position: [0, 0, 15], fov: 75 }}
        >
            <Network numPoints={50} maxDistance={3} />
        </Canvas>
    );
};

export default BackgroundAnimation;
