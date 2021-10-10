import React from 'react';
import PostAddIcon from '@material-ui/icons/PostAdd';
const Header=()=>{
    return (
        <nav>
            <h2>R Keeps</h2>
            <PostAddIcon style={{fontSize:'5rem' }}/>
            <a href='https://ishubhamrana.github.io/index.html' target='_blank'>
            <img src='src\Capture.PNG' alt='Developer' />
            </a>

        </nav>
    );
}
export default Header;