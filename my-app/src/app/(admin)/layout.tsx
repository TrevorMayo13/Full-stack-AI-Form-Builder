import { SidebarNavItem } from "@/types/nav-types";
import { Header } from "@/components/ui/header";
import Navbar from "@/components/navigation/Navbar";
import { SessionProvider } from "next-auth/react";
import FormGenerator from "../form-generator";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const dashboardConfig: {
        sidebarNav: SidebarNavItem[];
    } = {
        sidebarNav: [
            {
                title: "My Forms",
                href: "/view-forms",
                icon: "library",
            },
            {
                title: "Results",
                href: "/results",
                icon: "list",
            },
            {
                title: "Analytics",
                href: "/analytics",
                icon: "lineChart",
            },
            {
                title: "Charts",
                href: "/charts",
                icon: "pieChart",
            },
            {
                title: "Settings",
                href: "/settings",
                icon: "settings",
            },
        ],
    };
    return (
        <>
            <Header />
            <div>
                <aside>
                    <Navbar items={dashboardConfig.sidebarNav} />
                </aside>
            </div>
            {children}
        </>
    );
}
