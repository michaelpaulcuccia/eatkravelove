import React from 'react';
import oneNBI from '../images/nbi/oneNBI.jpg'
import twoNBI from '../images/nbi/twoNBI.jpg'

const About = () => {
    return (
        <div>

            <div className="container"
                style={{ fontFamily: 'Architects Daughter, cursive', fontSize: '18px', marginTop: '15px' }}
            >
                I have made it my mission to help people understand and care about what they put in their bodies while bringing cultures and cuisines together in the process. Although women have come a long way in terms of rights, we have a long way to go. I feel the best way of getting us the equality we deserve in the world is by lifting each other up and supporting one another to follow our passions. We will make greater strides in making a difference in the world with the love and encouragement from other female entrepreneurs.
            </div>

            <br></br>

            <div
                className="container"
                style={{ fontFamily: 'Architects Daughter, cursive', fontSize: '18px', marginLeft: '35%' }}
            >
                Serving Newark Bethlehem Israel Frontline Workers
            </div>

            <br></br>

            <div className='container'
                style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}
            >
                <img src={oneNBI} alt='oneNBI' />
                <img src={twoNBI} alt='twoNBI' />
            </div>

            <br></br>

            <div className="container"
                style={{ fontFamily: 'Architects Daughter, cursive', fontSize: '18px' }}
            >
                <strong
                    style={{ fontFamily: 'Architects Daughter, cursive', fontSize: '24px', marginLeft: '45%' }}
                >Donation
                </strong>

                <br></br>
    We will match your donation and deliver fresh vegetables, fruits and dairy to those in need. We have teamed with 'Be The Change' of Kean University to provide fresh groceries to Middlesex, Essex, and Union Counties. Venmo @SANKETA
                </div>

            <br></br>
            <br></br>

        </div>

    )
}


export default About;
