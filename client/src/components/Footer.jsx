import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <div>
        <footer className="footer footer-center p-10 bg-slate-200 rounded text-black">
  <nav className="grid grid-flow-col gap-4">
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Home</a>
  </nav> 
  <nav>
    <div className="grid grid-flow-col gap-4">
      <a href="https://www.linkedin.com/company/rentnest/"><LinkedInIcon /></a>  
      <a href="https://www.instagram.com/rentnestofficial/"><InstagramIcon /></a>
      <a href="https://www.youtube.com/@RentNestOfficial"><YouTubeIcon /></a>
     
    </div>
  </nav> 
  <aside>
    <p>Copyright © 2023 - All right reserved by RentNest</p>
  </aside>
</footer>
    </div>
  )
}

export default Footer