import { cookies } from 'next/headers'
export default async function page()
{
    const cookieStore = await cookies();
    //console.log('Dashboard Token ',cookieStore.get('auth-token'));
    return(<div>
        <h3>Dashboard</h3>
    </div>);
}