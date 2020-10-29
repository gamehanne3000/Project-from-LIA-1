
import React from 'react'
import { NavItem, NavItemMeta } from './nav-item.js'

export default {
  title: 'Components/' + NavItemMeta.title,
  component: NavItem,
  parameters: {
    docs: {
      extractComponentDescription: () => NavItemMeta.description
    }
  },
  argTypes: NavItemMeta.argTypes
}

const Template = (args) => <NavItem {...args} />

export const Example = Template.bind({})
Example.args = NavItemMeta.argExamples

export const ManyIcons = (args) => <div> 

  {/* For demonstrating purpose */}

      {/* <a href='{{href}}'> {{ value }} </a> */}
    <NavItem href="#" value="i am a title which most frequently are used in markup">
      <img parent-prop="icon" src="https://www.lbhus.se/profiles/lbhus/themes/lbhus/css/img/icon_contact.svg" alt="no icon found"/>  
    </NavItem>

    {/* {{ title }} */}
    <NavItem child-prop="icon">
      <img src="https://www.lbhus.se/profiles/lbhus/themes/lbhus/css/img/icon_contact.svg" alt="no icon found"/>  
      <a parent-prop="title" href="#">I can be whatever i want</a>
    </NavItem> 
</div>
ManyIcons.args = NavItemMeta.argExamples