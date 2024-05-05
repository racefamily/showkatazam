const Sai = () => {
    const saifulImgurLink = "https://i.imgur.com/ZFWBM9i.jpg"; // Direct link to the image on Imgur
    const facebookURL = "https://www.facebook.com/bdsaifulsarkar/";

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse items-center">
                <img src={saifulImgurLink} alt="Race Family" className="max-w-sm rounded-lg shadow-2xl mb-4 lg:mb-0 lg:mr-8 mx-auto" />
                <div className="text-center lg:text-left ml-4 mr-20">
                    <h1 className="text-5xl text-fuchsia-600 font-bold">I am <br /> Saiful Islam.</h1>
                    <h1 className="text-2xl text-neutral-950 font-bold">CEO <br /> Harbour IT </h1>
                    <p className="py-6">
                        I have been working with digital marketing for 5 years.
                    </p>
                    <a href={facebookURL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Facebook</a>
                </div>
            </div>
        </div>
    );
};

export default Sai;
