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
import TextField from "@mui/material/TextField";

const AddUsers = () => {
  // Router Instance
  const router = useRouter();

  // Local State
  const [user, setUser] = useState({
    name: "",
    birthday: "",
    gender: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    if (user.name !== "" && user.birthday !== "" && user.gender) {
      enqueueSnackbar("Creación de usuario exitosa", { variant: "success" });
      // router.push("/products");
    } else if ( user.birthday === "" ) {
      enqueueSnackbar("Todos los campos son obligatorios, ingresa fecha de nacimiento", {
        variant: "warning",
      });
    } else if ( user.name === "" ) {
      enqueueSnackbar("Todos los campos son obligatorios, ingresa nombre del usuario", {
        variant: "warning",
      });
    } else if ( user.gender === "") {
      enqueueSnackbar("Todos los campos son obligatorios, ingresa el genero de usuario", {
        variant: "warning",
      });
    } else {
      enqueueSnackbar("Todos los campos son obligatorios, usuario fecha y genero ", {
        variant: "warning",
      });
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
            <TextField
              type="text"
              id="standard-basic"
              placeholder="Nombre"
              variant="standard"
              name="name"
              style={{ width: "300px", margin: "auto" }}
              value={user.name}
              onChange={handleChange}
            />
            <TextField
              type="date"
              id="standard-basic"
              variant="standard"
              style={{ width: "300px", margin: "auto" }}
              name="birthday"
              value={user.birthday}
              onChange={handleChange}
            />
            <FormControl
              variant="standard"
              sx={{ m: 1, minWidth: 120 }}
              style={{ width: "300px", margin: "auto" }}
            >
              <InputLabel id="demo-simple-select-standard-label">
                Género
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={user.gender}
                name="gender"
                onChange={handleChange}
                label="Age"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Masculino">Masculino</MenuItem>
                <MenuItem value="Femenino">Femenino</MenuItem>
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
