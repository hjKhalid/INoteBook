import React from 'react'
import TurnedInIcon from '@mui/icons-material/TurnedIn';

export const Navbar = () => {
    return (
        <div><nav className="navbar navbar-light bg-warning">
        <div className="container-fluid">
          <a className="navbar-brand" href="/" style={{fontWeight:'bold',color:'grey'}}>
            {/* <img src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" className="d-inline-block align-text-top mx-2"/> */}
            <TurnedInIcon/>
            INoteBook
          </a>
        </div>
      </nav>
           
        </div>
    )
}
