import Link from "next/link";

interface ButtonLinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
    type: "PRIMARY" | "SECONDARY";
    animation?: "bounce" | "pulse" | "none";
}

export default function ButtonLink({ href, children, type, className, animation }: ButtonLinkProps) {
    const typeStyle = {
        PRIMARY: "bg-[#875b2d] hover:bg-[#875b2d]/80 text-white",
        SECONDARY: "bg-[#875b2d] hover:bg-[#875b2d]/80 text-white",
    };
    const animationStyle = {
        bounce: "animate-bounce",
        pulse: "animate-pulse",
        none: "",
    };
    return (
        <Link href={href} target="_blank" rel="noopener noreferrer" className={`w-full h-10 rounded-full ${animation ? animationStyle[animation] : ""} ${typeStyle[type]} ${className} cursor-pointer hover:bg-[#875b2d]/80 transition-colors`}>
            {children}
        </Link>
    );
}