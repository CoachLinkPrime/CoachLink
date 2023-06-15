import React, { useState } from 'react';

const CheckboxTable = () => {
    const [checkedCoachValues, setCheckedValues] = useState([]);

    const handleCheckboxChange = (value) => {
        if (checkedCoachValues.includes(value)) {
            setCheckedValues(checkedCoachValues.filter((val) => val !== value));
        } else {
            setCheckedValues([...checkedCoachValues, value]);
        }
    };

    const renderCheckboxes = () => {
        const instructorLevels = [
            { label: 'Level 1', value: 'instructor1' },
            { label: 'Level 2', value: 'instructor2' },
            { label: 'Level 3', value: 'instructor3' },
            { label: 'Level 4', value: 'instructor4' },
        ];

        const coachLevels = [
            { label: 'Level 100', value: 'coach100' },
            { label: 'Level 200', value: 'coach200' },
            { label: 'Level 300', value: 'coach300' },
            { label: 'Level 400', value: 'coach400' },
        ];

        return instructorLevels.map((instructor) => (
            <tr key={instructor.value}>
                <td>
                    <div className='data-flex'>
                        <input
                            type="checkbox"
                            checked={checkedCoachValues.includes(instructor.value)}
                            onChange={() => handleCheckboxChange(instructor.value)}
                        />
                        <p>{instructor.label}</p>
                    </div>
                </td>
                <td>
                    <div className='data-flex'>
                        <input
                            type="checkbox"
                            checked={checkedCoachValues.includes(coachLevels[instructorLevels.indexOf(instructor)].value)}
                            onChange={() => handleCheckboxChange(coachLevels[instructorLevels.indexOf(instructor)].value)}
                        />
                        <p>{coachLevels[instructorLevels.indexOf(instructor)].label}</p>
                    </div>
                </td>
            </tr>
        ));
    };

    return (
        <div>
            <table className='coach-table'>
                <thead>
                    <tr>
                        <td>Instructor</td>
                        <td>Coach</td>
                    </tr>
                </thead>
                <tbody>
                    {renderCheckboxes()}
                </tbody>
            </table>
            <p>checked values: {checkedCoachValues}</p>
        </div>
    );
};

export default CheckboxTable;
