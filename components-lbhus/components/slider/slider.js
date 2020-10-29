import { ReactTwigComponentRender, ReactTwigComponentMeta } 
  from '@bit/understandit.css.tools.react-twig-component';

require('./slider.scss');

export const SliderMeta = 
  ReactTwigComponentMeta(require('./slider.json'));

export const Slider =
  (props) => ReactTwigComponentRender(
    props, require('./slider.twig'), SliderMeta
  );

export default Slider;