import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Hero from './hero'

export default function Home() {
    return (
        <Container fluid className="p-0">
            <Row noGutters className='flex-grow-0 flex-shrink-0 shadow'>
                <Col style={{ backgroundColor: '#fff' }}>
                    <Hero />
                </Col>
            </Row>
            <Row noGutters className='flex-grow-0 flex-shrink-0 '>
                <Col>
                <br />
                    <h3>Maybe add some campaigns here?</h3>
                </Col>
            </Row>
        </Container>
    )
}