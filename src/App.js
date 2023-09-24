import { styled } from "styled-components";
import Contact from "./components/Contact";
import Animation from "./components/animation"
import TopSection from "./components/topSection";


const Container = styled.div`
height 100vh;
background-color: purple;
`

export default function App() {
   return (
   <Container> 
      <TopSection/>
      <Animation/> 
      <Contact/>
   </Container>  

   );
}