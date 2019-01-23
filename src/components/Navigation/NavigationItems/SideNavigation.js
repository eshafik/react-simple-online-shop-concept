import React from 'react';
import '../Navigation.scss';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';

import NavigationItem from './NavigationItem';

const femaleCategories = [
  {
    category: 'female',
    content: 'Women',
    linkType: 'main'
  },
  {
    category: 'women-coats',
    content: 'Coats'
  },
  {
    category: 'women-jackets',
    content: 'Jackets',
  }
];

const sideNavigation = (props) => (
  <nav className="side-navigation">
    <ul className="side-navigation-list">
      {/* <NavigationItem
        clicked={() => props.filterProducts('female')}
        style={{ lineHeight: '35px', fontSize: '1.2em', fontWeight: '500' }}
        link="/productlist/female"
        exact>Women</NavigationItem> */}

      {femaleCategories.map(category => (
        <NavigationItem
          key={category.category}
          clicked={() => props.filterProducts(category.category)}
          linkType={category.linkType}
          link={`/productlist/${category.category}`}>
          {category.content}
        </NavigationItem>
      ))}

      <NavigationItem link="/productlist/women" exact>Suits</NavigationItem>
      <NavigationItem link="/productlist/women" exact>Shirts</NavigationItem>
      <NavigationItem link="/productlist/women" exact>T-shirt</NavigationItem>
      <NavigationItem link="/productlist/women" exact>Shoes</NavigationItem>
      <NavigationItem link="/productlist/women" exact>Hats</NavigationItem>

      <NavigationItem
        style={{ lineHeight: '35px', fontSize: '1.2em', fontWeight: '500' }}
        link="/productlist/women"
        exact>Men</NavigationItem>

      <NavigationItem link="/productlist/women" exact>Coats</NavigationItem>
      <NavigationItem link="/productlist/women" exact>Jackets</NavigationItem>
      <NavigationItem link="/productlist/women" exact>Suits</NavigationItem>
      <NavigationItem link="/productlist/women" exact>Shirts</NavigationItem>
      <NavigationItem link="/productlist/women" exact>T-shirt</NavigationItem>
      <NavigationItem link="/productlist/women" exact>Shoes</NavigationItem>
      <NavigationItem link="/productlist/women" exact>Hats</NavigationItem>

      {props.children}
    </ul>
  </nav>
);

const mapDispatchToProps = dispatch => {
  return {
    filterProducts: (category) => dispatch(actions.filterProducts(category))
  }
};

export default connect(null, mapDispatchToProps)(sideNavigation);