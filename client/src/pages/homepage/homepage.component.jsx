import React from 'react'
import './homepage.styles.scss'
import Directory from '../../components/directory/directory.component'
import { HomePageContainer } from './homepage.styles';
function HomePage(props) {
    console.log(props)
    return (
        <HomePageContainer>
            <Directory />
        </HomePageContainer>
    )
}

export default HomePage
