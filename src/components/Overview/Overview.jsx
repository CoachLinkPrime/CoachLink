import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

import OverviewCard from "./OverviewCard.jsx";

function Overview() {
    const dispatch = useDispatch();
    const pastGigs = useSelector((store) => store.pastGigs);
    const upcomingGigs = useSelector((store) => store.upcomingGigs);

    // if there are no completed gigs in the store [], then 
    // dispatch a call to fetch them from the database 
    useEffect(() => {
        dispatch({ type: 'FETCH_COMPLETED_GIGS' });
        dispatch({ type: 'FETCH_UPCOMING_GIGS' });
    }, [dispatch]);

    // need to convert the DB format of date to something more readable:
    function convertDateFormat(date) {
        // first convert the date string to an object
        const dateObj = new Date(date);
        // then can convert that to differently formatted date string with JavaScript toDateString():
        return dateObj.toDateString();
    }

    return (
        <div className='overview'>
            {/* <h1>Overview</h1> */}
            <h2>Upcoming Gigs</h2>
            {upcomingGigs.map(({ id, title, date_for_gig }) => (
                <OverviewCard
                    key={id}
                    id={id}
                    title={title}
                    date_for_gig={date_for_gig}
                    convertDateFormat={convertDateFormat}
                />
            ))}
            <br />
            <br />
            <h2>Completed Gigs</h2>
            {pastGigs.map(({ id, title, date_for_gig }) => (
                <OverviewCard
                    key={id}
                    id={id}
                    title={title}
                    date_for_gig={date_for_gig}
                    convertDateFormat={convertDateFormat}
                />
            ))}
        </div>
    )
};
export default Overview;