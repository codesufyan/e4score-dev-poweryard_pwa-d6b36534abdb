import React, { useState } from 'react'
import GaugeChart from 'react-gauge-chart';

const Guage = ({ descriptionInBottom = false }) => {
    const [tasksAssigned, setTasksAssigned] = useState(34);
    const [pending, setPending] = useState(14);
    const [pendingpercentage, setPendingpercentage] = useState(35);

    return (
        <div className={`d-flex justify-content-between align-items-center ${descriptionInBottom ? 'flex-column-reverse' : ''}`}>
            <div className={`${descriptionInBottom ? 'w-75 text-center p-4 fs-4' : 'w-50'}`}>
                <p><span className="fw-bold">Assigned to me: </span>{tasksAssigned}</p>
                <p><span>Pending: </span>{pending}</p>
                <p><span className="text-danger">% Pending: </span>{pendingpercentage}</p>
            </div>
            <div className={`${descriptionInBottom ? 'w-75' : 'w-50'}`}>
                <GaugeChart 
                    id="gauge-chart1"
                    nrOfLevels={6}
                    hideText    
                />
            </div>
        </div>
    );
};

export default Guage;