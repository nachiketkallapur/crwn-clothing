import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils.js';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

let displayName = '';

export const displaySalutation = () => {
    auth.onAuthStateChanged(async userAuth => {
        if (userAuth) {
            const userRef = await createUserProfileDocument(userAuth);

            userRef.onSnapshot(snapShot => {
                displayName = snapShot.data().displayName;
            })
        }
    })
}

const signOut = () => {
    auth.signOut();
    displayName = '';
}


function Header({ currentUser,hidden }) {
    displaySalutation();

    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo" />
            </Link>
            <div className="options">
                <div className="option">
                    {
                        displayName ? "Hello! " + displayName : displayName
                    }
                </div>
                <Link className="option" to="/shop">SHOP</Link>
                <Link className="option" to="/contact">CONTACT</Link>
                {
                    currentUser ?
                        <div className='option' onClick={() => signOut()}>SIGN OUT</div>
                        :
                        <Link className='option' to='/signin'>SIGN IN</Link>
                }
                <CartIcon />
            </div>
            {
                hidden
                ? null
                : <CartDropdown />
            }
        </div>
    )
}

//createStructuredSelector will pass toplevel state to the selectors
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
