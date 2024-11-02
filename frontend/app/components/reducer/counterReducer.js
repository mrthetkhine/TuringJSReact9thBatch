export default function counterReducer(oldState,action)
{
    switch (action.type)
    {
        case "INC":
            return {
                count : oldState.count +1
            };
        case "DEC":
            return {
                count: oldState.count-1
            }
        default:
            return oldState;
    }
}