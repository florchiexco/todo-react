import React from "react";

const Task = ({task, onChangeState, onEditTask}) => {
        return (
            <>
           <div className="card border-danger mb-3">
                <div className="card-header bg-transparent border-danger">
                Tarea N° {task.id}
                </div>
                <div className="card-body text-danger">
                    <h5 className="card-title">{task.name}</h5>
                    <p className="card-text">{task.description}</p>
                    <button className="btn btn-outline-success" onClick={()=> onChangeState()}>Tarea completada</button>
                    <button className="btn btn-outline-warning" onClick={()=> onEditTask()}>Editar</button>
                </div>
            </div>
          </>
        );
}

export default Task;