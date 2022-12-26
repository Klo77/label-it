import React from 'react'
import {Nav,Icon} from 'react-bootstrap';
import './LeftNav.css' 
import Home from '../../assets/icons/Home.png'
import Profile from '../../assets/icons/Profile.png'
import Label from '../../assets/icons/Label.png'
import ProjectM from '../../assets/icons/ProjectM.png'





const LeftNav = () => {
    return (
    <>
        <center>
            <Nav className="col-md-12 d-md-block  sidebar">
            <Nav.Item className='d-flex px-2 item'>
                <img src={Home}/>
                <Nav.Link className='link'href="">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item className='d-flex px-2 item'>
                <img src={Label}/>
                <Nav.Link className='link' eventKey="link-1">Labelling Tasks</Nav.Link>
            </Nav.Item>
            <Nav.Item className='d-flex px-2 item'>
                <img src={ProjectM}/>
                <Nav.Link className='link' eventKey="link-2">Projects Managment</Nav.Link>
            </Nav.Item>
            <Nav.Item className='d-flex px-2 item'>
                <img src={Profile}/>
                <Nav.Link className='link' eventKey="link-2">Profile</Nav.Link>
            </Nav.Item>
            </Nav>
        
    </center>
        
    </>

    )
}

export default LeftNav