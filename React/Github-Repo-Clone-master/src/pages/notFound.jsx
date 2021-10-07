import React from 'react'
import { Redirect } from 'react-router'

function NotFound() {
    return (
        <div className='not-found'>
            <Redirect to='/'/>
        </div>
    )
};

export default NotFound
