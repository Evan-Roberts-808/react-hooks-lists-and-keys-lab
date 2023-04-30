import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linkA = links.map((link) => {
    return <a key={link} href={"#" + link}>{link}</a>
  })
  return <nav>{linkA}</nav>;
}

export default NavBar;