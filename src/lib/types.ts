export type NavLinkType = {
    href: string
    text: string
}

export interface NavItemProps {
    href: string,
    text: string
}

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
    className?: string;
};