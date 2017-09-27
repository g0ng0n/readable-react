import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal'
import Loading from 'react-loading'

import Header from './components/Header';
import './App.css';

// styles in-component - pay attention to the syntax
const styles = {
    textAlign: 'center',
    margin: 0,
    padding: 0,
    fontFamily: 'sans-serif',
};

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            backend: 'backend-data'
        }
    }

    componentDidMount() {
        const url = `${process.env.REACT_APP_BACKEND}/categories`;
        console.log('fetching from url', url);
        fetch(url, { headers: { 'Authorization': 'whatever-you-want' },
            credentials: 'include' } )
            .then( (res) => { return(res.text()) })
            .then((data) => {
                this.setState({backend:data});
            });
    }


  render() {
    return (
        <div style={styles}>
            <Header name={"Readable"}/>

        </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
    return {
        posts: state.posts
    }
};

function mapDispatchToProps (dispatch) {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
