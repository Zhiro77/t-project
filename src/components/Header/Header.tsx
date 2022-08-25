import React from 'react'
import stl from './Header.module.css'
import {Link} from 'react-router-dom'

export function Header () {
    return (
        <div className={stl.header}>
           <nav className={stl.navbar}>
              <div >
              <Link  to={'/'}> Shop Content</Link>
              </div>
                <div>
                <Link to={'/create'}> Create Content</Link>
                </div>
           </nav>
        </div>
    )
}