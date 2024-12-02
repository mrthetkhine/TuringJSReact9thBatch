import { ReactNode } from "react";

interface Props {
    readonly children: ReactNode;
}
export default function DashboardLayout({ children }: Props) {
    return (
        <>
            Dashboard layout
            {children}
        </>
    );
}
