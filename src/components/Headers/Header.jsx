import React from 'react'
import logo from "../../assets/netflix.jpeg"
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import "./Header.scss"

export default function na() {
    return (
        <nav className='header'>
           <img src={logo} alt="logo" />
            <div >
                <Link to="/">Home</Link>
                <Link >Tv Shows</Link>
                <Link>Movies</Link>
                <Link>Originals</Link>
                <Link>Recently Added</Link>
                <Link>My List</Link>
                   
          
  
            </div>
             <input type="text" placeholder='Search' />
            <SearchIcon />
            <NotificationsNoneIcon/>

        </nav>
    )
}
