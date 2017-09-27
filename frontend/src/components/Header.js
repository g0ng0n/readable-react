import React from 'react';

const Header = (props) => {
    return(
        <div className="navbar-fixed">
            <nav className="teal lighten-2">
                <div className="nav-wrapper">
                    <div className="brand-logo center"> <h2>{props.name}, Readable</h2> </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;