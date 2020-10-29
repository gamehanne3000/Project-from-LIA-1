import React from 'react';
import { ListElements, ListElementsMeta } from './list-elements.js';
     
export default {
  title: 'Components/' + ListElementsMeta.title,
  component: ListElements,
  parameters: {
    docs: {
        extractComponentDescription: () => ListElementsMeta.description
      }
    },
    argTypes: ListElementsMeta.argTypes
  }
      
const Template = (args) => <ListElements {...args} />;

export const Example = Template.bind({});

Example.args = ListElementsMeta.argExamples;

export const listOptions = () => <div>
  <ListElements child-prop="ul" example-props="">
    <li>1</li>
    <li>2</li>
    <li>3</li>
  </ListElements>
</div>