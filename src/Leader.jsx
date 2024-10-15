import React from 'react';

const Leader = () => {
    const leaders = [
        { image: "https://imgur.com/qH0oawd.jpg" },
        { image: "https://imgur.com/C3ppyUR.jpg" },
        { image: "https://imgur.com/c9Tf0cE.jpg" },
        { image: "https://imgur.com/YUTFZFq.jpg" },
        { image: "https://imgur.com/ShYLCFv.jpg" },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-violet-800 text-white col-span-full flex justify-center">
                <h1 className="text-5xl font-bold my-8">Photos</h1>
            </div>
            {leaders.map((leader, index) => (
                <div key={index} className="card bg-base-200 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img 
                            src={leader.image} 
                            alt={`Leader ${index + 1}`} 
                            className="rounded-xl w-full h-auto object-cover" 
                            style={{ aspectRatio: '1 / 1' }} 
                        />
                    </figure>
                </div>
            ))}
        </div>
    );
};

export default Leader;