import {CgSearch} from 'react-icons/cg';

import './Home.css';
import { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router';

export default function Home() {
    const history = useHistory();
    const [show, setShow] = useState(false);
    const inputRef = useRef();
    const buttonRef = useRef();

    const handleClick = async e => {
        e.preventDefault();
        buttonRef.current.disabled = true;
        const res = await fetch(`https://api.github.com/users/${inputRef.current.value}`);
        const data = await res.json();
        console.log(data);
        buttonRef.current.disabled = false;
        if(data.message === 'Not Found') {
            setShow(true);
        } else {
            history.push(`/user/${data.login}`);
        }
    }

    useEffect(() => {
        if(show) {
            const timeoutID = setTimeout(() => {
                setShow(false);
            }, 1000);
            return () => {clearInterval(timeoutID)};
        }
    }, [show])

    return (
        <header>
            <div className="logo">
            <h1>devfinder</h1>
            </div>
            <form onSubmit={handleClick}>
                <CgSearch className='search-icon' />
                <input type="text" placeholder='Search Github Username...' ref={inputRef} />
                <button type="submit" ref={buttonRef}>Search</button>
            </form>
            <p className={`alert ${show && 'alert-show'}`}>
                User not found!
            </p>
        </header>
    )
}
