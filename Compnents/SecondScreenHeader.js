import React from 'react';
import { Navbar, NavLink,Link } from 'reactstrap';
import { ArrowBack, Search, Eco } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';


const SecondScreenHeader = () => {





    return (
        < div >
            <Navbar color="dark" light  >
              <NavLink href='/screen1' >
                <IconButton >
                    <ArrowBack className="text-white"/>
                </IconButton>
              </NavLink  >

                <NavLink  >
                    <h4 className="text-white" >Student Details</h4>
                </NavLink>
                <IconButton >
                    <Search className="text-white" />
                </IconButton>
            </Navbar>
            <Navbar color="light" light >
                <div className="container ">
                    <div className="row">
                        <div className="col-4">
                            <Eco fontSize="large"/>
                        </div>
                        <div className="col-8">
                            <h5>Science</h5>
                            <h6>Homework </h6>
                        </div>
                    </div>
                </div>
            </Navbar>

        </div >
    );
}
export default SecondScreenHeader;
