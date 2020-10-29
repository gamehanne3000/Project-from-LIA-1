import React from 'react';
import { LbFooter, LbFooterMeta } from './lb-footer.js';
import { NavItem, NavItemMeta } from '../nav-item/nav-item.js'
import { TextContent, TextContentMeta } from '../text-content/text-content.js';
     
export default {
  title: 'Components/' + LbFooterMeta.title,
  component: LbFooter,
  parameters: {
    docs: {
        extractComponentDescription: () => LbFooterMeta.description
      }
    },
    argTypes: LbFooterMeta.argTypes
  }
      
const Template = (args) => <LbFooter {...args} />;

export const Example = Template.bind({});

Example.args = LbFooterMeta.argExamples;

export const myFooter = () => <div>
  <LbFooter>
      <div parent-prop="leftFooter">
        <TextContent child-prop="textContents" modifiers="justify-content-direction-to-center" css-props="--text-content-border-bottom: black 1px solid; --text-content-bg-clr: #ededed; --text-content-margin: 0 10px 20px 10px;">
          <h2>Följ oss</h2>          
        </TextContent>

        <div class="icons">
          <NavItem child-prop="icon" href="#">
            <img src="https://www.lbhus.se/sites/www.lbhus.se/files/logo_facebook.png" alt="no icon found"/> 
          </NavItem>
          <NavItem child-prop="icon" href="#">
            <img src="https://www.lbhus.se/sites/www.lbhus.se/files/instagram_ny.png" alt="no icon found"/> 
          </NavItem>
          <NavItem child-prop="icon" href="#">
            <img src="https://www.lbhus.se/sites/www.lbhus.se/files/logo_youtube.png" alt="no icon found"/> 
          </NavItem>
        </div>
        
        <TextContent child-prop="textContents" modifiers="justify-content-direction-to-center" css-props="--text-content-padding: 15px; --text-content-bg-clr: #ededed;">
          <p>Kom ihåg att använda #lbhus i sociala medier</p>
          <img width="150px" height="100px" src="https://www.lbhus.se/sites/www.lbhus.se/files/aaa_4_0.png" alt="no icon found"/> 
          <img width="57px" height="75px" src="https://www.lbhus.se/sites/www.lbhus.se/files/2020-03-09_di_gasell_logo_mastargasell_digital.png" alt="no icon found"/> 
        </TextContent>
      </div>
      
      <div parent-prop="middleFooter">
        <TextContent child-prop="textContents" modifiers="justify-content-direction-to-center" css-props="--text-content-border-bottom: black 1px solid; --text-content-bg-clr: #ededed; --text-content-margin: 0 10px 20px 10px;">
          <h2>Kontakt</h2>          
        </TextContent>

        <TextContent child-prop="textContents" modifiers="justify-content-direction-to-center" css-props="--text-content-padding: 15px; --text-content-bg-clr: #ededed;">
          <a href="https://www.lbhus.se/hor-av-dig">Kontakta våra säljare</a>
          <p><a href="https://www.lbhus.se/dig-som-jobbar-hos-oss">LB-Hus</a> är ett varumärke inom <a href="https://svenskhusproduktion.se">Svensk Husproduktion AB</a></p>
          <p>Post: Box 67
          <br></br>
          Besök: Verkstadsgatan 7
          <br></br>
          295 21 Bromölla
          <br></br>
          0456-455 00
          <br></br>
          <a href="mailto: info@lbhus.se">info@lbhus.se</a>
          <br></br>
          Org nr: 556876-2636</p>
        </TextContent>

      </div>
      <div parent-prop="rightFooter">
      <TextContent child-prop="textContents" modifiers="justify-content-direction-to-center" css-props="--text-content-border-bottom: black 1px solid; --text-content-bg-clr: #ededed; --text-content-margin: 0 10px 20px 10px;">
          <h2>Följ oss</h2>          
        </TextContent>
        
        <TextContent child-prop="textContents" modifiers="justify-content-direction-to-center" css-props="--text-content-padding: 15px; --text-content-bg-clr: #ededed;">
          <div class="images">
            <img width="75px" height="75px" src="https://www.lbhus.se/sites/www.lbhus.se/files/barnsupporter-foretag-2020_marke.png" alt="no image found"/> 
            <img width="235px" height="45px" src="https://www.lbhus.se/sites/www.lbhus.se/files/prognoscentret-logo-color-100mm.png" alt="no image found"/> 
            <img width="75px" height="75px" src="https://www.lbhus.se/sites/www.lbhus.se/files/reklamombudsmannen_1_.png" alt="no image found"/> 
          </div>
        </TextContent>
      </div>    
  </LbFooter>
</div>