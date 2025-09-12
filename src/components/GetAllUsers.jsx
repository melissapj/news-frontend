import { useState, useEffect } from "react";
import ErrorPage from "./ErrorPage";
import { Link } from "react-router-dom";
import ShowAllUsers from "./ShowAllUsers";

function GetAllUsers({ onUserSelect }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://northcoders-news-backend-1.onrender.com/api/users")
      .then((res) => {
        if (!res.ok) throw new Error("Something went wrong. Please try again.");
        return res.json();
      })
      .then((data) => {
        setUsers(data.users);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="loader">Loading users...</p>;
  if (error) return <ErrorPage message={error} />;

   return (
    <div>
      <div className="link-container">
        <Link to="/">← Back to all articles</Link>
      </div>
      <h2 className="header">All Users</h2>
      
      <div>
        <h3 className="header">Click on user to log in</h3>
      </div>
      <div className="users-wrapper">
      
        <div className="users-container">
         
          {users.map((user) => (
            <div
              key={user.username}
              onClick={() => onUserSelect(user)} 
              style={{ cursor: "pointer" }}
            >
              <ShowAllUsers user={user} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GetAllUsers;