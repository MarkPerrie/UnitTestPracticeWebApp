import { useState } from 'react';
import './Email.css'

const handleSubmit = (e) => {
    e.preventDefault();
    axios({
        method: "POST",
        url: "http://localhost:5000/email",
        data: this.state
    }).then((response) => {
        if (response.data.status === 'success') {
            alert("Message Sent.");
            this.resetForm()
        } else if (response.data.status === 'fail') {
            alert("Message failed to send.")
        }
    })
}
const resetForm = () => {
    changeName()
    changeEmail()
    changeSubject()
    changeMessage()
}

function Email() {
    const [name, changeName] = useState()
    const [email, changeEmail] = useState()
    const [subject, changeSubject] = useState()
    const [message, changeMessage] = useState()
    return (
        <form>
            <div className="form-group">
                <label>To:</label>
                <input type="email" className="form-control" id="InputEmail1" placeholder="Enter email" />
            </div>

            <div className="form-group">
                <label>Subject:</label>
                <input type="text" className="form-control" id="InputEmail1" placeholder="Enter subject" />
            </div>
            <div className="form-group">
                <label>Message:</label>
                <textarea className="form-control" id="formControlTextarea" rows="6" placeholder="Enter subject"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default Email;
