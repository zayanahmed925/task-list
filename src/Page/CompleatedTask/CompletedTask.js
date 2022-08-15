import React, { useEffect, useState } from 'react';
import CompletedTaskRow from './CompletedTaskRow';

const CompletedTask = () => {
    const [tasks, setTasks] = useState()
    useEffect(() => {
        fetch('https://arrogant-whistler-62087.herokuapp.com/task')
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [tasks])
    return (
        <div className=' flex justify-center items-center h-[90vh]'>
            <div class="card w-9/12 lg:w-6/12  bg-base-100 shadow-xl ">
                <div class="card-body">

                    <div class="overflow-x-auto w-full">
                        <table class="table w-full">
                            {/* <!-- head --> */}
                            <thead>
                                <tr>
                                    <th>No.</th>
                                    <th>Task</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* <!-- row 1 --> */}

                                {
                                    tasks?.map((task, index) => <CompletedTaskRow
                                        key={task._id}
                                        task={task}
                                        index={index}
                                    ></CompletedTaskRow>)
                                }
                            </tbody>


                        </table>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CompletedTask;