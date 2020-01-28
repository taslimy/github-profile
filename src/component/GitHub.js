import React from "react";

const GitHub = props => {
  console.log(props);
  return (
    <>
      <h2>User info</h2>
      {props.user.username && <span> {props.user.username}</span>}
      {props.user.avatar_url && <img src={props.user.avatar_url} />}
      {props.user.html_url && (
        <a href={props.user.html_url}>
          Link
        </a>
      )}
      {props.user.name && <span> {props.user.name}</span>}
      {props.user.bio && <span> {props.user.bio} </span>}
      {props.user.location && <span> {props.user.location} </span>}
      {props.user.error && <span>{props.user.error}</span>}
    </>
  );
};

export default GitHub;
