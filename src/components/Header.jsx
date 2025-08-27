import React from 'react'
import { BiDotsVertical } from 'react-icons/bi';
import { Link } from 'react-router-dom'


const Header = () => {
	return (
    <div className="headerContainer">
      <span>Logo</span>{' '}
      <span>
        <Link to="/reactions">Reactions </Link>
      </span>
      <span>
        <Link to="/entertainment">Entertainment </Link>
      </span>{' '}
      <span>
        <Link to="/sports">Sports </Link>
      </span>{' '}
      <span>
        <Link to="/stikers">Stikers </Link>
      </span>{' '}
      <span>
        <Link to="/reactions">
          <BiDotsVertical />
        </Link>
      </span>
    </div>
  );
}

export default Header
