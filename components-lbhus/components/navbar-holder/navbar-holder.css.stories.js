
import React from 'react'
import { NavbarHolder, NavbarHolderMeta } from './navbar-holder.js'
import { NavItem, NavItemMeta } from '../nav-item/nav-item.js'

export default {
  title: 'Components/' + NavbarHolderMeta.title,
  component: NavbarHolder,
  parameters: {
    docs: {
      extractComponentDescription: () => NavbarHolderMeta.description
    }
  },
  argTypes: NavbarHolderMeta.argTypes
}

const Template = (args) => <NavbarHolder {...args} />

export const Example = Template.bind({})
Example.args = NavbarHolderMeta.argExamples



// For demonstrating purpose 
export const minNav = () => <div>
  <NavbarHolder child-prop="items">  
    <img parent-prop="logo" src="https://www.lbhus.se/sites/www.lbhus.se/files/lbhus_logo_0_0.jpg" alt="no icon found"/> 

    <NavItem child-prop="icon" href="#" value="VÅRA HUS">
      <img src="https://www.lbhus.se/profiles/lbhus/themes/lbhus/css/img/icon_houses.svg" alt="no icon found"/> 
    </NavItem>         
    <NavItem child-prop="icon" href="#" value="KATALOGER">
        <img src="https://www.lbhus.se/profiles/lbhus/themes/lbhus/css/img/icon_catalog.svg" alt="no icon found"/>  
    </NavItem> 
    <NavItem child-prop="icon" href="#" value="KONTAKT">
      <img src="https://www.lbhus.se/profiles/lbhus/themes/lbhus/css/img/icon_contact.svg" alt="no icon found"/>  
    </NavItem>         
    <NavItem 
      href="#" value="BYGGA HUS"> 
    </NavItem>         
    <NavItem 
      href="#" value="TOMTER">
    </NavItem>         
    <NavItem 
      href="#" value="VISNINGS HUS"> 
    </NavItem>         
    <NavItem href="#" value="OM OSS" />         
    <NavItem 
      href="#" value="INSPIRATION"> 
    </NavItem> 
  </NavbarHolder>
</div>



// more suited way to write
export const prop = () => <div>
  <NavbarHolder child-prop="items">  
    <img parent-prop="logo" src="https://www.lbhus.se/sites/www.lbhus.se/files/lbhus_logo_0_0.jpg" alt="no icon found"/>
  
    <NavItem example-props="">
      <img parent-prop="icon" src="https://www.lbhus.se/profiles/lbhus/themes/lbhus/css/img/icon_houses.svg" alt="no icon found"/> 
      <a parent-prop="title" href="#">VÅRA HUS</a>
    </NavItem> 
    <NavItem child-prop="icon">
      <img src="https://www.lbhus.se/profiles/lbhus/themes/lbhus/css/img/icon_catalog.svg" alt="no icon found"/>  
      <a parent-prop="title" href="#">KATALOGER</a>
    </NavItem> 
    <NavItem child-prop="icon">
      <img src="https://www.lbhus.se/profiles/lbhus/themes/lbhus/css/img/icon_contact.svg" alt="no icon found"/>  
      <a parent-prop="title" href="#">KONTAKT</a>
    </NavItem> 
    <NavItem child-prop="icon"> 
      <a parent-prop="title" href="#">BYGGA HUS</a>
    </NavItem> 
    <NavItem child-prop="icon"> 
      <a parent-prop="title" href="#">TOMTER</a>
    </NavItem> 
    <NavItem child-prop="icon"> 
      <a parent-prop="title" href="#">VISNINGS HUS</a>
    </NavItem> 
    <NavItem child-prop="icon"> 
      <a parent-prop="title" href="#">OM OSS</a>
    </NavItem> 
    <NavItem child-prop="icon"> 
      <a parent-prop="title" href="#">INSPIRATION</a>
    </NavItem> 
  </NavbarHolder>
</div>


      