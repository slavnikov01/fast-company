import React from "react";

const BookMark = (props) => {
  return (
    <i
      className={"bi bi-bookmark-" + props.onHandleToggleBookMark()}
      onClick={() => props.onHandleToggleBookMark(props._id)}
    ></i>
  );
};

export default BookMark;
