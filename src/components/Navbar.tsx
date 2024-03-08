'use client';
import React, { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { FaHeart } from 'react-icons/fa';
export default function NavbarComponent() {
    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount(count + 1);
    };
    return (
        <>
            <Navbar className="hidden md:flex px-2 py-3 sticky">
                <NavbarBrand>
                    <p className="font-bold text-inherit">Yusuf Abdelfattah</p>
                </NavbarBrand>
                <NavbarContent className="hidden sm:flex gap-8" justify="center">
                    <NavbarItem>
                        <Link color="foreground" href="#projects">
                            Portfolio
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="#about">
                            About
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="#contact">
                            Contact
                        </Link>
                    </NavbarItem>
                </NavbarContent>
                <NavbarContent justify="end">
                    <NavbarItem>
                        <div className="flex space-x-2 items-center justify-between">
                            <span className="text-xs text-red-700">I Love This Website </span>
                            <Button isIconOnly color="danger" aria-label="Like" onClick={handleClick}>
                                <FaHeart />
                            </Button>
                            <span className="text-xs text-red-700 font-extrabold">{count}</span>
                        </div>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
        </>
    );
}
