import Director from "../../../../types/director";

export default function DirectorUI({director}:{director:Director})
{
    return(<div>
        Director {director.name} <br/>
        Phone no {director?.phoneNo}
    </div>)
}