import React from "react";
import Task from "./Task.js";

export default class List extends React.Component{
    constructor(props){
        super(props);
    }

    onChangeState = (task) => {
        this.props.onChangeTaskStatus( task )
      }


    pendingTasks(){
        return this.props.taskList.filter((task)=> !task.done);
    }
            
    
    render(){
        //const {tasks} = this.props; //si lo pongo entre llaves, le paso el objeto que tiene esa propiedad, osea this.state, que tiene la prop tasks
        return (
            <>
            <h2>Lista de tareas</h2>
                    {
                        this.props.taskList && //si existe, hace lo de abajo
                        this.pendingTasks().map((task, key) => (<Task task={task} onChangeState={this.onChangeState} key={key} />))
                    }
            </>
        )
    }
    //si no, hecho con ternario, lo que hice con map
    /*
                    {tasks.map( (task, key) => (
                    task.done ? null :
                    <Task task={task} key={key} />)  )}
    */ 
}