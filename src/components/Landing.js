import React from 'react';

const Landing = () => {
    return (
        <>
            <div style={{ textAlign: 'center' }}>
                <h1>Welcome</h1>
                <p>This app is for educational purposes only</p>
            </div>
            <br />
            <br />
            <br />
            <br />
            <h4>Tech Stack</h4>
            <br />
            <h5>1. Client</h5>
            <p>
                <a href='https://github.com/bnmounir/server-api'>Code</a>
            </p>
            <br />
            <table className='striped centered responsive-table'>
                <thead>
                    <tr>
                        <th>Feature Name</th>
                        <th>Description</th>
                        <th>Classification</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>React, React Router</td>
                        <td>
                            Component based web app, all the navigation is
                            handled with react-router.
                        </td>
                        <td>library to framework</td>
                    </tr>
                    <tr>
                        <td>Redux, Redux Form</td>
                        <td>
                            state management and all data flows through redux.
                        </td>
                        <td>library</td>
                    </tr>
                    <tr>
                        <td>JSON Web Token</td>
                        <td>
                            used for handling the auth state for the users,
                            stored on localStorage.
                        </td>
                        <td>Standard</td>
                    </tr>
                </tbody>
            </table>
            <br />
            <h5>2. Server</h5>
            <p>
                <a href='https://github.com/bnmounir/server-api'>Code</a>
            </p>
            <br />
            <table className='striped centered responsive-table'>
                <thead>
                    <tr>
                        <th>Feature Name</th>
                        <th>Description</th>
                        <th>Classification</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Google App Engine</td>
                        <td>the platform where the server is hosted</td>
                        <td>PaaS</td>
                    </tr>
                    <tr>
                        <td>Node, Express</td>
                        <td>
                            node runtime environment and Express for building
                            the REST API
                        </td>
                        <td>runtime, framework</td>
                    </tr>
                    <tr>
                        <td>Passport, local and jwt strategies</td>
                        <td>
                            the jwt strategy handles the authentication of users
                            on the server through a token while the local
                            strategy handles it through email and password
                        </td>
                        <td>middleware</td>
                    </tr>
                    <tr>
                        <td>bcrypt</td>
                        <td>
                            hashes the password before storing them in the
                            database, also does comparison of hashes during the
                            login process
                        </td>
                        <td>library</td>
                    </tr>
                </tbody>
            </table>
            <p>
                <a href='https://server-api-for-testing-auth.appspot.com'>
                    Api endpoint
                </a>
            </p>
            <br />
            <h5>3. Database:</h5>
            <br />
            <table className='striped centered responsive-table'>
                <thead>
                    <tr>
                        <th>Feature Name</th>
                        <th>Description</th>
                        <th>Classification</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>MongoDB Atlas</td>
                        <td>a cloud database service deployed on AWS</td>
                        <td>database service</td>
                    </tr>
                    <tr>
                        <td>Mongoose</td>
                        <td>
                            makes interactions between Node and MongoDB much
                            easier
                        </td>
                        <td>ODM (object document mapper)</td>
                    </tr>
                </tbody>
            </table>
            <br />
        </>
    );
};

export default Landing;
