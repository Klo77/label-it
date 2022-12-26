import "./Login.css"
import {Form, Button} from 'react-bootstrap';
import logo from '../../assets/images/Logo2.png'

const Login = () => {
    return (
        <div className="container">
            <img className="logoImage mb-4" src = {logo} alt="Label it logo"></img>
            <h2 className="fw-normal text-center mb-4">Log in</h2>
            <div className="align-items-center">
                <Form className=" p-4 p-sm-3 needs-validation">  {/*was-validated*/}

                <Form.Group className="mb-3 was-validated " controlId="formBasicEmail">
                    <Form.Label >Email Address</Form.Label>
                    {/* <InputGroup hasValidation>  */}
                    <Form.Control className="fields" type="email" placeholder="Enter Email" required/>
                    <Form.Control.Feedback type="invalid">
                        Please enter a valid Email
                    </Form.Control.Feedback>
                    {/* <Form.Control.Feedback type="invalid">
                        Please enter a valid Email
                    </Form.Control.Feedback>*/}
                    {/* </InputGroup>  */}
                    
                </Form.Group>

                <Form.Group className="mb-2 was-validated " controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control className="fields" type="password" placeholder="Password" required minLength={8}/>
                    <Form.Control.Feedback type="invalid">
                        Please enter at least 8 character
                    </Form.Control.Feedback>
                    {/* <Form.Control.Feedback type="invalid">
                        Please enter at least 8 character
                    </Form.Control.Feedback> */}
                </Form.Group>
                <a className="forgetLink" href="https://www.google.com/" target="_blank">Forget your password?</a>
                <Button id="signInButton" className="mb-2"  variant="primary" type="submit">Log in</Button>
                <p className="text-center signupLink">Don’t have an account? <a href="https://www.google.com/" target="_blank"> Sign up</a></p>
                
                </Form>

                
            </div>
        </div> 
    )
}

export default Login