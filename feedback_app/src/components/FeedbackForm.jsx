import React, { useEffect } from 'react';
import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';
import { useState, useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackForm({handleAdd}) {

    const [text, setText] = useState('');
    const [rating, setRating] = useState(5);
    const [btnDisabled, setbtnDisabled] = useState(true); 
    const [message, setMessage] = useState('');  

    const {addFeedback, feedbackToEdit, updateFeedback} = useContext(FeedbackContext);

    useEffect(()=>{
        if(feedbackToEdit.edit === true){
            setbtnDisabled(false);
            setText(feedbackToEdit.item.text);
            setRating(feedbackToEdit.item.rating);
        }
    }, [feedbackToEdit]);

    const handleTextChange = (e) => {
        if(text === ''){
            setbtnDisabled(true);
            setMessage(null);
        } else if(text !== '' && text.trim().length <= 10){
            setbtnDisabled(true);
            setMessage('Text must be atleast 10 characters');
        } else{
            setbtnDisabled(false);
            setMessage(null);
        }

        setText(e.target.value);
    };

    const handleSubmit = (e)=>{
        e.preventDefault();

        if(text.trim().length > 10){
            const newFeedBack = {
                text: text,
                rating: rating
            }

            // console.log(newFeedBack);
            
            if(feedbackToEdit.edit === true){
                updateFeedback(feedbackToEdit.item.id, newFeedBack)
            }
            else{
                handleAdd(newFeedBack);
                addFeedback(newFeedBack); //for context
            }

            setText('');
        }
    };

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate our services? </h2> 
                <RatingSelect select={ rating => setRating(rating) }></RatingSelect>

                <div className="input-group">
                        <input onChange={handleTextChange} type="text" placeholder='Write a review' value={text}/>
                        <Button type='submit' version='primary' isDisabled={btnDisabled} > Send </Button>
                </div>
                
                {message ? <div className='message'>{message}</div> : null}
            </form>
        </Card>
    )
}

export default FeedbackForm
