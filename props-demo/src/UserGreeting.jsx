import PropTypes from 'prop-types';

function UserGreeting(props) {
    // if (props.isLoggedIn) {
    //     return <h2>Welcome, {props.uname}</h2>
    // }
    // else {
    //     return <h2>Log in to continue.</h2>
    // }

    // return(props.isLoggedIn ? <h2>Welcome, {props.uname}</h2> : <h2>Log in to continue.</h2>);
    
    const welcomeMessage = <h2>Welcome, {props.uname}</h2>;
    const loginPrompt = <h2>Log in to continue</h2>;
    return(props.isLoggedIn ? welcomeMessage : loginPrompt);
}

UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool,
    uname: PropTypes.string,
};
UserGreeting.defaultProps = {
    isLoggedIn: "false",
    uname: "Guest",
};

export default UserGreeting;