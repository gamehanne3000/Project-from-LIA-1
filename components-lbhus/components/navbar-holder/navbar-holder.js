import {
    ReactTwigComponent,
    ReactTwigComponentMeta
  } from '@bit/understandit.css.tools.react-twig-component'
  
  require('./navbar-holder.scss');
  
  const NavbarHolderMeta = ReactTwigComponentMeta(
    require('./navbar-holder.json')
    )
    
    class NavbarHolder extends ReactTwigComponent{
      constructor(props) {
        super(
          props,
          require('./navbar-holder.twig'),
          NavbarHolderMeta
          )
        }
      }
      
      export { NavbarHolder, NavbarHolderMeta }
      export default NavbarHolder