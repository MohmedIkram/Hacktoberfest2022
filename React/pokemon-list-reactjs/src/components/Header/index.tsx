import React from 'react'
import './styles.css';

interface PropsHeader {
  title: string
}

const Header: React.FC<PropsHeader> = (props) => {
  return (
    <div className="header-elements">
      <strong className="headerStrong">{props.title}</strong>
    </div>
  );
}

export default Header;