import { useEffect, useState } from "react";
import Follower from "./Follower";
import "./Followerlist.css";

export default function Followerlist({ username, type }) {
  const [loading, setLoading] = useState(true);
  const [followerList, setFollowerList] = useState([]);

  useEffect(() => {
    const getFollowers = async () => {
      setLoading(true);
      const res = await fetch(
        `https://api.github.com/users/${username}/${
          type === "followers" ? "followers" : "following"
        }`
      );
      const data = await res.json();
      setFollowerList(data);
      setLoading(false);
    };

    getFollowers();
  }, [username, type]);

  const followerListFunction = () => {
    if (type === "followers") {
      if (followerList.length === 0) {
        return <h1>User dont have any followers</h1>;
      } else {
        return followerList.map((item, index) => {
          return <Follower key={index} follower={item} />;
        });
      }
    } else {
      if (followerList.length === 0) {
        return <h1>User doesn't follow anyone</h1>;
      } else {
        return followerList.map((item, index) => {
          return <Follower key={index} follower={item} />;
        });
      }
    }
  };

  if (loading) return <div id="loader"></div>;

  return <div className="followerlist-container">{followerListFunction()}</div>;
}
