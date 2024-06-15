import React from 'react';

const PreviousJobs = () => {
    const previousCompanies = [
        { name: "Anik Trading Corporation", position: "Sr. Manager", duration: "Jan 2008 - Dec 2012", logo: "https://imgur.com/gy1X81h.jpg" },
        { name: "Jeans Arrow Garments LTD", position: "HR. Officer", duration: "Apr 2012 - Aug 2014", logo: "https://imgur.com/3MWBV5p.jpg" },
        { name: "Apparel Promoters LTD", position: "IT Officer (Payroll)", duration: "Sep 2014 - Mar 2020", logo: "https://imgur.com/FxGflwq.jpg" },
        { name: "Race Family", position: "Coordinator", duration: "Jan 2018 - Present", logo: "https://imgur.com/FZH6ECa.png" },
        { name: "Top Star Fashion LTD", position: "HR. Officer", duration: "Jan 2022 - Mar 2022", logo: "https://imgur.com/DIdEJRW.jpg" },
        { name: "Harbour IT & Training Institute", position: "Instructor", duration: "Jan 2023 - Present", logo: "https://imgur.com/FRWpLdP.jpg" },
    ];

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold text-center mb-4">Previous Jobs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {previousCompanies.map((company, index) => (
                    <div key={index} className="p-4 bg-blue-200 rounded-lg shadow-md flex flex-col items-center justify-center">
                        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-4">
                            <img src={company.logo} alt={company.name} className="w-20 h-20 object-contain rounded-full" style={{ backgroundColor: '#FFFFFF' }} />
                        </div>
                        <h3 className="text-lg font-semibold">{company.name}</h3>
                        <p className="text-md text-gray-600">{company.position}</p>
                        <p className="text-sm text-gray-500">{company.duration}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PreviousJobs;