import React from "react";

const GitHub = props => {
  console.log(props);

  return (
    <>
      <h2>User info</h2>
      <div></div>
      {props.user.fullName && <span> {props.user.fullName}</span>}

      {props.user.avatar_url && <img src={props.user.avatar_url} />}
      {props.user.html_url && (
        <a href={props.user.html_url}>{props.user.username}</a>
      )}
      {props.user.bio && <span> {props.user.bio} </span>}
      {props.user.location && <span> {props.user.location} </span>}
      {props.user.error && <span>{props.user.error}</span>}

      {props.getUserRepo &&
        Object.keys(props.getUserRepo).map(key => (
          <>
            <span key={props.getUserRepo[key].id}>
              <p>{props.getUserRepo[key].name}</p>
              <p>{props.getUserRepo[key].language}</p>
              {console.log(props.getUserRepo[key].name)}
            </span>
          </>
        ))}
    </>
  );
};

export default GitHub;
