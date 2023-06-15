import React, { useState } from 'react';

const DisciplinesTable = () => {
    const [checkedValues, setCheckedValues] = useState([]);

    const handleCheckboxChange = (value) => {
        if (checkedValues.includes(value)) {
            setCheckedValues(checkedValues.filter((val) => val !== value));
        } else {
            setCheckedValues([...checkedValues, value]);
        }
    };

    const renderCheckboxes = () => {
        const skiDisciplines = [
            { label: 'Alpine', value: 'SkiAlpine' },
            { label: 'Slopestyle', value: 'SkiSlopestyle' },
            { label: 'Halfpipe', value: 'SkiHalfpipe' },
            { label: 'Skier Cross', value: 'SkierCross' },
        ];
        
        const snowDisciplines = [
            { label: 'Alpine (PGS/PSL)', value: 'SnowAlpine' },
            { label: 'Boarder Cross', value: 'SnowBoarderCross' },
            { label: 'Slopestyle', value: 'SnowSlopestyle' },
            { label: 'Halfpipe', value: 'SnowHalfpipe' },
        ];

        return skiDisciplines.map((discipline) => (
            <tr key={discipline.value}>
                <td>
                    <div className='data-flex'>
                        <input
                            type="checkbox"
                            checked={checkedValues.includes(discipline.value)}
                            onChange={() => handleCheckboxChange(discipline.value)}
                        />
                        <p>{discipline.label}</p>
                    </div>
                </td>
                <td>
                    <div className='data-flex'>
                        <input
                            type="checkbox"
                            checked={checkedValues.includes(snowDisciplines[skiDisciplines.indexOf(discipline)].value)}
                            onChange={() => handleCheckboxChange(snowDisciplines[skiDisciplines.indexOf(discipline)].value)}
                        />
                        <p>{snowDisciplines[skiDisciplines.indexOf(discipline)].label}</p>
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
                        <td>Ski Disciplines</td>
                        <td>Snowboard Disciplines</td>
                    </tr>
                </thead>
                <tbody>
                    {renderCheckboxes()}
                </tbody>
            </table>
            <p>checked values: {checkedValues}</p>
        </div>
    );
};

export default DisciplinesTable;
