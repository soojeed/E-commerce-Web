const Banner = () => {
  return (
    <div className="container mx-auto pt-16">
      <div className="grid sm:grid-cols-2 gap-4 sm:gap-8">
        
        {/* Banner 1 */}
        <div className="relative overflow-hidden rounded-2xl group">
          <img
            src="https://images.unsplash.com/photo-1610832958506-aa56368176cf"
            alt="Fresh Fruits"
            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
          />

          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center p-6 text-white">
            <h2 className="text-2xl md:text-3xl font-bold">
              Fresh Fruits
            </h2>
            <p className="mt-2 text-sm md:text-base">
              Get up to 30% off on seasonal fruits
            </p>
            <button className="mt-4 bg-green-500 hover:bg-green-600 px-5 py-2 rounded-full w-fit text-sm font-semibold transition">
              Shop Now
            </button>
          </div>
        </div>

        {/* Banner 2 */}
        <div className="relative overflow-hidden rounded-2xl group">
          <img
            src="https://images.unsplash.com/photo-1509440159596-0249088772ff"
            alt="Bakery Items"
            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
          />

          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center p-6 text-white">
            <h2 className="text-2xl md:text-3xl font-bold">
              Bakery Specials
            </h2>
            <p className="mt-2 text-sm md:text-base">
              Fresh bread & cakes everyday
            </p>
            <button className="mt-4 bg-green-500 hover:bg-green-600 px-5 py-2 rounded-full w-fit text-sm font-semibold transition">
              Explore
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Banner;