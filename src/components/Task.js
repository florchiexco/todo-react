import React from "react";

export default class Task extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const {name, description, id}= this.props.task;
        return (
            <>
           <div className="card border-danger mb-3">
                <div className="card-header bg-transparent border-danger">
                Tarea N° {id}
                </div>
                <div className="card-body text-danger">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <button className="btn btn-outline-success" onClick={()=> this.props.onChangeState()}>Tarea completada</button>
                    <button className="btn btn-outline-warning" onClick={()=> this.props.onEditTask()}>Editar</button>
                </div>
            </div>
          </>
        );
    }
}