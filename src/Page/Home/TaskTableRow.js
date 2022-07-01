import React, { useEffect, useState } from 'react';
import UseComplete from '../../Hooks/UseComplete';
import edit from '../../img/edit.png';
import { BiEdit } from 'react-icons/bi';
const TaskTableRow = ({ task, setEditTask, setModal }) => {

    const [checked, setChecked] = useState(false);
    const [isChecked, setIsChecked] = useState();
    const handleEdit = (task) => {
        setModal(true)
        setEditTask(task)
    }

    useEffect(() => {
        if (checked === true) {
            const url = `https://arrogant-whistler-62087.herokuapp.com/tasks/${task._id}`;
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
                <label onClick={() => handleEdit(task)} for="order-modal" className="btn btn-xs btn-info"><BiEdit /></label>
            </th>
        </tr>
    );
};

export default TaskTableRow;