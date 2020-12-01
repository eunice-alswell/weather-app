import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './form.css'

function LoginForm() {

    return (

            <Container className = 'container'>
                  
              <Card>
                <div className = 'stm'>
                  <h1>Welcome!</h1>
                  <p>Login here</p>
                </div>
                <form>
                  <label for="email"> Email</label>
                  <input className = "form-control" type='email' name = 'email' placeholder='example@gmail.com' required/>

                  <label for="password"> Password</label>
                  <input  className = "form-control" type='password' name = 'password' placeholder = '************' required/>
                  
                </form>

                <div className = 'stm'>
                  <button className="btn"><a href = '/home'>Submit</a></button>
                </div>

                <div className = 'stm'>
                  <p>Don't have an account? <a id = 'link' href = '/signup'> SignUp</a></p>
                </div>
              </Card>

            </Container>
        
    )
}

export default LoginForm
