import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
        <PostDate><Day>{this.props.day}</Day>
          <Month>
            {this.state.isMobile ? this.props.month.substring(0, 3) : this.props.month}
          </Month>
          <Year>{this.props.year}</Year></PostDate>
        <PostContent>
          <FeaturedImage src={this.props.featuredImage} >
          </FeaturedImage>
          <Summary>
            <PostTitle>{this.props.title}</PostTitle>
            <PostBrief><textarea rows={this.state.isMobile ? "2" : "3"} readOnly value={this.props.summary} />...</PostBrief>
            <ReadMore to={this.props.link}><i className="fa fa-eye"></i></ReadMore>
          </Summary>
        </PostContent>
      </Container>
    );
  }
}

export default BlogPost;

const Container = styled.div`
  background: #ffffff;
  width: 80%;
  margin: 0 auto;
  display: flex;
  height: 30vh;

  @media screen and (max-width: 500px) {
    
  }
`;

const PostTitle = styled.h3`
  width: 100%;
  flex: 1;
  margin-top: 0px;
  font-size: 1.1rem;
  text-align: justify;

  @media screen and (max-width: 500px) {
    font-size: 90%;
  }
`;

const ReadMore = styled(Link)`
  text-decoration: none;
  color: #909090;

  &:hover {
    color: #000000;
  }

  i {
    flex: 1;
  width: 10%;
  float: right;
  }
`;

const PostBrief = styled.div`
  flex: 8;

  textarea {
    font-size: 0.9rem;
    line-height: 1.5rem;
    overflow: hidden;
    resize: none;
    background: transparent;
    border none;
    width: 100%;

    &:focus {
      outline: none;
    }
  }

  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const PostContent = styled.div`
  width: 100%;
  flex: 7;
  display: flex;

  @media screen and (max-width: 500px) {
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

`;

const Summary = styled.div`
  flex: 1;
  background: #f5f5f5;
  padding: 1.5rem;
  text-overflow: ellipsis;
  display: flex;
  flex-direction: column;
`;

BlogPost.defaultProps = {
  link: '/',
  month: 'January'
}
