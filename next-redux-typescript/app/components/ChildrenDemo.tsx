import React from "react";

export default function ChildrenDemo( {children}:{children:React.ReactNode})
{
    return(<div>
            Parent Render child
            {children}
        </div>
    );
}