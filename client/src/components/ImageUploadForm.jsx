import React, { useState } from 'react';

const ImageUploadForm = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setSelectedImage(file);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        // Perform any additional actions with the selectedImage, such as uploading to a server.

        // Clear the form after submission
        setSelectedImage(null);
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <div className='home-text p-4'>
                <label htmlFor="imageInput">Select your profile image here: </label>
                <input
                    type="file"
                    id="imageInput"
                    accept="image/*"
                    onChange={handleImageChange}
                />
            </div>

            {selectedImage && (
                <div>
                    <p>Selected Image:</p>
                    <img
                        src={URL.createObjectURL(selectedImage)}
                        alt="Selected"
                        style={{ maxWidth: '100%', maxHeight: '200px' }}
                    />
                </div>
            )}

            <button className="home-button bg-green-300 rounded-lg p-2 ml-4" type="submit">Submit</button>
        </form>
    );
};

export default ImageUploadForm;
