import React, { Component } from 'react';
import NavbarTwo from '../components/myComp/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import WorksStyleTwo from '../components/myComp/WorksStyleTwo';
import CtaAreaTwo from '../components/Common/CtaAreaTwo';
import Footer from '../components/myComp/Footer';

class Portfolio extends Component {
    render() {
        return (
            <>
                <NavbarTwo />

                <PageBanner 
                    pageTitle="Our Portfolio" 
                    BGImage="bg-three"
                />  

              

                <WorksStyleTwo />

                <CtaAreaTwo />
                
                <Footer />
            </>
        );
    }
}

export default Portfolio;