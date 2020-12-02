import React, { useContext } from 'react';
import UserContext from '../../context/UserContext';
import { useForm } from "react-hook-form";
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
            dietaryrestrictions: data.dietaryrestrictions,
            allergies: data.allergies
        }

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
                    <label className='label_text' htmlFor='name'>Delivery Address:</label>
                    <input className='input_field' name='deliveryaddress' type='text' required ref={register}></input>
                    <div style={{ marginBottom: '13px' }}><small>Please add if different than home address.</small></div>
                </div>

                <div>
                    <label className='label_text' htmlFor='name'>Number of Guests:</label>
                    <input className='input_field' name='numberofguests' type='number' required ref={register}></input>
                </div>

                <div>
                    <label className='label_text' htmlFor='name'>Delivery Date and Time:</label>
                    <input className='input_field' name='deliverydateandtime' type='datetime-local' required ref={register}></input>
                </div>

                {/* //Radio Button and TextArea NOT WORKING - see react-hook-form docs */}


                < input type="submit" value="Submit" />
            </form>

        </div>
    )
}

export default OrderForm
