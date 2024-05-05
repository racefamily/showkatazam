import React from 'react';

const Leader = () => {
    // Define arrays of images, titles, positions, and facebook IDs
    const leaders = [
        {
            name: "Mehedi Hasan Hira",
            position: "General Manager",
            image: "https://imgur.com/Lwk3dOh.jpg",
            facebookId: "profile.php?id=100087167029370"
        },
        {
            name: "Sajal Islam Rabbi",
            position: "Asst. Sales Manager",
            image: "https://imgur.com/aCkQYlZ.jpg",
            facebookId: "sajalislamrabbi"
        },
        {
            name: "Asad Nadim",
            position: "Asst. Sales Manager",
            image: "https://imgur.com/YUZvIF4.jpg",
            facebookId: "nadim015"
        },
        {
            name: "Tajul Islam",
            position: "Senior Sales Officer",
            image: "https://imgur.com/hPdYQdJ.jpg",
            facebookId: "MdTajulIslam745"
        },
        {
            name: "MD. Zihad",
            position: "Senior Sales Officer",
            image: "https://imgur.com/5Dou4EM.jpg",
            facebookId: "azzihad.07"
        },
        {
            name: "Anika Khanam",
            position: "Senior Sales Officer",
            image: "https://imgur.com/jBymXbu.jpg",
            facebookId: "entrepreneuranika09"
        },
        {
            name: "Farhana Begum",
            position: "Senior Sales Officer",
            image: "https://imgur.com/Ks7EsQz.jpg",
            facebookId: "entrepreneuranika09"
        },
        {
            name: "Sakhawat Hossain",
            position: "Senior Sales Officer",
            image: "https://imgur.com/8Km40Py.jpg",
            facebookId: "Sakhawathossain6"
        }
        ,
        {
            name: "রোকাইয়া জাহান",
            position: "Senior Sales Officer",
            image: "https://imgur.com/16szPOK.jpg",
            facebookId: "Rukiajahan0"
        }
        // Add more leaders as needed
    ];

    // Function to generate Facebook link with user ID
    const generateFacebookLink = (facebookId) => {
        return `https://www.facebook.com/${facebookId}`;
    };

    // Function to open Facebook with user ID
    const openFacebook = (facebookId) => {
        window.open(generateFacebookLink(facebookId), '_blank');
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-violet-800 text-white sm:col-span-3 flex justify-center">
                <h1 className="text-5xl font-bold my-8">Our Team</h1>
            </div>
            {leaders.map((leader, index) => (
                <div key={index} className="card bg-base-200 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={leader.image} alt={leader.name} className="rounded-xl" style={{ width: "100%", height: "auto" }} />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{leader.name}</h2>
                        <p>{leader.position}</p>
                        <div className="card-actions">
                            {/* Facebook button with onClick event */}
                            <button className="btn btn-primary" onClick={() => openFacebook(leader.facebookId)}>Facebook</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Leader;
