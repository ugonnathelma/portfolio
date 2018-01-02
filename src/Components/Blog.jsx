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
        <Margin />
        <BlogPostCustom />
      </Content>
    );
  }
}



export default connect(null, null)(Blog);

const Content = styled.div`
  background: transparent;
  width: 100%;
  position: absolute;
  right: 0;
  display: flex;
`;

const Margin = styled.div`
  width: 3.5rem;
`;

const BlogPostCustom = styled(BlogPost)`
  flex: 1;
`;