import React from 'react';
import { useContext } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import  { AuthorContext } from '../ContexProvider/AuthContext';


const Faq = () => {
    const { user } = useContext(AuthorContext)
    return (
        <div className='w-75 mx-auto'>
            <h2 className='text-center mb-5'>Frequanci</h2>
            <Accordion defaultActiveKey={['0']} alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>What you learn this Website ?</Accordion.Header>
                    <Accordion.Body>
                       <p>
                            <span className='fw-bold'>Programming King</span>
                            This is a learning website. you can learn and get knowladge in this platfrom
                            this have html,css, bootstrap,react js,javascript,node js
                            allready you can know that is a learning website so you can purcess the the code
                            this website is a simple learning website
                            thanks for the learning Website
                        </p>
 
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Why You learn this website ?</Accordion.Header>
                    <Accordion.Body>
                       <p>
                        hello visitor, you allready know this website is a learning platfrom.you can get premimum vedio or learning free in this website. and make your own fucture.
                       </p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Faq;