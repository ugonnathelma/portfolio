import React, { Component } from 'react';
import MenuItem from '../Atoms/MenuItem';

import styled from 'styled-components';

class Menu extends Component {
  render() {
    return (
      <Wrapper >
        <MenuItem link="/" tag="Home" id="home" />
        <MenuItem link="/work" tag="My Work" id="my-work" />
        <MenuItem link="/blog" tag="Blog" id="blog" />
        <MenuItem link="/contact" tag="Contact" id="contact" />
      </Wrapper>
    );
  }
}

export default Menu;

const getStyles = (components) => {
  let zIndex = 9000;
  // eslint-disable-next-line no-restricted-globals
  const styles = components.filter(component => component.props.link !== location.pathname).map((component, index) => {
    const currentIndex = ++index;
    return `&:hover #${component.props.id}:not(.selected) {
      -ms-transform: rotate(${currentIndex * 4}deg) !important;
      -webkit-transform: rotate(${currentIndex * 4}deg) !important;
      transform: rotate(${currentIndex * 4}deg) !important;
      transform-origin: center 85%; 
      z-index: ${zIndex--};
      top: ${currentIndex * 2}% !important;
    }`
  }).join("");
  return styles;
}

const Wrapper = styled.div`
height: 100%;
position: fixed;
background: transparent;
z-index: 10000;

&:hover {
width: ${props => 40 * props.children.length}px;
}

${props => getStyles(props.children)}
`;
