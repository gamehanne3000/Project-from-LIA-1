import { ReactTwigComponent, ReactTwigComponentMeta } from '@bit/understandit.css.tools.react-twig-component'
  
  require('./nav-item.scss');
  
  const NavItemMeta = ReactTwigComponentMeta(
    require('./nav-item.json')
    )
    
    class NavItem extends ReactTwigComponent{
      constructor(props) {
        super(
          props, require('./nav-item.twig'), NavItemMeta
          )
        }
      }
      
      export { NavItem, NavItemMeta }
      export default NavItem

