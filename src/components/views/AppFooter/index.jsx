import React from 'react'
import { Link } from 'react-router-dom'
import { Android, AppleFooter, FaceBook, Instagram, LinkedIn, TWitter, Youtube } from '../../../assets/Icons'
import { Container } from '../../../assets/styled-components/components'
import Footer from '../Footer'
import { StyleIconFooter } from './Styled'

function AppFooter() {
  return (
    <Footer>
      <Container>

        <div className="uls">
          <ul>
            <li>
              <Link to="/">About Us</Link>
            </li>
            <li>
              <Link to="/">Feedback</Link>
            </li>
            <li>
              <Link to="/">Community</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/">Trust, Safety & Security</Link>
            </li>
            <li>
              <Link to="/">Help & Support</Link>
            </li>
            <li>
              <Link to="/">Upwork Foundation</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/">Terms of Service</Link>
            </li>
            <li>
              <Link to="/">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/">CA Notice at Collection</Link>
            </li>
            <li>
              <Link to="/">Cookie Settings</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/">Accessibility</Link>
            </li>
            <li>
              <Link to="/">Desktop App</Link>
            </li>
            <li>
              <Link to="/">Cookie Policy</Link>
            </li>
            <li>
              <Link to="/">Enterprise Solutions</Link>
            </li>
          </ul>
        </div>
        <div className="icons">
          <div>
            <p>Follow Us</p>
            <StyleIconFooter><FaceBook /></StyleIconFooter>
            <StyleIconFooter><LinkedIn /></StyleIconFooter>
            <StyleIconFooter><TWitter /></StyleIconFooter>
            <StyleIconFooter><Youtube /></StyleIconFooter>
            <StyleIconFooter><Instagram /></StyleIconFooter>
          </div>
          <div>
            <p>Mobile app</p>
            <StyleIconFooter><AppleFooter /></StyleIconFooter>
            <StyleIconFooter><Android /></StyleIconFooter>
          </div>
        </div>
        <p>&copy; 2015 - 2023 Upwork® Global Inc.</p>
      </Container>
    </Footer>
  )
}

export default AppFooter