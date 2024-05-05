import { combineReducers } from 'redux';
import { FETCH_JOB_LISTINGS_SUCCESS, FETCH_JOB_LISTINGS_FAILURE } from '../actions/action';

const initialState = {
    jobListings: [
        {
            id: 1,
            title: 'Frontend Developer',
            company: 'Example Company',
            location: 'Remote',
            description: 'Lorem ipsum dolor sit amet.',
            experience: '2'
          },
          {
            id: 2,
            title: 'Backend Developer',
            company: 'Another Company',
            location: 'New York, NY',
            description: 'Ut enim ad minim veniam.',
            experience: '3'
          },
          {
            id: 3,
            title: 'Full Stack Developer',
            company: 'Tech Innovations Inc.',
            location: 'San Francisco, CA',
            description: 'Pellentesque habitant morbi.',
            experience: '4'
          },
          {
            id: 4,
            title: 'Software Engineer',
            company: 'Creative Solutions Ltd.',
            location: 'London, UK',
            description: 'Fusce dapibus, tellus ac cursus.',
            experience: '3'
          },
          {
            id: 5,
            title: 'UI/UX Designer',
            company: 'Design Studio XYZ',
            location: 'Los Angeles, CA',
            description: 'Aenean lacinia bibendum nulla.',
            experience: '2'
          },
          {
            id: 6,
            title: 'Product Manager',
            company: 'Innovative Products Co.',
            location: 'Seattle, WA',
            description: 'Integer posuere erat a ante.',
            experience: '5'
          },
          {
            id: 7,
            title: 'Data Scientist',
            company: 'Analytics Solutions Ltd.',
            location: 'Boston, MA',
            description: 'Cras justo odio, dapibus ac.',
            experience: '4'
          },
          {
            id: 8,
            title: 'DevOps Engineer',
            company: 'Cloud Solutions Inc.',
            location: 'Austin, TX',
            description: 'Maecenas sed diam eget risus.',
            experience: '3'
          },
          {
            id: 9,
            title: 'Cybersecurity Analyst',
            company: 'Secure Networks Corp.',
            location: 'Washington, D.C.',
            description: 'Nullam id dolor id nibh ultr.',
            experience: '2'
          },
          {
            id: 10,
            title: 'Marketing Specialist',
            company: 'Digital Marketing Agency',
            location: 'Miami, FL',
            description: 'Duis mollis, est non commodo.',
            experience: '3'
          },
    ],
    error: null
};

const jobListingsReducer = (state = initialState.jobListings, action) => {
    switch (action.type) {
        case FETCH_JOB_LISTINGS_SUCCESS:
            return action.payload;
        default:
            return state;
    }
};

const errorReducer = (state = initialState.error, action) => {
    switch (action.type) {
        case FETCH_JOB_LISTINGS_FAILURE:
            return action.payload;
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    jobListings: jobListingsReducer,
    error: errorReducer
});

export default rootReducer;