import React from 'react';
import ImageUploadForm from '../components/ImageUploadForm';

const Home = () => {
    return (
        <div>
            {/* <h1 className='home-text p-4'>Welcome to the Home Page</h1> */}
            <h1 className='home-text p-4'>Welcome to Our Shopping Application!</h1>
            <ImageUploadForm/>
            <div className="image-grid p-4">
                <img src="./images/dinner1.jpeg" alt=""/>
                <img src="./images/dinner2.jpeg" alt=""/>
                <img src="./images/dinner3.jpeg" alt=""/>
                <img src="./images/christmas.jpeg" alt=""/>
                <img src="./images/family.jpeg" alt=""/>
                <img src="./images/grilling1.jpeg" alt=""/>
                <img src="./images/paella.jpeg" alt=""/>
                <img src="./images/pizza.jpeg" alt=""/>
                <img src="./images/potluck.jpeg" alt=""/>
                <img src="./images/smoker.jpeg" alt=""/>
                <img src="./images/thanksgiving.jpeg" alt=""/>
                <img src="./images/vegetables.jpeg" alt=""/>
                <img src="./images/burger.jpeg" alt=""/>
                <img src="./images/kitchen.jpeg" alt=""/>
                <img src="./images/cheese.jpeg" alt=""/>
            </div>
        </div>
    );
};

export default Home;
