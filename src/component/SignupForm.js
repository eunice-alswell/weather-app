import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card } from 'react-bootstrap';
import './signupform.css'
import {Navbar,Nav} from 'react-bootstrap'

function SignupForm() {
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


            <Container id = 'container'>
                  <Card ClassName='Card'>
                    <div className = 'stm'><h1>SignUp</h1></div>
                  <form>
                    <label htmlFor="name"> Fullname</label> 
                    <input  className = 'form-control' name = 'Fullname' type = 'text' placeholder = 'eg.Kofi Manu' required/>
                    
                    <label htmlFor="email"> Email</label>
                    <input className = 'form-control' name = 'email' type='email' placeholder='example@gmail.com' required/>

                    <label htmlFor="date"> BirthDate</label>
                    <input className = 'form-control' name = 'date' type ='date' placeholder = 'dd/mm/yy' required/>
                    
                    <div ClassName='checkbox'>
                      <h6>Gender</h6>
                      <input type="checkbox" id="checkbox" name="gender" value="Male"/>
                      <label htmlFor="gender"> Male</label><br/>
                      <input type="checkbox" id="checkbox" name="gender" value="Female"/>
                      <label htmlFor="gender"> Female</label><br/>
                    </div>
                    
                    <label htmlFor = "password">Password</label>
                    <input className = 'form-control' name ='password'  type ='password' placeholder = '6+ character'/>

                    <label htmlFor="confirm password"> Confirm password</label>
                    <input className = 'form-control' name = 'confirm password'  type='password' placeholder = '************' required/>

                  </form>

                  <div className = 'stm'>
                  <button className="btn"><a href = '/home'>Submit</a></button>
                  </div>
                </Card>

            </Container>
    </div>   
    )
}

export default SignupForm
