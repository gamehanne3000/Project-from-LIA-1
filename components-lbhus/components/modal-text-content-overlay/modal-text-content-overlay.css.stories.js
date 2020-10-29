import React from 'react';
import { ModalTextContentOverlay, ModalTextContentOverlayMeta } from './modal-text-content-overlay.js';
import { TextContent, TextContentMeta } from '../text-content/text-content.js';
import { CtaButton, CtaButtonMeta } from '../cta-button/cta-button.js'
     
export default {
  title: 'Components/' + ModalTextContentOverlayMeta.title,
  component: ModalTextContentOverlay,
  parameters: {
    docs: {
        extractComponentDescription: () => ModalTextContentOverlayMeta.description
      }
    },
    argTypes: ModalTextContentOverlayMeta.argTypes
  }
      
const Template = (args) => <ModalTextContentOverlay {...args} />;

export const Example = Template.bind({});

Example.args = ModalTextContentOverlayMeta.argExamples;

export const overlay = () => <div>
  {/* example for how this colud look like */}
  <ModalTextContentOverlay child-prop="parent">
  <img src='https://www.lbhus.se/sites/www.lbhus.se/files/styles/house_top_images/public/dsc_3645.jpg?itok=I-YrA0z3' alt="port2"></img>
      
    <TextContent parent-prop="textContent" child-prop="textContents" modifiers="text-content-overlay">
      <p>example for how this colud look like</p>
    </TextContent>
    <CtaButton parent-prop="button" href="#" value="TOTALENTREPRENAD ENLIGT LB-HUS"></CtaButton>
  </ModalTextContentOverlay>
</div>