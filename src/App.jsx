import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Form from './components/Form'
import ListGroup from './components/ListGroup'

const App = () => {

  const [reviews, setReviews ] = useState([]);
   
  const [edit, setEdit]= useState({
    review:{},
    editMode: false,
  });

  //delete

  const deleteReview=(id)=>{
  setReviews(reviews.filter(review=>review.id !==id)
  )};

  //save
  const saveReview =(rating,review)=>{
    const newReviw ={
      id:crypto.randomUUID(),
      rating,
      review
    }
    setReviews([newReviw, ...reviews]);
  }


   //edit
   const editReview=(oldReview)=>{
      setEdit({
         review:oldReview,
         editMode:true,
      });
   };

   //update
   const updateReview=(oldId, newRating, newReview)=>{
     setReviews(reviews.map(review=> review.id === oldId ?
       {...review, rating: newRating, review: newReview}: review))
   }


  return (
    <>
      <Navbar />
      <div className="container p-5">
        <h1 className='display-4 text-center'>Rating App</h1>
        <Form saveReview={saveReview} edit={edit} updateReview={updateReview} />
        <ListGroup reviews={reviews}  deleteReview={deleteReview} editReview={editReview}/>
      </div>
    </>
  )
}

export default App