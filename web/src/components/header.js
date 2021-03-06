import {Link} from 'gatsby'
import React from 'react'
import Icon from './icon'
import {cn} from '../lib/helpers'
import HarrysLogo from '../static/harryslogo.png'
import styles from './header.module.css'

const Header = ({onHideNav, onShowNav, showNav, siteTitle}) => (
  <div className={styles.root}>
    <div className={styles.wrapper}>
      <div className={styles.branding}>
        <Link to='/'><img src={HarrysLogo}/></Link>
      </div>

      <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
        <Icon symbol='hamburger' />
      </button>

      <nav className={cn(styles.nav, showNav && styles.showNav)}>
        <ul>
          <li>
          Tues. - Sat. 10:30am - 4pm<br/> 1437 Rose Street, Regina SK
          </li>
          <li>
         
          </li>          
        </ul>
      </nav>
    </div>
  </div>
)

export default Header
