import React from 'react';
import { Slider, SliderMeta } from './slider.js';
import { CtaButton, CtaButtonMeta } from '../cta-button/cta-button.js'     

export default {
  title: 'Components/' + SliderMeta.title,
  component: Slider,
  parameters: {
    docs: {
        extractComponentDescription: () => SliderMeta.description
      }
    },
    argTypes: SliderMeta.argTypes
  }
      
const Template = (args) => <Slider {...args} />;

export const Example = Template.bind({});

Example.args = SliderMeta.argExamples;

export const mySlider = () => <div>
  <Slider child-prop="images">
    <svg class="arrow left-arrow" height="50px" viewBox="0 0 512 512" width="50px"><polygon fill="grey" points="352,115.4 331.3,96 160,256 331.3,416 352,396.7 201.5,256 "></polygon></svg>
    <img src='https://cdn.flbx.io/aHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9wL0NFbW92cWVuWVc4Lw==/thumbnail_512' alt="image not found"></img>
    <img src='https://cdn.flbx.io/aHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9wL0NFbWVtZUpIYnJULw==/thumbnail_512' alt="image not found"></img>
    <img src='https://cdn.flbx.io/aHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9wL0NFbE9MQUZIaWpkLw==/thumbnail_512' alt="image not found"></img>
    <img src='https://cdn.flbx.io/aHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9wL0NGNjdIc3RCMExwLw==/thumbnail_512' alt="image not found"></img>
    <svg class="arrow" height="50px" viewBox="0 0 512 512" width="50px"><polygon fill="grey" points="160,115.4 180.7,96 352,256 180.7,416 160,396.7 310.5,256 "></polygon></svg>
  </Slider>  
    <div>
      <CtaButton parent-prop="sideContent" href="#" value="SE MER" modifiers="justify-content-direction-to-center"></CtaButton>
    </div>      
</div>