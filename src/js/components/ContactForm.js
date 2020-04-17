import React from 'react';



const ContactForm = () => (
    <form id='contact-form' method='post'>
    <div className='contact-form-row'>
        <div className='input-container name'>
            <label htmlFor='contact-fname'>First Name</label>
            <input id='contact-fname' name='contact_fname' type='text' />
        </div>
        <div className='input-container email'>
            <label htmlFor='contact-email'>Email</label>
            <input id='contact-email' name='contact_email' type='email' />
        </div>
    </div>
    <div className='contact-form-row'>
        <div className='input-container message'>
            <label htmlFor='contact-message'>Message</label>
            <textarea id='contact-message' name='contact_message' >

            </textarea>
        </div>
    </div>
    <div className='contact-form-row submit'>
        <div className='contact-submit-wrapper'>
            <input id='contact-submit' type='submit' name='contact_submit' value='submit'/>
        </div>
        
    </div>
</form>
);

export default ContactForm;