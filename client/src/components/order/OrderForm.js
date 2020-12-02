import React, { useContext } from 'react';
import UserContext from '../../context/UserContext';
import { useForm } from "react-hook-form";
import '../../style/OrderFormStyle.css';
import axios from 'axios';

const OrderForm = () => {

    const { token } = useContext(UserContext);
    const { register, handleSubmit, reset } = useForm();

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

        } catch (err) {
            console.log(err.response.data)
        }

        //clear form
        reset();
    }

    return (

        <div>

            {token && token !== null ?


                <div className='orderForm_container'>

                    <form
                        className='form'
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
                            <input className='input_field' name='deliveryaddress' type='text' ref={register}></input>
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

                        <div>
                            <label style={{ marginRight: '6px' }} className='label_text'>Options:</label>
                            <input type="radio" name="veg" value="veg"></input>
                            <label className='radio_text' htmlFor="veg">Vegetarian</label>
                            <input type="radio" name="nonveg" value="nonveg"></input>
                            <label className='radio_text' htmlFor="nonveg">Non-Vegetarian</label>
                            <input type="radio" name="mix" value="mix"></input>
                            <label className='radio_text' htmlFor="mix">Mix</label>
                        </div>

                        <div>
                            <label className='label_text' htmlFor='dietaryrestrictions'>Dietary Restrictions:</label>
                            <br></br>
                            <textarea className='input_field' name='dietaryrestrictions' rows="4" cols="50" maxLength="300" ref={register}></textarea>
                        </div>

                        <div>
                            <label className='label_text' htmlFor='allergies'>Allergies:</label>
                            <br></br>
                            <textarea className='input_field' name='allergies' rows="4" cols="50" maxLength="300" ref={register}></textarea>
                        </div>

                        <div>
                            <button type='submit'>Submit</button>
                        </div>

                    </form>

                </div>

                :

                <h1>You Must Be Logged In</h1>
            }

        </div>
    )
}

export default OrderForm