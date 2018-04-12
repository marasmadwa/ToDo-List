import React from 'react';


export default class ToDoList extends React.Component{
    render(){
        return (
            <div className= 'container'>
              <div className='task'>
                  <p>To Do:</p>
                  <div className='profilePicture'></div>
              </div>
            </div>
        )
    }
}