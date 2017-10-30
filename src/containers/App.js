const React = require('react');
const Router = require('react-router').Router;
const Provider = require('react-redux').Provider;
const T = require('prop-types');

module.exports = class App extends React.Component {

    static propTypes = {
        history: T.object.isRequired,
        routes: T.object.isRequired,
        routerKey: T.number,
        store: T.object.isRequired
    }

    render() {

        const { history, routes, routerKey, store } = this.props;

        return (
            <Provider store={store}>
                <div style={{ height: '100%' }}>
                    <Router history={history} children={routes} key={routerKey} />
                </div>
            </Provider>
        );
    }

};
