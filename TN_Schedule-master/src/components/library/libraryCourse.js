import React, { Component } from 'react';

import Icon from '../icons';
import Arrow from '../arrow';

class LibraryCourse extends Component {
    render() {
        return (
            <div className="library-course">
                <div className="library-course__title-arrow">
                    <label className="library-course__title">Problem Solving</label>
                    {Icon('fas fa-check', 'library-course__icon')}
                </div>
                <Arrow className="library-course__arrow" />
                {/* action button component */}
                <div className="library-course__discription">
                    <label>Course Discription</label>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque scelerisque augue ut est tempor bibendum. Donec at diam auctor, vehicula leo sit amet, placerat nibh. Vestibulum sit amet erat non ex sollicitudin volutpat id blandit odio.</p>
                </div>
            </div>
        );
    }
}

export default LibraryCourse;