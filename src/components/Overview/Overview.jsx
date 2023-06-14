import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

function Overview() {
    const dispatch = useDispatch();
    const pastGigs = useSelector((store) => store.pastGigs);

    // if there are no completed gigs in the store [], then 
    // dispatch a call to fetch them from the database 
    useEffect(() => {
        if (!pastGigs.length) {
            dispatch({
                type: 'FETCH_COMPLETED_GIGS'
            });
        }
    }, [dispatch]);

    // need to convert the DB format of date to something more readable:
    function convertDateFormat(date) {
        // first convert the date string to an object
        const dateObj = new Date(date);
        // then can convert that to differently formatted date string with JavaScript toDateString():
        return dateObj.toDateString();
    }

 return (
    <div className= 'overview'>
        <h1>Overview</h1>
        <h2>Upcoming Gigs</h2>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h2>Completed Gigs</h2>
        <ul>
            {pastGigs.map(({ id, title, date_applied }) => {
                return (
                    <li key={id}>
                        <p>{title}, {convertDateFormat(date_applied)}</p>
                    </li>
                )
            })}
        </ul>
    </div>

    )
}

export default Overview;