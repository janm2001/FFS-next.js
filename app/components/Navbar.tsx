import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav>
      <Link href={"/"}>Home</Link>
      {" | "}
      <Link href={"/notes"}>Notes</Link>
      {" | "}
      <Link href={"/notes/new"}>Create new Notes</Link>
      {" | "}
      <Link href={"/blogs"}>Blog</Link>
      {" | "}
      <Link href={"/blogs/new"}>Create new Blog</Link>
      {" | "}
    </nav>
  );
};

export default Navbar;
