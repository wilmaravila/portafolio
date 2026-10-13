import './Header.css';


export default function Header() {
return(
    <div className='content-header'>
        <div className='content-image-info'>
            <div className='content-logo'>
                <img src="https://significado.com/wp-content/uploads/Imagen-Animada.jpg" alt="" />
                <div>
                    <div className='content-text-logo'> 
                        <p className='text-iniciales'> W.A</p>
                    </div>
                    <div className='content-text-logo'>
                        <p className='text-porfolio'>PORTAFOLIO</p>
                    </div>
                </div>
            </div>
            <div className='content-available'> 
                <div className='content-circle-available'>
                    <div className='circle-available'></div>
                </div>
                <div className='content-text-available'>
                    <p>Disponible | Resiviendo Ofertas</p>
                </div>
            </div>
        </div>
        <nav>
            <ul className='content-list'>
                <a href='#'><li>Inicio</li></a>
                <a href='#'><li>Sobre mi</li></a>
                <a href='#'><li>Proyectos</li></a>
                <a href='#'><li>Habilidades</li></a>
                <a href='#'><li>Experiencia</li></a>
                <a href='#'><li>Contacto</li></a>
            </ul>
        </nav>
    
    
    </div>
)



}