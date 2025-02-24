import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="flex gap-8">
      <Link href={"/"}>
        <p>Home</p>{" "}
      </Link>

     <Link href={"/about"}><p>About</p></Link> 
      
      <Link href={"/contact-us"}><p>Contact Us</p></Link>
          
    </div>
  );
}
