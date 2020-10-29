import { ReactTwigComponent, ReactTwigComponentMeta} from '@bit/understandit.css.tools.react-twig-component'
  
require('./grid-sections.scss');

const GridSectionsMeta = ReactTwigComponentMeta(
  require('./grid-sections.json')
  )
  
  class GridSections extends ReactTwigComponent{
    constructor(props) {
      super(
        props,
        require('./grid-sections.twig'), GridSectionsMeta
        )
      }
    }
    
  export { GridSections, GridSectionsMeta }
  export default GridSections