type User = {
    id: number,
    admin: boolean,
}
const user = {
    id: 123,

    admin: false,
    becomeAdmin: function () {
        this.admin = true;
    },
};
interface DB {
    filterUsers(filter: (this: User) => boolean): User[];
}

const users = [
    {
        id:1,
        admin:false,
    },
    {
        id:2,
        admin:true
    }
];
const db ={
    users,
    filterUsers: function(filter: (obj: User) => boolean): User[] {
        console.log('this.users ',this.users);
        return this.users.filter(filter);
    }
}
const admins = db.filterUsers(function (obj: User) {
    console.log('this ',obj);
    return obj.admin;
});
console.log('Admins ',admins);