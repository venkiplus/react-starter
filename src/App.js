import React from 'react';
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      name: 'Venki'
    }
  }
    update( e ){
      this.setState({name: e.target.value});
    }

  render(){
    return (
      <div>
        <Widget update={this.update.bind(this)}/>
        <h1>Hello World!</h1>
        <b>I am {this.state.name}, learning reactjs</b>
      </div>
    )
  }
}

const Widget = (props) =>
  <input type='text' onChange={props.update}/>

export default App
