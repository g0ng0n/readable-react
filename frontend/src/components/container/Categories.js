import React from 'react';

import Category from '../presentational/Category'
import { fetchCategoriesFromServer } from "../actions/categories";
import { connect } from 'react-redux';

class Categories extends React.Component {

    componentDidMount() {
        this.props.getAllCategories();
    }


    render(){

        return(
            <div className="col s12 m4 l3">
                <ul class="collection ">

                {this.props.categories.map(category =>
                    <li class="collection-item ">
                        <Category
                            key = {category.name}
                            name = {category.name}
                            path = {category.path}
                        />
                    </li>
                )}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        categories: state.categories
    }
};

function mapDispatchToProps (dispatch) {
    return {
        getAllCategories: (data) => dispatch(fetchCategoriesFromServer(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Categories);