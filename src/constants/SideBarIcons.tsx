import { BsKanban, BsGearFill, BsClock } from 'react-icons/bs';
import { BiNote } from 'react-icons/bi';
import { TbMathFunction } from 'react-icons/tb';
import { FaBalanceScale } from "react-icons/fa";
import { kanban, notes, alias, settings, schedule, prosCons } from "./Apps";
import { switchTheme } from "../managers/ThemeManager"
import { switchApp } from "../managers/AppManager"
import MenuApp from "../models/Apps";



const SideBarIcons = [
  new MenuApp(
    kanban,
    <BsKanban size="28" />,
    "",
    "sidebar-icon group",
    "sidebar-tooltip group-hover:scale-100",
    "Kanban",
    switchApp,
  ),
  new MenuApp(
    notes,
    <BiNote size="32" />,
    "",
    "sidebar-icon group",
    "sidebar-tooltip group-hover:scale-100",
    "Notes",
    switchApp,
  ),
  new MenuApp(
    alias,
    <TbMathFunction size="32" />,
    "",
    "sidebar-icon group",
    "sidebar-tooltip group-hover:scale-100",
    "Alias",
    switchApp,
  ),
  new MenuApp(
    schedule,
    <BsClock size="32" />,
    "",
    "sidebar-icon group",
    "sidebar-tooltip group-hover:scale-100",
    "Schedule",
    switchApp,
  ),
  new MenuApp(
    prosCons,
    <FaBalanceScale size="32" />,
    "",
    "sidebar-icon group",
    "sidebar-tooltip group-hover:scale-100",
    "Pros & Cons",
    switchApp,
  ),
  new MenuApp(
    settings,
    <BsGearFill size="22" />,
    "inset-x-0 bottom-0 absolute",
    "sidebar-icon group",
    "sidebar-tooltip group-hover:scale-100",
    "Settings",
    switchTheme,
  ),
];

export default SideBarIcons;