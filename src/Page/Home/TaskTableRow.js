import React from 'react';

const TaskTableRow = ({ task }) => {
    return (
        <tr>
            <th>
                <label>
                    <input type="checkbox" class="checkbox" />
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
                <button class="btn btn-ghost btn-xs">Edit</button>
            </th>
        </tr>
    );
};

export default TaskTableRow;