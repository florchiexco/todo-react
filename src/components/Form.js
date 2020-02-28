import React from "react";

const Form = ({onChange, onSubmit, form})=>  {
    return (
      <div className="card border-danger mb-3">
        <div className="card-header">
          Ingresar nueva tarea a la lista
        </div>
        <div className="card-body">
          <form onSubmit={ onSubmit } >
            <div className="form-group">
              <label htmlFor="exampleInputTitle">Título</label>
              <input type="text" className="form-control" name="name" value={ form.name } onChange={ onChange }></input>
            </div>
            <div className="form-group">
              <label htmlFor="description">Descripción</label>
              <textarea className="form-control" name="description" value={ form.description } onChange={ onChange }></textarea>
            </div>
            <button type="submit" className="btn btn-danger">Enviar</button>
            </form>
        </div>
      </div>
    )
  }

  export default Form;