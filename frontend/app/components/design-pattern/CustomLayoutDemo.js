import CustomLayout from "./CustomLayout";
import React from "react";

export default function CustomLayoutDemo()
{

    const Header =<h1>Header</h1>;
    const Footer = <h4>Footer</h4>;
    const Content = <div>
        Content
    </div>
    return(<div>
        <CustomLayout
            header={<h1>Custom Header</h1>}
            footer ={Footer}
            content = {Content}
        ></CustomLayout>
    </div>);
}