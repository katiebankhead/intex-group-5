import React from 'react'
import { Container, Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'

export default function TopContainer() {
    return (
        <Navbar style={{ backgroundColor: '#fff' }}>
            <Navbar.Brand href="/" className="mr-35vw">
            <img src="./go-fund-me-logo.png" alt='logo' style={{ width: '100px' }} />
            </Navbar.Brand>
            <Nav className="justify-content-center">
                <Nav.Link href="#home">CAMPAIGNS</Nav.Link>
                <Nav.Link href="#features">PREDICTION CALCULATOR</Nav.Link>
                <Nav.Link href="#pricing">TRAINING</Nav.Link>
            </Nav>
        </Navbar>
    )
}

// bg="light" variant="light"
// className="mr-auto"