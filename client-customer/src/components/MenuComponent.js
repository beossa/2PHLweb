import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import withRouter from '../utils/withRouter';
import MyContext from '../contexts/MyContext';

class Menu extends Component {
  static contextType = MyContext;

  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      txtKeyword: ''
    };
  }

  componentDidMount() {
    this.apiGetCategories();
  }

  apiGetCategories() {
    axios.get('/api/customer/categories').then((res) => {
      const result = res.data;
      this.setState({ categories: result });
    }).catch((error) => {
      console.error('Error fetching categories:', error);
    });
  }

  ckbChangeMode(e) {
    if (e.target.checked) {
      document.documentElement.setAttribute('data-bs-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-bs-theme', 'light');
    }
  }

  btnSearchClick(e) {
    e.preventDefault();
    this.props.navigate('/product/search/' + this.state.txtKeyword);
  }

  lnkLogoutClick() {
    this.context.setToken('');
    this.context.setCustomer(null);
    this.context.setMycart([]);
    localStorage.removeItem('customer_token');
  }

  render() {
    const isLoggedIn = this.context.token !== '';
    const { categories, txtKeyword } = this.state;

    const cates = categories.map((item) => (
      <li key={item._id} className="menu"><Link to={`/product/category/${item._id}`}>{item.name}</Link></li>
    ));

    return (
      <header className='header'>
        <div className="header-1">
          <a href="" class="logo"><i class="fa-solid fa-car"> 2PHL</i></a>

          <form className="search-form">
            <input type="search" placeholder="Enter keyword" className="keyword" id='search-box' value={txtKeyword} onChange={(e) => this.setState({ txtKeyword: e.target.value })} />
            <input type="submit" value="SEARCH" onClick={(e) => this.btnSearchClick(e)} />
          </form>

          <div className="icons">
            <div id="search-btn" className="fas fa-search"></div>
            <div className="dropdown">
              <div id="user-icon" className="fas fa-user" data-bs-toggle="dropdown" aria-expanded="false"></div>
              <ul className="dropdown-menu small-text-dropdown" aria-labelledby="user-icon">
                {isLoggedIn ? (
                  <>
                    <li className="dropdown-item">{this.context.customer.name}</li>
                    <li><Link className="dropdown-item" to='/myprofile'>My profile</Link></li>
                    <li><Link className="dropdown-item" to='/myorders'>My orders</Link></li>
                    <li><Link className="dropdown-item" to='/mycart'>My cart</Link></li>
                    <li><Link className="dropdown-item" to='/home' onClick={() => this.lnkLogoutClick()}>Logout</Link></li>
                  </>
                ) : (
                  <>
                    <li><Link className="dropdown-item" to='/login'>Login</Link></li>
                    <li><Link className="dropdown-item" to='/signup'>Sign-up</Link></li>
                    <li><Link className="dropdown-item" to='/active'>Active</Link></li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>

        <div className='header-2'>
          <div className='navbar'>
            <a><Link to='/'>Home</Link></a>
            <a><Link to='/gmap'>Gmap</Link></a>
            {cates}
          </div>
        </div>
      </header>
    );
  }
}

export default withRouter(Menu);