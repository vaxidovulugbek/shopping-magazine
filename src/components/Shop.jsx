import React, { Component ,useState , useEffect} from 'react'
import { NavLink } from 'react-router-dom';
import GET from '../API/GET';
import Footer from './Footer'
import Navbar from './Navbar'

function Shop() {
  const [newsRest, setNewsRest] = useState([]);
  const [category, setCategory] = useState([]);
  const fetchData = async () => {
    try {
      const newsRests = await GET.data()  
      const category = await GET.category()     
      setNewsRest(newsRests.data.data)
      setCategory(category.data.data)
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
    <div>
      <div className="container-fluid">
        <div className="row bg-secondary py-2 px-xl-5">
          <div className="col-lg-6 d-none d-lg-block">
            <div className="d-inline-flex align-items-center">
              <a className="text-dark" href>FAQs</a>
              <span className="text-muted px-2">|</span>
              <a className="text-dark" href>Help</a>
              <span className="text-muted px-2">|</span>
              <a className="text-dark" href>Support</a>
            </div>
          </div>
          <div className="col-lg-6 text-center text-lg-right">
            <div className="d-inline-flex align-items-center">
              <a className="text-dark px-2" href>
                <i className="fab fa-facebook-f" />
              </a>
              <a className="text-dark px-2" href>
                <i className="fab fa-twitter" />
              </a>
              <a className="text-dark px-2" href>
                <i className="fab fa-linkedin-in" />
              </a>
              <a className="text-dark px-2" href>
                <i className="fab fa-instagram" />
              </a>
              <a className="text-dark pl-2" href>
                <i className="fab fa-youtube" />
              </a>
            </div>
          </div>
        </div>
        <div className="row align-items-center py-3 px-xl-5">
          <div className="col-lg-3 d-none d-lg-block">
            <a href className="text-decoration-none">
              <h1 className="m-0 display-5 font-weight-semi-bold"><span className="text-primary font-weight-bold border px-3 mr-1">E</span>Shopper</h1>
            </a>
          </div>
          <div className="col-lg-6 col-6 text-left">
            <form action>
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Search for products" />
                <div className="input-group-append">
                  <span className="input-group-text bg-transparent text-primary">
                    <i className="fa fa-search" />
                  </span>
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-3 col-6 text-right">
            <a href className="btn border">
              <i className="fas fa-heart text-primary" />
              <span className="badge">0</span>
            </a>
            <a href className="btn border">
              <i className="fas fa-shopping-cart text-primary" />
              <span className="badge">0</span>
            </a>
          </div>
        </div>
      </div>
      {/* Topbar End */}
      {/* Navbar Start */}
      <div className="container-fluid">
        <div className="row border-top px-xl-5">
          <div className="col-lg-3 d-none d-lg-block">
            <a className="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100" data-toggle="collapse" href="#navbar-vertical" style={{height: 65, marginTop: '-1px', padding: '0 30px'}}>
              <h6 className="m-0">Categories</h6>
              <i className="fa fa-angle-down text-dark" />
            </a>
            <nav className="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0 bg-light" id="navbar-vertical" style={{width: 'calc(100% - 30px)', zIndex: 1}}>
              <div className="navbar-nav w-100 overflow-hidden" style={{height: 410}}>
                <div className="nav-item dropdown">
                  <a href="#" className="nav-link" data-toggle="dropdown">Dresses <i className="fa fa-angle-down float-right mt-1" /></a>
                  <div className="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
                    <a href className="dropdown-item">Men's Dresses</a>
                    <a href className="dropdown-item">Women's Dresses</a>
                    <a href className="dropdown-item">Baby's Dresses</a>
                  </div>
                </div>
                 {
                   category.map(item => {
                      return <NavLink className="nav-item nav-link" to="/" key={item.id}>{item.name}</NavLink>
                    })
                  }
              </div>
            </nav>
          </div>
          <div className="col-lg-9">
            <Navbar />
          </div>
        </div>
      </div>
      {/* Navbar End */}
      {/* Page Header Start */}
      <div className="container-fluid bg-secondary mb-5">
        <div className="d-flex flex-column align-items-center justify-content-center" style={{minHeight: 300}}>
          <h1 className="font-weight-semi-bold text-uppercase mb-3">Our Shop</h1>
          <div className="d-inline-flex">
            <p className="m-0"><a href>Home</a></p>
            <p className="m-0 px-2">-</p>
            <p className="m-0">Shop</p>
          </div>
        </div>
      </div>
      {/* Page Header End */}
      {/* Shop Start */}
      <div className="container-fluid pt-5">
        <div className="row px-xl-5">
          {/* Shop Sidebar Start */}
          <div className="col-lg-3 col-md-12">
            {/* Price Start */}
            <div className="border-bottom mb-4 pb-4">
              <h5 className="font-weight-semi-bold mb-4">Filter by price</h5>
              <form>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input type="checkbox" className="custom-control-input" defaultChecked id="price-all" />
                  <label className="custom-control-label" htmlFor="price-all">All Price</label>
                  <span className="badge border font-weight-normal">1000</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input type="checkbox" className="custom-control-input" id="price-1" />
                  <label className="custom-control-label" htmlFor="price-1">$0 - $100</label>
                  <span className="badge border font-weight-normal">150</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input type="checkbox" className="custom-control-input" id="price-2" />
                  <label className="custom-control-label" htmlFor="price-2">$100 - $200</label>
                  <span className="badge border font-weight-normal">295</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input type="checkbox" className="custom-control-input" id="price-3" />
                  <label className="custom-control-label" htmlFor="price-3">$200 - $300</label>
                  <span className="badge border font-weight-normal">246</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input type="checkbox" className="custom-control-input" id="price-4" />
                  <label className="custom-control-label" htmlFor="price-4">$300 - $400</label>
                  <span className="badge border font-weight-normal">145</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                  <input type="checkbox" className="custom-control-input" id="price-5" />
                  <label className="custom-control-label" htmlFor="price-5">$400 - $500</label>
                  <span className="badge border font-weight-normal">168</span>
                </div>
              </form>
            </div>
            {/* Price End */}
            {/* Color Start */}
            <div className="border-bottom mb-4 pb-4">
              <h5 className="font-weight-semi-bold mb-4">Filter by color</h5>
              <form>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input type="checkbox" className="custom-control-input" defaultChecked id="color-all" />
                  <label className="custom-control-label" htmlFor="price-all">All Color</label>
                  <span className="badge border font-weight-normal">1000</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input type="checkbox" className="custom-control-input" id="color-1" />
                  <label className="custom-control-label" htmlFor="color-1">Black</label>
                  <span className="badge border font-weight-normal">150</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input type="checkbox" className="custom-control-input" id="color-2" />
                  <label className="custom-control-label" htmlFor="color-2">White</label>
                  <span className="badge border font-weight-normal">295</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input type="checkbox" className="custom-control-input" id="color-3" />
                  <label className="custom-control-label" htmlFor="color-3">Red</label>
                  <span className="badge border font-weight-normal">246</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input type="checkbox" className="custom-control-input" id="color-4" />
                  <label className="custom-control-label" htmlFor="color-4">Blue</label>
                  <span className="badge border font-weight-normal">145</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                  <input type="checkbox" className="custom-control-input" id="color-5" />
                  <label className="custom-control-label" htmlFor="color-5">Green</label>
                  <span className="badge border font-weight-normal">168</span>
                </div>
              </form>
            </div>
            {/* Color End */}
            {/* Size Start */}
            <div className="mb-5">
              <h5 className="font-weight-semi-bold mb-4">Filter by size</h5>
              <form>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input type="checkbox" className="custom-control-input" defaultChecked id="size-all" />
                  <label className="custom-control-label" htmlFor="size-all">All Size</label>
                  <span className="badge border font-weight-normal">1000</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input type="checkbox" className="custom-control-input" id="size-1" />
                  <label className="custom-control-label" htmlFor="size-1">XS</label>
                  <span className="badge border font-weight-normal">150</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input type="checkbox" className="custom-control-input" id="size-2" />
                  <label className="custom-control-label" htmlFor="size-2">S</label>
                  <span className="badge border font-weight-normal">295</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input type="checkbox" className="custom-control-input" id="size-3" />
                  <label className="custom-control-label" htmlFor="size-3">M</label>
                  <span className="badge border font-weight-normal">246</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input type="checkbox" className="custom-control-input" id="size-4" />
                  <label className="custom-control-label" htmlFor="size-4">L</label>
                  <span className="badge border font-weight-normal">145</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                  <input type="checkbox" className="custom-control-input" id="size-5" />
                  <label className="custom-control-label" htmlFor="size-5">XL</label>
                  <span className="badge border font-weight-normal">168</span>
                </div>
              </form>
            </div>
            {/* Size End */}
          </div>
          {/* Shop Sidebar End */}
          {/* Shop Product Start */}
          <div className="col-lg-9 col-md-12">
            <div className="row pb-3">
              <div className="col-12 pb-1">
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <form action>
                    <div className="input-group">
                      <input type="text" className="form-control" placeholder="Search by name" />
                      <div className="input-group-append">
                        <span className="input-group-text bg-transparent text-primary">
                          <i className="fa fa-search" />
                        </span>
                      </div>
                    </div>
                  </form>
                  <div className="dropdown ml-4">
                    <button className="btn border dropdown-toggle" type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Sort by
                    </button>
                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="triggerId">
                      <a className="dropdown-item" href="#">Latest</a>
                      <a className="dropdown-item" href="#">Popularity</a>
                      <a className="dropdown-item" href="#">Best Rating</a>
                    </div>
                  </div>
                </div>
              </div>
              
              {
                newsRest.map(item => {
                  return <div className="col-lg-4 col-md-6 col-sm-12 pb-1" key={item.id}>
                  <div className="card product-item border-0 mb-4">
                    <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                      <img className="img-fluid w-100" src={`https://safe-sands-85755.herokuapp.com${item.image}`} alt="" />
                    </div>
                    <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                      <h6 className="text-truncate mb-3">{item.name}</h6>
                      <div className="d-flex justify-content-center">
                        <h6>${item.price}</h6><h6 className="text-muted ml-2"><del>${item.price}</del></h6>
                      </div>
                    </div>
                    <div className="card-footer d-flex justify-content-between bg-light border">
                      <a href className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1" />View Detail</a>
                      <a href className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1" />Add To Cart</a>
                    </div>
                  </div>
                </div>
                })
              }
            </div>
          </div>
          {/* Shop Product End */}
        </div>
      </div>
      {/* Shop End */}
      {/* Footer Start */}
      <Footer />
      {/* Footer End */}
    </div>
    {/* Back to Top */}
    <a href="#" className="btn btn-primary back-to-top"><i className="fa fa-angle-double-up" /></a>
  </>
  )
}

export default Shop


