import React from 'react';
import ContactForm from './ContactForm';
import regeneratorRuntime from 'regenerator-runtime';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

class ContactSection extends React.Component{
    constructor(){
        super();
        this.state = {
            error: false,
            errorMessage: '',
            formSubmitComplete: false,
            formSubmitting: false
        }
        this.validateForm = this.validateForm.bind(this);
    }

    componentDidMount(){
        let self = this;
        const contactForm = document.getElementById('contact-form');
        contactForm.addEventListener('submit', (e)=>{
            e.preventDefault();
            const name = document.getElementById('contact-fname').value;
            const email = document.getElementById('contact-email').value;
            const message = document.getElementById('contact-message').value;
            const data = {
                name,
                email,
                message
            };

            this.validateForm(data);
        })
    }

    


    async validateForm(formDataObj){
        this.setState(()=>{
            return{
                formSubmitting: true
            }
        })

        const formResults = await fetch('http://michaelsraj.com/contact_form_ajax.php',
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formDataObj)
            }
        );

        const results = await formResults.json();
        if(results){
            setTimeout(()=>{
                this.setState(()=>{
                    return{
                        formSubmitting: false
                    }
                })
            },1000)

        }else{
            console.log('no results')
        }
        
        const valid = results.name_valid;
        const {name_valid, email_valid, message_valid, sent} = results;
        
        if(name_valid && email_valid && message_valid && sent){
            this.setState(()=>{
                setTimeout(()=>{
                    this.setState(()=>{
                        return {
                            formSubmitComplete: true,
                            error: false
                        }
                    })
                },500)

            });
        }else{
            console.log('error')
            this.setState(()=>{
                return{
                    error: true
                }
            });
        }
        
    }


    render(){

        return(

        <section id='contact' className='section-padding-y-l'>
            <h3 className='section-title'>NEED A DEVELOPER? GOT A QUESTION? I'D LOVE TO HELP.</h3>
            <div className='contact-form-wrap'>
                {
                    this.state.error &&
                    <p className='form-error'>Unable to submit the form as is. Please review the information and try again.</p>
                }
                {this.state.formSubmitting && 
                    <img id='submitting-img' src='./images/Logo_100px_red.svg' />
                }
                <TransitionGroup>
                    {!this.state.formSubmitComplete &&
                    <CSSTransition
                    key="form"
                    timeout={400}
                    classNames="fade"
                    >
                        <ContactForm />
                    </CSSTransition>
                    }

                    {this.state.formSubmitComplete &&
                    <CSSTransition
                    key="text"
                    timeout={400}
                    classNames="contact-message"
                    >
                        <div id='form-success'>
                            Form Submitted Successfully!
                        </div>
                        
                    </CSSTransition>
                    }
                </TransitionGroup>
            </div>




        </section>




        )
    }
}


export default ContactSection;

