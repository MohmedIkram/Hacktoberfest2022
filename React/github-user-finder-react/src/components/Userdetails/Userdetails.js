import { useState } from "react";
import { BiBookBookmark } from "react-icons/bi";
import { IoPeople } from "react-icons/io5";
import Followerlist from "../Followers/Followerlist";
import Reposlist from "../Repos/Reposlist";
import "./Userdetails.css";

export default function Userdetails({ data }) {
  const [button, setButton] = useState({
    repos: true,
    followers: false,
    following: false,
  });

  const handleClick = (type) => {
    if (type === "repos") {
      setButton({
        repos: true,
        followers: false,
        following: false,
      });
    } else if (type === "followers") {
      setButton({
        repos: false,
        followers: true,
        following: false,
      });
    } else {
      setButton({
        repos: false,
        followers: false,
        following: true,
      });
    }
  };

  return (
    <div className="user-details">
      <div className="button-container">
        <button onClick={() => handleClick("repos")} className={`${button.repos && 'active'}`}>
          <BiBookBookmark className="btn-icon " />
          Repositories <span>{data.public_repos}</span>
        </button>
        <button onClick={() => handleClick("followers")}  className={`${button.followers && 'active'}`}>
          <IoPeople className="btn-icon" /> Followers{" "}
          <span>{data.followers}</span>
        </button>
        <button onClick={() => handleClick("following")}  className={`${button.following && 'active'}`}>
          <IoPeople className="btn-icon" /> Following{" "}
          <span>{data.following}</span>
        </button>
      </div>
      <div className="button-details-container">
        {button.repos && <Reposlist username={data.login} />}
        {button.followers && (
          <Followerlist username={data.login} type={"followers"} />
        )}
        {button.following && (
          <Followerlist username={data.login} type={"followings"} />
        )}
      </div>
    </div>
  );
}
