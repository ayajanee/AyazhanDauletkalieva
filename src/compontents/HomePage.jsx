import React from 'react'
import styles from './Home.module.css'
import valorant_home_page_image from './images/valorant_home.jpeg';
const Home = () => {

    return (
        <div className={styles.homePage}>
            <div>
                <img src={valorant_home_page_image}
                     alt='valorant_home_page_picture'
                     width={1300}
                     height={600}
                />
            </div>
        </div>
    );
}

export default Home;