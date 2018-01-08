import React, { Component } from 'react';

// third-party components
import styled from 'styled-components';

export default class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      text: ""
    }
  }

  handleChange = (event) => {
    this.setState({ text: event.target.value });
    console.log(this.state.text);
  }

  render() {
    return (
      <SearchContent>
        <SearchBtn><i className="fa fa-search" /></SearchBtn>
        <input id="search-text" value={this.state.text} onChange={this.handleChange} />
      </SearchContent>
    );
  }
}

const SearchContent = styled.div`
    flex: 1;
    display: flex;
    width: 80%;
    margin: 0 auto;
    margin-bottom: 2rem;
    height: 3rem;
    flex-direction: row-reverse;

    #search-text {
      width: 0px;
      box-shadow: 0.1px 0.1px 0.1px #333333;
      border: none;
      margin-right: -30px;
      -webkit-transition: width 1s; /* Safari */
      transition: width 1s;
      font-size: 1rem;
      padding-left: 1rem;
      
      &:focus {
        outline: none;
        width: 100%;
        box-shadow: 0.1px 0.1px 0.1px #333333;
      }

      &:hover {
          width: 100%;
          box-shadow: 0.1px 0.1px 0.1px #333333;
      }
    }

    @media screen and (max-width: 768px) {
      #search-text {
        width: 100%;
        box-shadow: 0.1px 0.1px 0.1px #333333;
        padding-left: 1rem;
      }

      &:hover {
        #search-text {
          width: 100%;
        }
      }
    }
`;

const SearchBtn = styled.a`
  width: 2.5rem;
  background: #000000;
  text-align: center;
  color: #ffffff;
  border-bottom-left-radius: 30%;
  border-top-right-radius: 30%;
  line-height: 2.5rem;
  z-index: 1;

  i {
    vertical-align: middle;
  }

  &:hover {
    cursor: pointer;
  }

  &:hover + #search-text {
    width: 100%;
    box-shadow: 0.1px 0.1px 0.1px #333333;
  }
`;
