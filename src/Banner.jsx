const Banner = () => {
  return (
    <div
      className="hero min-h-screen w-full bg-contain bg-center bg-no-repeat md:bg-cover py-10 sm:py-0"
      style={{ backgroundImage: `url('https://imgur.com/Fiodk6X.jpg')` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-full sm:max-w-md">
        </div>
      </div>
    </div>
  );
};

export default Banner;