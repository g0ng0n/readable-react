import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './components/presentational/Header';
import Main from './components/container/Main'
import Footer from './components/presentational/Footer'

class App extends Component {



  render() {
    return (
        <div className="container">
            <Header name={"Readable"}/>
            <Main />
            <Footer />
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
