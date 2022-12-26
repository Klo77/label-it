import './ForgetPassword.css'
import {Form,Button} from 'react-bootstrap';
import logo from '../../assets/images/Logo2.png'

const ForgetPassword = () => {
  return (
    <div className="container">
        <img className="logoImage mb-4" src = {logo} alt="Label it logo"></img>
        <h2 className="fw-normal text-center mb-4">Forget Password</h2>
        <div className="align-items-center">
                <Form className=" p-4 p-sm-3 needs-validation">
                <Form.Group className="mb-3 was-validated " controlId="formBasicEmail">
                    <Form.Label >Email Address</Form.Label>
                    <Form.Control className="fields" type="email" placeholder="Enter Email" required/>
                    <Form.Control.Feedback type="invalid">
                        Please enter a valid Email
                    </Form.Control.Feedback> 
                </Form.Group>
                <p>We will send the reset link to your email</p>
                <Button id="signInButton" className="mb-2"  variant="primary" type="submit">Send</Button>
                </Form>
            </div>
    </div>
  )
}

export default ForgetPassword