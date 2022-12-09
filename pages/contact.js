import React, { Component } from 'react';
import NavbarTwo from '../components/myComp/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import ContactInfo from '../components/Contact/ContactInfo';
import ContactForm from '../components/Contact/ContactForm';
import Newsletter from '../components/Common/Newsletter';
import Footer from '../components/myComp/Footer';

class Contact extends Component {
    render() {
        return (
            <>
                <NavbarTwo />

                <PageBanner 
                    pageTitle="Contact Us" 
                    BGImage="bg-one"
                />  

                <ContactInfo />
                
                <ContactForm />

                <div className="ptb-100">
                    <Newsletter />
                </div>

                <Footer/>
            </>
        );
    }
}

export default Contact;