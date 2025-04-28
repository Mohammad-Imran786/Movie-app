import Navbar from './Navbar';

const Hero = () => {

  return (
    <div className="relative flex flex-col items-center justify-start w-full h-screen pt-28 md:pt-6 overflow-hidden px-4 text-center">
      <Navbar />
      <img
        src="./hero-bg.png"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <img
        src="./hero.png"
        alt="Hero"
        className="relative z-10 w-2/3 md:w-1/2 lg:w-1/3 object-cover"
      />
      <h2 className="relative z-10 text-3xl md:text-4xl lg:text-5xl text-white font-bold mt-6">
        Watch{' '}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-pink-300 via-blue-300 via-purple-400 to-pink-400 inline-block animate-rainbow bg-[size:200%_auto]">
          Movies
        </span>{' '}
        You'll Enjoy Without the Hassle
      </h2>
    </div>
  )
};

export default Hero;
