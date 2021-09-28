import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/SEO'
import { AnimatedBox } from '../elements'
import styled from 'styled-components'

const Contact = () => {

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
        <div className="contact-body">
        <form name="FWrequest" method="POST" action="/thanks" data-netlify="true">
        {/* <p className="hidden">
          <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
        </p> */}
        <p>
          <label>
          Name <input type="text" name="name" id="name" required />
        </label>
        </p>
        <p>
        <label>
          Email <br /><input type="email" name="email" id="email" required />
        </label>
        </p>
        <p>
        <label>
          Message <textarea name="message" id="message" required />
        </label>
        </p>
        <p>
        <button type="submit" className="contact-btn contact-btn-outline">Send</button>
        </p>
        </form>
       </div>
      </PBox>
    </Layout>
  )
}

export default Contact

