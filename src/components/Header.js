import { Link } from "react-router-dom";

const Header = () => {
    return ( 
        <div> 
        <nav className="navbar navbar-dark navbar-expand-sm fixed-top" style={{backgroundColor: "darkblue"}}>
        <div className="container">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#Navbar">
                <span className="navbar-toggler-icon"> </span>
            </button>
            <Link className="navbar-brand mr-auto" to="/"> 
                <img src="imgs/logo.png" width="85%" height="65%"/> </Link>
                <div className="collapse navbar-collapse" id="Navbar">
                  <ul className="navbar-nav mr-auto">
                        <li className="nav-item active"><Link className="nav-link" to="/"><span className="fa fa-home fa-lg"></span> Home</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/about"><span className="fa fa-list fa-lg"></span>About Us</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/gallery"><span className="fa fa-info fa-lg"></span> Products</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/contact"><span className="fa fa-address-card fa-lg"></span> Contact Us</Link></li>
                  </ul>   
                </div> 
                <span className="navbar-text">
                    <a data-toggle="modal" data-target="#loginModal">
                        <span className="fa fa-sign-in"></span> Login
                    </a>
                </span>
        </div>

    </nav>


        
         
          <div className="modal fade" id="loginModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel"
          aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header text-center">
                <h4 className="modal-title w-100 font-weight-bold">Login</h4>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body mx-1">
                <div className="md-form mb-1">
                  <i className="fas fa-envelope prefix grey-text"></i>
                  <input type="email" id="defaultForm-email" className="form-control validate"/>
                  <label data-error="wrong" data-success="right" htmlFor="defaultForm-email">Your email</label>
                </div>
        
                <div className="md-form mb-1">
                  <i className="fas fa-lock prefix grey-text"></i>
                  <input type="password" id="defaultForm-pass" className="form-control validate"/>
                  <label data-error="wrong" data-success="right" htmlFor="defaultForm-pass">Your password</label>
                </div>
        
              </div>
              <div className="modal-footer d-flex justify-content-center">
                <button className="btn btn-default">Login</button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <a href="" className="btn btn-default btn-rounded mb-1" data-toggle="modal" data-target="#modalLoginForm">Launch
             Login Form</a>
        </div>
      
      </div>

     );
}
 
export default Header;