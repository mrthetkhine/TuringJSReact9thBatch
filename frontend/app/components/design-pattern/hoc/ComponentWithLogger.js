import withLogger from "./withLogger";

function NormalComponent()
{
    return (<div>
        Normal Component
    </div>);
}
const NewComponentWithLogger = withLogger(NormalComponent);
export default function ComponentWithLogger()
{
    return (<NewComponentWithLogger/>)
}