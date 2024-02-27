import React from 'react'
import FooterSection from './FooterSection'

const Footer = () => {
    const footerList = [
        ['Contactanos', 'Sugerencias', 'Ayuda', 'Problemas'],
        ['Acerca de nosotros', 'Nuestra historia', 'Nuestro equipo', 'Trabaja con nosotros'],
        ['Formas de pago', 'Mercado Pago', 'Pedidos Ya', 'Tarjetas'],
        ['Redes Sociales', 'Facebook', 'Whatsapp', 'Instagram', 'Youtube']
      ]

  return (
    <footer>
        {footerList.map((item, index) => <FooterSection key={index} item={item}/>)}
    </footer>
  )
}

export default Footer