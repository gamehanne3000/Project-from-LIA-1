import { ReactTwigComponentRender, ReactTwigComponentMeta } 
  from '@bit/understandit.css.tools.react-twig-component';

require('./lb-footer.scss');

export const LbFooterMeta = 
  ReactTwigComponentMeta(require('./lb-footer.json'));

export const LbFooter =
  (props) => ReactTwigComponentRender(
    props, require('./lb-footer.twig'), LbFooterMeta
  );

export default LbFooter;