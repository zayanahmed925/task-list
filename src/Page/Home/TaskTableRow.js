import React, { useEffect, useState } from 'react';
import UseComplete from '../../Hooks/UseComplete';
import edit from '../../img/edit.png';
import { BiEdit } from 'react-icons/bi';
const TaskTableRow = ({ task, setEditTask }) => {

    const [checked, setChecked] = useState(false);
    const [isChecked, setIsChecked] = useState();


    useEffect(() => {
        if (checked === true) {
            const url = `http://localhost:5000/tasks/${task._id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',

                },
            })
                .then(res => res.json())
                .then(data => console.log(data))
        }

    }, [checked])

    return (
        <tr>
            <th>
                <label>
                    <input
                        checked={isChecked}
                        onClick={() => setIsChecked(true)}
                        type="checkbox"
                        defaultChecked={checked}
                        onChange={() => setChecked(true)}
                        class="checkbox" />
                </label>
            </th>
            <td>
                <div class="flex items-center space-x-3">

                    <div>
                        <div class="font-bold">{task.name}</div>
                    </div>
                </div>
            </td>
            <th>
                <label onClick={() => setEditTask(task)} for="order-modal" className="btn btn-xs btn-info"><BiEdit /></label>
            </th>
        </tr>
    );
};

export default TaskTableRow;