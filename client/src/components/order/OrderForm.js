import React, { useContext } from 'react';
import UserContext from '../../context/UserContext';
import { useForm } from "react-hook-form";
import axios from 'axios';

const OrderForm = () => {

    const { token } = useContext(UserContext);
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async data => {
        console.log(data);

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

            <form onSubmit={handleSubmit(onSubmit)}>

                <div>
                    <label htmlFor='name'>Name:</label>
                    <input name='name' type='text' required ref={register}></input>
                </div>

                <div>
                    <label htmlFor='phone'>Phone:</label>
                    <input name='phone' type='tel' placeholder="123-456-7890" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required ref={register}></input>
                </div>

                <div>
                    <label htmlFor='email'>Email:</label>
                    <input name='email' type='email' pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required ref={register}></input>
                </div>

                <div>
                    <label htmlFor='address'>Home Address:</label>
                    <input name='address' type='text' required ref={register}></input>
                </div>

                <div>
                    <label htmlFor='name'>Delivery Address:</label>
                    <small>If different than home address.</small>
                    <input name='deliveryaddress' type='text' ref={register}></input>
                </div>

                <div>
                    <label htmlFor='name'>Number of Guests:</label>
                    <input name='numberofguests' type='number' required ref={register}></input>
                </div>

                <div>
                    <label htmlFor='name'>Delivery Date and Time:</label>
                    <input name='deliverydateandtime' type='datetime-local' required ref={register}></input>
                </div>

                <div>
                    <label>Options</label>
                    <input type="radio" name="veg" value="veg"></input>
                    <label htmlFor="veg">Vegetarian</label>
                    <input type="radio" name="nonveg" value="nonveg"></input>
                    <label htmlFor="nonveg">Non-Vegetarian</label>
                    <input type="radio" name="mix" value="mix"></input>
                    <label htmlFor="mix">Mix</label>
                </div>

                <div>
                    <label htmlFor='dietaryrestrictions'>Dietary Restrictions:</label>
                    <br></br>
                    <textarea name='dietaryrestrictions' rows="4" cols="50" maxLength="300" ref={register}></textarea>
                </div>

                <div>
                    <label htmlFor='allergies'>Allergies:</label>
                    <br></br>
                    <textarea name='allergies' rows="4" cols="50" maxLength="300" ref={register}></textarea>
                </div>

                <div>
                    <button type='submit'>Submit</button>
                </div>

            </form>

        </div>
    )
}

export default OrderForm
