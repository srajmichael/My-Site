import React from 'react';

const ContactSection = () => (
    <section id='contact' className='section-padding-y-l'>
        <h3 className='section-title'>NEED A DEVELOPER? GOT A QUESTION? I'D LOVE TO HELP.</h3>
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
                    <input type='submit' name='contact_submit' value='submit'/>
                </div>
                
            </div>
            
        </form>
    </section>
);


export default ContactSection;