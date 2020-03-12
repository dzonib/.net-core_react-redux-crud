/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Grid, TextField } from "@material-ui/core";

const initialFieldValues = {
  //provide same fields as name property of text field
  fullName: "",
  mobile: "",
  email: "",
  age: "",
  bloodGroup: "",
  address: ""
};

export default function DCandidateForm(props) {
  const [values, setValues] = useState(initialFieldValues);

  const handleInputChange = e => {
    const { name, value } = e.target;

    setValues({});
  };

  return (
    <form autoComplete="off" noValidate>
      <Grid container>
        <Grid xs={6}>
          <TextField
            name="fullName"
            variant="outlined"
            label="Full Name"
            value={values.fullName}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid xs={6}></Grid>
      </Grid>
    </form>
  );
}
