import React from 'react';
import { useForm } from 'react-hook-form';
import TaskTable from './TaskTable';

const Home = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        fetch('https://arrogant-whistler-62087.herokuapp.com/tasks', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(results => {
                console.log(results);

            })

    };
    return (
        <div className=''>
            <div className=' flex justify-center items-center h-[90vh]'>
                <div class="card w-9/12 lg:w-6/12  bg-base-100 shadow-xl ">
                    <div class="card-body">
                        <form onSubmit={handleSubmit(onSubmit)} className="form-control w-full">
                            <label class="label">
                                <span class="label-text">What do you need to do today?</span>
                            </label>
                            <input {...register("name")} class="input input-bordered w-full " placeholder="Enter your Task" required />
                        </form>

                        {/* <div class="form-control w-full ">
                            <label class="label">
                                <span class="label-text">What do you need to do today?</span>
                            </label>
                            <input type="text" placeholder="Type here" class="input input-bordered w-full " />
                        </div> */}
                        <TaskTable></TaskTable>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;