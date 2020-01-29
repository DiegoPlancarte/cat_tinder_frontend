import React from 'react';
import ReactDOM from 'react-dom'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import { Link } from 'react-router-dom'


class NewCat extends React.Component{
    constructor(props){
        super(props)
        this.state = {

            form:{
                name: '',
                age: '',
                enjoys: ''
            }
        }
    }

handleChange = (event) => {
  let {form} = this.state
  form[event.target.name] = event.target.value
  this.setState({form: form})
}

handleNewCat = () =>{
    let {form} = this.state
    this.props.submitNewCat(form)
}
    render (){
        return(
            <div>
                <h1>Get rid of your cat</h1>
                <Form>
                    <FormGroup>
                        <Label for="name">Name</Label>
                            <Input
                                id="name"
                                type="text"
                                name="name"
                                onChange={this.handleChange}
                                value={this.state.form.name}
                                placeholder="Cat's name"
                            />
                    </FormGroup>
                    <FormGroup>
                        <Label for="age">Age</Label>
                            <Input
                                id="age"
                                type="text"
                                name="age"
                                onChange={this.handleChange}
                                value={this.state.form.age}
                                placeholder="Cat's age"
                            />
                    </FormGroup>
                    <FormGroup>
                        <Label for="enjoys">Enjoys</Label>
                            <Input
                                id="enjoys"
                                type="text"
                                name="enjoys"
                                onChange={this.handleChange}
                                value={this.state.form.enjoys}
                                placeholder="Cat enjoys"
                            />
                    </FormGroup>
                </Form>
                <Link to="/pages/cats" className= "btn btn-primary" onClick={this.handleNewCat}>Add New Cat</Link>
            </div>
            )
    }
}

export default NewCat
