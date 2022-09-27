import React, { Component } from 'react'

export class NoteForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      title : "",
      body : ""
    }

    this.onInputChangeEventHandler = this.onInputChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onInputChangeEventHandler(event){
    const input = document.querySelector("form input");
    const numberLength = document.querySelector("#note-app__number-length");
    const target = event.target;
    let value = target.value;
    const name = target.name;

    if (input === target) {
      const maxCharacterNumber = 50;
      
      if(value.length > maxCharacterNumber) {
        value = value.substr(0, maxCharacterNumber);
      }else{
        numberLength.textContent = maxCharacterNumber - value.length;
      }
    }

    this.setState({
      [name] : value
    })
  }

  onSubmitEventHandler(event){
    event.preventDefault();

    const form = document.querySelector("form");

    this.props.addNote(this.state);
    
    form.reset();
  }

  render() {
    return (
      <section className='note-app__form-wrapper'>
            <h1 className='note-app__section-title'><i className='bx bx-edit'></i> Create Note</h1>
            <form onSubmit={this.onSubmitEventHandler}>
                <h5 className='note-app__title-length'>Remaining Characters : <span id='note-app__number-length'>50</span></h5>
                <input type="text" name='title' onChange={this.onInputChangeEventHandler} placeholder='Enter your note title...' required />
                <textarea name='body' rows='10' onChange={this.onInputChangeEventHandler} placeholder='Enter your note description...' required />
                <button type='submit' className='note-app__submit-button'>
                    <i className='bx bxs-note' ></i> Create
                </button>
            </form>
      </section>
    )
  }
}

export default NoteForm