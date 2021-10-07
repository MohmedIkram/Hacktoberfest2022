import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

const Header = ({ repoNumber, name, avatarUrl }) => {
    const navbarSticky = useRef(null);
    const searchLinksSmallFlex = useRef(null);

    const showMenu = () => {
        const menu = searchLinksSmallFlex.current;
        menu.classList.toggle('shown');
        menu.style.maxHeight = menu.style.maxHeight ? null : `${menu.scrollHeight}px`;
    };

    return (
        <header id="header">
            <nav id="nav1">
                <div className="hamburger small-flex" onClick={showMenu}>
                    <svg viewBox="0 0 16 16" version="1.1" width="24" aria-hidden="true"><path fillRule="evenodd" d="M1 2.75A.75.75 0 011.75 2h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 2.75zm0 5A.75.75 0 011.75 7h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 7.75zM1.75 12a.75.75 0 100 1.5h12.5a.75.75 0 100-1.5H1.75z"></path></svg>
                </div>

                <div className="logo">
                    <Link to="/">
                        <svg className="github" height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
                    </Link>
                </div>

                <div className="search-links small-none">
                    <div aria-expanded="false">
                        <div className="input">
                            <form>
                                <label htmlFor="search">
                                    <input type="text" name="search" id="search" placeholder="Search or jump to…" autoCapitalize="off" spellCheck="false" autoComplete="off" />
                                    <img src="https://github.githubassets.com/images/search-key-slash.svg" alt="" className="search-slash" />
                                </label>
                            </form>
                        </div>
                    </div>

                    <ul>
                        <li>
                            <Link to="##">Pull<span className="show">s</span> <span className="none">&nbsp;requests</span></Link>
                        </li>
                        <li>
                            <Link to="##">Issues</Link>
                        </li>
                        <li>
                            <Link to="##">Marketplace</Link>
                        </li>
                        <li>
                            <Link to="##">Explore</Link>
                        </li>
                    </ul>
                </div>

                <div className="other-links">
                    <ul>
                        <li>
                            <Link to="##"><i className="far fa-bell bigger"></i></Link>
                        </li>
                        <li className="small-none">
                            <Link to="##" className="bigger">
                                <i className="fas fa-plus"></i>
                                <span className="dropdown">
                                    <i className="fas fa-caret-down"></i>
                                </span>
                            </Link>
                        </li>
                        <li className="small-none username">
                            <Link to="##">
                                <img src={avatarUrl} alt="account-avatar" />
                                <span className="dropdown">
                                    <i className="fas fa-caret-down"></i>
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="search-links small-flex" ref={searchLinksSmallFlex}>
                <div aria-expanded="false">
                    <div className="input">
                        <form>
                            <label htmlFor="search">
                                <input type="text" name="search" id="search" placeholder="Search or jump to…" autoCapitalize="off" spellCheck="false" autoComplete="off" />
                                <img src="https://github.githubassets.com/images/search-key-slash.svg" alt="" className="search-slash" />
                            </label>
                        </form>
                    </div>
                </div>
                <ul>
                    <li className="small-screen">
                        <Link to="##">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="##">Pull requests</Link>
                    </li>
                    <li>
                        <Link to="##">Issues</Link>
                    </li>
                    <li>
                        <Link to="##">Marketplace</Link>
                    </li>
                    <li>
                        <Link to="##">Explore</Link>
                    </li>
                    <li className="small-screen username">
                        <div>
                            <img src={avatarUrl} alt="icon" />
                            <Link to="##">{name}</Link>
                        </div>
                    </li>
                    <li className="small-screen sign-out">
                        <svg viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fillRule="evenodd" d="M2 2.75C2 1.784 2.784 1 3.75 1h2.5a.75.75 0 010 1.5h-2.5a.25.25 0 00-.25.25v10.5c0 .138.112.25.25.25h2.5a.75.75 0 010 1.5h-2.5A1.75 1.75 0 012 13.25V2.75zm10.44 4.5H6.75a.75.75 0 000 1.5h5.69l-1.97 1.97a.75.75 0 101.06 1.06l3.25-3.25a.75.75 0 000-1.06l-3.25-3.25a.75.75 0 10-1.06 1.06l1.97 1.97z"></path></svg>
                        <Link to="##">Sign Out</Link>
                    </li>
                </ul>
            </div>

            <nav id="nav2" className="small-none" ref={navbarSticky}>
                <div className="account-username">
                    <img src={avatarUrl} alt="" />
                    <Link to="##">{name}</Link>
                </div>
                <div className="repo-links">
                    <ul>
                        <li>
                            <Link to="##">
                                <svg height="16" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fillRule="evenodd" d="M0 1.75A.75.75 0 01.75 1h4.253c1.227 0 2.317.59 3 1.501A3.744 3.744 0 0111.006 1h4.245a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75h-4.507a2.25 2.25 0 00-1.591.659l-.622.621a.75.75 0 01-1.06 0l-.622-.621A2.25 2.25 0 005.258 13H.75a.75.75 0 01-.75-.75V1.75zm8.755 3a2.25 2.25 0 012.25-2.25H14.5v9h-3.757c-.71 0-1.4.201-1.992.572l.004-7.322zm-1.504 7.324l.004-5.073-.002-2.253A2.25 2.25 0 005.003 2.5H1.5v9h3.757a3.75 3.75 0 011.994.574z"></path></svg>
                                <span>Overview</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="##" className="active">
                                <svg height="16" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fillRule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path></svg>
                                <span>Repositories</span>
                                <span className="repo-number">{repoNumber ? repoNumber :'...'}</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="##">
                                <svg height="16" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fillRule="evenodd" d="M1.75 0A1.75 1.75 0 000 1.75v12.5C0 15.216.784 16 1.75 16h12.5A1.75 1.75 0 0016 14.25V1.75A1.75 1.75 0 0014.25 0H1.75zM1.5 1.75a.25.25 0 01.25-.25h12.5a.25.25 0 01.25.25v12.5a.25.25 0 01-.25.25H1.75a.25.25 0 01-.25-.25V1.75zM11.75 3a.75.75 0 00-.75.75v7.5a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75zm-8.25.75a.75.75 0 011.5 0v5.5a.75.75 0 01-1.5 0v-5.5zM8 3a.75.75 0 00-.75.75v3.5a.75.75 0 001.5 0v-3.5A.75.75 0 008 3z"></path></svg>
                                <span>Projects</span> 
                            </Link>
                        </li>
                        <li>
                            <Link to="##">
                                <svg height="16" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fillRule="evenodd" d="M8.878.392a1.75 1.75 0 00-1.756 0l-5.25 3.045A1.75 1.75 0 001 4.951v6.098c0 .624.332 1.2.872 1.514l5.25 3.045a1.75 1.75 0 001.756 0l5.25-3.045c.54-.313.872-.89.872-1.514V4.951c0-.624-.332-1.2-.872-1.514L8.878.392zM7.875 1.69a.25.25 0 01.25 0l4.63 2.685L8 7.133 3.245 4.375l4.63-2.685zM2.5 5.677v5.372c0 .09.047.171.125.216l4.625 2.683V8.432L2.5 5.677zm6.25 8.271l4.625-2.683a.25.25 0 00.125-.216V5.677L8.75 8.432v5.516z"></path></svg>
                                <span>Packages</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;
