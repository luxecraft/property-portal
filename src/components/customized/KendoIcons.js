import * as React from 'react';
import { Icon } from '@progress/kendo-react-common';

const KendoIcons = () => {
  return <React.Fragment>
    <div className='text-center social-icons'>

      <a
        href="https://twitter.com/Harisaran_g"
        target="_blank"
        rel="noopener"
      >
        <div className='icon twitter'>
          <Icon name='twitter' />
        </div>
      </a>

      <a
        href="https://github.com/HarisaranG/property-portal-hackathon"
        target="_blank"
        rel="noopener"
      >
        <div className='icon github'>
          <ion-icon name="logo-github"></ion-icon>
        </div>
      </a>

      <a
        href="https://www.youtube.com/watch?v=eQM2VgYQIlc"
        target="_blank"
        rel="noopener"
      >
        <div className='icon youtube'>
          <Icon name='youtube' />
        </div>
      </a>

    </div>
    <style>{`
                [name='logo-github'] {
                  padding-top: 28px;
                  font-size: 35px;
                  color: #25832d;
                }

                .social-icons .icon,
                .social-icons .icon:before,
                .social-icons .icon .k-icon,
                .social-icons .icon [name='logo-github']
                 {
                  cursor: pointer;
                  -webkit-transition: all 0.35s;
                  transition: all 0.35s;
                  -webkit-transition-timing-function: cubic-bezier(0.31, -0.105, 0.43, 1.59);
                          transition-timing-function: cubic-bezier(0.31, -0.105, 0.43, 1.59);
                }
                .social-icons .icon:before {
                  top: 90%;
                  left: -110%;
                }
                .social-icons .icon .k-icon,
                .social-icons .icon [name='logo-github'] {
                  -webkit-transform: scale(0.8);
                          transform: scale(0.8);
                }
          
                .social-icons .icon.twitter:before {
                  background-color: #3cf;
                }
                .social-icons .icon.twitter .k-icon {
                  color: #3cf;
                }
                
                .social-icons .icon.github:before {
                  background-color: #25832d;
                }
                .social-icons .icon.github  {
                  color: #25832d;
                }
                .social-icons .icon.youtube:before {
                  background-color: #ff0200;
                }
                .social-icons .icon.youtube .k-icon {
                  color: #ff0200;
                }
                .social-icons .icon:focus:before,
                .social-icons .icon:hover:before {
                  top: -10%;
                  left: -10%;
                }
                .social-icons .icon:focus .k-icon,
                .social-icons .icon:hover .k-icon {
                  color: #fff;
                  -webkit-transform: scale(1);
                          transform: scale(1);
                }

                .social-icons .icon:hover [name='logo-github'] {
                  fill: #fff;
                  -webkit-transform: scale(1);
                          transform: scale(1);
                } 
                .social-icons .icon {
                  display: inline-block;
                  background-color: #fff;
                  width: 90px;
                  height: 90px;
                  line-height: 90px;
                  margin: 0 10px;
                  text-align: center;
                  position: relative;
                  overflow: hidden;
                  border-radius: 28%;
                  box-shadow: 0 5px 15px -5px rgba(0,0,0,0.1);
                  opacity: 0.99;
                }
                .social-icons .icon:before {
                  content: '';
                  width: 120%;
                  height: 120%;
                  position: absolute;
                  -webkit-transform: rotate(45deg);
                          transform: rotate(45deg);
                }
                .social-icons .icon .k-icon {
                  font-size: 38px;
                  vertical-align: middle;
                }
                
                
            `}</style>
  </React.Fragment>;
};

export default KendoIcons;