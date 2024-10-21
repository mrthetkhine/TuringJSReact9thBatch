function Box({width, height}) {
    return (<div style={{width,height,border:'1px solid black'}}>
        Box
    </div>);
}
export default function ContainerDemo(props) {
    return (<div >
        Container
            <Box {...props}/>
    </div>)
}