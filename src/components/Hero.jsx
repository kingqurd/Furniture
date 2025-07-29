import BG from "../assets/images/BG.jpg"; // Adjust the path as necessary



const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${BG})` }}
      >
        <div className="absolute inset-0 bg-charcoal/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Welcome to
          <span className="block text-[#111827] italic">WRLD-WIDE FURNISH</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed italic">
             At WLRD-WIDE FURNISH, we believe that furniture is more than just
              a necessity – it's a reflection of your personality and style.
               Explore our website to discover a world of beautiful and
             functional furniture pieces, designed to bring joy and comfort to
             your home....
        </p>
        
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
