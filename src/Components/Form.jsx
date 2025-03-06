import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import Swal from 'sweetalert2';
const Form = () => {
    const [data, setData] = useState({
        name: '',
        email: '',
        phone: '',
        university: '',
        university_level: '',
        course: ''
    })
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://fake-form.onrender.com/api/students/addStudent', data, {
                headers: { 'Content-Type': 'application/json' }
            });
            console.log("Response:", response);
            Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: 'Form submitted successfully!',
                confirmButtonColor: '#d33',
                confirmButtonText: 'OK'
            });
        }
        catch (err) {
            console.log("Error:", err)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Error submitting form. Please try again.',
                confirmButtonColor: '#d33',
                confirmButtonText: 'OK'
            });
        }
    }
    return (
        <div className="w-full flex flex-col justify-center items-center mb-24  ">
            <div className="text-center md:mt-12 mt-9 mb-8 md:text-base text-[20px]">
                <h1 className="font-bold mb-3">Cautions</h1>
                <p className="md:text-sm text-[16px] px-2 tracking-wide">Be sure to check your E-mail after submitting the form!</p>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col md:w-[25%] w-[90%] md:gap-2 gap-4 ">
                <div className="flex flex-col ">
                    <label htmlFor="">Name</label>
                    <input type="text" name='name' value={data.name} required onChange={handleChange} className="border border-slate-200 md:py-1 py-2" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="">Email</label>
                    <input type="email" name='email' value={data.email} required onChange={handleChange} className="border border-slate-200 md:py-1 py-2" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="">Phone</label>
                    <input type="text" name='phone' value={data.phone} required onChange={handleChange} className="border border-slate-200 md:py-1 py-2" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="">University</label>
                    <select name="university" value={data.university} required onChange={handleChange} className="border border-slate-200 md:py-1 py-2">
                        <option value="">Select an option:</option>
                        <option value="Cairo">Cairo</option>
                        <option value="Ain Shams">Ain Shams</option>
                        <option value="Helwan">Helwan</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="">University level</label>
                    <select name="university_level" value={data.university_level} required onChange={handleChange} className="border border-slate-200 md:py-1 py-2">
                        <option value="">Select an option:</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="">Course</label>
                    <select name="course" value={data.course} required onChange={handleChange} className="border border-slate-200 md:py-1 py-2">
                        <option value="">Select an option:</option>
                        <option value="C++">C++</option>
                        <option value="OOP">OOP</option>
                        <option value="Flutter">Flutter</option>
                        <option value="Ds & Algorithms">Ds & Algorithms</option>
                        <option value="UI/UX">UI/UX</option>
                    </select>
                </div>
                <button type="submit" className="text-white bg-[#700601] md:py-1.5 py-2 md:text-sm text-[15px] mt-1.5">Submit</button>
            </form>
        </div>
    )
}

export default Form
