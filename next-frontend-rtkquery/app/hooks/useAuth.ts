import {useAppSelector} from "@/lib/hooks";
import {selectAuth} from "@/lib/features/auth/authSlice";

export default function useAuth()
{
    const auth = useAppSelector(selectAuth);
    return auth;
}