import React from "react";
import Task from "./Task.js";

export default class List extends React.Component{
    constructor(){
        super();
        this.state={
            tasks: [{name:"uno", description:"descript uno", done: false},
                    {name:"dos", description:"descript dos", done: false},
                    {name:"tres", description:"descript tres", done:false}        
                ]
        }
    }
    
    render(){
        const {tasks} = this.state; //si lo pongo entre llaves, le paso el objeto que tiene esa propiedad, osea this.state, que tiene la prop tasks
        return (
            <>
                {tasks.map( (task, key) => ( <Task task={task} key={key} />)  )}
            </>
        )
    }
}