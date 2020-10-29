
import React from 'react'
import { Image, ImageMeta } from './image.js'

export default {
  title: 'Components/' + ImageMeta.title,
  component: Image,
  parameters: {
    docs: {
      extractComponentDescription: () => ImageMeta.description
    }
  },
  argTypes: ImageMeta.argTypes
}

const Template = (args) => <Image {...args} />

export const Example = Template.bind({})
Example.args = ImageMeta.argExamples