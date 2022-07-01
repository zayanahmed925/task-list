import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
const Calender = () => {
    const [date, setDate] = useState(new Date())
    return (
        <div>
            <div className=' flex justify-center items-center'>
                <div class="w-10/12 lg:w-5/12  bg-base-100 shadow-xl ">
                    <div class="card-body">
                        <DayPicker
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calender;