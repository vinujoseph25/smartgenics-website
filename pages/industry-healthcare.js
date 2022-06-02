import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import CaseStudySidebar from '../components/CaseStudyDetails/CaseStudySidebar';
import Footer from '../components/_App/Footer';

const CaseStudyDetails = () => {
    return (
        <>
			<Navbar />
			
			<PageBanner 
                pageTitle="Health Care Industry" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Industry Details"
            /> 
            <>
                <div className="case-details-area ptb-100">
                    <div className="container">
                    <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <div className="case-details-content">
                                    <p>In each decade, a particular industry gains more popularity and grows faster than other industries. In the early 1900s, the agricultural industry soared, employing millions of people around the world. The IT industry boomed in the late 90s and forever transformed lives globally. And, right now, the healthcare industry is flourishing. In the United States, the health sector is the fastest-growing sector. What’s even better is that healthcare is being integrated with technology to make lives simpler, efficient, and effective for the masses world line. Combining healthcare with technology gives rise to a new terminology known as Modern Medicine.</p>
                                    <br />
                                </div>
                            </div>
                        </div>
                        <div className="case-details-image">
                            <img src="/images/industry-details/cases-details-1.jpg" alt="image" />
                            
                        </div>

                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <div className="case-details-content">
                                    <h3>Modern Medicines</h3>
                                    <p>Modern medicine is primarily utilizing the knowledge of IoT (Internet of Things) in healthcare to make it more competent, easily available, and smooth. Modern medicine has unleashed a whole new level of innovative treatment in healthcare. For example, Electronic Health Records (EHR) are an indispensable component in human healthcare monitoring systems. As an astronomical amount of data keeps on being produced and archived, it is getting increasingly difficult to log the real-time patient monitoring information to healthcare repositories.</p>
                                    <p>Though modern medicine has made equal efforts in becoming as tech-savvy as its peers in retailing, infrastructure, and education, it has still not succeeded in managing big data and data exchange. Fortunately, for thousands of providers out there, the Fast Healthcare Interoperability Resource (FHIR®) is starting to shine a light on an improved way forward. Let’s see how!</p>
                                    <br />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="case-details-content">
                                    <div className="case-details-image">
                                        <img src="/images/industry-details/cases-details-1.jpg" alt="image" />
                                    </div>
                                </div>
                            </div>
                            <br/>
                        </div>

                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <div className="case-details-content">
                                    <h3>Impact of SmartGenics</h3>
                                    <p>SmartGenics, an innovative start-up, has a singular vision of revolutionizing the health sector through smart technology, especially by integrating the concept of IoT with healthcare. The company has introduced a product, named Babble, which has a unique Health Connect/ The Health Connect module of Babble has the HL7® FHIR® integration standard that regulates how information is exchanged safely and securely. FHIR® has a scaffold that can be interpreted by any system and used in different ways, such as in cloud communications, EHR/EMR platforms, and healthcare facilities.</p>
                                    <p>Why should users and providers get excited about Babble? Because it can potentially make healthcare very similar to the other internet-based experiences that clients appreciate in other industries. The IoT concept is gaining popularity in the healthcare industry, but there are few tools that act as a bridge between patient-generated health data and provider workflows. Babble is that link that connects patients and providers. Apps built on an FHIR platform are able to generate analytics on patient-generated health data and provide users with solutions for disease management or patient care. For example, regular monitoring devices can evaluate an abnormal condition but do not have the capabilities to upload this information in real-time. FHIR can act as a real-time interoperability tool; for instance, the HL7® FHIR® standard can be leveraged in smart wearables. FHIR enables wearable IoT devices to interact with EHR in real-time and offer immediate decision support.</p>
                                    <br />
                                </div>
                            </div>
                            <br/>
                        </div>

                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <div className="case-details-content">
                                    <h3>Wearable Technology</h3>
                                    <p>Wearables are basically electronic devices worn close to the skin that collects data digitally and automatically. They help in monitoring patients remotely over extended periods of time, amassing comprehensive, granular data. Examples include wearables that detect glucose and lactate levels through sweat; wearables that sense cardiogenic chest wall vibrations and use that to evaluate the clinical status of patients with heart problems.</p>
                                    <br />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="case-details-content">
                                    <div className="case-details-image">
                                        <img src="/images/industry-details/cases-details-1.jpg" alt="image" />
                                    </div>
                                </div>
                            </div>
                            <br/>
                        </div>

                        <div className="row">
                        <div className="col-lg-6 col-md-12">
                                <div className="case-details-content">
                                    <div className="case-details-image">
                                        <img src="/images/industry-details/cases-details-1.jpg" alt="image" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="case-details-content">
                                    <h3>HL7</h3>
                                    <p>HL7® FHIR® standard works as an interoperable model by performing two predominant steps. Primarily, it captures data in real-time, and secondly, it seamlessly integrates the data with a healthcare system like EHR. The FHIR resources aggregate to build the patient’s record or an EHR. Utilizing smart wearables has indisputably had a very positive effect on patients’ lives. Not only are doctors able to monitor patients continuously and provide personalized treatments, but patients also feel more connected since they are able to manage their vitals always.</p>
                                    <br />
                                </div>
                            </div>
                            
                            <br/>
                        </div>

                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <div className="case-details-content">
                                    <p>Besides EHR, the FHIR standard (available in Babble) can also be employed in a hospital setting. It is implemented on an IoT device which then uploads actual ECG and pertinent trauma information to a server. FHIR application can also condense ECG information, such as vital signs, in a single observation and upload that on a server.</p>
                                    <p>The promise of HL7 FHIR reforming healthcare clearly exists – and SmartGenic’s Babble will most certainly play an integral part in that. It will help eliminate barriers to healthcare data exchange, manage and organize big data, and increase patient care through smart wearables. Modern medicine has taken the world by storm and it goes without saying that in the coming years IoT will transform the way healthcare is delivered globally.</p>
                                    <br />
                                </div>
                            </div>
                            <br/>
                        </div>


                        {/* <div className="row">
                            <div className="col-lg-9 col-md-12">
                                <div className="case-details-content">
                                    <h2>Automation solutions for healthcare</h2>
                                    <h3>Design and Development for IT Startups</h3>

                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus elit bibendum adipiscing tincidunt mattis orci consequat egestas mattis. Convallis massa feugiat sapien urna egestas elit vitae, ipsum. In pulvinar urna, viverra quam habitasse blandit eget. Quis semper consectetur sed a purus id ac, auctor. Sem sed eleifend eu iaculis enim.</p>
                                    
                                    <p>Urna tellus, duis nec consectetur tempor venenatis risus volutpat. Sit sem ornare eget auctor amet vitae. Eu nulla facilisi posuere tellus massa dignissim. Ut amet viverra non amet enim at venenatis viverra mauris. Malesuada</p>

                                    <br />

                                    <h3>Project Description</h3>

                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus elit bibendum adipiscing tincidunt mattis orci consequat egestas mattis. Convallis massa feugiat sapien urna egestas elit vitae, ipsum. In pulvinar urna, viverra quam habitasse blandit eget. Quis semper consectetur sed a purus id ac, auctor. Sem sed eleifend eu iaculis enim.</p>

                                    <p>Urna tellus, duis nec consectetur tempor venenatis risus volutpat. Sit sem ornare eget auctor amet vitae. Eu nulla facilisi posuere tellus massa dignissim. Ut amet viverra non amet enim at venenatis viverra mauris. Malesuada Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus elit bibendum adipiscing tincidunt mattis orci consequat egestas mattis. Convallis massa feugiat sapien urna egestas elit vitae, ipsum. In pulvinar urna, viverra quam habitasse blandit eget. Quis semper consectetur sed a purus id ac, auctor. Sem sed eleifend eu iaculis enim.</p>

                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus elit bibendum adipiscing tincidunt mattis orci consequat egestas mattis. Convallis massa feugiat sapien urna egestas elit vitae, ipsum. In pulvinar urna,</p>
                                </div>

                                <div className="case-details-overview-image">
                                    <img src="/images/industry-details/cases-details-2.jpg" alt="image" />
                                </div>

                                <div className="case-details-overview-image">
                                    <img src="/images/industry-details/cases-details-3.jpg" alt="image" />
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-12">
                                <CaseStudySidebar />
                            </div>
                        </div> */}
                    </div>
                </div>

                <style jsx>{`
                    .case-details-image {
                        text-align: center;
                        margin-bottom: 40px;
                    }
                    .case-details-content {
                        margin-right: 50px;
                    }
                    .case-details-content h3 {
                        font-size: 28px;
                        margin-bottom: 15px;
                    }
                    .case-details-content p {
                        font-size: 15px;
                    }
                    .case-details-overview-image {
                        margin-top: 35px;
                    }

                    // Responsive Style
                    @media only screen and (max-width: 767px) {
                        .case-details-image {
                            margin-bottom: 25px;
                        }
                        .case-details-content {
                            margin-right: 0;
                        }
                        .case-details-content h3 {
                            font-size: 22px;
                        }
                    }

                    @media only screen and (min-width : 768px) and (max-width : 991px) {
                        .case-details-content {
                            margin-right: 0;
                        }
                    }

                    @media only screen and (min-width : 992px) and (max-width : 1199px) {
                        .case-details-content {
                            margin-right: 0;
                        }
                    }
                `}</style>
            </>
			<Footer />
		</>
    )
}

export default CaseStudyDetails;