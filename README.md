PROJECT NAME: Weekend-redux-feedback-loop

Description

For this assignment, we creared a reflection/feedback form modeled after Prime's system. Feedback will be collected over 4 pages. Than  a separate review page will display the current feedback values and include a submit button. When all steps are complete, yotheur app will save the feedback in the database and send you back to the first page where you can start another review.



Prerequisites

Node.js, react


Installation

-Fork and clone repo from git hub

-Open Vs code and download dependencies
    -npm install, npm install redux@4 react-redux@7, redux-logger@3

-Create your database and tables using the provided data.sql file.

-Open two terminals and run commands, npm run client, npm run server
    -The npm run client will open the app in a web browser


Usage
How does someone use this application? Tell a user story here.
1.User will pick how they are feeling about the material 1-5 than hit next
2.User will pick how they are understanding the material 1-5 than hit next
3.User will pick how they are being supported 1-5 than hit next
4.User will write any comments they have than hit next
5.The user is than brought to a review page where they can see all the info they gave. than they can hit submit which brings them to the feedback page. while also sending the data the user gave to a database to be stored.
6.On this page the user gets a tahnkyou for providing the feedback and can hit the leave new feedback button. When that is clicked the user is brought back to the home page and the information is erased from the redcuers.

Built With
