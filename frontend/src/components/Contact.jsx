import React from 'react';

function Contact(){


    return(
        <>

            <main className='content-wrap'>
                 <h1>Contactanos</h1>
                 <p>Puedes contactarnos a través de nuestras redes sociales o por correo electrónico.</p>

                 {/* Redes Sociales */}
                 <div>
                    <div className="d-flex position-relative">

                        <div>
                            <h5 className="mt-0"></h5>
                            <a href="https://www.facebook.com" className="stretched-link" style={{ margin:'15px'}}><i className="bi bi-facebook"  style={{fontSize: '1.5rem'}} ></i></a>
                        </div>
                        <div>
                            <h5 className="mt-0"></h5>
                            <a href="https://www.twitter.com" className="stretched-link" style={{ margin:'15px'}} ><i className="bi bi-twitter-x" style={{fontSize: '1.5rem'}} ></i></a>
                        </div>
                        <div>
                            <h5 className="mt-0"></h5>
                            <a href="https://www.twitter.com" className="stretched-link" style={{ margin:'15px'}} ><i className="bi bi-envelope" style={{fontSize: '1.5rem'}} ></i></a>
                        </div>
                        <div>
                            <h5 className="mt-0"></h5>
                            <a href="https://www.twitter.com" className="stretched-link" style={{ margin:'15px'}} ><i className="bi bi-instagram" style={{fontSize: '1.5rem'}} ></i></a>
                        </div>
            
                    </div>
                    

                    <div className="bottom-label" style={{margin:'25px'}}>
                        © 2024 Code with Love G42
                    </div>
                </div>
            </main>
            
        </>
    )
}
export default Contact