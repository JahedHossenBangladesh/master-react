import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  Link,
} from "react-router-dom";
import About from './About';
import Home from './Home';
import Info from './Info';
const Aapp = () => {

    const ul= (<>
    <ul><Link to='/home'>home </Link>
    <Link to='/about'>about </Link>
<Link to='/info'>Info  </Link>    
    </ul>

    
    </>
    )

    return (
      <>
        <Router>
          {ul}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route  path="/home">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/info">
              <Info />
            </Route>
          </Switch>
        </Router>
        ,
      </>
    );
};

export default Aapp;