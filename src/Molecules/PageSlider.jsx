import React, { Component } from 'react';

// third-party libraries
import styled from 'styled-components';

class PageSlider extends Component {

  constructor(props) {
    super(props);
    this.state = {
      display: "none",
      left: "100%"
    };
  }

  startAnimation = (callback) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        callback();
      });
    });
  }

  componentDidMount() {
    this.setState({display: "block"});
    this.startAnimation(() => {
      this.setState({ left: '0%'});
    });
  }

  render() {
    return (
      <Wrapper display={this.state.display} left={this.state.left} id='wrapper'>
        {this.props.children}
      </Wrapper>
    );
  }
}

export default PageSlider;

const Wrapper = styled.div`
  background: rgba(255, 255, 255, 0.3);
  width: 100%;
  height: auto;
  position: absolute;
  top:0;
  bottom:0; 
  padding: 2%;
  margin-left: ${props => props.left};
  display: ${props => props.display};
  transition: all 1s ease;
  box-sizing: border-box;

  button {
    width: 80%;
    height: 50%;
  }
`;