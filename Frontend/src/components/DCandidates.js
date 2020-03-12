/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../redux/actions/dCandidate";
import {
  Grid,
  Paper,
  TableContainer,
  TableHead,
  Table,
  TableRow,
  TableCell,
  TableBody,
  withStyles
} from "@material-ui/core";
import DCandidateForm from "./DCandidateForm";

const styles = theme => ({
  paper: {
    margin: theme.spacing(2),
    padding: theme.spacing(2)
  }
});

const DCandidates = ({ classes, ...props }) => {
  const [x, setX] = useState(0);

  // component did mount like (pass an empty array)
  // useEffect(() => {

  // }, []);

  //when x changes, execute
  useEffect(() => {
    props.fechAllDCandidates();
  }, [x]);

  return (
    <Paper className={classes.paper} elevation={3}>
      <Grid container>
        <Grid item xs={6}>
          <DCandidateForm />
        </Grid>
        <Grid item xs={6}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell> Name </TableCell>
                  <TableCell> Mobile </TableCell>
                  <TableCell> Blood Group </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {props.DCandidateList.map((candidate, i) => {
                  console.log(candidate);
                  return (
                    <TableRow key={i}>
                      <TableCell>{candidate.fullName}</TableCell>
                      <TableCell>{candidate.mobile}</TableCell>
                      <TableCell>{candidate.bloodGroup}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Paper>
  );
};

const mapStateToProps = state => {
  return {
    DCandidateList: state.dCandidate.list
  };
};

const mapActionToProps = {
  fechAllDCandidates: actions.fetchAll
};

export default connect(
  mapStateToProps,
  mapActionToProps
)(withStyles(styles)(DCandidates));
