import React from "react";

const UserCard = ({user, handleDelete, setIsFormVisible, setUpdatedUser}) => {

  return (
    <div className="bg-white rounded-xl w-70 shadow-lg overflow-hidden hover:shadow-xl transition">

      <img
        src={user.image}
        alt="user"
        className="w-full h-56 object-cover"
      />

      <div className="p-5">

        <h2 className="text-xl font-bold">
          {user.name}
        </h2>

        <p className="text-gray-600 mt-2">
          {user.email}
        </p>

        <p className="text-gray-600">
          {user.number}
        </p>

        <div className="flex gap-2">
          <button
            onClick={() => handleDelete(user.id)}
            className="w-full mt-4 bg-red-500 hover:bg-red-600 text-white font-medium py-2 rounded-lg transition"
          >
            Delete
          </button>
          
          <button
            onClick={() => {
              setIsFormVisible(true);
              setUpdatedUser(user);
            }}
            className="w-full mt-4 bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 rounded-lg transition"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;