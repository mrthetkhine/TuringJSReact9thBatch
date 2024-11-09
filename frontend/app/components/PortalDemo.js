import {createPortal} from "react-dom";

export default function PortalDemo()
{
    return (<div>
        PortalDemo
        {createPortal(
            <p>This child is placed in the document body.</p>,
            document.body
        )}
    </div>)
}