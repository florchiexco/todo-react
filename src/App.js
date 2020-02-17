import React from 'react';
import './App.css';
import List from "./components/List.js";
import Form from "./components/Form.js";
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends React.Component {
  state = {
    tasks: [],
    form: { name: '', description: '' }
  }

  handleFormChange = e => {
    this.setState({
      ...this.state,
      form: {
        ...this.state.form,
        [e.target.name]:
        e.target.value
      }
    })
  }
  handleSubmit = e => {
    e.preventDefault()
    const { tasks } = this.state
    const { id, name, description } = this.state.form
    if ( name && description ) {
      if ( id ) {
        const editedTasks = tasks.map( task => {
          if ( task.id === id ) {
            task.name = name
            task.description = description
          }
          return task
        })
        this.setState({
          tasks: [ ...editedTasks ],
          form:{ name: '', description: '' }
        })
      }
      else {
        const task = {
          name,
          description
        }
        task.id = tasks[ tasks.length -1 ].id + 1
        this.setState({
          tasks: [ ...tasks, task ],
          form:{ name: '', description: '' }
        })
      }
    }
  }
  componentDidMount() {
    this.setState({
      tasks: [
        {id: 1, name: "Enviar mail", description: "Enviar mail a la secretaría de equivalencias de la UAA, indicando la continuidad en la UTN.", done: false},
        {id: 2, name: "Comprar heno para cobayo", description: "Comprar heno para el cobayo Sasuke, en la veterinaria más cercana y ecónomica que se encuentre", done: false},
        {id: 3, name: "Estudiar", description:"Estudiar para final de laboratorio IV, cuya fecha es el 21/02", done: false},
        {id: 4, name: "Leer libro", description:"Leer libro nuevo hasta el capitulo 7", done: false}
      ]
    })
  }
  changeTaskStatus = ( task ) => {
    const taskUpdated = this.state.tasks.map(taskEl => {
      if (taskEl.id === task.id)
        taskEl.done = !taskEl.done
      return taskEl
    })
    this.setState({
      tasks: taskUpdated
    })
  }
  editTask = ( task ) => {
    this.setState({
      form: task
    })
  }
  pendingTasks = () => {
    return this.state.tasks.filter( ( task ) => !task.done )
  }
  render() {
    return (
      <div className="container">
        <div className="row mt-3">
          <div className="col mb-3">
            <Form
              onSubmit={ this.handleSubmit }
              onChange={ this.handleFormChange }
              form={ this.state.form }
            />
          </div>
          <div className="col">
            { this.pendingTasks().length > 0 ? 
              <List tasksList={ this.pendingTasks() }
                onChangeTaskStatus={ this.changeTaskStatus }
                onEditTask={ this.editTask } />
            : <h3> Muy bien!! No tienes tareas pendientes </h3> }
          </div>
        </div>
      </div>
    );
  }
}

export default App;