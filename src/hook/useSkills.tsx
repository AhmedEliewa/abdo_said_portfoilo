import { BiCode, BiPalette, BiWrench } from "react-icons/bi";
import { GiSparkles } from "react-icons/gi";

interface Skill {
  name: string;
}
interface SkillCategory {
  category: string;

  color: string;
  skills: Skill[];
}

const useSkills = () => {
  const skillCategories: SkillCategory[] = [
    {
      category: "Electrical Design & Engineering",

      color: "blue",
      skills: [
        {
          name: "AutoCAD Electrical",
        },
        {
          name: "Revit MEP",
        },
        {
          name: "ETAP",
        },
        {
          name: "Dialux Evo",
        },

        { name: "Short Circuit Analysis" },
      ],
    },
    {
      category: "Building Systems & MEP",

      color: "green",
      skills: [
        {
          name: "Power Distribution Systems",
        },
        {
          name: "Lighting Systems Design",
        },
        {
          name: "Earthing & Lightning Protection",
        },
        {
          name: "Fire Alarm Systems",
        },
      ],
    },
    {
      category: "Technical Office & Documentation",

      color: "orange",
      skills: [
        {
          name: "Quantity Take-Off (QTO)",
        },
        {
          name: "Material Submittals (MS)",
        },
      ],
    },
    {
      category: "Tools & Workflow",

      color: "gray",
      skills: [
        { name: "Microsoft Excel" },
        { name: "Microsoft Project" },
        { name: "Autodesk Navisworks" },
        {
          name: "Bluebeam Revu",
        },
      ],
    },
  ];

  const getColorClasses = () => {
    const colors: { border: string; bg: string; text: string; hover: string } =
      {
        border: "border-gray-200",
        bg: "bg-gray-50",
        text: "text-gray-600",
        hover: "hover:border-gray-400",
      };
    return colors;
  };
  return { skillCategories, getColorClasses };
};

export default useSkills;
