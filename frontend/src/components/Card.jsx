import React from 'react';
import banner from '../assets/img/banner.jpg'
import gloria from '../assets/img/foto1.jpg'
import daniel from '../assets/img/foto2.jpg'
import lee from '../assets/img/foto3.jpg'
import rocio from '../assets/img/foto4.jpg'
import victor from '../assets/img/foto5.jpg'
import luis from '../assets/img/foto6.jpg'


function Card(){


    return(
        <>
		<main className="content-wrap">

			{/* <!--Sección aspirantes--> */}
			<section className="content aspirantes">
				<h2>Aspirantes</h2>
				<article className="person-boxes">
					<div className="person-box shadow p-3 mb-5 bg-body-tertiary rounded">
						<div className="box-avatar">
							<img src={gloria} alt="Gloria"/>
						</div>
						<div className="box-bio">
							<h2 className="bio-name">Gloria Medina</h2>
							<p className="bio-position">Administrador</p>
						</div>
						<div className="box-actions">
							<button>
								<i className="bi bi-star"></i>
							</button>
							<button>
								<i className="bi bi-chat"></i>
							</button>
							<button>
								<i className="bi bi-envelope"></i>
							</button>
						</div>
					</div>
					<div className="person-box shadow p-3 mb-5 bg-body-tertiary rounded">
						<div className="box-avatar">
							<img src={daniel} alt="Daniel Fuentes"/>
						</div>
						<div className="box-bio">
							<h2 className="bio-name">Daniel Fuentes</h2>
							<p className="bio-position">Técnico de sonido</p>
						</div>
						<div className="box-actions">
							<button>
								<i className="bi bi-star"></i>
							</button>
							<button>
								<i className="bi bi-chat"></i>
							</button>
							<button>
								<i className="bi bi-envelope"></i>
							</button>
						</div>
					</div>
					<div className="person-box shadow p-3 mb-5 bg-body-tertiary rounded">
						<div className="box-avatar">
							<img src={lee} alt="Lee Chim"/>
						</div>
						<div className="box-bio">
							<h2 className="bio-name">Tim Tim</h2>
							<p className="bio-position">Linguista</p>
						</div>
						<div className="box-actions">
							<button>
								<i className="bi bi-star"></i>
							</button>
							<button>
								<i className="bi bi-chat"></i>
							</button>
							<button>
								<i className="bi bi-envelope"></i>
							</button>
						</div>
					</div>
					<div className="person-box shadow p-3 mb-5 bg-body-tertiary rounded">
						<div className="box-avatar">
							<img src={rocio} alt="Rocio"/>
						</div>
						<div className="box-bio">
							<h2 className="bio-name">Rocio Carle</h2>
							<p className="bio-position">Profesor</p>
						</div>
						<div className="box-actions">
							<button>
								<i className="bi bi-star"></i>
							</button>
							<button>
								<i className="bi bi-chat"></i>
							</button>
							<button>
								<i className="bi bi-envelope"></i>
							</button>
						</div>
					</div>
					<div className="person-box shadow p-3 mb-5 bg-body-tertiary rounded">
						<div className="box-avatar">
							<img src={victor} alt="Victor"/>
						</div>
						<div className="box-bio">
							<h2 className="bio-name">Victor Fuentes</h2>
							<p className="bio-position">Computista</p>
						</div>
						<div className="box-actions">
							<button>
								<i className="bi bi-star"></i>
							</button>
							<button>
								<i className="bi bi-chat"></i>
							</button>
							<button>
								<i className="bi bi-envelope"></i>
							</button>
						</div>
					</div>
					<div className="person-box shadow p-3 mb-5 bg-body-tertiary rounded">
						<div className="box-avatar">
							<img src={luis} alt="Luis"/>
						</div>
						<div className="box-bio">
							<h2 className="bio-name">Luis Fuentes</h2>
							<p className="bio-position">Economista</p>
						</div>
						<div className="box-actions">
							<button>
								<i className="bi bi-star"></i>
							</button>
							<button>
								<i className="bi bi-chat"></i>
							</button>
							<button>
								<i className="bi bi-envelope"></i>
							</button>
						</div>
					</div>
				</article>
			</section>
			
		</main>
        
        </>
    )
}
export default Card;