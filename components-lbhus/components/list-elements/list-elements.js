import { ReactTwigComponentRender, ReactTwigComponentMeta } 
  from '@bit/understandit.css.tools.react-twig-component';

require('./list-elements.scss');

export const ListElementsMeta = 
  ReactTwigComponentMeta(require('./list-elements.json'));

export const ListElements =
  (props) => ReactTwigComponentRender(
    props, require('./list-elements.twig'), ListElementsMeta
  );

export default ListElements;