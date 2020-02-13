import React from 'react';
import './App.css';
import List from "./components/List.js";
import Form from "./components/Form.js";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Form/>
        </div>
        <div className="col">
          <List/>
        </div>
      </div>
    </div>
  );
}

export default App;
