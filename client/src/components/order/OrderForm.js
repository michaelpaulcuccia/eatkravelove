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

            //TO DO - create success notification, reroute to a new page

        } catch (err) {
            //TO DO - create failure notification
            console.log(err.response.data)
        }

        //clear form
        reset();
    }

    return (
        <div className='orderForm_container'>

            <form
                onSubmit={handleSubmit(onSubmit)}
            >
                <div>
                    <label className='label_text' htmlFor='name'>Name:</label>
                    <input className='input_field' name='name' type='text' required ref={register}></input>
                </div>

                <div>
                    <label className='label_text' htmlFor='phone'>Phone:</label>
                    <input className='input_field' name='phone' type='tel' placeholder="123-456-7890" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required ref={register}></input>
                </div>

                <div>
                    <label className='label_text' htmlFor='email'>Email:</label>
                    <input className='input_field' name='email' type='email' pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required ref={register}></input>
                </div>

                <div>
                    <label className='label_text' htmlFor='address'>Home Address:</label>
                    <input className='input_field' name='address' type='text' required ref={register}></input>
                </div>

                <div>
                    <label className='label_text' htmlFor='deliveryaddress'>Delivery Address:</label>
                    <input className='input_field' name='deliveryaddress' type='text' required ref={register}></input>
                </div>

                <div>
                    <label className='label_text' htmlFor='numberofguests'>Number of Guests:</label>
                    <input className='input_field' name='numberofguests' type='number' required ref={register}></input>
                </div>

                <div>
                    <label className='label_text' htmlFor='deliverydateandtime'>Delivery Date and Time:</label>
                    <input className='input_field' name='deliverydateandtime' type='datetime-local' required ref={register}></input>
                </div>

                <div>
                    <label className='label_text' style={{ marginRight: '6px' }}>Meat or Meatless Options</label>
                    <select name="options" ref={register}>
                        <option disabled value> -- select an option -- </option>
                        <option value="veg">Vegetarian</option>
                        <option value="nonveg">Non-Vegetarian</option>
                        <option value="mix">Mix</option>
                    </select>
                </div>

                <div style={{ textAlign: 'center', marginBottom: '7px' }}><small>All of the above fields are required.</small></div>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label className='label_text'>Special Requests, Dietary Restrictions, Allergies, Etc.</Form.Label>
                    <Form.Control as="textarea" rows={3} name='specialrequests' ref={register} />
                </Form.Group>



                < input type="submit" value="Submit" />
            </form>

        </div>
    )
}

export default OrderForm
