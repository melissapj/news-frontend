function User({ currentUser }) {
  //console.log(currentUser)
  return (
    <h2 className="header">
      {currentUser
        ? `You are logged in as ${currentUser.username}`
        : "You are not logged in"}
    </h2>
  );
}

export default User;