export const FETCH_JOB_LISTINGS_SUCCESS = 'FETCH_JOB_LISTINGS_SUCCESS';
export const FETCH_JOB_LISTINGS_FAILURE = 'FETCH_JOB_LISTINGS_FAILURE';

export const fetchJobListingsSuccess = (jobListings) => ({
    type: FETCH_JOB_LISTINGS_SUCCESS,
    payload: jobListings
});

export const fetchJobListingsFailure = (error) => ({
    type: FETCH_JOB_LISTINGS_FAILURE,
    payload: error
});

export const fetchJobListings = () => {
    return async (dispatch) => {
        try {
            // Fetch job listings from backend API
            const response = await fetch('backend-api-url');
            const data = await response.json();
            dispatch(fetchJobListingsSuccess(data));
        } catch (error) {
            dispatch(fetchJobListingsFailure(error));
        }
    };
};