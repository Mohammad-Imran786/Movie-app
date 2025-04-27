import Navbar from './Navbar';

const Header = () => {
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-start pt-28 md:pt-6 overflow-hidden px-4 text-center">
      
      {/* Background Image */}
      <img
        src="./hero-bg.png"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Navbar */}
      <Navbar />

      {/* Foreground Image */}
      <img
        src="./hero.png"
        alt="Hero Banner"
        className="relative w-2/3 md:w-1/2 lg:w-1/3 object-cover z-10"
      />

      {/* Heading */}
      <h2 className="relative text-3xl md:text-4xl lg:text-5xl text-white font-bold z-10">
        Watch{' '}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-pink-300 via-blue-300 via-purple-400 to-pink-400 inline-block animate-rainbow bg-[size:200%_auto]">
          Movies
        </span>{' '}
        You'll Enjoy Without the Hassle
      </h2>
      
    </div>
  );
};

export default Header;
