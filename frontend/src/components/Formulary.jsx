import React from 'react';


function Formulary(){


    return(
        <>
        
        <div className='conatiner'>
        <main className='content-wrap'>
        <h2>Completa el formulario </h2>
            <form action="/">
            <div className="row g-3">
                <div className="col">
                    <input type="text" className="form-control" placeholder="Nombre" aria-label="First name"/>
                </div>
                <div className="col">
                    <input type="text" className="form-control" placeholder="Apellido" aria-label="Last name"/>
                </div>
            </div>

            <br />

            <div className="row g-3">
                <div className="col">
                    <input type="number" className="form-control" placeholder="DNI" aria-label="First name"/>
                </div>
                <div className="col">
                    <input type="text" className="form-control" placeholder="Email" aria-label="Last name"/>
                </div>
            </div>
            
            <br />

            <div className="row g-3">
                <div className="col">
                    <input type="number" className="form-control" placeholder="Telefono" aria-label="First name"/>
                </div>
                <div className="col">
                    <input type="text" className="form-control" placeholder="Perfil Linkedin" aria-label="Last name"/>
                </div>
            </div>
            
            <br />

            <div class="row g-3">
                <div class="col">
                    <input type="date" className="form-control" placeholder="Fecha de Nacimiento" aria-label="First name"/>
                </div>
                <div className='col'>
                <select className="form-select" aria-label="Default select example">
                    <option selected>Prefiero no decir</option>
                    <option value="femenino">Femenino</option>
                    <option value="masculino">Masculino</option>
                </select>
                </div>
            </div>

            <br />

            <div className="mb-3">
            <label htmlFor="formFile" className="form-label">Imagen de perfil</label>
            <input className="form-control" type="file" id="formFile"/>
            </div>
            <button type="submit" className="btn btn-primary">Postularse</button>
            </form>
            
        </main>
        </div>
        
        
        </>
    )
}

export default Formulary