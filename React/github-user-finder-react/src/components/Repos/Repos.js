import {BiStar, BiGitRepoForked} from 'react-icons/bi';
import "./Reposlist.css";
export default function Repos({ repos }) {
  return (
    <div className="reposlist">
      <div className="repos-name">
        <a href={repos.html_url} target="_blank">{repos.name}</a>
        {repos.description && <p>{repos.description}</p>}
        {repos.language && <button>{repos.language}</button>}
      </div>
      <div className="repos-star">
        <p><BiStar /> Stars: {repos.stargazers_count}</p>
        <p><BiGitRepoForked /> Forks: {repos.forks}</p>
      </div>
    </div>
  );
}
