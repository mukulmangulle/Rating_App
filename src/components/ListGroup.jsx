import React from 'react'
import ListIteam from './ListIteam'

const ListGroup = ({ reviews, deleteReview ,editReview}) => {
  return (
    <ul className='list-group my-3'>
      {
        reviews.map((review) => (
          <ListIteam key={review.id} review={review} deleteReview={deleteReview} editReview={editReview} />
        ))}
    </ul>
  );
};

export default ListGroup;