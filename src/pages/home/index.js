import React from 'react';
import 'index.css';
import {
  MailingListForm,
  Navbar, 
  MLHBanner, 
  Footer,
} from 'components';
import {ReactComponent as Logo} from 'assets/logo-animated.svg'
import logoMLH from 'assets/partners/mlh.svg';
import logoSCE from 'assets/partners/sce.png';
import logoSCS from 'assets/partners/scs.png';
import {
  OnePassword,
  Balsamiq,
  Ciena,
  Ea,
  FdmGroup,
  Fullscript,
  LighthouseLabs,
  MarchNetworks,
  Rbc,
  Wolfram
} from 'assets/sponsors';
import styles from './index.module.css';

function Landing() {
  return (
    <div className={styles.slide}>
      <div className={styles.landingTop}>
        <Logo className={styles.landingLogo}/>
        <div className={styles.landingDate}/>
      </div>  
      <div className={styles.landingBottom}>
        <MailingListForm /> 
      </div>
    </div> 
  );
}

function Sponsors() {
  const Partner = ({id, url, src, alt}) => (
    <a className={styles.partnerLogo} href={url} target="_blank" rel="noopener noreferrer">
      <img id={id}src={src} alt={alt}/>
    </a> 
  );

  const sponsorLogo = (id, url, Logo) => (
    <a id={id} href={url} target="_blank" rel="noopener noreferrer">
      <Logo/>
    </a> 
  );

  return (
    <div className={styles.slide}>
      <div id={styles.sponsorBkg}>
        <h2>Sponsors</h2>
        <div className={styles.logoSection}>
          {sponsorLogo(styles.rbc, 'https://rbc.com', Rbc)}
        </div>
        <div className={styles.logoSection}>
          {sponsorLogo(styles.ciena, 'https://ciena.ca', Ciena)}
          {sponsorLogo(styles.fullscript, 'https://fullscript.com', Fullscript)}
        </div>
        <div className={styles.logoSection}>
          {sponsorLogo(styles.lighthouseLabs, 'https://lighthouselabs.ca', LighthouseLabs)}
          {sponsorLogo(styles.marchNetworks, 'https://marchnetworks.com', MarchNetworks)}
        </div>
        <div className={styles.logoSection}>
          {sponsorLogo(styles.balsamiq, 'https://balsamiq.com', Balsamiq)}
          {sponsorLogo(styles.fdmGroup, 'https://fdmgroup.com', FdmGroup)}
        </div>
        <div className={styles.logoSection}>
          {sponsorLogo(styles.onePassword, 'https://1password.com', OnePassword)}
          {sponsorLogo(styles.ea, 'https://ea.com', Ea)}
          {sponsorLogo(styles.wolfram, 'https://wolfram.com', Wolfram)}
        </div>
        <h2>Partners</h2>
          <div id={styles.partners}>
            <Partner id={styles.SCSLogo} url="https://carleton.ca/scs/" src={logoSCS} alt="Link to Carleton's School of Computer Science Webpage"/>
            <Partner id={styles.SCELogo} url="https://carleton.ca/sce/" src={logoSCE} alt="Link to Carleton's School of Computer and Systems Engineering Webpage"/>
            <Partner id={styles.MLHLogo} url="https://mlh.io/"          src={logoMLH} alt="Link to MLH Webpage"/>
          </div>
      </div>
      <p style={{textAlign: 'center'}}>Thinking about sponsoring? Reach out to <a className={styles.mailToLink} href="mailto:sponsorship@cuhacking.com">sponsorship@cuhacking.com</a> to learn more.</p>
    </div> 
  );
}

export default () => (
  <>
    <Navbar/>
    <div id={styles.content}>
      <Landing/>
      <Sponsors/>
    </div>
    <Footer/> 
    <MLHBanner/>
  </>
);