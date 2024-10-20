export default function Greeting(props) {

    let styles = {
        color:'red',
        backgroundColor: 'lightgray',
    }
    let user = {
        name: "TK",
        age : 40
    }
    return (<div >
        <div style={styles}>
            Greeting {props.message.toUpperCase()}
        </div>

        User {user.name}
    </div>);
}