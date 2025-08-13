import { useState } from "react";
import deleterequest from '../../utils/deleterequest'

function Deleter({ comment_id, setComments }) {




  function handleClick() {
    deleterequest(comment_id)
      .then(() => {
        setComments(curr => curr.filter(c => c.comment_id !== comment_id));
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <div>
    <button className="delete-button"onClick={handleClick}>
      Delete Comment
    </button>
    </div>
  );
}

export default Deleter;