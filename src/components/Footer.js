import React from 'react'
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
                    <div className="footer-links-item">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
