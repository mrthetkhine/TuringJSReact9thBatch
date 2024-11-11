

export default function useLoader(Element, loading)
{
    if(loading)
    {
        return <h1>Loading</h1>
    }
    else {
        return <Element  />
    }

}