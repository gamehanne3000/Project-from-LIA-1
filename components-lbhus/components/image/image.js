import {
    ReactTwigComponent,
    ReactTwigComponentMeta
  } from '@bit/understandit.css.tools.react-twig-component'
  
  require('./image.scss');
  
  const ImageMeta = ReactTwigComponentMeta(
    require('./image.json')
    )
    
    class Image extends ReactTwigComponent{
      constructor(props) {
        super(
          props,
          require('./image.twig'),
          ImageMeta.argExamples
          )
        }
      }
      
      export { Image, ImageMeta }
      export default Image