import React from 'react';

const Leader = () => {
    // Define arrays of images, titles, positions, and facebook IDs
    const leaders = [
        {
            name: "Mainul Islam",
            position: "01671601379",
            bg: "A+",
            image: "https://imgur.com/g7LtbEP.jpg",
            facebookId: "mynulislamsarkar"
        },
        {
            name: "Mehedi Hasan",
            position: "01902340064",
            bg: "A+",
            image: "https://imgur.com/Lwk3dOh.jpg",
            facebookId: "profile.php?id=100087167029370"
        },
        {
            name: "Irfan Irfu",
            position: "01671091877",
            bg: "A+",
            image: "https://imgur.com/GbwHyCb.jpg",
            facebookId: "irfan.irfu.948"
        },
        {
            name: "Rahad Mahmud",
            position: "01676576300",
            bg: "B+",
            image: "https://imgur.com/yDpK8An.jpg",
            facebookId: "kamrurshakir77"
        },
        {
            name: "Sajal Islam Rabbi",
            position: "01860874257",
            bg: "A+",
            image: "https://imgur.com/aCkQYlZ.jpg",
            facebookId: "sajalislamrabbi"
        },
        {
            name: "Asad Nadim",
            position: "01516173466",
            bg: "A+",
            image: "https://imgur.com/YUZvIF4.jpg",
            facebookId: "nadim015"
        }
        // Add more leaders as needed
    ];

    // Function to generate Facebook link with user ID
    const generateFacebookLink = (facebookId) => {
        return `https://www.facebook.com/${facebookId}`;
    };

    const openFacebook = (facebookId) => {
        window.open(generateFacebookLink(facebookId), '_blank');
    };

    return (
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="bg-violet-800 text-white col-span-full flex justify-center">
                <h1 className="text-5xl font-bold my-8">Our Team</h1>
            </div>
            {leaders.map((leader, index) => (
                <div key={index} className="card bg-base-200 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={leader.image} alt={leader.name} className="rounded-xl w-full h-auto" style={{ aspectRatio: '1 / 1' }} />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{leader.name}</h2>
                        <p>{leader.position}</p>
                        <p>{leader.bg}</p>
                        <div className="card-actions">
                            <button className="btn btn-primary" onClick={() => openFacebook(leader.facebookId)}>Facebook</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Leader;