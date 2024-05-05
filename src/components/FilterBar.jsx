import React, { useState } from 'react';

const FilterBar = ({ jobListings, setFilteredJobListings }) => {
    const [filters, setFilters] = useState({
        minExperience: '',
        companyName: '',
        location: '',
        remote: false
        // Add more filters as needed
    });

    const handleFilterChange = (event) => {
        const { name, value, type } = event.target;
        setFilters(prevFilters => ({
            ...prevFilters,
            [name]: type === 'checkbox' ? !prevFilters[name] : value
        }));
    };

    const applyFilters = () => {
        // Filter job listings based on the criteria
        const filteredListings = jobListings.filter(listing => {
            return (
                (!filters.minExperience || parseInt(listing.experience) >= parseInt(filters.minExperience)) &&
                (!filters.companyName || listing.company.toLowerCase().includes(filters.companyName.toLowerCase())) &&
                (!filters.location || listing.location.toLowerCase().includes(filters.location.toLowerCase())) &&
                (!filters.remote || listing.remote)
                // Add more filter conditions as needed
            );
        });

        // Update the filtered job listings
        setFilteredJobListings(filteredListings);
    };

    return (
        <div className="filter-bar">
            <input type="number" name="minExperience" value={filters.minExperience} onChange={handleFilterChange} placeholder="Min Experience" />
            <input type="text" name="companyName" value={filters.companyName} onChange={handleFilterChange} placeholder="Company Name" />
            <input type="text" name="location" value={filters.location} onChange={handleFilterChange} placeholder="Location" />
            <label>
                <input type="checkbox" name="remote" checked={filters.remote} onChange={handleFilterChange} /> Remote
            </label>
            {/* Add more filter inputs */}
            <button onClick={applyFilters}>Apply Filters</button>
        </div>
    );
};

export default FilterBar;
