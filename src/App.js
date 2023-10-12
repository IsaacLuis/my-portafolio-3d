
import Contact from "./components/Contact";
import Animation from "./components/animation"
import TopSection from "./components/topSection";
import NeonGrid from "./components/backgroundUtils/NeonGrid";
import * as THREE from 'three';


// const Container = styled.div`
// height 100vh;
// background-color: purple;
// `

export default function App() {

   const planeGeometry = new THREE.PlaneGeometry(5, 5);
   const meshBasicMaterial = new THREE.MeshBasicMaterial({ emissive: 0xff00ff, color: 0xffffff });

   return (
   // <Container> 
    <> 
      <TopSection/>
      <Animation/> 
      <Contact/>
      <NeonGrid planeGeometry={planeGeometry} meshBasicMaterial={meshBasicMaterial} />
   {/* // </> </Container>   */} 
   </>  

   );
}