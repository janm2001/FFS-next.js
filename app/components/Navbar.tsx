"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const Navbar = () => {
  const { data: session } = useSession();
  return (
    <nav>
      <Link href={"/"}>Home</Link>
      {" | "}
      <Link href={"/notes"}>Notes</Link>
      {" | "}
      <Link href={"/blogs"}>Blog</Link>
      {" | "}
      <Link href={"/users"}>Users</Link>
      {" | "}
      {session ? (
        <>
          <Link href={"/notes/new"}>Create new Notes</Link>
          {" | "}
          <Link href={"/blogs/new"}>Create new Blog</Link>
          {" | "}
          <em>{session?.user?.name} logged in</em>
          <button onClick={() => signOut()}>logout</button>
        </>
      ) : (
        <Link href={"/login"}>Login</Link>
      )}
    </nav>
  );
};

export default Navbar;
