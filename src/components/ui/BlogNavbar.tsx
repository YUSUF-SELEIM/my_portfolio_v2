'use client';
import { Navbar as NextUINavbar, NavbarBrand, NavbarContent, NavbarItem, Link, NavbarMenuToggle, Button, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import AvatarDropDown from "./AvatarDropDown";
import { useState } from "react";
import { FaUserLock } from "react-icons/fa";

export const BlogNavbar = ({ userData }: { userData: any }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          {userData ? <AvatarDropDown userData={userData} /> :
            <Button color="primary" variant="shadow" startContent={<FaUserLock />}>
              <LoginLink>Sign in</LoginLink>
            </Button>
          }
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        <NavbarMenuItem >
          <Link
            color="foreground"
            className="w-full"
            href="/#projects"
            size="lg"
          >
            Projects
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem >
          <Link
            color="foreground"
            className="w-full"
            href="/#about"
            size="lg"
          >
            About
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem >
          <Link
            color="foreground"
            className="w-full"
            href="/#contact"
            size="lg"
          >
            Contact
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem >
          <Link
            color="foreground"
            className="w-full"
            href="/blog"
            size="lg"
          >
            My Blog
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </NextUINavbar>
  );
};