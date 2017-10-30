const React = require('react');
const Header = require('components/Header');
const T = require('prop-types');

// TODO Add the theme provider here

// Styles
require('styles/core.scss');
const lStyles = require('./styles');

const {
    RootContainer,
    MainContainer } = lStyles;

// Component

const CoreLayout = ({ children }) => (

    <RootContainer>
        <Header />
        <MainContainer>
            {children}
        </MainContainer>
    </RootContainer>

);

CoreLayout.propTypes = {
    children: T.element.isRequired
};

module.exports = CoreLayout;
