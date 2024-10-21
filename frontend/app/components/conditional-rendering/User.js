function NormalUser()
{
    return (<div>
        Normal User
    </div>)
}
function AdminUser()
{
    return (<div>
        Admin User
    </div>)
}
export default function User({admin}) {
    let comp;
    if(admin)
    {
        comp= <AdminUser/>;
    }
    else
    {
        comp= <NormalUser/>;
    }
    /*
    if(admin){
        return <AdminUser/>
    }
    else
    {
        return <NormalUser/>
    }*/
    return (<div>
       {/* {admin? <AdminUser/> : <NormalUser/>}*/}
       {/* {admin && <AdminUser/>}
        {!admin && <NormalUser/>}*/}
        {/*<Comp/>*/}
        {comp}
    </div>);
}