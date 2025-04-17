import { NavLinkType, StatsType } from "./types";
import { Clock, Lightbulb, Users, Verified } from "lucide-react";

export const navLinks: NavLinkType[] = [
  { href: "/#", text: "Home" },
  { href: "/#services", text: "services" },
  { href: "/#about", text: "About" },
  { href: "/#features", text: "Features" },
  { href: "/#pricing", text: "Pricing" },
];

export const statsData:StatsType[] = [
  {
    value: 100,
    suffix: "+",
    label: "AI Models Implemented",
    Icon: Lightbulb,
  },
  {
    value: 250,
    suffix: "+",
    label: "Enterprise Clients",
    Icon: Users,
  },
  {
    value: 99.9,
    suffix: "%",
    label: "Uptime Guarantee",
    Icon: Verified,
  },
  {
    value: 10,
    suffix: "+",
    label: "Years of Innovation",
    Icon: Clock,
  },
];
