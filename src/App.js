
import React, { Component } from 'react';
import './App.css';

class Title extends Component{
  render(){
    const {title, handleClick} = this.props
    return (
        <h3 onClick={handleClick}>{title}</h3>
      )
  }
}

class ElementForm extends Component{
   render(){
      const {handleSubmit, handleChange, element} = this.props
      return(
         <form onSubmit={handleSubmit}>
            <input value={element} type="text" onChange={handleChange} />
            <input type="submit" onClick={handleSubmit} />
         </form>
      )
   }
}


class TagForm extends Component{
   render(){
      const {getSubmit, getChange, element} = this.props
      return(
         <form onSubmit={getSubmit}>
            <input type="text" name="name" value={element} onChange={getChange} placeholder="Nombre..." required /><br/>
            <input type="text" name="lastname" value={element} onChange={getChange} placeholder="Apellido..." required /><br/>
            <input type="email" name="email" value={element} onChange={getChange} placeholder="Email" required /><br/>
            <label>SEXO</label><br/>
            <input type="radio" name="sex" value="Masculino" onChange={getChange} required /> Masculino<br/>
            <input type="radio" name="sex" value="Femenino" onChange={getChange} required /> Femenino<br/>
            <input type="submit" value="Enviar" />
         </form>
      )
   }
}


class List extends Component{
  render(){
    const {data} = this.props
    return (
      <ul>
        {data.map(x => <li key={x}>{x}</li>)}
      </ul>
    )
  }
}

class Feeds extends Component{
  render(){
    const {obj} = this.props
    return (
      <div>
      {/*obj.map(item =>  
          <div className="card">
          <img className="card-img-top" src="..." alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{item.user}</h5>
            <p className="card-text"></p>
          </div>
        </div>
      )*/}
     </div>
    )
  }
}


class App extends Component {
  
  obj = {
    0:{
      user: 'Terry Bogard',
      profile_picture: '',
      message: 'Hello',
      answers: [{
        user: 'Rock Howard',
        profile_picture: '',
        message: ''
      }]
    },
    1:{
      user: 'Terry Bogard',
      profile_picture: '',
      message: 'Hello',
      answers: [{
        user: 'Rock Howard',
        profile_picture: '',
        message: ''
      }]
    },
    2:{
      user: 'Terry Bogard',
      profile_picture: '',
      message: 'Hello',
      answers: [{
        user: 'Rock Howard',
        profile_picture: '',
        message: ''
      }]
    },
    3:{
      user: 'Terry Bogard',
      profile_picture: '',
      message: 'Hello',
      answers: [{
        user: 'Rock Howard',
        profile_picture: '',
        message: ''
      }]
    },
    4:{
      user: 'Terry Bogard',
      profile_picture: '',
      message: 'Hello',
      answers: [{
        user: 'Rock Howard',
        profile_picture: '',
        message: ''
      }]
    }
  }


  state = {
    data: [],
    form: {
      
    }
  }

  /*handleSubmit = e => {
    e.preventDefault()
    this.setState({
      ...this.state,
      data: this.state.data.concat(this.state.form.element),
      form: {
         element: '',
      }
    })
    console.log(this.state)
  }

  handleChange = e => {
     this.setState({
         ...this.state,
         form: {
           ...this.state.form,
           element: e.target.value
         }
     })
  }

  handleClick = value => {
      const newRandom = Math.random().toString(36)
      this.setState({ data: this.state.data.concat(newRandom) })
  }*/


  //FORM
  getChange = event => {
    this.setState({
      ...this.state,
      form: {
        ...this.state.form,
        [event.target.name]: event.target.value,
       }
     })
  }

  getSubmit = event => {
    event.preventDefault()
    this.setState({
      ...this.state,
      data: this.state.data.concat(this.state.form.element),
      form: {
         [event.target.name]: ''
      }
    })

    const name = this.state.form.name.trim().length
    const lastname = this.state.form.lastname.trim().length
    const email = this.state.form.email.trim().length
    const sex = this.state.form.sex
    if (name > 0 && lastname > 0 && email > 0 && sex) {
       setTimeout(function(){
          alert('Registro exitoso');
          window.location.reload()
       },1000)
    }else alert('Faltan campos por completar')
    console.log(name)
  }




  render() {
   const title1 = 'Contacto'
   const {data, form, obj} = this.state

    return (
      <div className="App">
         <Title title={title1} handleClick={this.handleClick} />
         <TagForm getSubmit={this.getSubmit} getChange={this.getChange} element={form.element} />
         <Feeds obj />
         {/*<List data={data} />*/}
         {/*<ElementForm handleSubmit={this.handleSubmit} handleChange={this.handleChange} element={form.element} />*/}
      </div>
    );
  }
}

export default App;