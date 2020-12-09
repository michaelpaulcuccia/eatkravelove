import React from 'react';
import '../style/MenuStyle.css';
import china from '../images/flags/china.png';
import euro from '../images/flags/euro.jpg';
import india from '../images/flags/india.jpg';
import mex from '../images/flags/mex.jpg';
import mideast from '../images/flags/mideast.png';
import thai from '../images/flags/thai.png';

const Menu = () => {
    return (

        <div className='container'>


            <div className='flex_container'>


                <div className='menu_box'>
                    <p className='head'><strong><img className='image' src={india} alt="india" /> Indo-Mexican  <img className='image' src={mex} alt="mex" /></strong></p>
                    <p>Elote – Corn off the cob with Mexican and Indian inspired flavors (Vegan) $12</p>
                    <p>Spicy Cheesy Corn (Vegetarian) $12</p>
                    <p>Mushroom Enchiladas (Vegan) $20</p>
                    <p>Spinach Enchiladas (Vegan) $15</p>
                    <p>Indo Mex Cauliflower Enchiladas (Vegan or Vegetarian) $15</p>
                    <p>Indo Mex Biriyani (Vegan or Vegetarian) $15</p>
                    <p>Spicy Paneer Enchiladas (Vegetarian) $15</p>
                    <p>Spicy Cheesy Cilantro Rice (Vegetarian) $10/$20 (Small/Large)</p>
                    <p>Chicken Enchiladas $15</p>
                    <p>Beef Enchiladas $15</p>
                    <p>Cilantro Lime Shrimp $20</p>
                </div>

                <div className='menu_box'>
                    <p className='head'><strong><img className='image' src={india} alt="india" /> Indo-Chinese <img className='image' src={china} alt="china" /> /  <img className='image' src={thai} alt="thai" /> Thai Inspired</strong></p>
                    <p>Gobi Manchurian (Vegan) $15</p>
                    <p>Spicy Soy Ginger Brussel Sprouts (Vegan) $15</p>
                    <p>Chili Tofu (Vegan) $15</p>
                    <p>Chili Paneer (Vegetarian) $15</p>
                    <p>Tom Kha Soup (Vegan) $15</p>
                    <p>Thai Green Curry with Seitan in a basil and coriander base (Vegan) $15</p>
                    <p>Tofu Beef and Broccoli (Vegan) $15</p>
                    <p>Orange Seitan Chick’n (Vegan) $15</p>
                    <p>Garlic Mushroom Fried Rice (Vegan) $15</p>
                    <p>Chili Garlic Noodles with julienne vegetables (Vegan) $15</p>
                    <p>Chili Thai Basil Rice (Vegan) $15</p>
                    <p>Chicken and Broccoli $20</p>
                    <p>Chicken Green Curry $20</p>
                    <p>Thai Chili Chicken Basil $20</p>
                    <p>Chili Chicken $20</p>
                </div>

                <div className='menu_box'>
                    <p className='head'><strong> <img className='image' src={india} alt="india" /> Indo-European <img className='image' src={euro} alt="euro" /></strong></p>
                    <p>Spicy Perogies (Vegan or Vegetarian) $15</p>
                    <p>Spicy Penne Vodka (Vegetarian) $15</p>
                    <p>Fettucini Alfredo (Vegetarian) $15</p>
                    <p>Spicy Garlic Angel Hair (Vegan or Vegetarian) $15</p>
                    <p>Stuffed Portabella (Vegan or Vegetarian) $15</p>
                    <p>Mushroom Ravioli (Vegetarian) $15</p>
                    <p>Chicken Parmesan $20</p>
                    <p>Garlic Shrimp Linguini $20</p>
                    <p>Masala Gambas (Shrimp in a Spicy Garlic Butter) $20</p>
                </div>

                <div className='menu_box'>
                    <p className='head'><strong><img className='image' src={mideast} alt="mideast" /> Middle Eastern</strong></p>
                    <p>Tofu Keema with a mint and caramelized onions (Vegan) $15</p>
                    <p>Spicy Onion Pilaf (Vegan) $15</p>
                    <p>Spicy Mint Yogurt (Vegetarian) $10</p>
                    <p>Labneh (Vegetarian) $10</p>
                    <p>Mint Shwarma Chicken $20</p>
                    <p>Beef Keema $20</p>
                </div>

                <div className='menu_box'>
                    <p className='head'><strong>Sandwiches/ Soups/ Salads</strong></p>
                    <p>Cucumber Feta Salad (Vegetarian) $10/$20 (Small / Large)</p>
                    <p>Spicy Caprese Sandwich (Vegetarian) $6</p>
                    <p>Truffled Mushroom Sandwich (Vegan) $12</p>
                    <p>Spicy Masala Sandwich (Vegan or Vegetarian) $6</p>
                    <p>Italian Salad (Vegan or Vegetarian) $10/$20 (Small / Large)</p>
                    <p>Roasted Cauliflower Soup (Vegan) $10/$20 (Small / Large)</p>
                    <p>Baked Potato Soup (Vegan) $10/$20 (Small / Large)</p>
                </div>

                <div className='menu_box'>
                    <p className='head'><strong><img className='image' src={india} alt="india" /> Indian</strong></p>
                    <p>Egg Bhurji (Vegetarian) $15</p>
                    <p>Paneer Bhurji (Vegetarian) $15</p>
                    <p>Mutter Paneer (Vegetarian) $15</p>
                    <p>Aloo Gobi (Vegan) $15</p>
                    <p>Dry Channa (Vegan) $15</p>
                    <p>Channa Masala (Vegan) $15</p>
                </div>

            </div>

            <br></br>
            <br></br>
            <br></br>

        </div>
    )
}

export default Menu