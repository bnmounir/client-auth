import React from 'react';

export default function Footer() {
    return (
        <>
            <footer
                style={{ flexShrink: '0', marginTop: '80px' }}
                className='page-footer blue-grey darken-4'
            >
                <div className='container'>
                    <div className='row'>
                        <div className='col l6 s12'>
                            <h5 className='white-text'>Developer's note:</h5>
                            <p className='grey-text text-lighten-4'>
                                This work is part of a series of self
                                development projects and courses, promoting the
                                know-how in terms of technologies, strategies
                                and architecture design.
                            </p>
                        </div>
                        <div className='col l3 s12'>
                            <h5 className='white-text'>Codebase</h5>
                            <ul>
                                <li>
                                    <a
                                        className='white-text'
                                        href='https://github.com/bnmounir'
                                    >
                                        Github
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className='col l3 s12'>
                            <h5 className='white-text'>Connect</h5>
                            <ul>
                                <li>
                                    <a
                                        className='white-text'
                                        href='https://www.linkedin.com/in/bnmounir/'
                                    >
                                        LinkedIn
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='footer-copyright'>
                    <div className='container'>Mounir B.</div>
                </div>
            </footer>
        </>
    );
}
