import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './form.css'
import {Navbar,Nav} from 'react-bootstrap'

function LoginForm() {

    return (
      <div>
          <div>
            <Navbar collapseOnSelect expand="lg" bg="blue" variant="white">
              <Navbar.Brand >Dream Weather App</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/home">Home</Nav.Link>
                
              </Nav>
              <Nav>
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link eventKey={2} href="/signup">
                  SignUp
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
            </Navbar>
          </div>

            <Container className = 'container'>
                  
              <Card>
                <div className = 'stm'>
                  <h1>Welcome!</h1>
                  <p>Login here</p>
                </div>
                <form>
                  <label htmlFor="email"> Email</label>
                  <input className = "form-control" type='email' name = 'email' placeholder='example@gmail.com' required/>

                  <label htmlFor="password"> Password</label>
                  <input  className = "form-control" type='password' name = 'password' placeholder = '************' required/>
                  
                </form>

                <div className = 'stm'>
                  <button className="btn"><a href = '/home'>Submit</a></button>
                </div>

                <div className = 'stm'>
                  <p>Don't have an account? <a id = 'link' href = '/signup'> SignUp</a></p>
                </div>
              </Card>
              <p Style="color:white">Don't want to interract this page? <a href = './home' Style="color:yellow"> CLICK TO PASS THIS PAGE</a></p>
            </Container>
            
      </div>
        
    )
}

export default LoginForm
