import React from 'react'
import styles from './Home.module.css'
import valorant_home_page_image from './images/valorant_home.jpeg';
const Home = () => {

    return (
        <div className={styles.homePage}>
            <p>

            </p>
            <div className="text-center">
                <p>
                    <a className="btn btn-danger" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button"
                       aria-expanded="false" aria-controls="multiCollapseExample1">Information About Valorant</a>
                    <button className="btn btn-light" type="button" data-bs-toggle="collapse"
                            data-bs-target="#multiCollapseExample2" aria-expanded="false"
                            aria-controls="multiCollapseExample2">Information About Agents
                    </button>
                    <button className="btn btn-light" type="button" data-bs-toggle="collapse"
                            data-bs-target=".multi-collapse" aria-expanded="false"
                            aria-controls="multiCollapseExample1 multiCollapseExample2">Toggle both elements
                    </button>
                </p>
                <div className="row">
                    <div className="col">
                        <div className="collapse multi-collapse" id="multiCollapseExample1">
                            <div className="card card-body">
                                Create a unique style and challenge yourself on the international competitive scene. You have 13 rounds each for attackers and defenders. Use the entire arsenal of weapons and tactical developments. One round, one life. If you want to survive, think faster than your opponent. Defeat opponents in Ranked, Unranked, Deathmatch and Quick Spike Mode.
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="collapse multi-collapse" id="multiCollapseExample2">
                            <div className="card card-body">
                                This is not just a shooting game. You are offered a choice of agents armed with various deadly skills, with the help of which any weapon in your hands will sparkle with new colors. Each agent has a unique gameplay - no two are the same.
                            </div>
                        </div>
                    </div>
                </div>
                <p></p>
            </div>
            <img src={valorant_home_page_image}
                 alt='valorant_home_page_picture'
                 width={1300}
                 height={600}
            />

        </div>
    );
}

export default Home;