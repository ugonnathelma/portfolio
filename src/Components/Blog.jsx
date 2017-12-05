import React, { Component } from 'react';

// third-part libraries
import styled from 'styled-components';
import { connect } from 'react-redux';

// components
import BlogPost from '../Molecules/BlogPost';

class Blog extends Component {

  render() {
    return (
      <Content>
        
      </Content>
    );
  }
}



export default connect(null, null)(Blog);

const Content = styled.div`
  background: transparent;
  width: 80%;
  margin: 0 auto important!;
  height: 1900px;
  position: absolute;
`;