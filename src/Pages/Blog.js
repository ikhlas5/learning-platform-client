import React from 'react';

const Blog = () => {
    return (
        <div className='w-75 mx-auto bg-light  '>
            <div className='mt-3 mb-4'>
                <h2>what is cors?</h2>
                <p>
                    Cross-origin resource sharing (CORS) is a browser mechanism which enables controlled access to resources located outside of a given domain. It extends and adds flexibility to the same-origin policy (SOP). However, it also provides potential for cross-domain attacks, if a website's CORS policy is poorly configured and implemented. CORS is not a protection against cross-origin attacks such as cross-site request forgery (CSRF).
                </p>
            </div>
            <div>
                <h2>Why are you using firebase?</h2>

                <p>
                    Founded in 2011 as a chat API and acquired by Google in 2014, Google Firebase is a platform that now offers active backend as a service (BaaS) for building dynamic web and mobile apps.

                    Firebase concept is simple. When you build a client-side app with JavaScript or any of its frameworks, for instance, Google Firebase can turn this into a serverless app in no time. It also removes the need to manage databases yourself, as it does that for you.
                </p>

                <h2> What other options do you have to implement authentication</h2>

                <p>
                    Authentication is used by a server when the server needs to know exactly who is accessing their information or site.
                    Authentication is used by a client when the client needs to know that the server is system it claims to be.
                    In authentication, the user or computer has to prove its identity to the server or client.
                </p>
            </div>
            <div  className='mt-3 mb-4'>
                <h2>How does the private route work?</h2>
                <p>
                    The private route component is similar to the public route, the only change is that redirect URL and authenticate condition.

                    If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
                </p>
            </div>
            <div>
                <h2>What is Node? How does Node work?</h2>
                <p>
                    It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive
                </p>
            </div>
        </div>
    );
};

export default Blog;