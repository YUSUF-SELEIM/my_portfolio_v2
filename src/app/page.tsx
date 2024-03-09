import { Main } from "../components/Main";
import NavbarComponent from "../components/Navbar";
import Projects from "../components/Projects";
import About from "../components/About";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div>
      <NavbarComponent></NavbarComponent>
      <Main></Main>
      <Projects></Projects>
      <About></About>
      <Contact></Contact>
    </div>
  );
}
