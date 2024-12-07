import { ReactNode } from "react";

interface Props {
    readonly children: ReactNode;
    team:ReactNode,
    analytics:ReactNode,
}
export default function ParallelPage({ children,team,analytics }: Props) {
    return (
        <>
             Parllel layout
            {children}
            {team}
            {analytics}
        </>
    );
}
