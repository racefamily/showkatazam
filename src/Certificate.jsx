import React from 'react';

const Certificates = () => {
    const imageSources = [
        "https://imgur.com/k30n2mb.jpg", // Portrait
        "https://imgur.com/bUdwDXE.jpg",
        "https://imgur.com/Iz4nKbN.jpg",
        "https://imgur.com/Q70vgbm.jpg",
        "https://imgur.com/4A2OnFI.jpg",
    ];

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold text-center mb-8"> CEO Certificates</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Portrait image on the left */}
                <div className="md:col-span-1 flex justify-center">
                    <div className="p-4 bg-gray-100 rounded-lg shadow-md text-center">
                        <img src={imageSources[0]} alt={`Certificate 1`} className="w-full h-auto object-cover portrait-image mt-10" />
                    </div>
                </div>
                {/* Landscape images on the right */}
                <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {imageSources.slice(1).map((src, index) => (
                        <div key={index + 1} className="p-4 bg-gray-100 rounded-lg shadow-md text-center">
                            <img src={src} alt={`Certificate ${index + 2}`} className="w-full h-auto object-cover landscape-image" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Certificates;
