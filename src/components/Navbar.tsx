import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from "@nextui-org/react";
import LoveButton from "./LoveButton";

export default function NavbarComponent() {
    return (
        <>
            <Navbar className="hidden md:flex px-1 py-3 sticky text-white">
                <NavbarBrand>
                    <a
                        href="https://www.overleaf.com/read/ggjzkxhgfgsf#f0cabe"
                        className="font-bold text-inherit"
                        target="_blank"
                    >
                        Yusuf Abdelfattah
                    </a>
                </NavbarBrand>
                <NavbarContent className="hidden sm:flex gap-8" justify="center">
                    <NavbarItem>
                        <Link color="foreground" href="/#projects">
                            Portfolio
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="/#about">
                            About
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="/#contact">
                            Contact
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="/blog">Blog</Link>
                    </NavbarItem>
                </NavbarContent>
                <NavbarContent className="w-full flex justify-between" justify="end">
                    <NavbarItem>
                        <LoveButton />
                    </NavbarItem>
                </NavbarContent >
            </Navbar>
        </>
    );
}
