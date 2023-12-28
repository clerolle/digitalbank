"use client";
import React, { useState, useEffect } from "react";
// import { usersAvailables } from "../../../data";
import ReviewCard from "@/components/card/Card";
import { styled } from "@mui/material/styles";
import { Grid } from "@mui/material";
import ResponsiveAppBar from "@/components/appbar/AppBar";
import { useSelector, useDispatch } from "react-redux";
import { getInfo } from "@/redux/features/infoSlice";

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
  // const [users, setUsers] = useState(usersAvailables);

  // Redux
  const dispatch = useDispatch();
  
  useEffect(()=>{
    fetch("http://127.0.0.1:8000/user/get")
      .then((res) => res.json())
      .then((data) => {
        dispatch(getInfo(data.data));
      });
  },[])

  // Redux State Extraction
  const info = useSelector(state => state.info.info);
  // console.log(info);

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
          {info?.map((user) => (
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
