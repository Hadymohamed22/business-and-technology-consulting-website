import { useState } from "react";

function ContactForm() {
    const [values, setValues] = useState({
        name: "",
        email: "",
        inquiry: "",
    })

    const changeValues = (e) => {
        if (e.target.type === "text") {
            setValues((previousState) => {
                return { ...previousState, name: e.target.value }
            })
        } else if (e.target.type === 'email') {
            setValues((previousState) => {
                return { ...previousState, email: e.target.value }
            })
        } else if (e.target.tagName === 'textarea') {
            setValues((previousState) => {
                return { ...previousState, inquiry: e.target.value }
            })
        }
    }
    return (
        <form className="position-relative py-3 px-2 d-flex flex-column">
            <label>
                Enter Name :
            </label>
            <input type="text" placeholder="Enter Your Name" required className="form-control my-1 fast-transition" onChange={changeValues} value={values.name} />
            <label>
                Enter Your Email :
            </label>
            <input type="email" placeholder="Enter Your Email" required className="form-control my-1 fast-transition" onChange={changeValues} value={values.email} />
            <label>
                Send Your Inquiry Now :
            </label>
            <textarea placeholder="Send Your Inquiry Now" required className="form-control my-1 fast-transition" onChange={changeValues} />
            <button type="submit" className="btn btn-danger mt-3 ">Submit</button>
        </form>
    )
}

export default ContactForm;