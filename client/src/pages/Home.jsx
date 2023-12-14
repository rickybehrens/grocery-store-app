import React from 'react';
import ImageUploadForm from '../components/ImageUploadForm';

const Home = () => {
    return (
        <div>
            <h1>Welcome to the Home Page</h1>
            <h1>Welcome to Our Shopping Application!</h1>
            <ImageUploadForm />
            <div className="image-grid">
                <img src="./images/dinner1.jpeg" alt="" srcSet="" />
                <img src="./images/dinner2.jpeg" alt="" srcSet="" />
                <img src="./images/dinner3.jpeg" alt="" srcSet="" />
                <img src="./images/christmas.jpeg" alt="" srcSet="" />
                <img src="./images/family.jpeg" alt="" srcSet="" />
                <img src="./images/grilling1.jpeg" alt="" srcSet="" />
                <img src="./images/paella.jpeg" alt="" srcSet="" />
                <img src="./images/pizza.jpeg" alt="" srcSet="" />
                <img src="./images/potluck.jpeg" alt="" srcSet="" />
                <img src="./images/smoker.jpeg" alt="" srcSet="" />
                <img src="./images/thanksgiving.jpeg" alt="" srcSet="" />
                <img src="./images/vegetables.jpeg" alt="" srcSet="" />
                <img src="./images/burger.jpeg" alt="" srcSet="" />
                <img src="./images/kitchen.jpeg" alt="" srcSet="" />
                <img src="./images/cheese.jpeg" alt="" srcSet="" />
            </div>
        </div>
    );
};

export default Home;
