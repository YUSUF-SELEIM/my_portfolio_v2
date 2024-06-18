'use client';
import { Navbar as NextUINavbar, NavbarBrand, NavbarContent, NavbarItem, Link, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar, useDisclosure, NavbarMenuToggle, Button, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import AvatarDropDown from "./AvatarDropDown";
import { useState } from "react";


export const BlogNavbar = ({ userData }: { userData: any }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "Portfolio",
    "About",
    "Contact",
  ];

  return (
    <NextUINavbar onMenuOpenChange={setIsMenuOpen} >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <a
            href="/"
            className="font-bold text-inherit"
          >
            Yusuf Abdelfattah
          </a>
        </NavbarBrand>
      </NavbarContent>

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
          <Link color="foreground" href="/blog">
            My Blog
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="w-full flex justify-between" justify="end">
        <NavbarItem>
          {userData && <AvatarDropDown userData={userData} />}
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NextUINavbar>
  );
};