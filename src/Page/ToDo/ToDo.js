import React, { useEffect, useState } from 'react';
import TaskTableRow from '../Home/TaskTableRow';
import ToDoRow from './ToDoRow';

const ToDo = () => {
    const [tasks, setTasks] = useState()
    useEffect(() => {
        fetch('http://localhost:5000/allTasks')
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
                                    <th>Job</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* <!-- row 1 --> */}

                                {
                                    tasks?.map((task, index) => <ToDoRow
                                        key={task._id}
                                        task={task}
                                        index={index}
                                    ></ToDoRow>)
                                }
                            </tbody>


                        </table>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ToDo;