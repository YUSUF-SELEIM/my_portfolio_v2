'use client';
import React, { useState } from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link,Button} from "@nextui-org/react";
import { FaHeart } from 'react-icons/fa';
export default function NavbarComponent() {


const [filled, setFilled] = useState(false);

const handleClick = () => {
    setFilled(!filled);
};

return (
    <Navbar className="px-2 py-6">
        <NavbarBrand>
            <p className="font-bold text-inherit">Yusuf Abdelfattah</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-8" justify="center">
            <NavbarItem>
                <Link color="foreground" href="#">
                    Portfolio
                </Link>
            </NavbarItem>
            <NavbarItem isActive>
                <Link href="#" aria-current="page">
                    About
                </Link>
            </NavbarItem>
            <NavbarItem>
                <Link color="foreground" href="#">
                    Contact
                </Link>
            </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
            <NavbarItem>
                <Button isIconOnly color="danger" aria-label="Like">
                    <FaHeart />
                </Button>   
            </NavbarItem>
        </NavbarContent>
    </Navbar>
)
}
