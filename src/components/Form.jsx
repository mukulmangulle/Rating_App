import React, { useEffect, useState } from 'react'

const Form = ({saveReview, edit,updateReview}) => {

  const [rating, setRating]=useState("");
  const [review, setReview]=useState("");

   const handleSubmit=(e)=>{
     e.preventDefault();
    if(edit.editMode){
      updateReview(edit.review.id, rating, review)
    }
      else{
        saveReview(rating,review);
      }
  
     setRating("")
     setReview("");
   };


   useEffect(()=>{
    setRating(edit.review.rating)
    setReview(edit.review.review)
   },[edit]);



  return (
    <form onSubmit={handleSubmit} >

      <select className='form-select  rounded-0 my-2 '
       onChange={(e)=>setRating(e.target.value)}
       value={rating}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>


      <textarea placeholder='Enter Review Here...'
       className='form-control rounded-0 my-2'
       onChange={(e)=>setReview(e.target.value)}
       required
       value={review}
        
       > </textarea>
      <button className='btn btn-success rounded-0 w-100'>Save</button>
    </form>
  );
};

export default Form;