import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoLocation } from "react-icons/io5";
import "./Followerlist.css";

export default function Follower({ follower }) {
  const [loading, setLoading] = useState(true);
  const [followerDetails, setFollowerDetails] = useState({});

  useEffect(() => {
    const getFollowerDetails = async () => {
      setLoading(true);
      const res = await fetch(`https://api.github.com/users/${follower.login}`);
      const data = await res.json();
      setFollowerDetails(data);
      setLoading(false);
    };

    getFollowerDetails();
  }, [follower.login]);

  const onVisit = () => {
      window.open(followerDetails.html_url, '_blank')
  }

  if (loading) return <div id='loader'></div>

  return (
    <div className="reposlist">
      <div className="repos-name follower-name">
        <div className="follower-image-container">
          <img src={followerDetails.avatar_url} alt="" />
        </div>
        <div className="follower-details">
          <Link to={`/user/${followerDetails.login}`}>
            {followerDetails.name} <span>{followerDetails.login}</span>
          </Link>
          {followerDetails.bio && <p>{followerDetails.bio}</p>}
          {followerDetails.location && (
            <p>
              {" "}
              <IoLocation /> {followerDetails.location}
            </p>
          )}
        </div>
      </div>
      <div className="repos-star">
        <button className="visit-btn" onClick={onVisit}>
            Visit
        </button>
      </div>
    </div>
  );
}
