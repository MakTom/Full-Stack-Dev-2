import React from "react";
import axios from "axios";
import AddStudent from "./AddStudent";
import DeleteAction from "./DeleteAction";

export default class UserList extends React.Component {
    state = {
        users: []
    };

    componentDidMount() {
        this.getUsers();
    }

    addNewStudent = (studentData) => {
        console.log('Student Added:', {studentData});

        let newStudent = {
            name: studentData.user.name,
            id: studentData.user.id,
        };
        this.setState({
            users: [...this.state.users, newStudent],
        });
    };

    deleteStudent = (id) => {
        console.log(`deleteStudent id: ${id}`);
        const filterUsers = this.state.users.filter((x) => x.id !== id);
        this.setState({
            users: filterUsers,
        });
    };

    getUsers() {
        axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
            const users = res.data;
            this.setState({ users });
        });
    }

    render() {
        return (
        <div>
            <AddStudent addNewStudent={this.addNewStudent} />
            <ul>
            {this.state.users.map((user) => (
                <li>
                {user.name}
                <DeleteAction id={user.id} deleteStudent={this.deleteStudent} />
                </li>
            ))}
            </ul>
        </div>
        );
    }
}