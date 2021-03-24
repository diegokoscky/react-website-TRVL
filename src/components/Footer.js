import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import './Footer.css'

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Se inscreva na newsletter da aventura para receber 
                    nossas melhores ofertas de férias
                </p>
                <p className="footer-subscription-text">
                    Você pode sair a qualquer momento.
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" 
                        name="email" 
                        placeholder="Seu Email" 
                        className="footer-input" />
                        <Button buttonStyle="btn--outline">
                            Inscrever    
                        </Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Sobre Nós</h2>
                        <Link to="/sign-up">Como funciona</Link>
                        <Link to="/">Depoimentos</Link>
                        <Link to="/">Carreiras</Link>
                        <Link to="/">Investidores</Link>
                        <Link to="/">Termos de Serviço</Link>
                    </div>
                    <div class='footer-link-items'>
                        <h2>Contato</h2>
                        <Link to='/'>Contato</Link>
                        <Link to='/'>Suporte</Link>
                        <Link to='/'>Destinos</Link>
                        <Link to='/'>Anunciantes</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>Videos</h2>
                        <Link to='/'>Poste um vídeo</Link>
                        <Link to='/'>Embaixadores</Link>
                        <Link to='/'>Agência</Link>
                        <Link to='/'>Influencers</Link>
                    </div>
                    <div class='footer-link-items'>
                        <h2>Social Media</h2>
                        <Link to='/'>Instagram</Link>
                        <Link to='/'>Facebook</Link>
                        <Link to='/'>Youtube</Link>
                        <Link to='/'>Twitter</Link>
                    </div>
                </div>
            </div>
            <section class='social-media'>
                <div class='social-media-wrap'>
                    <div class='footer-logo'>
                        <Link to='/' className='social-logo'>
                        TRVL
                        <i class='fab fa-typo3' />
                        </Link>
                    </div>
                    <small class='website-rights'>TRVL © 2020</small>
                    <div class='social-icons'>
                        <Link
                        class='social-icon-link facebook'
                        to='/'
                        target='_blank'
                        aria-label='Facebook'
                        >
                        <i class='fab fa-facebook-f' />
                        </Link>
                        <Link
                        class='social-icon-link instagram'
                        to='/'
                        target='_blank'
                        aria-label='Instagram'
                        >
                        <i class='fab fa-instagram' />
                        </Link>
                        <Link
                        class='social-icon-link youtube'
                        to='/'
                        target='_blank'
                        aria-label='Youtube'
                        >
                        <i class='fab fa-youtube' />
                        </Link>
                        <Link
                        class='social-icon-link twitter'
                        to='/'
                        target='_blank'
                        aria-label='Twitter'
                        >
                        <i class='fab fa-twitter' />
                        </Link>
                        <Link
                        class='social-icon-link twitter'
                        to='/'
                        target='_blank'
                        aria-label='LinkedIn'
                        >
                        <i class='fab fa-linkedin' />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
