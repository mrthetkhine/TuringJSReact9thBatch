import PropTypes from "prop-types";

export default function Greeting({message='Hello'}) {

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
            This one Greeting {message.toUpperCase()}
        </div>

        User {user.name}
    </div>);
}
Greeting.propTypes = {
    message: PropTypes.string
};