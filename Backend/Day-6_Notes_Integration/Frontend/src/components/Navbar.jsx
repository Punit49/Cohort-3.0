const Navbar = ({setIsFormVisible}) => {
  return (
    <nav className="border-b border-gray-200 bg-[#1b0d41] text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        
        <div>
          <h1 className="text-xl font-bold ">
            Make Notes
          </h1>
          <p className="hidden text-sm  sm:block">
            Keep your thoughts organized
          </p>
        </div>

        <button className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-800" onClick={() => setIsFormVisible(true)}>
          + Add Note
        </button>

      </div>
    </nav>
  );
};

export default Navbar;