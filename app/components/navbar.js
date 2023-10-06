import React from "react";
import Logo from "./logo";
import Dropdown from "./dropdown";
import Search from "./search";
import Menu from "./hamburger-menu";

export default function Navbar() {
  return (
    <nav className='flex justify-between items-center px-4 bg-black'>
      <Logo />
      <Dropdown />
      <Search />
      <Menu />
    </nav>
  );
}
