import React, { useEffect, useState } from 'react';
import CompletedTaskRow from './CompletedTaskRow';

const CompletedTask = () => {
    const [tasks, setTasks] = useState()
    useEffect(() => {
        fetch('http://localhost:5000/task')
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [tasks])
    return (
        <div className=' flex justify-center items-center'>
            <div class="card w-9/12 lg:w-6/12  bg-base-100 shadow-xl ">
                <div class="card-body">

                    <div class="overflow-x-auto w-full">
                        <table class="table w-full">
                            {/* <!-- head --> */}
                            <thead>
                                <tr>
                                    <th>No.</th>
                                    <th>Name</th>

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