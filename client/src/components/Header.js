import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends React.Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href='/auth/google'>Login with google</a>
            {/* a tag are for external Link tag are for internal */}
          </li>
        );
      default:
        return <>
          <li><Payments /></li>
          <li style={{margin: '0 10px'}}>Credit: {this.props.auth.credits}</li>
          <li><a href='/api/logout'>Logout</a></li>
        </>;
    }
  }

  render() {
    return (
      <nav>
        <div className='nav-wrapper'>
          <Link
            to={this.props.auth ? '/serveys' : '/'}
            className='left brand-logo'
          >
            Emaily
          </Link>
          <ul className='right'>{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
