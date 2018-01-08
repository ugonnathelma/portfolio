import React, { Component } from 'react';

// third-part libraries
import styled from 'styled-components';
import { connect } from 'react-redux';

// components
import BlogPost from '../Molecules/BlogPost';
import SearchBar from '../Molecules/SearchBar';

class Blog extends Component {

  render() {
    return (
      <Content>
        <Margin />
        <PostContainer>
          <SearchBar />
          <BlogArea>
            <BlogPost
              day={14}
              year={2018}
              month="January"
              summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
              title="The Great Escape"
              featuredImage="./images/man-beach.jpg" />
          </BlogArea>
        </PostContainer>
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

const PostContainer = styled.div`
  flex: 1;
`;

const BlogArea = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
`;
