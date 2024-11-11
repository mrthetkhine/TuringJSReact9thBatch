export default function CustomLayout({header,footer,content})
{
    return (<div>
        {header}
            {content}
        {footer}
    </div>);
}