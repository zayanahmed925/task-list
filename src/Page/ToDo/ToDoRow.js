import React from 'react';

const ToDoRow = ({ task, index }) => {
    return (
        <tr>
            <th>
                <div>{index + 1}</div>
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

export default ToDoRow;