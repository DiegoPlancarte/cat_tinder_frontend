import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Navbar, NavItem } from 'reactstrap'

import Cats from './pages/Cats'
import NewCat from './pages/NewCat'
import Header from './pages/Header'
import Catinfo from './pages/Catinfo'
import Adoption from './pages/Adoption'


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            adopter:[{
                    id: "",
                    name: '',
                    email: '',
                    phone: ''
                }],
            cats:[
              {
                id: 1,
                name: 'Morris',
                age: 2,
                enjoys: "Long walks on the beach.",
                image: "/cat1.png",
                adopted: false
              },
              {
                id: 2,
                name: 'Paws',
                age: 4,
                enjoys: "Snuggling by the fire.",
                image: "/cat2.jpeg",
                adopted: false
              },
              {
                id: 3,
                name: 'Mr. Meowsalot',
                age: 12,
                enjoys: "Being in charge.",
                image: "/cat3.jpeg",
                adopted: false
              }
          ]
        }
    }


    submitNewCat = (form) =>{
        const { cats } = this.state
        let catid = cats.length
        catid++
        cats.push({ id: catid,
                        name: form.name,
                        age: form.age,
                        enjoys: form.enjoys,
                        adopted: false
                    })
        this.setState({cats : cats})

    }

    submitAdoption = (form) =>{
        const { adopter } = this.state
        const { cats } = this.state
        let id = adopter.length
        id++
        adopter.push({ id:id,
                        name: form.name,
                        email: form.email,
                        phone: form.phone
                    })
        this.setState({adopter : adopter})

    }



    render() {
        const { cats } = this.state
        return (
            <div>
                <Router>
                    <Navbar>
                        <NavItem>
                        <Link to="/">Home</Link>
                        </NavItem>
                        <NavItem>
                        <Link to="/pages/cats">Cats</Link>
                        </NavItem>
                        <NavItem>
                        <Link to="/pages/newcat">New Cat</Link>
                        </NavItem>
                    </Navbar>

                    <Header />

                    <Switch>
                        <Route
                            exact path="/pages/cats"
                            render={(props) =>
                            <Cats cats={ this.state.cats } />
                            }
                            />
                        <Route
                            exact path="/pages/newcat"
                            render={(props) =>
                            <NewCat newcat={ this.state.newcats } submitNewCat={this.submitNewCat} />
                            }
                            />
                        <Route
                            exact path="/pages/catinfo/:id"
                            render={(props) =>                             <Catinfo {...props} cats={ this.state.cats} />
                            }
                            />
                        <Route
                            exact path="/pages/adoption/:id"
                            render={(props) =>                             <Adoption {...props}
                            cats={ this.state.cats }
                            adopter={ this.state.adopter }
                            submitAdoption={ this.submitAdoption }/>
                            }
                            />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
