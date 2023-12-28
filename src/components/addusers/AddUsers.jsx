"use client";
import React, { useState } from "react";
import styles from "./AddUsers.module.css";
import { useRouter } from "next/navigation";
import { SnackbarProvider, enqueueSnackbar } from "notistack";
// import {ApiLogin} from '../api/ApiLogin';
import { Grid } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from '@mui/material/TextField';

const AddUsers = () => {
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
    <form onSubmit={submit}>
      <SnackbarProvider />
      <Grid container>
        <Grid item className={styles.container} md={6} xs={10}>
          <div className={styles.header}>
            <div className={styles.text}>USUARIO</div>
          </div>
          <div className={styles.inputs}>
            <TextField type="text" id="standard-basic"  variant="standard" style={{width: "300px", margin: 'auto'}}/>
            <TextField type="date" id="standard-basic"  variant="standard" style={{width: "300px", margin: 'auto'}}/>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} style={{width: "300px", margin: 'auto'}} >
              <InputLabel id="demo-simple-select-standard-label">
                Genero
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={gender}
                onChange={handleChange}
                label="Age"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="M">Masculino</MenuItem>
                <MenuItem value="F">Femenino</MenuItem>
              </Select>
            </FormControl>
          </div>
          <button className={styles.submit} type="submit">
            AGREGAR
          </button>
        </Grid>
      </Grid>
    </form>
  );
};

export default AddUsers;
