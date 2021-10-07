import React from 'react';
import Repository from './Repository';

const Repositories = ({ repositoriesData, loadingRepositories }) => {
    return (
        <div className="repositories">  
            { repositoriesData && !loadingRepositories ? (
                repositoriesData.map((repository, idx)=> <Repository repo={repository} key={`${repository.name}${idx}`}/>)
            ) : (
                <div className="loader">
                    <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                </div>
            )}            
        </div>
    );
}

export default Repositories;
