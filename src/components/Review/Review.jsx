import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios'



function Review() {
    const history = useHistory();
    const myFeeling = useSelector(store => store.feeling)
    const myUnderstanding = useSelector(store => store.understanding)
    const mySupport = useSelector(store => store.supported)
    const myComments = useSelector(store => store.comments)

    const handleSubmit = () => {


        const newReview = {
            feeling: myFeeling,
            understanding: myUnderstanding,
            support: mySupport,
            comments: myComments
        }

        console.log('newReview:', newReview)


        //when submit is clicked i need to 
        //1️⃣add post route to send date to date base

        //Post route to add review to the Database
        axios.post('/feedback', newReview)
        // console.log('in POST')
            .then(response => {
                console.log('in post looking at the info:', newReview)
            })
            .catch(err => {
                console.log('erroe', err)
            })
        //2️⃣go to new page...see homework for example
        history.push('/success')


    }


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
                <button className='submitBtn' onClick={handleSubmit} >Submit</button>
            </div>
        </>
    )
}

export default Review;