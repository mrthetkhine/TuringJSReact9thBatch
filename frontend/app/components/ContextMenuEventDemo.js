"use client";
export default function ContextMenuEventDemo() {
    const onContextMenuClick = (e) => {
        console.log('context click ', e);
        e.preventDefault();
    }
    return (<div onContextMenu={onContextMenuClick}>
        Right click me
    </div>);
}