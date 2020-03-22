import React from 'react'
import { config, useSpring } from 'react-spring'
import Layout from '../components/layout'
import { AnimatedBox } from '../elements'
import SEO from '../components/SEO'


const Contact = () => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  const mailboxes = require('../../src/images/contactsplashimage.jpg')

  return (
    <Layout color="#f5f5f5">
      <SEO title="Contact | Faye + Walker Architects" desc="Faye + Walker is an Austin based multidisciplinary firm working primarily in the medium of Architecture. Our vision is to facilitate thoughtful dialog about space, function and individuality." />
      <AnimatedBox style={pageAnimation} py={[6, 6, 6, 8]} px={[6, 6, 8, 10, 10, 13]}>
      
        <img id="contact-img" src={mailboxes}> 
        </img>
        <p>
Contact form...        </p>
      </AnimatedBox>
    </Layout>
  )
}

export default Contact

