import './Informacion.css'
import NavBar from './Navbar'

function Informacion (){
    return(
        <>
            
            <div className="Content">
                <NavBar />
                <div className="Personal">
                    <img src="../img/Personal.jpeg" alt="" />
                </div>
                <div>
                    Hola, soy estudiante de ingeniería 
                    de sistemas <br />Me apasiona aprender
                    cosas nuevas, de cualquier tema,<br />
                    me apasiona conocer personas
                    ampliar mi circulo social.<br /><br />

                    Soy entusiasta, y me esfuerzo por
                    aprender tecnologías como <br />Java,
                    Javascrpit, HTML, CSS, React, Linux,
                    herramientas<br /> de búsqueda de
                    vulnerabilidades, la computación<br />
                    en la nube como AWS, Oracle
                    cloud
                </div>
            </div>
        </>
    );
}

export default Informacion