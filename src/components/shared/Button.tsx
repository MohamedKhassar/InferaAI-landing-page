import React from "react"
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
    className?: string;
};
const Button: React.FC<ButtonProps> = ({ children, className = "", ...rest }) => {
    return (
        <button {...rest} className={`${className} bg-gradient-to-br from-purple-500 to-80% to-blue-800 text-white font-bold py-4 px-6 rounded-2xl hover:from-blue-600 hover:to-purple-500 transition-colors duration-300 cursor-pointer lg:text-base text-sm`}>
            {children}

        </button>
    )
}

export default Button
