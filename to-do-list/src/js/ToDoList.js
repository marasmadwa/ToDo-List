import React from 'react';

class Task extends React.Component{
    constructor(props){
        super(props);
        this.state={
            text: ''
        }
    }

    render(){
        return(
            <div>
                <li>{this.state.text}</li>
                <button className='removeTask'>Remove task</button>
                <button className='editTask'>Edit</button>
                <input type="checkbox"/>
            </div>
        )
    }
}

export default class ToDoList extends React.Component {
    render() {
        return (
            <div className='container'>
                <div className='task'>
                    <p>To Do:</p>
                    <div className='profilePicture'></div>
                </div>
                <div className="addTask">
                    <button className='addTaskBtn'>Add task!</button>
                    <input type="text" placeholder={'What to do?'}/>
                    <ul>
                        <Task/>
                    </ul>
                </div>
            </div>
        )
    }
}