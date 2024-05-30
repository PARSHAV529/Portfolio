
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
 


const sendEmail = (templateParams) => {
    emailjs.send('service_pzurye5', 'template_vl493sj', templateParams, 'js8P9UismTMve7qZq')
        .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        toast.success("Message was send!");
        }, (error) => {
        console.log('FAILED...', error);
        });
}

export default sendEmail;