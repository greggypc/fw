import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/SEO'
import { AnimatedBox } from '../elements'
import styled from 'styled-components'

const Thanks = () => {

  const PBox = styled(AnimatedBox)`
  max-width: 1000px;
  margin: 0 auto;
`

  const mailboxes = require('../../src/images/contactsplashimage.jpg')

  return (
    <Layout color="#f5f5f5">
      <SEO title="Contact | Faye + Walker Architects" desc="Faye + Walker is an Austin based multidisciplinary firm working primarily in the medium of Architecture. Our vision is to facilitate thoughtful dialog about space, function and individuality." />
      <PBox py={10} px={[6, 6, 8, 10]}>
      
        <img id="contact-img" src={mailboxes}> 
        </img>
        <br /><br />
        <p>Thank you for contacting Faye + Walker. <br />
        We look forward to assisting you.</p>
      </PBox>
    </Layout>
  )
}

export default Thanks

