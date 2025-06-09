import { useEffect, useState } from "react";
const UserCard = () => {
  const [input, setInput] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handlesearch = async () => {
    if (!input.trim()) {
      setError(new Error("Username is required"));
      setUserData(null);
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://api.github.com/users/${input.trim()}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      // console.log(data);
      setUserData(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }
  if (error) {
    return (
      <div className="text-center mt-10 text-red-500">
        Error: {error.message}
      </div>
    );
  }
  return (
    <>
      <div className="flex justify-center items-center gap-4 mb-10">
        <input
          type="text"
          placeholder="Enter User-name"
          className="outline outline-gray-300 rounded-md p-2 w-[20rem] :focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out"
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-6 py-2 rounded-md"
          onClick={handlesearch}
        >
          Search
        </button>
      </div>

      <div className="flex justify-center items-center mt-10">
        <div className=" mx-auto rounded-lg w-[28rem] h-auto shadow-md flex justify-center items-center flex-col">
          <img
            src={userData?.avatar_url || "No profile picture available"}
            alt="profile"
            className="w-full h-full object-cover rounded-t-lg mb-4"
          />
          <div className="p-4 rounded-b-lg w-full ">
            <h2 className="flex items-center justify-center mb-4">
              <span className="text-lg font-bold text-gray-800">
                {userData?.name || "No name available"}
              </span>
              <span className="text-gray-500 text-sm ml-2">
                @{userData?.login || "No username available"}
              </span>
            </h2>
            <div className="flex mb-4 bg-gray-100 p-4 rounded-lg ">
              <span className="mx-auto">
                Followers: {userData?.followers || 0}
              </span>
              <span className="mx-auto">
                Following: {userData?.following || 0}
              </span>
            </div>
            <p className="text-gray-600 mb-2 text-center">
              <span className="font-bold">Bio:</span>{" "}
              {userData?.bio || "No bio available"}
            </p>
            <p className="text-gray-600 mb-4 text-center">
              {" "}
              <span className="font-bold">Repository:</span>{" "}
              {userData?.public_repos || "No repositories available"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default UserCard;
