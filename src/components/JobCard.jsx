import React from 'react';
import Card from '../Card/Card';
import './JobCard.css';

const JobCard = ({job}) => {
    return (
        <div className="job-card">
            <Card>
            {console.log(job.title)}
            <h2>{job.title}</h2>
            <p><strong>Company:</strong> {job.company}</p>
            <p><strong>Location:</strong> {job.location}</p>
            <p><strong>Description:</strong> {job.description}</p>
            <p><strong>Experience:</strong> {job.experience}+ years</p>
            <button className="apply-btn">Apply</button>
            </Card>
        </div>
    )
}

export default JobCard
