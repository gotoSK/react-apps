import PropTypes from 'prop-types';

// function Student(props) {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//             <p>Student: {props.isStudent ? "Yes" : "No"}</p>
//             <hr />
//         </div>
//     );
// }

function Student({ name = "Guest", age = 0, isStudent = true }) {
    return (
        <div>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Student: {isStudent ? "Yes" : "No"}</p>
            <hr />
        </div>
    );
}

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
};

// not working
Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false,
};

export default Student;
