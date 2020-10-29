import { ReactTwigComponent, ReactTwigComponentMeta } from '@bit/understandit.css.tools.react-twig-component';

require('./modal-text-content-overlay.scss');

const ModalTextContentOverlayMeta = ReactTwigComponentMeta (
  require('./modal-text-content-overlay.json')
)

class ModalTextContentOverlay extends ReactTwigComponent {
  constructor(props) {
    super (
      props, require('./modal-text-content-overlay.twig'), ModalTextContentOverlayMeta
    )
  }
}

export { ModalTextContentOverlay, ModalTextContentOverlayMeta }
export default ModalTextContentOverlay;