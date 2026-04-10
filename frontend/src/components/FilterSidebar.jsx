import React from 'react';

const FilterSidebar = () => {
    return (
        <aside className="filter-sidebar">
            <div className="filter-group">
                <h3>Filters</h3>
                <div className="filter-item">
                    <label>Bus Type</label>
                    <div><input type="checkbox" /> AC</div>
                    <div><input type="checkbox" /> Non-AC</div>
                    <div><input type="checkbox" /> Sleeper</div>
                </div>
                <div className="filter-item">
                    <label>Price Range</label>
                    <input type="range" min="500" max="2500" />
                </div>
                <div className="filter-item">
                    <label>Departure Time</label>
                    <div><input type="checkbox" /> Morning</div>
                    <div><input type="checkbox" /> Evening</div>
                    <div><input type="checkbox" /> Night</div>
                </div>
            </div>
        </aside>
    );
};

export default FilterSidebar;
