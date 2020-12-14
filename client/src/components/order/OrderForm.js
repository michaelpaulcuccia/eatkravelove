import React, { useContext } from 'react';
import UserContext from '../../context/UserContext';
import { useForm } from "react-hook-form";
import { Form } from "react-bootstrap";
import axios from 'axios';
import '../../style/OrderFormStyle.css';

const OrderForm = () => {

    const { register, handleSubmit, reset } = useForm();
    const { token } = useContext(UserContext);

    const onSubmit = async data => {

        //create object
        const order = {
            name: data.name,
            phone: data.phone,
            email: data.email,
            address: data.address,
            deliveryaddress: data.deliveryaddress,
            numberofguests: data.numberofguests,
            deliverydateandtime: data.deliverydateandtime,
            options: data.options,
            specialrequests: data.specialrequests
        }

        console.log(order)

        try {

            //create headers with token
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': token
                }
            };

            //create body
            const body = JSON.stringify(order);

            //make request
            let req = await axios.post('api/orderform', body, config);

            //Response in console
            console.log(req)

            //notify user of successful submission
            window.alert("Your order has been placed")

            //clear form
            reset();

        } catch (err) {
            //TO DO - create failure notification
            console.log(err.response.data)
        }


    }

    return (
        <div className='orderForm_container'>

            <h1
                style={{ textAlign: 'center', fontFamily: 'Architects Daughter, cursive' }}
            >Catering Request</h1>

            <Form
                onSubmit={handleSubmit(onSubmit)}
            >

                <Form.Text className="text-muted" style={{ textAlign: 'center', fontFamily: 'Architects Daughter, cursive', fontSize: '14px' }}>
                    We'll never share your information with anyone else.
                    </Form.Text>

                <Form.Group>
                    <Form.Label className='label_text'>Name: </Form.Label>
                    <Form.Control name="name" type="text" placeholder="your name" required ref={register} />
                </Form.Group>

                <Form.Group>
                    <Form.Label className='label_text'>Phone: </Form.Label>
                    <Form.Control name="phone" type="tel" placeholder="123-456-7890" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required ref={register} />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label className='label_text'>Email address: </Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required ref={register} />
                </Form.Group>

                <Form.Group>
                    <Form.Label className='label_text'>Home Address: </Form.Label>
                    <Form.Control name="address" type="text" required ref={register} />
                </Form.Group>

                <Form.Group>
                    <Form.Label className='label_text'>Delivery Address: </Form.Label>
                    <Form.Control name="deliveryaddress" type="text" required ref={register} />
                </Form.Group>

                <Form.Group>
                    <Form.Label className='label_text'>Number of Guests: </Form.Label>
                    <Form.Control name="numberofguests" type='number' required ref={register} />
                </Form.Group>

                <Form.Group>
                    <Form.Label className='label_text'>Delivery Date and Time: </Form.Label>
                    <Form.Control name='deliverydateandtime' type='datetime-local' required ref={register} />
                </Form.Group>

                <Form.Group>
                    <Form.Label className='label_text'>Meat or Meatless Options:</Form.Label>
                    <Form.Control as="select" custom name="options" ref={register}>
                        <option disabled selected value='--select an option--'>--select an option--</option>
                        <option value="veg">Vegetarian</option>
                        <option value="nonveg">Non-Vegetarian</option>
                        <option value="mix">Mix</option>
                    </Form.Control>
                </Form.Group>

                <Form.Text className="text-muted" style={{ textAlign: 'center', fontFamily: 'Architects Daughter, cursive', fontSize: '14px', marginBottom: '10px' }}>
                    *** All of the above fields are required. ***
                    </Form.Text>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label className='label_text'>Special Requests, Dietary Restrictions, Allergies, Etc.</Form.Label>
                    <Form.Control as="textarea" rows={3} name='specialrequests' ref={register} />
                </Form.Group>

                < input type="submit" value="Submit"
                    style={{ padding: '4px 4px 4px 4px', marginBottom: '20px', color: 'white', backgroundColor: 'blue', marginLeft: '45%' }}
                />

            </Form>

        </div>
    )
}

export default OrderForm
