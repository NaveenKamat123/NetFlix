import React, { useEffect } from 'react'
import "./Footer.scss"
import {Link} from "react-router-dom"

export default function Footer() {
    useEffect(()=>{

        
    })
  return (
    <>
    <div className="footer">
       
        <ul>
            <li><Link>FAQ</Link></li>
            <li><Link>Help Centre</Link></li>
            <li><Link>Account</Link></li>
            <li><Link>Media Centre</Link></li>
            <li><select name="langguage" id="language">
         
                  <option value="">English</option>
                  <option value="">Hindi</option>
                  <option value="">Telegu</option>
                  <option value="">Malayali</option>
                
                
                
                </select></li>
        </ul>
        <ul>
            <li><Link>Investor Relation</Link></li>
            <li><Link>Jobs</Link></li>
            <li><Link>Ways to Watch</Link></li>
            <li><Link>Term of Use</Link></li>
        </ul>
        <ul>
            <li><Link>Privacy</Link></li>
            <li><Link>Cookie Preferences</Link></li>
            <li><Link>Corporate Information</Link></li>
            <li><Link>Contact Us</Link></li>
        </ul>
       
        <ul>
            <li><Link>Speed Test</Link></li>
            <li><Link>Cookie Preferences</Link></li>
            <li><Link>Legal Notices</Link></li>
            
        </ul>
       
       
      
    </div>
    
      
    </>
  )
}
