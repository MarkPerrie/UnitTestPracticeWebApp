import { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import './Email.css'


const resetForm = () => {
    setEmail("")
    setSubject("")
    setMessage("")
}

function Email() {
    const [email, setEmail] = useState()
    const [subject, setSubject] = useState()
    const [message, setMessage] = useState()

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = async data => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        };
        try {
            fetch(`http://localhost:5000/email?email=${data.email}&subject=${data.subject}&message=${data.message}`, requestOptions)
                .then(response => response.json())
                .then(data => console.log(data));
        } catch (error) {
            alert("email failed to send" + email)
        }
    }


    const onReset = () => {
        reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <label>To:</label>
                <input className="form-control" placeholder="email" {...register("email", { required: true })} />
            </div>
            <div className="form-group">
                <label>Subject:</label>
                <input className="form-control" placeholder="subject"{...register("subject", { required: true })} />
            </div>
            <div className="form-group">
                <label>Message:</label>
                <textarea className="form-control" rows="6" placeholder="message"{...register("message", { required: true })} />
            </div>
            <div className="form-group">
                {errors.exampleRequired && <span>This field is required</span>}
                <button type="submit" className="btn btn-primary">Submit</button>
                <button onClick={onReset} className="btn btn-danger">Reset</button>
            </div>
        </form>
    )
}

export default Email;
