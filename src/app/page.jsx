"use client";
import Image from 'next/image';
import styles from './page.module.css';
import ResponsiveAppBar from '@/components/appbar/AppBar';
import SwipeableTextMobileStepper from '@/components/stepper/Stepper';
import { Grid, Link } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getInfo } from '@/redux/features/infoSlice';

export default function Home() {
  
  // Redux
  const dispatch = useDispatch();
  
  useEffect(()=>{
    fetch("https://pokeapi.co/api/v2/pokemon/")
          .then((res) => res.json())
          .then((data) => {
            dispatch(getInfo(data.results));
          });
  },[])
  
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
        {/* <MainPage/> */}
      </div>
    </main>
  )
}
