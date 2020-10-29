import React from 'react'
import { NavItem, NavItemMeta } from '../components/nav-item/nav-item.js'
import { GridWebisteTemplateLB, GridWebisteTemplateLBMeta } from '../components/grid-webiste-template-lb/grid-webiste-template-lb.js'
import { NavbarHolder, NavbarHolderMeta } from '../components/navbar-holder/navbar-holder.js'
import { GridSections, GridSectionsMeta } from '../components/grid-sections/grid-sections.js'
import { CtaButton, CtaButtonMeta } from '../components/cta-button/cta-button.js'
import { ModalTextContentOverlay, ModalTextContentOverlayMeta } from '../components/modal-text-content-overlay/modal-text-content-overlay.js';
import { TextContent, TextContentMeta } from '../components/text-content/text-content.js';
import { ListElements, ListElementsMeta } from '../components/list-elements/list-elements.js';
import { Slider, SliderMeta } from '../components/slider/slider.js';
import { LbFooter, LbFooterMeta } from '../components/lb-footer/lb-footer.js';
import { Image, ImageMeta } from '../components/image/image.js'

export default {
  title: 'Pages/Test'
}

export const myVersionOfLB = () => <div>
  <GridWebisteTemplateLB>
    <NavbarHolder parent-prop="navbar" child-prop="items" example-props="">  
      <img parent-prop="logo" src="https://www.lbhus.se/sites/www.lbhus.se/files/lbhus_logo_0_0.jpg" alt="no icon found"/> 

      <NavItem child-prop="icon" href="#" value="VÅRA HUS" css-props="--nav-item-font-weight: 400;">
        <img src="https://www.lbhus.se/profiles/lbhus/themes/lbhus/css/img/icon_houses.svg" alt="no icon found"/> 
      </NavItem>         
      <NavItem child-prop="icon" href="#" value="KATALOGER" css-props="--nav-item-font-weight: 400;">
        <img src="https://www.lbhus.se/profiles/lbhus/themes/lbhus/css/img/icon_catalog.svg" alt="no icon found"/>  
      </NavItem> 
      <NavItem child-prop="icon" href="#" value="KONTAKT" css-props="--nav-item-font-weight: 400;">
        <img src="https://www.lbhus.se/profiles/lbhus/themes/lbhus/css/img/icon_contact.svg" alt="no icon found"/>  
      </NavItem>  
      <NavItem href="#" value="BYGGA HUS"/>         
      <NavItem href="#" value="TOMTER"/>         
      <NavItem href="#" value="VISNINGS HUS"/>         
      <NavItem href="#" value="OM OSS"/>         
      <NavItem child-prop="icon" href="#" value="INSPIRATION" css-props="--_nav-item-icon-margin: 0 0 0 3px;">
        <img src="https://i.imgur.com/ub6XG8v.png" alt="this is not supposed to be a picture :D"/>  
      </NavItem>        
    </NavbarHolder>

    {/* port 1 */}
    <GridSections parent-prop="port1">
      <img parent-prop="image" src='https://www.lbhus.se/sites/www.lbhus.se/files/styles/house_top_images_square/public/katalog_2020_975x750_0.jpg?itok=oPR-XLlY' alt="port1"></img>
      
        <TextContent parent-prop="contents" child-prop="textContents" css-props="--text-content-padding: 20px; --text-content-text-align: center; --text-content-bg-clr: #ededed;">
          <h2>Välplanerade familjeparhus!</h2>
          <p>I nybyggda villaområdet Björkebacken i södra Stöpen, norr om Skövde, bygger vi 6 st familjeparhus. Här bor du bekymmersfritt och bra i ett lugnt och trivsamt område med närhet till det mesta man kan behöva. Försäljningen pågår för fullt!</p>
        </TextContent>
      <Image parent-prop="textSlide"></Image> 
    </GridSections>

    {/* port 2 */}
    <GridSections parent-prop="port2">
      <img parent-prop="image" src='https://www.lbhus.se/sites/www.lbhus.se/files/styles/front_page_980_x_525/public/visningshus-haljarp-1.png?itok=z5S1DKvu' alt="port2"></img>
                
        <TextContent parent-prop="contents" child-prop="textContents">
          <h2>Visningar</h2>

          <ListElements child-prop="ul" example-props="" modifiers="link">
            <li><a href='http://www.lbhus.se/visningshus/lb-optimal-133-vikbolandet'>Lördag 26 sept LB Optimal 133 i Vikbolandet</a></li>
            <li><a href='http://www.lbhus.se/visningshus/lb-optimal-113-karlsborg'>Söndag 27 sept LB Optimal 113 i Karlsborg</a></li>
            <li><a href='http://www.lbhus.se/visningshus/lb-optimal-113-halmstad'>Söndag 27 sept LB Optimal 113 i Halmstad</a></li>
            <li><a href='http://www.lbhus.se/visningshus/lb-optimal-117-lindome'>Söndag 27 sept LB Optimal 117 i Lindome</a></li>
            <li><a href='http://www.lbhus.se/visningshus/lb-optimal-134'>Onsdag 1 okt LB Optimal 134 i Ås, Östersund</a></li>
            <li><a href='http://www.lbhus.se/visningshus/lb-optimal-141-ronneby'>Söndag 4 okt LB Optimal 141 i Ronneby</a></li>
            <li><a href='http://www.lbhus.se/visningshus/lb-flex-163-vaxjo'>Söndag 4 okt LB Flex 163 i Växjö</a></li>
            <li><a href='http://www.lbhus.se/visningshus/lb-optimal-141-halmstad'>Söndag 11 okt LB Optimal i Halmstad</a></li>
            <a href='http://www.lbhus.se/optimal'><p className="bold">Du kan även se alla våra LB Optimalhus i virtuella visningar redan nu. klicka här för att välja hus</p></a>          
          </ListElements>

        <CtaButton href="#" value="SE ALLA VISNINGAR"></CtaButton>
      </TextContent>
    </GridSections>

    {/* port 3 */}
    <GridSections parent-prop="port3">
      <img parent-prop="image" src='https://www.lbhus.se/sites/www.lbhus.se/files/styles/front_page_980_x_525/public/femfordelar_676x523.jpg?itok=5fWjmyhi' alt="port2"></img>
                
        <TextContent parent-prop="contents" child-prop="textContents">
          <h2>Mest hus för pengarna, hur då?</h2>
          <p>Vi vågar påstå att fördelarna i vårt erbjudande ger dig mest hus för pengarna och förklarar vad vi menar i en fempunktslista.</p>
      
        <ListElements  child-prop="ol" example-props="" modifiers="link" css-props="--list-elements-font-weight:600;">
          <li><a href='http://www.lbhus.se/1-ett-battre-utgangslage'>Ett bättre utgångsläge</a></li>
          <li><a href='http://www.lbhus.se/2-totalentreprenad-pa-riktigt'>Totalentreprenad - på riktigt</a></li>
          <li><a href='http://www.lbhus.se/3-kundfokus-hela-vagen'>Kundfokus hela vägen</a></li>
          <li><a href='http://www.lbhus.se/4-lange-leve-vardagen-i-huset'>Länge leve vardagen i huset</a></li>
          <li><a href='http://www.lbhus.se/5-hallbara-svenska-trahus'>Hållbara svenska trähus</a></li>
        </ListElements>
          <br></br> 
        <CtaButton child-prop="btn" css-props="--cta-button-width: 110px;">
          <a href="#">LÄS MER</a>
        </CtaButton>
      </TextContent>
    </GridSections>
    
    {/* port 4 */}
    <ModalTextContentOverlay parent-prop="port4" child-prop="parent" example-props="">
      <img src='https://www.lbhus.se/sites/www.lbhus.se/files/styles/house_top_images/public/dsc_3645.jpg?itok=I-YrA0z3' alt="port2"></img>
      
        <TextContent parent-prop="textContent" child-prop="textContents" modifiers="text-content-overlay">
          <p>Vi bygger på totalentreprenad, vilket gör byggprocessen trygg och smidig och du kan ägna dig åt vardagen och livet under tiden.</p>
        </TextContent>
      <CtaButton parent-prop="button" href="#" value="TOTALENTREPRENAD ENLIGT LB-HUS"></CtaButton>
    </ModalTextContentOverlay>
    
    {/* port 5 */}        
    <GridSections parent-prop="port5">
      <img parent-prop="image" src='https://www.lbhus.se/sites/www.lbhus.se/files/styles/front_page_980_x_525/public/familjen_975x750-2.jpg?itok=71OAte6L' alt="port2"></img>

      <TextContent parent-prop="contents" child-prop="textContents">
        <p>Här får du träffa några av de familjer som har byggt hus med oss. De delar med sig av sina husbyggaräventyr och berättar mer om hur det gått till och vad som varit viktigt för dem under resans gång.</p>
        <CtaButton child-prop="btn">
          <a href="#">LB-KUNDER</a>
        </CtaButton>
      </TextContent>
    </GridSections>

    {/* port 6 */}
    <GridSections parent-prop="port6">
      <img parent-prop="image" src='https://www.lbhus.se/sites/www.lbhus.se/files/styles/front_page_980_x_525/public/gruppbostader_hokopionge975pix.jpg?itok=NjChgDF2' alt="port2"></img>
        
        <TextContent parent-prop="contents" child-prop="textContents">
          <p>Inom affärsområdet Grupphus erbjuder Svensk Husproduktion färdigpaketerade lösningar med tomt och nyckelfärdiga stycke-, rad- eller parhus inom varumärket LB-Hus.</p>
          <a className="spanLink" href='http://www.lbhus.se/grupphus'>Läs mer om Grupphus här</a>
          <p>Genom varumärket Svensk Husproduktion erbjuder vi prefabricerade byggsatser till bostadsutvecklare som tror på ett bättre bygge, genom relationer där vi långsiktigt utvecklas och växer tillsammans.</p>
          <a className="spanLink" href='http://www.lbhus.se/b2b'>Läs mer om B2B här</a> 
        </TextContent>
    </GridSections>

    {/* sideContent */}
    <TextContent parent-prop="sideContent" child-prop="textContents" modifiers="justify-content-direction-to-center" css-props="--text-content-margin: 100px 0 50px 0; --text-content-border-bottom: black 1px solid;">
      <h2>INSPIRATION</h2>
      <p>Tagga #lbhus eller @lbhus.se och få en chans att synas här. Inspirera och inspireras, från ett LB-Hus till ett annat.</p>
    </TextContent>  
    
    {/* sideContent */}
    <Slider parent-prop="sideContent" child-prop="images" >
      <svg className="arrow left-arrow" height="50px" viewBox="0 0 512 512" width="50px"><polygon fill="grey" points="352,115.4 331.3,96 160,256 331.3,416 352,396.7 201.5,256 "></polygon></svg>
      <img src='https://cdn.flbx.io/aHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9wL0NFbW92cWVuWVc4Lw==/thumbnail_512' alt="image not found"></img>
      <img src='https://cdn.flbx.io/aHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9wL0NFbWVtZUpIYnJULw==/thumbnail_512' alt="image not found"></img>
      <img src='https://cdn.flbx.io/aHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9wL0NFbE9MQUZIaWpkLw==/thumbnail_512' alt="image not found"></img>
      <img src='https://cdn.flbx.io/aHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9wL0NGNjdIc3RCMExwLw==/thumbnail_512' alt="image not found"></img>
      <svg className="arrow" height="50px" viewBox="0 0 512 512" width="50px"><polygon fill="grey" points="160,115.4 180.7,96 352,256 180.7,416 160,396.7 310.5,256 "></polygon></svg>
    </Slider>  
    
    <TextContent parent-prop="sideContent" child-prop="textContents" modifiers="justify-content-direction-to-center" css-props="--text-content-margin: 20px 0 20px 0;">
      <CtaButton href="#" value="SE MER" ></CtaButton>
    </TextContent> 

    {/* Footer */}  
    <LbFooter parent-prop="footer">
      <div parent-prop="leftFooter">
        <TextContent child-prop="textContents" modifiers="mTitle" >
          <h2>Följ oss</h2>          
        </TextContent>

        <div className="icons">
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
        
        <TextContent child-prop="textContents" modifiers="content">
          <p>Kom ihåg att använda #lbhus i sociala medier</p>
          <img width="150px" height="100px" src="https://www.lbhus.se/sites/www.lbhus.se/files/aaa_4_0.png" alt="no icon found"/> 
          <img width="57px" height="75px" src="https://www.lbhus.se/sites/www.lbhus.se/files/2020-03-09_di_gasell_logo_mastargasell_digital.png" alt="no icon found"/> 
        </TextContent>
      </div>

      <div parent-prop="middleFooter" >
        <TextContent child-prop="textContents" modifiers="mTitle" >
          <h2>Kontakt</h2>          
        </TextContent>

        <TextContent child-prop="textContents" modifiers="content">
          <a href="https://www.lbhus.se/hor-av-dig">Kontakta våra säljare</a>
          <p>
            <a href="https://www.lbhus.se/dig-som-jobbar-hos-oss">LB-Hus</a> är ett varumärke inom 
            <a href="https://svenskhusproduktion.se">Svensk Husproduktion AB</a>
          </p>
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
        <TextContent child-prop="textContents" modifiers="mTitle" >
          <h2>Följ oss</h2>          
        </TextContent>

        <TextContent child-prop="textContents" modifiers="mTitle" >
          <div className="images">
            <img width="75px" height="75px" src="https://www.lbhus.se/sites/www.lbhus.se/files/barnsupporter-foretag-2020_marke.png" alt="no image found"/> 
            <img width="235px" height="45px" src="https://www.lbhus.se/sites/www.lbhus.se/files/prognoscentret-logo-color-100mm.png" alt="no image found"/> 
            <img width="75px" height="75px" src="https://www.lbhus.se/sites/www.lbhus.se/files/reklamombudsmannen_1_.png" alt="no image found"/> 
          </div>
        </TextContent>
      </div>    
    </LbFooter>
  </GridWebisteTemplateLB>
</div>
  
  





