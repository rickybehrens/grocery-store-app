import React from 'react';
import ImageUploadForm from '../components/ImageUploadForm';

const Home = () => {
    return (
        <div>
            <h1>Welcome to the Home Page</h1>
            <h1>Welcome to Our Shopping Application!</h1>
            <ImageUploadForm />
        </div>
            <div className='image-grid'>
                <img src="./images/dinner1.jpeg" alt="" srcset="" />
                <img src="./images/dinner2.jpeg" alt="" srcset="" />
                <img src="./images/dinner3.jpeg" alt="" srcset="" />
                <img src="./images/christmas.jpeg" alt="" srcset="" />
                <img src="./images/family.jpeg" alt="" srcset="" />
                <img src="./images/grilling1.jpeg" alt="" srcset="" />
                <img src="./images/paella.jpeg" alt="" srcset="" />
                <img src="./images/pizza.jpeg" alt="" srcset="" />
                <img src="./images/potluck.jpeg" alt="" srcset="" />
                <img src="./images/smoker.jpeg" alt="" srcset="" />
                <img src="./images/thanksgiving.jpeg" alt="" srcset="" />
                <img src="./images/vegetables.jpeg" alt="" srcset="" />
                <img src="./images/burger.jpeg" alt="" srcset="" />
                <img src="./images/kitchen.jpeg" alt="" srcset="" />
                <img src="./images/cheese.jpeg" alt="" srcset="" />
            </div>
    )
};
export default Home;
