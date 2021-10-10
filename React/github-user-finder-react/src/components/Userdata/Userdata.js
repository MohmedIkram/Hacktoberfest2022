import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { IoPeople, IoLocation } from "react-icons/io5";
import {BiBuildings} from 'react-icons/bi';
import "./Userdata.css";
import Userdetails from "../Userdetails/Userdetails";
import { Link } from "react-router-dom";

export default function Userdata() {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const res = await fetch(`https://api.github.com/users/${id}`);
      const data = await res.json();
      setUserData(data);
      setLoading(false);
    };

    getData();
  }, [id]);

  if (loading) return <div id='loader'></div>

  return (
    <article>
      <div className="goback-container">
        <Link className='visit-btn' to='/'> Search again</Link>
      </div>
      <div className="container">
        <div className="user-profile">
          <div className="user-header">
            <img src={userData.avatar_url} alt="" />
            <div className="user-name">
              <h1>{userData.name}</h1>
              <p>@{userData.login}</p>
            </div>
          </div>
          <div className="user-body">
            <p>{userData.bio}</p>
            <p>
              <IoPeople /> {userData.followers} followers | {userData.following}{" "}
              following
            </p>
            <div className="location">
                {userData.company && <p><BiBuildings /> {userData.company}</p>}
                {userData.location && <p><IoLocation /> {userData.location}</p>}
            </div>
          </div>
        </div>
        <div className="user-details-container">
            <Userdetails data={userData} />
        </div>
      </div>
    </article>
  );
}
