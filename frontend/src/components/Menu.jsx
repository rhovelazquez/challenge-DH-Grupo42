import React from 'react';
import logo from '../assets/img/logo-dh.png'

function Menu(){
    return(
        <>
        {/* <!--Sección menu--> */}
		<header className="menu-wrap">
			<figure className="user">
				<div className="user-avatar">
					<a href="/"><img src={logo} alt="Logo Digital House	"/></a>
					
				</div>
				<figcaption>
					Digital House
				</figcaption>
			</figure>
			<nav>
				<section className="menu">
					<h3>Opciones</h3>
					<ul>
						<li>
							<a href="#">
								<i className="bi bi-building" style={{fontSize: '1.2rem', color: 'cornflowerblue'}}></i>
                                
								- Empresas
							</a>
						</li>
						<li>
							<a href="/candidates">
								<i className="bi bi-person" style={{fontSize: '1.2rem', color: 'cornflowerblue'}}></i>
								- Aspirantes
							</a>
						</li>
						<li>
							<a href="/profession">
								<i className="bi bi-list-check" style={{fontSize: '1.2rem', color: 'cornflowerblue'}} ></i>
								- Profesiones
							</a>
						</li>
						<li>
							<a href="/register">
								<i className="bi bi-person-vcard" style={{fontSize: '1.2rem', color: 'cornflowerblue'}}></i>
								- Postulate aquí
							</a>
						</li>
						<li>
							<a href="/contact">
								<i className="bi bi-chat-left-text" style={{fontSize: '1.2rem', color: 'cornflowerblue'}} ></i>
								- Contacto
							</a>
						</li>
					</ul>
				</section>
			</nav>
		</header>
		{/* /* <!--Fin Sección menu--> */}
        </>
    )
}
export default Menu;