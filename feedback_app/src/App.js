import './App.css';
import './styles.css'; //global css
import {useState} from 'react';
import DynamicVariablesAndList from './components/DynamicVariablesAndList';
import Header from './components/Header';
import FeedbackData from './data/FeedbackData';
import FeedbackLIst from './components/FeedbackLIst';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutIconLink from './components/AboutIconLink';
import Card from './components/shared/Card';

import {v4 as uuidv4} from 'uuid'; //npm install uuid - used to automatically generate a unique id
import {BrowserRouter as Router, Route} from 'react-router-dom';

//Pages
import AboutPage from './pages/AboutPage';

//COntext
import { FeedbackProvider } from './context/FeedbackContext'; //used to wrap the components to use value props


function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const addFeedback = (newFeedback) =>{
    newFeedback.id = uuidv4(); //will generate a unique id
    setFeedback([newFeedback, ...feedback]);//get all current feedback using spread operator, and add the new feedback in the array
    console.log(newFeedback);
  };

  const deleteFeedback = (id)=>{
    if(window.confirm("Delete feedback?")){
      // console.log('App', id)
      setFeedback(feedback.filter((item)=>{
          return item.id !== id;
      }))
    }
    
  }

  return(
    <FeedbackProvider>
      <Router>
        <Header text="Feedback UI"></Header>

        <div className='container'>
          <Route exact path='/'>
            <FeedbackForm handleAdd={addFeedback}></FeedbackForm>
            <FeedbackStats feedback={feedback} />
            <FeedbackLIst feedback={feedback} handleDelete={deleteFeedback}></FeedbackLIst>
          </Route>

          <Route path='/about' component={AboutPage}/>

          <AboutIconLink></AboutIconLink>
        </div>

      </Router>
    </FeedbackProvider>

  )
}

export default App;
