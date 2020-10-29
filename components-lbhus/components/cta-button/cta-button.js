import { ReactTwigComponent, ReactTwigComponentMeta } from '@bit/understandit.css.tools.react-twig-component'
  
require('./cta-button.scss');

const CtaButtonMeta = ReactTwigComponentMeta(
  require('./cta-button.json')
  )
  
  class CtaButton extends ReactTwigComponent{
    constructor(props) {
      super(
        props,
        require('./cta-button.twig'),CtaButtonMeta
        )
      }
    }
 
  export { CtaButton, CtaButtonMeta }
  export default CtaButton