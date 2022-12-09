import React, { Component } from 'react';
import NavbarTwo from '../components/myComp/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import BlogGridThree from '../components/Blog/BlogGridThree';
import Footer from '../components/myComp/Footer';

class Blog extends Component {
    render() {
        return (
            <>
                <NavbarTwo />

                <PageBanner 
                    pageTitle="Blog Grid" 
                    BGImage="bg-three"
                />  

                <BlogGridThree />
                
                <Footer/>
            </>
        );
    }
}

export default Blog;