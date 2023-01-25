import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import BlogDetails from './BlogDetails';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PageNotFound from './PageNotFound';

function App() {

  const title='Blogsite';

  return (
    <Router>
      <div className="App">
        <Navbar title={title}></Navbar>
        <div className='content'>
            <Switch>
              <Route exact path="/">
                  <Home></Home>
              </Route>
              <Route path="/create">
                  <Create></Create>
              </Route>
              <Route path="/blogs/:id">
                  <BlogDetails></BlogDetails>
              </Route>
              <Route path="*">
                <PageNotFound></PageNotFound>
              </Route>
              
            </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
