import React from "react";
import Accueil from "./Accueil";
import Projets from "./Projets";
import Resume from "./Resume";
import Contact from "./Contact/Contact";

export default function Global() {
  return (
    <div className=' text-center container'>
      <Accueil />
      <Resume />
      <Projets />
      <Contact />
    </div>
  );
}
