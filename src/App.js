import React from 'react';
import './App.css';
import List from "./components/List.js";
import Form from "./components/Form.js";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      tasks: [{id:1, name:"Comprar verduras", description:"Comprar verduras en el supermercado, estas deben ser: palta, acelga y zanahoria.", done: false},
              {id:2, name:"Lavar la ropa", description:"Lavar la ropa de toda la familia en el lavarropas", done: true},
              {id:3, name:"Pasear mascotas", description:"Sacar a pasear a todas las mascotas, cobayo y perro, a la vereda.", done:false}        
          ]
  }
  }

  changeTaskStatus = ( task ) => {
    const taskUpdated = this.state.tasks.map(taskEl => {
      if (taskEl.id === task.id) taskEl.done = !taskEl.done
      return taskEl
    })
    this.setState({
      tasks: taskUpdated
    })
  }

  render(){
      return (
        <div className="container">
          <div className="row">
            <div className="col">
              <Form/>
            </div>
            <div className="col">
              <List taskList={this.state.tasks} onChangeTaskStatus={this.changeTaskStatus}/>
            </div>
          </div>
        </div>
      );
  }
}
export default App;
