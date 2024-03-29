import React, {useEffect} from "react";
import {connect} from "react-redux";
import {Box, makeStyles} from "@material-ui/core";

import {getExamList, get_assignments} from "../../../../store/Actions/Classroom/Classroom";
import ExamList from "./Exam/ExamList";
import AssignmentList from "./Assignment/AssignmentList";
import {useParams} from "react-router-dom";


const useStyles = makeStyles(theme=>({
    root: {
        boxShadow: theme.shadows[2],
        padding: theme.spacing(2),
        width: "100%",
        minHeight: "30rem",
        '& h4': {
            fontFamily: "Playfair Display, serif",
            fontWeight: 500
        },
        '& h6': {
            fontFamily: "Poppins,sans-serif",
            fontWeight: 800
        }
    },
    quiz: {
        minHeight: "10rem"
    },
    assignment: {
        minHeight: "10rem",
        marginTop: "5rem"
    },
    fab: {
        bottom: 100,
        right: 350,
        position: "fixed"
    },
    modal: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
}))

const Classworks = (props) => {
    const classes = useStyles()
    const params = useParams()

    useEffect(()=>{
        props.getExamList(params.id)
        props.get_assignments(params.id)
    }, [])

    return(
        <Box className={classes.root}>
            <Box className={classes.quiz}>
                <ExamList classroom={props.classroom}/>
            </Box>
            <Box className={classes.assignment}>
                <AssignmentList classroom={props.classroom}/>
            </Box>
        </Box>
    )
}

export default connect(null,{getExamList, get_assignments})(Classworks)
