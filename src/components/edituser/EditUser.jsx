import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { FormControl, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import styles from "./EditUser.module.css";
import { SnackbarProvider, enqueueSnackbar } from "notistack";
import { useRouter } from "next/navigation";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function EditUser(props) {

  // Router Instance
  const router = useRouter();

  // local state
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [gender, setGender] = useState(props.user.gender);
  const [user, setUser] = useState({
    name: props.user.name,
    birthday: props.user.birthday,
    gender: props.user.gender,
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
      enqueueSnackbar("Edición usuario exitosa", { variant: "success" });
      setOpen(false);
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

  const handleDelete = () => {
    useEffect(()=>{
      fetch("https://")
            .then((res) => res.json())
            .then((data) => {
              setUser(data);
            });
    },[])
  }

  return (
    <div>
      <SnackbarProvider />
      <Button onClick={handleOpen}>
        <MoreVertIcon />
      </Button>
      <Modal
        style={{border: "none", margin: "5em auto", width: "300px"}}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
          <form onSubmit={submit}>
            <Grid container>
              <Grid item className={styles.container} >
                <div className={styles.header}>
                  <div className={styles.text}>USUARIO</div>
                </div>
                <div className={styles.inputs}>
                  <TextField
                    type="text"
                    id="standard-basic"
                    name="name"
                    variant="standard"
                    style={{ width: "300px", margin: "auto" }}
                    value={user.name}
                    onChange={handleChange}
                  />
                  <TextField
                    type="date"
                    id="standard-basic"
                    name="birthday"
                    variant="standard"
                    style={{ width: "300px", margin: "auto" }}
                    value={user.birthday}
                    onChange={handleChange}
                  />
                  <FormControl
                    variant="standard"
                    sx={{ m: 1, minWidth: 120 }}
                    style={{ width: "300px", margin: "auto" }}
                  >
                    <InputLabel id="demo-simple-select-standard-label">
                      Genero
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      name="gender"
                      label="Gender"
                      value={user.gender}
                      onChange={handleChange}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value="Masculino">Masculino</MenuItem>
                      <MenuItem value="Femenino">Femenino</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <Grid display={"flex"} >
                  <button className={styles.submit} type="submit">
                    EDITAR
                  </button>
                  <button className={styles.submit} onClick={handleDelete}>
                    ELIMINAR
                  </button>
                </Grid>
              </Grid>
            </Grid>
          </form>
      </Modal>
    </div>
  );
}
