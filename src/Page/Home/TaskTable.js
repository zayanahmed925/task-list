import React, { useEffect, useState } from 'react';
import TaskTableRow from './TaskTableRow';

const TaskTable = () => {
    const [tasks, setTasks] = useState()
    useEffect(() => {
        fetch('http://localhost:5000/tasks')
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [tasks])
    return (
        <div class="overflow-x-auto w-full">
            <table class="table w-full">
                {/* <!-- head --> */}
                <thead>
                    <tr>
                        <th>Status</th>
                        <th>Name</th>
                        <th>Job</th>
                    </tr>
                </thead>
                <tbody>
                    {/* <!-- row 1 --> */}

                    {
                        tasks?.map(task => <TaskTableRow
                            task={task}
                            key={task._id}
                        ></TaskTableRow>)
                    }
                </tbody>


            </table>
        </div>
    );
};

export default TaskTable;