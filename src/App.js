import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

//components
import Menu from './Components/Menu';
import Home from './Components/Home';
import Blog from './Components/Blog';
import PageSlider from './Molecules/PageSlider';

import styled from 'styled-components';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      background: "https://cdn.stocksnap.io/img-thumbs/960w/OHKILTFW97.jpg"
    };
  }

  changeBackground = () => {
    if (document.documentElement.clientHeight < document.documentElement.scrollTop)
      this.setState({ background: "https://cdn.stocksnap.io/img-thumbs/960w/UDX0CFOWLH.jpg" });
  }

  render() {
    return (
      <BrowserRouter>
        <Main className="App" background={this.state.background}>
          <Menu />
          <Switch>
            <Route exact path="/" >
              <PageSlider key={1}>
                <Home />
              </PageSlider>
            </Route>
            <Route exact path="/blog" >
              <PageSlider key={2}>
                <Blog />
              </PageSlider>
            </Route>
            <Route exact path="/work" >
              <PageSlider key={3}>
                <Home />
              </PageSlider>
            </Route>
            <Route exact path="/contact" >
              <PageSlider key={3}>
                <Home />
              </PageSlider>
            </Route>
          </Switch>
        </Main>
      </BrowserRouter>
    );
  }
}

export default App;

const Main = styled.div`
background-image: url("${props => props.background}");
background-repeat: no-repeat;
background-attachment: fixed;
background-size: 100% 100%;
height: auto;
width: 100%;
min-height: 100vh;
`;