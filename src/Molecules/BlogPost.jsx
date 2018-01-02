import React, { Component } from 'react';

// third-party libraries
import styled from 'styled-components';

class BlogPost extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }

  updateDimensions = () => {
    this.setState({ isMobile: window.innerWidth <= 750 });
  }

  render() {
    return (
      <Container>
        <PostDate><Day>14</Day>
          <Month>
            {this.state.isMobile ? "January".substring(0, 3) : "January"}
          </Month>
          <Year>2017</Year></PostDate>
        <PostContent>
          <FeaturedImage src="./images/man-beach.jpg" >
          </FeaturedImage>
          <Summary>
            <PostTitle>This is a blog title</PostTitle>
          </Summary>
        </PostContent>
      </Container>
    );
  }
}

export default BlogPost;

const Container = styled.div`
  background: #ffffff;
  height: 50vh;
  width: 80%;
  margin: 0 auto;
  display: flex;
`;

const PostTitle = styled.h3`
  width: 100%;
`;

const PostContent = styled.div`
  width: 100%;
  flex: 7;
  display: flex;

  @media screen and (max-width: 750px) {
    flex-direction: column; 
  }
`;

const PostDate = styled.div`
  width: 20%;
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  * {
    margin: 0px;
  }
`;

const Day = styled.h1`
  color: #909090;
  display: block;
  font-size: 6vw;
`;

const Month = styled.h4`
  display: block;
  font-size: 100%;
`;

const Year = styled.h4`
  display: block;
  font-size: 100%;
`;

const FeaturedImage = styled.div`
  flex: 1.5;
  background-image: ${props => `url("${props.src}")`};
  background-size: cover;
  background-repeat: no-repeat;

  @media screen and (max-width: 750px) {

  }
`;

const Summary = styled.div`
  flex: 1;
  background: #f5f5f5;
  padding: 0.5rem;

  @media screen and (max-width: 750px) {
    font-size: 70%;
  }
`;