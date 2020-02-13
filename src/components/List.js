import React from "react";
import Task from "./Task.js";

export default class List extends React.Component{
    constructor(){
        super();
        this.state={
            tasks: [{id:1, name:"uno", description:"descript uno", done: false},
                    {id:2, name:"dos", description:"descript dos", done: true},
                    {id:3, name:"tres", description:"descript tres", done:false}        
                ]
        }
    }

    pendingTasks(){
        return this.state.tasks.filter((task)=> !task.done);
    }

    //si no, hecho con ternario
    /*
                    {tasks.map( (task, key) => (
                    task.done ? null :
                    <Task task={task} key={key} />)  )}
    */ 

    onChangeState= (task)=>{
        console.log(task.id);
        const taskUpdated= this.state.tasks.map(taskEl=> {
            if(taskEl.id=== task.id){
                taskEl.done= !taskEl.done;
            }
            return taskEl;
        })
        this.setState({
            tasks: taskUpdated
        })
        }

    render(){
        const {tasks} = this.state; //si lo pongo entre llaves, le paso el objeto que tiene esa propiedad, osea this.state, que tiene la prop tasks
        return (
            <>
                    {
                        this.pendingTasks().map((task, key) => (<Task task={task} onChangeState={this.onChangeState} key={key} />))
                    }
            </>
        )
    }
}