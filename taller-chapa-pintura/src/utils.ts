import { createElement } from "react";
import About from "@/components/About";
import Services from "./components/Services";
import Location from "./components/Location";
import Contact from "./components/Contact";

// Create a function that returns different content based on the navigateTo state
const renderContent = (navigateTo: string) => {
  const content = (text: string) =>
    createElement(
      "section",
      { className: "w-full h-full" },
      createElement(
        "div",
        { className: "w-full h-full" },
        createElement("div", { className: "w-full h-full" }, text)
      )
    );

  switch (navigateTo) {
    case "/":
      return About ? createElement(About) : content("Home Page Content");
    case "/#servicios":
      return Services ? createElement(Services) : content("Servicios Section Content");
    case "/#nosotros":
      return Location ? createElement(Location) : content("Nosotros Section Content");
    case "/#contacto":
      return Contact ? createElement(Contact) : content("Contacto Section Content");
    default:
      return createElement(
        "section",
        { className: "w-full h-full" },
        createElement("div", { className: "w-full h-full" }, "Default Content")
      );
  }
};

export default renderContent;