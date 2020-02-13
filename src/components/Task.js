import React from "react";

export default class Task extends React.Component{
    constructor(props){
        super(props);
    }

    changeStatus= () => {
        this.props.onChangeState(this.props.task);
    }



    render(){
        const {name, description}= this.props.task;
        return (
            <>
            <div className="card">
                <div className="card-header">
              Tarea
                </div>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <button className="btn btn-outline-danger" onClick={this.changeStatus}>Done</button>
                </div>
            </div>
          </>
        );
    }
}