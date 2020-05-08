import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component.jsx';
import SignInAndSignUpPage from './components/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx';
import { auth, createUserProfileDocument } from './firebase/firebase.utils.js';

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })
      }

    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  signOut = () => {
    auth.signOut();
    this.setState({
      currentUser: null
    },
      () => console.log("User signed out successully"))

  }

  render() {

    return (
      <div>
        <Header currentUser={this.state.currentUser} signOut={this.signOut} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}


export default App;