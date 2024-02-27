import React from 'react';
import banner from '../assets/img/banner.jpg'
//css
import '../assets/css/bootstrap.min.css'
import '../assets/css/font-awesome.min.css'
import '../assets/css/normalize.min.css'
import '../assets/css/style.css'
//components
import Menu from './Menu.jsx'
import Acceso from './Acceso.jsx';
import Card from './Card.jsx';
import Profession from './Profession.jsx';





function Demo(){
    return (
        
        <>

        {/* <!--Dashboard--> */}
	<div className="container" >
		{/* <!--Sección de acceso--> */}
		{/* <Acceso/> */}
		{/* //fin de seccion de acceso */}
		{/* //seccion de menu */}
		{/* <Menu/> */}
		{/* //fin de seccion de menu */}
		
		{/* //Seccion contenido */}
		<main className="content-wrap">
			{/* <!--Preventa--> */}
			<header className="preventa">

				<h2>Búsqueda y selección</h2>
				<p className="text-center h5">Encontramos talento para tu empresa, en todos los cargos administrativos, profesionales y técnicos.</p>
				<div>
					<img src={banner} alt="Rcursos Humanos"/>
				</div>
				
			{/* <!--Fin Encabezado--> */}	
			</header>
			{/* <!--Fin Preventa--> */}

			{/* <!--Sección aspirantes--> */}
			<Card/>
			{/* <!--Fin sección aspirantes-->
			<!--Sección de profesiones--> */}
			<Profession/>
			
			{/* <!--Fin sección profesiones--> */}
		</main>
		{/* <!--Fin Sección contenido--> */}
	</div>
	{/* <!--Fin Dashboard--> */}
        </>
    )

}
export default Demo;