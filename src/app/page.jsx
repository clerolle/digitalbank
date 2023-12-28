import Image from 'next/image'
import styles from './page.module.css'
import ResponsiveAppBar from '@/components/appbar/AppBar'
import AddUsers from '@/components/addusers/AddUsers'
import MainPage from '@/components/mainpage/MainPage'
import SwipeableTextMobileStepper from '@/components/stepper/Stepper'
import { Grid } from '@mui/material'

export default function Home() {
  return (
    <main className={styles.main}>
      <div /* className={styles.description} */>
        <ResponsiveAppBar/>
        <Grid container justifyContent={"center"} xs={10} style={{margin: " 2em auto"}}>
          <SwipeableTextMobileStepper/>
        </Grid>
        <MainPage/>
      </div>
    </main>
  )
}
