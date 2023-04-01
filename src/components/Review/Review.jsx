import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios'



function Review() {
    console.log('review comp', myFeeling)

    const myFeeling = useSelector(store => store.feeling)
    const myUnderstanding = useSelector(store => store.understanding)
    const mySupport = useSelector(store => store.supported)
    const myComments = useSelector(store => store.comments)





    return (
        <>
        <div>
            <h2>Review Your Feedback</h2>
            <p>Feelings: {myFeeling}</p>
            <p>Understanding: {myUnderstanding}</p>
            <p>Support: {mySupport}</p>
            <p>Comments: {myComments}</p>
        </div>

        <div>
            <button>Submit</button>
        </div>
        </>
    )
}

export default Review;