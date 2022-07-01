import React, { useEffect, useState } from 'react';
import EditModal from './EditModal';
import TaskTableRow from './TaskTableRow';

const TaskTable = () => {
    const [tasks, setTasks] = useState([])
    const [editTask, setEditTask] = useState(null)
    const [modal, setModal] = useState(false)

    useEffect(() => {
        fetch('https://arrogant-whistler-62087.herokuapp.com/tasks')
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
                                setModal={setModal}
                            ></TaskTableRow>)
                        }
                    </tbody>

                </table>
            </div>
            {
                modal && <EditModal
                    editTask={editTask}
                    setEditTask={setEditTask}
                    setModal={setModal}
                ></EditModal>
            }
        </div>
    );
};

export default TaskTable;