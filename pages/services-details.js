import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import WorkProcess from '../components/Common/WorkProcess';
import PricePlansOne from '../components/PricePlans/PricePlansOne';
import CTA from '../components/Common/CTA';
import ServicesDetailsContent from '../components/ServicesDetails/ServicesDetailsContent';
import Footer from '../components/_App/Footer';

const ServicesDetails = () => {
    return (
        <>
			<Navbar />
			
			<PageBanner 
                pageTitle="Services Details" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Services Details"
            /> 
			
            <ServicesDetailsContent />

            <WorkProcess />

            <PricePlansOne />

            <div className="ptb-100">
                <CTA />
            </div>

			<Footer />
		</>
    )
}

export default ServicesDetails;