import React from 'react';
import { useForm } from 'react-hook-form';
const EditModal = ({ editTask }) => {
    const { _id } = editTask


    const handleEdit = (event) => {
        event.preventdefault()
    }

    return (
        <div>
            <input type="checkbox" id="order-modal" className="modal-toggle" />

            <div className="modal modal-bottom sm:modal-middle ">
                <div className="modal-box">
                    <div className="text-center p-5 flex-auto justify-center">

                        <h2 className="text-xl font-bold py-4 ">Are you sure want to Edit?</h2>
                        <form className="form-control w-full">
                            <label class="label">
                                <span class="label-text">What do you need to do today?</span>
                            </label>
                            <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                            <div className="modal-action">
                                <button onClick={() => handleEdit(_id)} className="btn btn-sm btn-error">Edit</button>
                                <label for="order-modal" className="btn btn-sm btn-success">Cancel</label>
                            </div>
                        </form>

                    </div>
                    {/* <div className="modal-action">

                        <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-error">Edit</button>
                        <label for="order-modal" className="btn btn-sm btn-success">Cancel</label>
                    </div> */}
                </div>
            </div>

        </div>
    );
};

export default EditModal;