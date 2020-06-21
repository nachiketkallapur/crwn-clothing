import React from 'react';
//import './header.styles.scss';
//import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils.js';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './headers.styles';

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
        <HeaderContainer>
            <LogoContainer to="/">
                <Logo className="logo" />
            </LogoContainer>
            <OptionsContainer>
                <div className="option">
                    {
                        displayName ? "Hello! " + displayName : displayName
                    }
                </div>
                <OptionLink to="/shop">SHOP</OptionLink>
                <OptionLink to="/contact">CONTACT</OptionLink>
                {
                    currentUser ?
                        <OptionLink as='div' onClick={() => signOut()}>SIGN OUT</OptionLink>
                        :
                        <OptionLink to='/signin'>SIGN IN</OptionLink>
                }
                <CartIcon />
            </OptionsContainer>
            {
                hidden
                ? null
                : <CartDropdown />
            }
        </HeaderContainer>
    )
}

//createStructuredSelector will pass toplevel state to the selectors
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
