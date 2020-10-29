import { ReactTwigComponent, ReactTwigComponentMeta } from '@bit/understandit.css.tools.react-twig-component';

require('./text-content.scss');

const TextContentMeta = ReactTwigComponentMeta (
  require('./text-content.json')
)

class TextContent extends ReactTwigComponent {
  constructor(props) {
    super (
      props, require('./text-content.twig'), TextContentMeta
    )
  }
}

export { TextContent, TextContentMeta }
export default TextContent;