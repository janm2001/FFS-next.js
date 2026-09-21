"use client";

import { signOut, useSession } from "next-auth/react";
import NavLink from "./NavLink";

const Navbar = () => {
  const { data: session } = useSession();
  return (
    <nav className="bg-gray-800 text-white px-6 py-3 flex items-center gap-4">
      <NavLink href={"/"}>Home</NavLink>
      {" | "}
      <NavLink href={"/notes"}>Notes</NavLink>
      {" | "}
      <NavLink href={"/blogs"}>Blog</NavLink>
      {" | "}
      <NavLink href={"/users"}>Users</NavLink>
      <div className="ml-auto flex items-center gap-4">
        {session ? (
          <>
            <NavLink href={"/notes/new"}>Create new Notes</NavLink>
            {" | "}
            <NavLink href={"/blogs/new"}>Create new Blog</NavLink>
            {" | "}
            <em className="text-gray-300">{session?.user?.name} logged in</em>
            <button
              className="bg-gray-600 hover:bg-gray-500 px-3 py-1 rounded text-sm"
              onClick={() => signOut()}
            >
              logout
            </button>
          </>
        ) : (
          <>
            <NavLink href={"/login"}>Login</NavLink>
            {" | "}
            <NavLink href={"/register"}>Register</NavLink>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
