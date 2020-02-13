import React from "react";

export default class Form extends React.Component{
    constructor(props){
        super(props);
    }


    createNewTask= () => {
        let titulo= document.getElementById("titulo").value;
        let descripcion= document.getElementById("descripcion").value;
        let newTask= {id: 4, name: titulo, descripcion: descripcion, done:false}
        return newTask;

    }

    sendNewTask= (e) => {
        let newTask= this.createNewTask();
        e.preventDefault();
        console.log(newTask);
        //this.props.onSendNewTask(this.props);    
    }

    render(){
      return(
        <form>
        <h2>Crear nueva tarea</h2>
            <div className="card border-success mb-3">
                <div className="card-body text-success">
                    <h5 className="card-title">Escriba el titulo de su tarea: </h5>
                    <input type="text" className="form-control" placeholder="Titulo de su tarea" id="titulo"></input>
                    <br></br>
                    <h5 className="card-title">Escriba la descripción de su tarea: </h5>
                    <textarea className="form-control" placeholder="Descripción de su tarea" id="descripcion"></textarea>
                    <br></br>
                    <button className="btn btn-outline-success" onClick={this.sendNewTask}>Enviar</button>
                </div>
            </div>
        </form>
        )
    }
}