import { useEffect, useState } from "react"
import Repos from "./Repos";


export default function Reposlist({username}) {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getRepos = async () => {
            setLoading(true);
            const res = await fetch(`https://api.github.com/users/${username}/repos`);
            const data = await res.json();
            setRepos(data);
            setLoading(false);
        };

        getRepos();
    }, [username]);

    const reposFunction = () => {
        if(repos.length === 0) {
            return <h1>No Repositories Found!</h1>
        } else {
            return repos.map((item,index) => {
                return <Repos key={index} repos={item} />
            });
        }
    }

    if(loading) return <div id='loader'></div>

    return (
        <div className="reposlist-container">
            {reposFunction()}
        </div>
    )
}
