import { useState } from "react";
import patchVotes from "../../utils/patchrequest";

function Voter({ votes, articleId }) {
  const [optimisticVotes, setOptimisticVotes] = useState(0);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null)

  const handleVote = (inc) => {
    setOptimisticVotes((curr) => {
      const newVotes = curr + inc;
      setMessage("You have added a vote!")
      return newVotes;
    });
    patchVotes(articleId, inc)
      .catch(() => {
        setOptimisticVotes((curr) => curr - inc); 
        setError("Failed to update vote");
      });
  };

  return (
    <div>
      <p>Votes: {votes + optimisticVotes}</p>
      {message && <p>{message}</p>}
      <button className="button" onClick={() => handleVote(1)}>+1 vote</button>
      <button className="button" onClick={() => handleVote(-1)}>-1 vote</button>
      {error && <p>{error}</p>}
    </div>
  );
}

export default Voter;
