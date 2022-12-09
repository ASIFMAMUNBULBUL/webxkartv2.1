import React, { Component } from 'react';
import NavbarTwo from '../components/myComp/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import ServicesStyleTwo from '../components/myComp/Services';
import CtaArea from '../components/Common/CtaArea';
import Footer from '../components/myComp/Footer';

class Services2 extends Component {
    render() {
        return (
            <>
                <NavbarTwo />
                
                <PageBanner 
                    pageTitle="Services Style 2" 
                    BGImage="bg-two"
                />  

                <ServicesStyleTwo />

                <CtaArea />

                <Footer />
            </>
        );
    }
}

export default Services2;