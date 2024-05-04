import React from 'react';

const Leader = () => {
    // Define arrays of images, titles, and positions
    const images = [
        "https://imgur.com/Lwk3dOh.jpg",
        "https://imgur.com/aCkQYlZ.jpg",
        "https://imgur.com/YUZvIF4.jpg",
        "https://imgur.com/hPdYQdJ.jpg",
        "https://imgur.com/5Dou4EM.jpg",
        "https://imgur.com/jBymXbu.jpg",
        "https://imgur.com/Ks7EsQz.jpg",
        "https://imgur.com/8Km40Py.jpg",
        "https://imgur.com/16szPOK.jpg",
        // Add more image URLs as needed
    ];

    const titles = [
        "Mehedi Hasan Hira",
        "Sajal Islam Rabbi",
        "Asad Nadim",
        "Tajul Islam",
        "MD. Zihad",
        "Anika Khanam",
        "Farhana Begum",
        "Sakhawat Hossain",
        "রোকাইয়া জাহান",
        // Add more titles as needed
    ];

    const positions = [
        "General Manager",
        "Asst. Sales Manager",
        "Asst. Sales Manager",
        "Senior Sales Officer",
        "Senior Sales Officer",
        "Senior Sales Officer",
        "Senior Sales Officer",
        "Senior Sales Officer",
        "Senior Sales Officer",
        // Add more positions as needed
    ];

    // Function to open Facebook with user ID
    const openFacebook = (userId) => {
        window.open(`https://www.facebook.com/${userId}`, '_blank');
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {Array.from({ length: images.length }).map((_, index) => (
                <div key={index} className="card w-full sm:w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={images[index]} alt={titles[index]} className="rounded-xl" style={{ width: "100%", height: "auto" }} />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{titles[index]}</h2>
                        <p>{positions[index]}</p>
                        <div className="card-actions">
                            {/* Facebook button with onClick event */}
                            <button className="btn btn-primary" onClick={() => openFacebook(titles[index].replace(" ", ""))}>Facebook</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Leader;
