import {
  Bot,
  BarChart2,
  Telescope,
  Rocket,
  HeartHandshake,
} from "lucide-react";
import { FeatureItem, NavLinkType, StatsType } from "./types";
import { Clock, Lightbulb, Users, Verified } from "lucide-react";

export const navLinks: NavLinkType[] = [
  { href: "/#", text: "Home" },
  { href: "/#services", text: "services" },
  { href: "/#about", text: "About" },
  { href: "/#features", text: "Features" },
  { href: "/#pricing", text: "Pricing" },
];

export const statsData: StatsType[] = [
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

export const companyLogos: string[] = [
  "/assets/companies/airbnb.svg",
  "/assets/companies/discord.svg",
  "/assets/companies/google.svg",
  "/assets/companies/microsoft.svg",
  "/assets/companies/paypal.svg",
  "/assets/companies/slack.svg",
  "/assets/companies/spotify.svg",
  "/assets/companies/tiktok.svg",
  "/assets/companies/xiaomi.svg",
  "/assets/companies/youtube.svg",
];

export const features: FeatureItem[] = [
  {
    Icon: Bot,
    title: "Intelligent Automation",
    description: "Streamline processes and reduce manual tasks.",
    delay: 0.2,
  },
  {
    Icon: BarChart2,
    title: "Real-Time Analytics",
    description: "Gain actionable insights as events unfold.",
    delay: 0.4,
  },
  {
    Icon: Telescope,
    title: "Predictive Insights",
    description: "Anticipate trends and mitigate risks before they occur.",
    delay: 0.6,
  },
];

export const missionVision: FeatureItem[] = [
  {
    Icon: HeartHandshake,
    title: "Mission",
    description:
      "Our mission is to use AI for the good of humanity and the planet.",
    delay: 0.2,
  },
  {
    Icon: Rocket,
    title: "Vision",
    description: "Our vision is to drive business innovation and growth.",
    delay: 0.4,
  },
];
