import React, { Component } from 'react';

// third-party libraries
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

class MenuItem extends Component {

  render() {
    return (
      <Button className="menu-item" id={this.props.id} activeClassName="selected" exact to={this.props.link}>
        <p>{this.props.tag}</p>
      </Button>
    );
  }
}

export default MenuItem;

const Button = styled(NavLink) `
  background: #D3D3D3;
  cursor: pointer;
  position: absolute; 
  width: 3.5rem;
  top: 0;
  bottom: 0;
  padding: 3rem 0rem 0rem 0rem;
  text-decoration: none;
  color: white;
  letter-spacing: 2px;
  border-top-right-radius: 1rem;
  box-shadow: 4px 4px 3px rgba(0, 0, 0, 0.2); 
  transform-origin: center 30%; 
  transition: all .3s linear;
  text-align: right;

  &:hover {
    background: #4c586f; 
  }

  &.selected {
    background: black;
    -ms-transform: none;
    -webkit-transform: none;;
    transform: none;
    z-index: 10000;
    margin-right: 100%;

    p {
      font-size: 0.7rem;
      left: -74%;
      top: 5rem;
    }

    &: after {
      content: "☰";
      left : 38%;
      position: absolute;
      top: 50%;
    }
  }

  p {
    font-size: 0.7rem;
    left: -59%;
    top: 5rem;
    width: 135px;
    position: absolute;
    -ms-transform: rotate(-90deg); /* IE 9 */
    -webkit-transform: rotate(-90deg); /* Chrome, Safari, Opera */
    transform: rotate(-90deg);
  }


@media only screen and (min-width: 2560px) {
  width: 5.5rem;

  &.selected {
    p {
      font-size: 1rem;
      left: -29% !important;
    }

    &: after {
      content: "☰";
      left : 45%;
    }
  }

  p {
    font-size: 1rem;
    left: -2% !important;
  }
}

`;