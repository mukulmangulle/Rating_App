import React from 'react'

const ListIteam = ({ review,  deleteReview ,editReview}) => {
    return (
        <li className='list-group-item rounded-0 shadow-lg p-3 '>
            <h1 className='display-5'>{review.rating}</h1>
            <h2 className='display-6'>{review.review}</h2>
            <button className='btn btn-danger btn-sm rounded-0 float-end'
             onClick={()=>deleteReview(review.id)}
            >Delete</button>
            <button className='btn btn-warning btn-sm rounded-0 float-end'
             onClick={(e)=>editReview(review)}
             >    
                Edit</button>
        </li>
    )   
}

export default ListIteam;