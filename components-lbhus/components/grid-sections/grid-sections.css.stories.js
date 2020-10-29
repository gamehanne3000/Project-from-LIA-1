
import React from 'react'
import { GridSections, GridSectionsMeta } from './grid-sections.js'

export default {
  title: 'Components/' + GridSectionsMeta.title,
  component: GridSections,
  parameters: {
    docs: {
      extractComponentDescription: () => GridSectionsMeta.description
    }
  },
  argTypes: GridSectionsMeta.argTypes
}

const Template = (args) => <GridSections {...args} />

export const Example = Template.bind({})
Example.args = GridSectionsMeta.argExamples