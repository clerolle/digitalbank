"use client";
import React, { useState } from "react";
import styles from "./MainPage.module.css";
import { useRouter } from "next/navigation";
import { SnackbarProvider, enqueueSnackbar } from "notistack";
// import {ApiLogin} from '../api/ApiLogin';
import { Grid } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Link from "next/link";

const MainPage = () => {
  // Router Instance
  const router = useRouter();

  // Local State
  const [user, setUser] = useState({
    name: "",
    password: "",
  });

  // Snackbar Instance
  // const { enqueueSnackbar } = useSnackbar()

  const [gender, setGender] = React.useState("");
  console.log(gender);
  const handleChange = (event) => {
    setGender(event.target.value);
  };

  //   const handleChange = (e) => {
  //     setUser({
  //       ...user,
  //       [e.target.name]: e.target.value,
  //     });
  //   };

  const submit = (e) => {
    e.preventDefault();
    if (user.name !== "" && user.password !== "") {
      let isValidate = ApiLogin(user.name, user.password);
      console.log(isValidate);
      if (isValidate) {
        enqueueSnackbar("Inicio de sesión exitosa", { variant: "success" });
        router.push("/products");
      } else {
        enqueueSnackbar("usuario o contraseña erroneos", {
          variant: "warning",
        });
      }
    } else if (user.name !== "" && user.password === "") {
      enqueueSnackbar("Todos los campos son obligatorios, contraseña erronea", {
        variant: "warning",
      });
    } else if (user.name === "" && user.password !== "") {
      enqueueSnackbar("Todos los campos son obligatorios,  usuario erroneo", {
        variant: "warning",
      });
    } else {
      enqueueSnackbar(
        "Todos los campos son obligatorios, usuario y contraseña erroneos",
        { variant: "warning" }
      );
    }
  };
  return (
    < >
      <SnackbarProvider />
      <Grid container>
        <Grid item className={styles.container} md={6} xs={10}>
          <div className={styles.title}>
            <h3>BIENVENIDO A DIGITAL BANK</h3>
            {/* <p>SI DESEA AGREGAR UN NUEVO USUARIO HAGA CLICK</p> */}
          </div>
          <button className={styles.submit} type="submit" >
          <Link href="/usuario">Agregar usuario</Link>
          </button>
        </Grid>
      </Grid>
    </>
  );
};

export default MainPage;
