import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobListings } from '../actions/action';
import JobCard from './JobCard';
import './JobCard.css';
import FilterBar from './FilterBar';

const JobList = () => {
    const dispatch = useDispatch();
    const jobListings = useSelector(state => state.jobListings);
    const [filteredJobListings, setFilteredJobListings] = useState(jobListings);

    useEffect(() => {
        dispatch(fetchJobListings());
    }, []);


    return (
        <div className="job-list-container">
            <FilterBar jobListings={jobListings} setFilteredJobListings={setFilteredJobListings} />

            <div className="job-list">
                {filteredJobListings.map(job => (
                    <JobCard key={job.id} job={job} />
                ))}
            </div>
        </div>
    )
}

export default JobList
