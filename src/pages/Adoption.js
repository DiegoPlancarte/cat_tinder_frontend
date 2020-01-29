import React from 'react';

class Adoption extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            catId: props.match.params.id
        }
    }

    render(){
        const { catId } = this.state
        const { cats } = this.props
        const cat = cats.find((c)=> c.id === parseInt(catId))
    return (
        <div>
            <h1>Congratulations!! we'll be reaching out to you shortly. {cat.name}</h1>
        </div>
        )
    }
}


export default Adoption
