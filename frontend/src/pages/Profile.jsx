const Profile = () => {
  const username = localStorage.getItem("username");

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Profile</h1>

      <div className="bg-white p-6 rounded-xl shadow">
        <p className="mb-2">
          <strong>Username:</strong> {username}
        </p>
      </div>
    </div>
  );
};

export default Profile;
