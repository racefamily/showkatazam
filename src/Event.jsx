import React from 'react';
import NavBar from './NavBar';

const Event = () => {
    // Define an array of images
    const imageSources = [
        "https://imgur.com/3p0ZMvH.jpg",
        "https://imgur.com/8oTEwiF.jpg",
    ];

    // Define an array of topics for each image
    const imageTopics = [
        "সেন্টমার্টিন ট্যুর",
        "কক্সবাজার ট্যুর",        
    ];

    return (
        <div>
            <NavBar />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {/* Map through the image sources array and render each image */}
                {imageSources.map((src, index) => (
                    <div key={index} className="p-4 bg-gray-100 rounded-lg">
                        {/* Display image */}
                        <img src={src} alt={`Image ${index + 1}`} className="w-full h-auto object-cover" style={{ aspectRatio: '16 / 9' }} />
                        {/* Centered Image Topic */}
                        <p className="mt-2 text-xl font-semibold text-center">{imageTopics[index]}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Event;