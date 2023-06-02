import { useDispatch } from "react-redux"
import { useHistory } from 'react-router-dom';
import { useState } from "react";


function Feeling() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [number, setNumber] = useState('')
 
    const handleClick = () => {
        if (number > 0) {
            dispatch({
                type: 'FEELINGS',
                payload: number
            })
            history.push('/understanding')
        } else {
            alert('Please enter a number.')
        }
    }

       const handleFeelings = (event) => {
        setNumber(event.target.value)
        console.log('looking at number', number)
       }


    return (
        <>
            <div>
                <h2>How are you feeling today?</h2>
                <h2>How are you feeling today?</h2>

                <h5 id='feeling'>Feeling?</h5>
                <input
                    type='number'
                    value={number} 
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

};

export default Feeling;