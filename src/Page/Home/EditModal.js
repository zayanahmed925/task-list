import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
const EditModal = ({ editTask, setEditTask, setModal }) => {


    const [reload, setIsReload] = useState(true);
    const handleEdit = event => {
        event.preventDefault()
        console.log(event.target.name.value);
        const name = event.target.name.value;

        fetch(`https://arrogant-whistler-62087.herokuapp.com/tas/${editTask._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ name })
        }).then(res => res.json())
            .then((data) => {
                console.log(data);
                if (data.acknowledged === true) {
                    console.log('hi');
                    setIsReload(!reload)
                    setModal(false)
                }

            })

    }
    return (
        <div>
            <input type="checkbox" id="order-modal" className="modal-toggle" />

            <div className="modal modal-bottom sm:modal-middle ">
                <div className="modal-box">
                    <label htmlFor="order-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <form onSubmit={handleEdit} className='grid grid-cols-1 gap-5 justify-items-center mt-2'>
                        <input type="text" name='name' placeholder='Change Task Name' className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value='Edit' className="btn btn-primary w-full max-w-xs" />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default EditModal;