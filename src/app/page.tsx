import { Main } from "../components/Main";
import NavbarComponent from "../components/Navbar";
import Projects from "../components/Projects";
import About from "../components/About";
import { Meteors } from "../components/ui/meteors";
import Contact from "../components/Contact";
import { WavyBackground } from "../components/ui/wavy-background";

export default function Home() {
  return (
    <div>
      <NavbarComponent></NavbarComponent>
      <Main></Main>
      <Projects></Projects>
      <About></About>

      <Contact></Contact>
      {/* <Meteors number={50} /> */}

    </div>
  );
}
