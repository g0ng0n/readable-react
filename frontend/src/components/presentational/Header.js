import React from 'react';

const Header = (props) => {
    return(
        <nav>
            <div class="nav-wrapper">
                <a href="#!" class="brand-logo center">{props.name}</a>
                <ul class="left hide-on-med-and-down">
                   <li class="active"><a href="collapsible.html">JavaScript</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;