
import React from 'react'
import { CtaButton, CtaButtonMeta } from './cta-button.js'

export default {
  title: 'Components/' + CtaButtonMeta.title,
  component: CtaButton,
  parameters: {
    docs: {
      extractComponentDescription: () => CtaButtonMeta.description
    }
  },
  argTypes: CtaButtonMeta.argTypes
}

const Template = (args) => <CtaButton {...args} />

export const Example = Template.bind({})
Example.args = CtaButtonMeta.argExamples