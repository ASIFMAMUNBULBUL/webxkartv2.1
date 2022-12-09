import React, { Component } from 'react';
import NavbarTwo from '../components/myComp/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import BlogDetailsContent from '../components/Blog/BlogDetailsContent';
import Footer from '../components/myComp/Footer';

class BlogDetails extends Component {
    render() {
        return (
            <>
                <NavbarTwo />

                <PageBanner 
                    pageTitle="Blog Details" 
                    BGImage="bg-two"
                />  

                <BlogDetailsContent />
                
                <Footer/>
            </>
        );
    }
}

export default BlogDetails;