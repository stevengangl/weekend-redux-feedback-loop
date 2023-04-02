import { useDispatch } from "react-redux"
import { useHistory } from 'react-router-dom';
import { useState } from "react";

function Understanding() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [feelingsNumber, setFeelingsNumber] = useState('')
    //need to store the feelings number here and send it to the reducers


    const handleClick = () => {
        if (feelingsNumber > 0) {
            dispatch({
                type: "UNDERSTANDING",
                payload: feelingsNumber
            })
            history.push("/supported")
        } else {
            alert('Please enter a number.')
        }

    }

    const handleFeelings = (event) => {
        setFeelingsNumber(event.target.value)
        console.log('looking at feeling #:', feelingsNumber)
    }



    return (
        <>
            <div>
                <h2>How well are you understanding the content?</h2>
                <h5 id='understanding'>Understanding?</h5>
                <input
                    type='number'
                    value={feelingsNumber}
                    onChange={handleFeelings}
                    placeholder='0'
                    min='0'
                    max='5'
                />


            </div>
            <div>
                <button className='nextBtn' onClick={handleClick}>Next</button>
            </div>
        </>
    )
}

export default Understanding;