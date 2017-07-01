import React from 'react';
class Form extends React.Component{
  render(){
    return <Button>I <Heart/> React</Button>
  }
}

const Button = (props) => <button>{props.children}</button>

class Heart extends React.Component{
  render(){
    return <span>love</span>
  }
}

export default Form
