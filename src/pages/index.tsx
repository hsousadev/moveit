import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { Experiencebar } from '../components/Experiencebar';
import { Profile } from '../components/Profile';

import Head from 'next/head';

import styles from '../styles/pages/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Experiencebar/>

      <Head>
        <title> Início - Move.it </title>
      </Head>


          <section>
                <div>
                  <Profile/>
                  <CompletedChallenges/>
                  <Countdown />
                </div>
                  
                <div>

                </div>
          
          </section>

    </div>
  )
}
