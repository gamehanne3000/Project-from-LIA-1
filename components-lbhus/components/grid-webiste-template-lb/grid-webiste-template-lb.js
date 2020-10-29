import { ReactTwigComponent, ReactTwigComponentMeta} from '@bit/understandit.css.tools.react-twig-component'
  
  require('./grid-webiste-template-lb.scss');
  
  const GridWebisteTemplateLBMeta = ReactTwigComponentMeta(
    require('./grid-webiste-template-lb.json')
    )
    
    class GridWebisteTemplateLB extends ReactTwigComponent{
      constructor(props) {
        super(
          props, require('./grid-webiste-template-lb.twig'), GridWebisteTemplateLBMeta
          )
        }
      }
      
      export { GridWebisteTemplateLB, GridWebisteTemplateLBMeta }
      export default GridWebisteTemplateLB