import React from 'react';


export default class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            task: '',
            value: ''
        }
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    };

    addTask = () => {
        this.setState({
            value: this.state.task
        })
    };

    render() {
        // const tasks = this.state.value.map(task => {
        //     return <li key={task.id}>{this.state.value}</li>
        // });
        // console.log(this.state.value);
        // // let task = [];
        // // for (let i = 0; i < this.state.value.length; i++) {
        // //     task = task + this.state.value[i]
        // // }
        return (
            <div>
                <input id='task' type="text" value={this.state.task} onChange={this.handleOnChange}/>
                <button onClick={this.addTask}>add</button>
                <ul>
                    <li></li>
                </ul>
            </div>
        )
    }
}

