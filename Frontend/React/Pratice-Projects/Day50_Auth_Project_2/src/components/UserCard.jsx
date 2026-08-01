export default function UserCard({ user }) {

  return (
    <div className="w-full max-w-sm rounded-2xl bg-white shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 h-24"></div>

      <div className="px-6 pb-6">
        <div className="flex justify-center">
          <img
            src={`https://ui-avatars.com/api/?name=${user.name.firstname}+${user.name.lastname}&background=2563eb&color=fff&size=128`}
            alt="User Avatar"
            className="w-24 h-24 rounded-full border-4 border-white -mt-12"
          />
        </div>

        <h2 className="mt-4 text-center text-2xl font-bold text-gray-800 capitalize">
          {user.name.firstname} {user.name.lastname}
        </h2>

        <p className="text-center text-gray-500">@{user.username}</p>

        <div className="mt-6 space-y-4 text-sm">
          <div className="flex justify-between">
            <span className="font-medium text-gray-500">Email</span>
            <span className="text-gray-700">{user.email}</span>
          </div>

          <div className="flex justify-between">
            <span className="font-medium text-gray-500">Phone</span>
            <span className="text-gray-700">{user.phone}</span>
          </div>

          <div className="flex justify-between">
            <span className="font-medium text-gray-500">City</span>
            <span className="text-gray-700 capitalize">
              {user.address.city}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="font-medium text-gray-500">Street</span>
            <span className="text-gray-700 capitalize">
              {user.address.number}, {user.address.street}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="font-medium text-gray-500">Zip Code</span>
            <span className="text-gray-700">
              {user.address.zipcode}
            </span>
          </div>
        </div>

        <button className="mt-6 w-full rounded-lg bg-blue-600 py-3 font-medium text-white hover:bg-blue-700 transition">
          View Profile
        </button>
      </div>
    </div>
  );
}