import csrfFetch from "./csrf";
import { RECIEVE_PRODUCT } from "./products";

export const RECIEVE_REVIEWS = 'reviews/RECIEVE_REVIEWS';
export const RECIEVE_REVIEW = 'reviews/RECIEVE_REVIEW';
export const REMOVE_REVIEW = 'reviews/REMOVE_REVIEW';

const recieveReviews = (reviews) => {
    return ({
        type: RECIEVE_REVIEWS,
        reviews
    })
};

const recieveReview = (payload) => {
    return ({
        type: RECIEVE_REVIEW,
        payload
    })
};

const removeReview = (reviewId) => {
    return ({
        type: REMOVE_REVIEW,
        reviewId
    })
};

export const getReviews = (state) => (
    state.reviews ? Object.values(state.reviews) : []
)

export const getReview = (reviewId) => (state) => (
    state.reviews ? state.reviews[reviewId] : null
)


// export const fetchReviews = () => async (dispatch) => {
//     const response = await fetch('/api/reviews');

//     if (response.ok) {
//     const reviews = await response.json();
//     dispatch(recieveReviews(reviews));
//     }
// }

export const fetchReview = (reviewId) => async (dispatch) => {
    const response = await fetch(`/api/reviews/${reviewId}`);
    
    if (response.ok) {
        const review = await response.json();
        dispatch(recieveReview(review));
    }
}


export const deleteReview = (reviewId) => async (dispatch) => {
    const response = await csrfFetch(`/api/reviews/${reviewId}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        dispatch(removeReview(reviewId));
    }
}

export const createReview = (review) => async (dispatch) => {
    const response = await csrfFetch('/api/reviews', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(review)
    });

    if (response.ok) {
        const newReview = await response.json();
        dispatch(recieveReview(newReview));
    } else {
        const errors = await response.json();
        return errors;
    }
}

export const updateReview = (review) => async (dispatch) => {
    const response = await csrfFetch(`/api/reviews/${review.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(review)
    });
    if (response.ok) {
        const updatedReview = await response.json();
        dispatch(recieveReview(updatedReview));
    }
}

export default function reviewsReducer(state = {}, action) {
    const newState = { ...state };
    switch (action.type) {
        case RECIEVE_PRODUCT:
            if (action.payload.reviews) {
                return action.payload.reviews
            } else {
                return {}
            }
        case RECIEVE_REVIEWS:
            return action.reviews;
        case RECIEVE_REVIEW:
            newState[action.payload.review.id] = action.payload.review;
            return newState;
        case REMOVE_REVIEW:
            const reviewId = action.reviewId;
            delete newState[reviewId];
            return newState;
        default:
            return state;
    }
}

