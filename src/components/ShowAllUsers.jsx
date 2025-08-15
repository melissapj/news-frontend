function ShowAllUsers({ user }) {
  return (
    <div className="user">
      <p>{user.username}</p>
      <p>{user.name}</p>
      {user.avatar_url && (
        <img
          src={user.avatar_url}
          alt={`Image for user: ${user.username}`}
          className="image"
        />
      )}
    </div>
  );
}

export default ShowAllUsers;
