import Link from "next/link";

export default function ThemeLink({ className, href, title, icon }: { className: string, href: string, title: string, icon: any }) {
    const Icon = icon;
    return (
        <Link
            href={href}
            className={`text-white  focus:ring-4 focus:outline-none   font-medium rounded-lg text-sm px-8 py-3 text-center flex items-center ${className}`}
        >
            {title}{" "}
            {/* <span className="ml-2">
                <Icon />
            </span> */}
        </Link>
    );
}