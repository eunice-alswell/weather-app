import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card } from 'react-bootstrap';
import './signupform.css'

function SignupForm() {
    return (

            <Container id = 'container'>
                  <Card ClassName='Card'>
                    <div className = 'stm'><h1>SignUp</h1></div>
                  <form>
                    <label for="name"> Fullname</label> 
                    <input  className = 'form-control' name = 'Fullname' type = 'text' placeholder = 'eg.Kofi Manu' required/>
                    
                    <label for="email"> Email</label>
                    <input className = 'form-control' name = 'email' type='email' placeholder='example@gmail.com' required/>

                    <label for="date"> BirthDate</label>
                    <input className = 'form-control' name = 'date' type ='date' placeholder = 'dd/mm/yy' required/>
                    
                    <div ClassName='checkbox'>
                      <h6>Gender</h6>
                      <input type="checkbox" id="checkbox" name="gender" value="Male"/>
                      <label for="gender"> Male</label><br/>
                      <input type="checkbox" id="checkbox" name="gender" value="Female"/>
                      <label for="gender"> Female</label><br/>
                    </div>
                    
                    <label for = "password">Password</label>
                    <input className = 'form-control' name ='password'  type ='password' placeholder = '6+ character'/>

                    <label for="confirm password"> Confirm password</label>
                    <input className = 'form-control' name = 'confirm password'  type='password' placeholder = '************' required/>

                  </form>

                  <div className = 'stm'>
                  <button className="btn"><a href = '/home'>Submit</a></button>
                  </div>
                </Card>

            </Container>
        
    )
}

export default SignupForm
