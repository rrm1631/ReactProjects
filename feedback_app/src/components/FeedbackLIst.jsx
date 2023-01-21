import React from 'react';
import FeedbackItem from './FeedbackItem';
import PropTypes from 'prop-types'
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackLIst({/*feedback,*/handleDelete}) {
    const {feedback} = useContext(FeedbackContext); //remove the prop feedback, then uncomment this to see context value

    if(!feedback){
        return <p> There is no feedback..</p>
    }

    else{
        return (
            <div className='feedback-list'>
                {feedback.map( item => {
                    // return <div> {item.id} </div>
                    return <FeedbackItem 
                        item={item} 
                        key={item.id} 
                        handleDelete={handleDelete}>
                    </FeedbackItem>
                })}
            </div>
        )
    }
}

FeedbackLIst.propTypes = {
    feedback : PropTypes.array
}

export default FeedbackLIst
