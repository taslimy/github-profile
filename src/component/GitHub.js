import React from "react";
import { Doughnut } from "react-chartjs-2";

// import { uniqueOccurrences } from "../util/index";

const GitHub = props => {
  console.log(props);

  let arr = [];
  let label = [];
  let thenums = [];

  function uniqueOccurrences(arr) {
    let hash = {};
    arr.forEach(num => (hash[num] = (hash[num] || 0) + 1));
    console.log("HASH", hash);
    // const val = Object.values(hash).sort((a, b) => a - b);

    return true && hash;
  }

  let data = {
    labels: thenums,
    datasets: [
      {
        data: label,
        backgroundColor: [
          "green",
          "orange",
          "blue",
          "red",
          "yellow",
          "cyan",
          "purple",
          "black"
        ],
        hoverBackgroundColor: [
          "green",
          "orange",
          "blue",
          "red",
          "yellow",
          "cyan",
          "purple",
          "black"
        ]
      }
    ]
  };
  console.log("data label", data.labels, "data data", data.datasets.data);

  return (
    <>
      <h2>User info</h2>
      <div></div>
      {props.user.fullName && <span> {props.user.fullName}</span>}
      {props.user.avatar_url && <img src={props.user.avatar_url} />}
      {props.user.html_url && (
        <a href={props.user.html_url}>{props.user.username}</a>
      )}
      {}
      {props.user.bio && <span> {props.user.bio} </span>}
      {props.user.location && <span> {props.user.location} </span>}
      {props.user.error && <span>{props.user.error}</span>}
      {Object.keys(props.getUserRepo).map(key => (
        <>{arr.push(props.getUserRepo[key].language)}</>
      ))}
      {/* {label.push(Object.keys(uniqueOccurrences(arr)))} 
      {thenums.push(Object.keys(uniqueOccurrences(arr)))} */}
      {label.push(Object.keys(uniqueOccurrences(arr))) &&
        thenums.push(Object.keys(uniqueOccurrences(arr)))}
      {console.log("label", Object.keys(uniqueOccurrences(arr)))}
      {console.log("thenums", Object.values(uniqueOccurrences(arr)))}
      {console.log(uniqueOccurrences(arr))}
      <Doughnut data={data} />
    </>
  );
};

export default GitHub;
