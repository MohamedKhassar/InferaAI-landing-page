import { LucideProps } from "lucide-react";

export type NavLinkType = {
    href: string
    text: string
}

export interface NavItemProps {
    href: string,
    text: string
}
export interface StatsType {
    label:string;
    value:number;
    suffix:string
    Icon:React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>
}

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
    className?: string;
};

export interface FeatureItem {
    Icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
    title: string;
    description: string;
    delay?:number
  }