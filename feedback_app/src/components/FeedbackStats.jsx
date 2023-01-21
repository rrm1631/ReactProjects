import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import FeedbackContext from '../context/FeedbackContext';


function FeedbackStats({/*feedback*/}) {

    const {feedback} = useContext(FeedbackContext); //use context

    //calculate ratings avg
    let average = feedback.reduce((acc, curr)=>{ //accumulator and current
        return acc + curr.rating;
    }, 0) / feedback.length //default value 0

    average = average.toFixed(1).replace(/[.,]0$/, '') //makes value take 1 decimal place

    return (
        <div className='feedback-stats'>
            <h4>{feedback.length} Reviews</h4>
            <h4> Average Rating: {isNaN(average) ? 0 : average} </h4>
        </div>
    )
}

FeedbackStats.propTypes = {
    feedback : PropTypes.array.isRequired
}


export default FeedbackStats