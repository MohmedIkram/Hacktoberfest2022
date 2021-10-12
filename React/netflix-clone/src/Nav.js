import React, { useEffect, useState }from 'react'
import './Nav.css'
function Nav() {
    const [ show, handleShow ] = useState(false);
    useEffect(() => {
        window.addEventListener( "scroll", () => {
            if ( window.scrollY > 100 ) {
                handleShow( true )
            }
            else handleShow(false)
        })
        return () => { window.removeEventListener( "scroll" ) }
        
    }, [])

    return (
        <div className={ `nav ${show && "nav_black"}` }>
            <img
                className="nav_logo"
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                alt="Netflix"
            />
            <img
                className="profile_logo"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSw2Q6J1xM3k3xAbRpWhsI2KmzdgF_X4uU3lF_kBXqI6BLWrU0kOu0f1uNkanAH2E_iE8&usqp=CAU"/>
                
        </div>
    )
}

export default Nav
