import React from 'react';
import { Container, Card, Row, Col, Image } from 'react-bootstrap';
import oneNBI from '../images/nbi/oneNBI.jpg'
import twoNBI from '../images/nbi/twoNBI.jpg'

const About = () => {
    return (
        <Container style={{ marginTop: '2%', marginBottom: '2%' }}>

            <Card className="text-center" >
                <Card.Text className='py-2 px-2'>
                    <h4>
                        I have made it my mission to help people understand and care about what they put in their bodies while bringing cultures and cuisines together in the process. Although women have come a long way in terms of rights, we have a long way to go. I feel the best way of getting us the equality we deserve in the world is by lifting each other up and supporting one another to follow our passions. We will make greater strides in making a difference in the world with the love and encouragement from other female entrepreneurs.
                    </h4>
                </Card.Text>
            </Card>

            <br></br>

            <Card className="text-center">
                <Card.Title className='py-3'><h2>Serving Newark Bethlehem Israel Frontline Workers</h2></Card.Title>
                <Row>
                    <Col>
                        <Image fluid src={oneNBI} alt='oneNBI' />
                    </Col>
                    <Col>

                        <Image fluid src={twoNBI} alt='twoNBI' />
                    </Col>
                </Row>

            </Card>

        </Container>

    )
}


export default About;
