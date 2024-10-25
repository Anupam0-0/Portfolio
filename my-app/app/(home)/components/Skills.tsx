"use client";

import React from "react";
import Title from "./Title";
import HoverEffect from "@/components/ui/CardHoverEffect";

const Skills = () => {

  const skills = [
    {
      text: "React.js",
      Icon: require("react-icons/di").DiReact,
    },
    {
      text: "Next.js",
      Icon: require("react-icons/di").DiNextjs,
    },
    {
      text: "Tailwind CSS",
      Icon: require("react-icons/di").DiCss3Full,
    },
    {
      text: "AppWrite",
      Icon: require("react-icons/di").DiAppwrite,
    },
    {
      text: "Node.js",
      Icon: require("react-icons/di").DiNodejsSmall,
    },
    {
      text: "Express.js",
      Icon: require("react-icons/di").DiNodejsSmall,
    },
    {
      text: "SQL",
      Icon: require("react-icons/di").DiDatabase,
    },
    {
      text: "MongoDB",
      Icon: require("react-icons/di").DiMongodb,
    },
    {
      text: "C++",
      Icon: require("react-icons/di").DiCpp,
    },
    {
      text: "JavaScript",
      Icon: require("react-icons/di").DiJavascript1,
    },
    

  ]


  return (
    <div className=" max-w-5xl mx-auto px-8">
      <Title text="Skills 🏹" className="flex flex-col items-center justify-center -rotate-6" />
    
    <HoverEffect items={skills} />
    
    </div>
  );
};

export default Skills;
