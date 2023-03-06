export const RECIEVE_REVIEWS = 'reviews/RECIEVE_REVIEWS';
export const RECIEVE_REVIEW = 'reviews/RECIEVE_REVIEW';
export const REMOVE_REVIEW = 'reviews/REMOVE_REVIEW';

const recieveReviews = (reviews) => ({
    type: RECIEVE_REVIEWS,
    reviews
});

const recieveReview = (review) => ({
    type: RECIEVE_REVIEW,
    review
});

const removeReview = (reviewId) => ({
    type: REMOVE_REVIEW,
    reviewId
});

export const getReviews = () => async (dispatch) => {
    const response = await fetch('/api/reviews');
    const reviews = await response.json();
    dispatch(recieveReviews(reviews));
}

export const getReview = (reviewId) => async (dispatch) => {
    const response = await fetch(`/api/reviews/${reviewId}`);
    const review = await response.json();
    dispatch(recieveReview(review));
}

export const deleteReview = (reviewId) => async (dispatch) => {
    const response = await fetch(`/api/reviews/${reviewId}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        dispatch(removeReview(reviewId));
    }
}

export const createReview = (review) => async (dispatch) => {
    const response = await fetch('/api/reviews', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(review)
    });
    const newReview = await response.json();
    dispatch(recieveReview(newReview));
}

export const updateReview = (review) => async (dispatch) => {
    const response = await fetch(`/api/reviews/${review.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(review)
    });
    const updatedReview = await response.json();
    dispatch(recieveReview(updatedReview));
}

const initialState = {};

export default function reviewsReducer(state = initialState, action) {
    switch (action.type) {
        case RECIEVE_REVIEWS:
            const newState = {};
            action.reviews.forEach(review => {
                newState[review.id] = review;
            });
            return newState;
        case RECIEVE_REVIEW:
            return {
                ...state,
                [action.review.id]: action.review
            };
        case REMOVE_REVIEW:
            const newState2 = { ...state };
            delete newState2[action.reviewId];
            return newState2;
        default:
            return state;
    }
}

