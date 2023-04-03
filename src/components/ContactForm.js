import { useState } from "react"

const ContactForm = () => {
    const initialState = {
        name: 'John Doe',
        email: 'john.doe@gmail.com',
        message: ''
    }

    const [fields, setFields] = useState(initialState)

    const handleFieldChange = (e) => {
        setFields({
            ...fields,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="flex flex-col flex-wrap justify-between">
            <div className="flex justify-center">
                <h3 className='text-xl font-medium text-center p-1 lg:text-3xl lg:mb-5 dark:text-teal-600'>Contact</h3>
            </div>
            <div className="flex justify-center">
                <p className='text-base text-center max-w-screen-md dark:text-slate-400 lg:text-lg'>You can get in touch with me by 
                sending a DM over <span className="text-teal-600"><a href="https://www.linkedin.com/in/jamie-catto-6876421b8/">LinkedIn</a></span>.</p>
            </div>
            <div className="flex justify-center my-5">
                <a href='#' className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md'>
                    Get in touch
                </a>
            </div>
        </div>
    )
}

export default ContactForm