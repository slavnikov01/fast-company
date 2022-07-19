import React from "react";
import Qualitie from "./qualitie";
import BookMark from "./bookmark";

const User = (props) => {
  return (
    <tr key={props._id}>
      <td>{props.name}</td>
      <td>
        {props.qualities.map((qualitie) => (
          <Qualitie
            key={qualitie._id}
            color={qualitie.color}
            name={qualitie.name}
          />
        ))}
      </td>
      <td>{props.profession.name}</td>
      <td>{props.completedMeetings}</td>
      <td>{props.rate} /5</td>
      <td>
        <BookMark
          key={props._id}
          _id={props._id}
          onHandleToggleBookMark={props.onHandleToggleBookMark}
        />
      </td>
      <td>
        <button
          onClick={() => props.onDelete(props._id)}
          className="btn btn-danger"
        >
          delete
        </button>
      </td>
    </tr>
  );
};

export default User;
