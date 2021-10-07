import { useEffect, useState } from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Repositories from '../Components/Repositories';
import Profile from '../Components/Profile';
import FindRepo from '../Components/FindRepo';
import NavMobile from '../Components/NavMobile';
import { toggleNavSticky, toggleNavStickyMobile } from '../helpers/utils';
import { API_URL, queryOptions } from '../query/queryConfig';
import { useParams } from 'react-router';

function UserPage() {
    const { userLogin } = useParams();
    const [loadingRepositoryData, setLoadingRepositoryData] = useState(false);
    const [repoNumber, setRepoNumber] = useState(null);
    const [repositoriesData, setRepositoriesData] = useState(null);
    const [userProfileData, setUserProfileData] = useState(null);

    useEffect(() => {
        const getRepositoryData = async () => {
            const queryOptionsObject = queryOptions(userLogin);
            try {
              setLoadingRepositoryData(true);
              const response = await fetch(API_URL, queryOptionsObject);
              const fetchedData = await response.json();
              const reqData = fetchedData.data.user;
              const {
                repositories,
              } = reqData;
              
              setUserProfileData(reqData);
              setRepositoriesData(repositories.nodes);
              setRepoNumber(repositories.totalCount);
              setLoadingRepositoryData(false);
            } catch (err) {
                setLoadingRepositoryData(false);
                console.log(err.message);
            }
        };

        getRepositoryData();
        window.addEventListener('scroll', toggleNavSticky);
        window.addEventListener('scroll', toggleNavStickyMobile);
        return () => {
            window.removeEventListener('scroll', toggleNavSticky);
            window.removeEventListener('scroll', toggleNavStickyMobile);
            window.document.title = `View Repositories`
        };
    }, []);
    
    useEffect(() => {
        if(userProfileData){
            window.document.title = `${userProfileData.login} (${userProfileData.name}) / Repositories`
        }
    }, [userProfileData]);

    return (
        <div className='userPage'>
            {/* Header Section */}
            <Header repoNumber={repoNumber} name={userProfileData?.login} avatarUrl={userProfileData?.avatarUrl}/>

            <main id="main">
                <section className="left-up">  
                    {userProfileData && !loadingRepositoryData ? (
                        <Profile profileData={userProfileData}/>
                    ) : (
                        <div className="loader">
                            <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                        </div>
                    )}
                </section>
                
                <NavMobile repoNumber={repoNumber} name={userProfileData?.login} avatarUrl={userProfileData?.avatarUrl}/>

                <section className="right-down">
                    {/* Find Repo Section */}
                    <FindRepo />

                    {/* Repositories Section */}
                    <Repositories repositoriesData={repositoriesData} loadingRepositories={loadingRepositoryData}/>
                </section>
            </main>

            {/* Footer  Section */ }
            <Footer />
        </div>
    );
}

export default UserPage;
