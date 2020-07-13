import React from 'react';
import { Route } from 'react-router-dom';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';
import { connect } from 'react-redux';
import { fetchCollectionsAsync, fetchCollectionsStart } from '../../redux/shop/shop.actions';
//import { fetchCollectionsStart } from '../../redux/shop/shop.sagas';
//import { createStructuredSelector } from 'reselect';
//import { selectIsCollectionFetching, selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';
//import WithSpinner from '../../components/with-spinner/with-spinner.component'


//const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
//const CollectionPageWithSpinner = WithSpinner(CollectionPage);


class ShopPage extends React.Component {

    componentDidMount() {
        const { fetchCollectionsStart } = this.props;
        fetchCollectionsStart();
    }

    render() {
        const { match } = this.props;
        return (
            <div className="shop-page">
                <Route
                    exact={true}
                    path={`${match.path}`}
                    component={CollectionsOverviewContainer}
                />
                <Route
                    path={`${match.path}/:collectionId`}
                    component={CollectionPageContainer}
                />
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
    }
}
export default connect(null, mapDispatchToProps)(ShopPage);
