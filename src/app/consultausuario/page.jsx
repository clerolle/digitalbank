"use client";
import React, { useState } from "react";
import { usersAvailables } from "../../../data";
import ReviewCard from "@/components/card/Card";
import { styled } from "@mui/material/styles";
import { Grid } from "@mui/material";
import ResponsiveAppBar from "@/components/appbar/AppBar";

const Item = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.mode === "#1A2027",
  border: "1px solid",
  borderColor: theme.palette.mode === "dark" ? "#444d58" : "#444d58",
  padding: theme.spacing(1),
  borderRadius: "4px",
  textAlign: "center",
  boxShadow: "3px 3px 20px white",
}));

const LookAtUser = () => {
  const [users, setUsers] = useState(usersAvailables);

  return (
    <div>
      <ResponsiveAppBar/>
      <br />
      <Grid container>
        <Grid
          item
          display={"flex"}
          flexWrap={"wrap"}
          justifyContent={"center"}
          gap={5}
          xs={10}
          md={12}
          marginLeft={4}
        >
          {users.map((user) => (
            <Item key={user.name}>
              <ReviewCard user={user} key={user.name} />
            </Item>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default LookAtUser;
