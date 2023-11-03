import { useGLTF } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Planet({ normalization }) {
  const refPlanet = useRef();
  const gltfPath = '/image/earth/scene.gltf';
  const texturePath = '/image/earth/textures/Planet_diffuse.jpeg'; // Chemin de la texture
  const { scene } = useGLTF(gltfPath);

  useEffect(() => {
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(texturePath, texture => {
      texture.encoding = THREE.sRGBEncoding;
      const material = new THREE.MeshBasicMaterial({ map: texture });
      refPlanet.current.traverse(child => {
        if (child instanceof THREE.Mesh) {
          child.material = material;
        }
      });
    });
    const handleScroll = () => {
      if (refPlanet.current) {
        const scrollY = window.scrollY;

        let positionX;
        let rotationSpeed;
        let scale;
        let scale1;

        if (scrollY > 1000) {
          scale = 0.8;
          scale1 = 0.8;

          if (scrollY <= 3475) {
            positionX = -(scrollY - 1000) * 0.006;
            positionX = Math.max(positionX, -5.52);
            rotationSpeed = scrollY * 0.002;
          } else if (scrollY >= 10650) {
            positionX = -(scrollY - 1000) * 0.006;
            rotationSpeed = scrollY * 0.002;
          }
        } else {
          scale = 1;
          scale1 = 1;
          positionX = 0;
          rotationSpeed = scrollY * 0.002;
        }

        refPlanet.current.rotation.y = rotationSpeed;

        refPlanet.current.position.x = positionX;
        refPlanet.current.rotation.y = rotationSpeed;
        refPlanet.current.scale.set(scale, scale1, scale);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <group>
        <primitive
          scale={[1, 1, 1]}
          position={[0, 0, 0]}
          ref={refPlanet}
          object={scene}
        />
      </group>
    </>
  );
}
