import { Main } from "../components/Main";
import NavbarComponent from "../components/Navbar";

export default function Home() {
  return (
    <div className="h-screen w-full">
      <NavbarComponent></NavbarComponent>
      <Main></Main>
    </div>
  );
}
