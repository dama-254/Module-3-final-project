
function Navbar() {
  return (
    <div className="bg-white shadow-md p-4 flex justify-between items-center">
      
      <h2 className="text-xl font-semibold text-gray-700">
        Poultry Farm Management System
      </h2>

      <div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
          Admin
        </button>
      </div>

    </div>
  );
}

export default Navbar;