"use client";
import styles from './page.module.css';
import ResponsiveAppBar from '@/components/appbar/AppBar';
import SwipeableTextMobileStepper from '@/components/stepper/Stepper';
import { Grid, Link } from '@mui/material';

export default function Home() {
  
  return (
    <main className={styles.main}>
      <div>
        <ResponsiveAppBar/>
        <h3 style={{margin: "2em auto", textAlign: "center", color: "white "}}>BIENVENIDO A DIGITAL BANK</h3>
        <Grid container justifyContent={"center"} xs={10} style={{margin: " 2em auto"}}>
          <SwipeableTextMobileStepper/>
        </Grid>
        <button className={styles.submit} type="submit" >
          <Link href="/usuario">Agregar usuario</Link>
        </button>
      </div>
    </main>
  )
}
