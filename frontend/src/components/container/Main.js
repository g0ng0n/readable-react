import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Posts from './Posts'
import Categories from './Categories'

class Main extends Component {


    render(){

        return(
            <div className="row">
                <Categories />
                <Posts />
            </div>
        )
    }
}

export default Main;
