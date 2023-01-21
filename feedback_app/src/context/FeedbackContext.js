import { createContext, useState } from "react";
import {v4 as uuidv4} from 'uuid'; 

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This item is from context 1',
            rating: 5
        },
        {
            id: 2,
            text: 'This item is from context 2',
            rating: 4
        },
        {
            id: 3,
            text: 'This item is from context 3',
            rating: 3
        }
    ]);

    //ADD
    const addFeedback = (newFeedback) =>{
        newFeedback.id = uuidv4(); //will generate a unique id
        setFeedback([newFeedback, ...feedback]);//get all current feedback using spread operator, and add the new feedback in the array
        console.log(newFeedback);
      };

    //DELETE
    const deleteFeedback = (id)=>{
        if(window.confirm("Delete feedback?")){
          // console.log('App', id)
          setFeedback(feedback.filter((item)=>{
              return item.id !== id;
          }))
        }  
      }

    //UPDATE
    const updateFeedback = (id, updateItem)=>{
        setFeedback(feedback.map((item)=>{
            return (item.id === id ? {...item, ...updateItem} : item) //IF item.id === id THEN spread(item, updateItem) ELSE item
        }));
    };


    //Item to Edit
    const [feedbackToEdit, setFeedbackToEdit] = useState({
        item: {},
        edit: false
    });

    const editFeedback = (item)=>{
        setFeedbackToEdit(
            {
                item: item,
                edit: true
            }
        );
    };

    return <FeedbackContext.Provider value={{
            feedback: feedback,
            handleDelete: deleteFeedback,
            addFeedback: addFeedback,
            editFeedback: editFeedback,
            feedbackToEdit,
            updateFeedback
        }}> 
            {children} 
        </FeedbackContext.Provider>
};

export default FeedbackContext;