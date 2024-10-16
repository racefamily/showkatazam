const Sai = () => {
    const saifulImgurLink = "https://imgur.com/QAeW7Fo.jpg"; // Direct link to the image on Imgur
    const facebookURL = "https://www.facebook.com/showkatazam0/";

    // Function to calculate the image width and height dynamically
    const calculateImageSize = () => {
        // Get the device's screen width
        const screenWidth = window.innerWidth;
        // Set the default width and height
        let width = 300; // Default width
        let height = 300; // Default height

        // Calculate the width and height based on the screen width
        if (screenWidth >= 1024) {
            width = 500;
            height = 500;
        } else if (screenWidth >= 768) {
            width = 400;
            height = 400;
        }

        // Return an object with the width and height
        return { width, height };
    };

    // Call the function to get the image size dynamically
    const { width, height } = calculateImageSize();

    return (
        <div className="hero min-h-screen bg-transparent">
            <div className="hero-content flex-col lg:flex-row-reverse items-center">
                <img src={saifulImgurLink} alt="Race Family" className={`rounded-lg shadow-2xl mb-4 lg:mb-0 lg:mr-8 mx-auto lg:ml-0 w-${width} h-${height}`} /> {/* Changed mx-auto to lg:ml-0 */}
                <div className="text-left lg:text-left ml-4 mr-20 lg:mr-0"> {/* Changed text-center to text-left */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl text-fuchsia-600 font-bold leading-tight">Showkat Azam</h1>
                    <h1 className="text-lg md:text-1xl lg:text-1xl mt-4 text-blue-500">
                        সাবেক যুগ্ম সম্পাদক : বাংলাদেশ জাতীয়তাবাদী ছাত্রদল, কেন্দ্রীয় কমিটি। <br />
                        সাবেক সহ-সভাপতি : বাংলাদেশ জাতীয়তাবাদী সেচ্ছাসেবক দল, চট্টগ্রাম বিভাগ। <br />
                        বাংলাদেশ জাতীয়তাবাদী দল (বিএনপি), চট্টগ্রাম মহানগর।
                        </h1>
                    <a href={facebookURL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Facebook</a>
                </div>
            </div>
        </div>
    );
};

export default Sai;
