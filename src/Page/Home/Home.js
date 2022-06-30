import React from 'react';
import TaskTable from './TaskTable';

const Home = () => {
    return (
        <div className=''>
            <div className=' flex justify-center items-center'>
                <div class="card w-9/12  bg-base-100 shadow-xl ">
                    <div class="card-body">
                        <div class="form-control w-full ">
                            <label class="label">
                                <span class="label-text">What do you need to do today?</span>
                            </label>
                            <input type="text" placeholder="Type here" class="input input-bordered w-full " />
                        </div>
                        <TaskTable></TaskTable>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;