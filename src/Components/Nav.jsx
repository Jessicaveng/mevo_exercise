import '../Scss/index.scss'
import logodark  from '../logodark.svg'

function Nav() {
  return (
    <div className="Nav">
        <img src={logodark} className="logodark" alt="logo" />
        <div className="nav-link">  
          <a>How It Works </a>
          <a>Pricing </a>
          <a>Home Zone</a>
          <a>Business</a>
          <a>FAQS</a>
          <button type="button"> Sign In </button>
          <button type="button"> Join For Free</button>
          </div>
       


    </div>
  )
}

export default Nav
