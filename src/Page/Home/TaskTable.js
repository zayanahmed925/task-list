import React, { useEffect, useState } from 'react';
import EditModal from './EditModal';
import TaskTableRow from './TaskTableRow';

const TaskTable = () => {
    const [tasks, setTasks] = useState([])
    const [editTask, setEditTask] = useState(null)
    useEffect(() => {
        fetch('http://localhost:5000/tasks')
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [tasks])
    return (
        <div>
            <div class="overflow-x-auto w-full">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>Complete</th>
                            <th>Task</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}

                        {
                            tasks?.map(task => <TaskTableRow
                                task={task}
                                key={task._id}
                                setEditTask={setEditTask}
                            ></TaskTableRow>)
                        }
                    </tbody>


                </table>
            </div>
            {
                editTask && <EditModal
                    editTask={editTask}
                    setEditTask={setEditTask}
                ></EditModal>
            }
        </div>
    );
};

export default TaskTable;