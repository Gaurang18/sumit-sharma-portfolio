"use client";
import { useState, useEffect } from "react";
import { FC } from "react";

// TODO: Change name to Navigation?
// Currently only works without education. Education section is too small and messes
// with the view intersection

type MenuDetail = {
  isActive: boolean;
  section: string;
};

type MenuProps = {
  MenuDetails: MenuDetail[];
};

// Menu item will be highlighted whenever mouse hovers or when the user is viewing the section
function MenuItem(props: MenuDetail) {
  const href = "#" + props.section.toLowerCase();
  // first div is the line, second div is the section
  return (
    <a href={href} className="flex flex-row py-3 items-center group">
      <div
        className={
          props.isActive
            ? "w-16 h-[0.16rem] mr-4 transition-all duration-300 group-hover:w-16 bg-foreground group-hover:bg-foreground"
            : "w-8 h-0.5 mr-4 transition-all duration-300 group-hover:w-16 bg-muted-foreground group-hover:bg-foreground"
        }
      />
      <div
        className={
          props.isActive
            ? "transition-all duration-300 text-foreground font-extrabold group-hover:text-foreground"
            : "transition-all duration-300 text-muted-foreground group-hover:text-foreground"
        }
      >
        {props.section}
      </div>
    </a>
  );
}

// Find which section the user is currently viewing using InterstionObserver
const useSectionVisibility = (sectionIds: string[]): string => {
  const [visibility, setVisibility] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibility(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return visibility;
};

const Menu: FC<MenuProps> = ({ MenuDetails }) => {
  // get an array of strings where each item is possible section the user could be viewing
  const activeSection = useSectionVisibility(
    MenuDetails.map((item) => item.section.toLowerCase())
  );

  // list of each jsx menu item element to render
  const menu = MenuDetails.map((item, index) => (
    <MenuItem
      key={index}
      isActive={activeSection === item.section.toLowerCase()}
      section={item.section.toUpperCase()}
    />
  ));

  return (
    <header
      id="navigation"
      className="hidden lg:flex lg:flex-col py-3 font-medium tracking-widest"
    >
      {menu}
    </header>
  );
};

export default Menu;
