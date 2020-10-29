
import React from 'react'
import { GridWebisteTemplateLB, GridWebisteTemplateLBMeta } from './grid-webiste-template-lb.js'

export default {
  title: 'Components/' + GridWebisteTemplateLBMeta.title,
  component: GridWebisteTemplateLB,
  parameters: {
    docs: {
      extractComponentDescription: () => GridWebisteTemplateLBMeta.description
    }
  },
  argTypes: GridWebisteTemplateLBMeta.argTypes
}

const Template = (args) => <GridWebisteTemplateLB {...args} />

export const Example = Template.bind({})
Example.args = GridWebisteTemplateLBMeta.argExamples