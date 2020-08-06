import React from 'react';
import { Navbar,NavLink, NavbarBrand ,Alert} from 'reactstrap';
import { ArrowBack, Search } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';





const Header = (props) => {




    return (
        <div>

            <Navbar color= "dark"  light >

            <NavLink href='/screen2' >
              <IconButton >
                  <ArrowBack className="text-white"/>
              </IconButton>
            </NavLink  >
            <NavLink >
                <h6 className="text-white" >Create Homework (Science)</h6>
            </NavLink>
            <IconButton >
                <Search className="text-dark" />
            </IconButton>

            </Navbar>
        </div >
    );
}
export default Header;
