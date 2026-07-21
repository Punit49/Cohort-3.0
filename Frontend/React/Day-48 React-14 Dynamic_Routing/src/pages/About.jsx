const About = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-100 p-6">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg overflow-hidden md:flex">
        {/* Left Side */}
        <div className="md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1521334884684-d80222895322?w=800"
            alt="Shopping"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 p-8 flex flex-col justify-center">
          <span className="text-indigo-600 font-semibold uppercase text-sm">
            About Us
          </span>

          <h1 className="text-4xl font-bold mt-2 mb-4">
            Welcome to ShopEase
          </h1>

          <p className="text-gray-600 leading-7 mb-6">
            ShopEase is a simple online shopping platform where you can explore
            quality products across different categories. Our goal is to make
            online shopping easy, fast, and enjoyable for everyone.
          </p>

          {/* Stats */}
          <div className="flex gap-8 mb-6">
            <div>
              <h2 className="text-2xl font-bold text-indigo-600">500+</h2>
              <p className="text-gray-500 text-sm">Products</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-indigo-600">10K+</h2>
              <p className="text-gray-500 text-sm">Customers</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-indigo-600">4.8★</h2>
              <p className="text-gray-500 text-sm">Rating</p>
            </div>
          </div>

          <button className="w-fit bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition">
            Explore Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;