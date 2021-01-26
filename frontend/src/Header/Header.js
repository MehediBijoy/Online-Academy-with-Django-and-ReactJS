import React, {useState} from "react";
import {connect} from "react-redux";
import {useHistory} from "react-router-dom";
import {AppBar, Box, Button, Drawer, IconButton, makeStyles, Toolbar, Typography} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import SideBar from "../SideBar/SideBar";
import Auth from "../Auth/Auth"
import {USER_LOGOUT} from "../../store/Actions/Auth/Login";

const useStyles = makeStyles(theme=>({
    root: {
        flexGrow: 1
    },
    title: {
        flexGrow: 1,
        fontFamily: "Playfair Display, serif"
    },
    menuButton: {
        marginRight: theme.spacing(2)
    }
}))

const Header = (props) => {
    const classes = useStyles()
    const history = useHistory()
    const [sidebar, setSidebar] = useState(false)
    const [auth, setAuth] = useState(false)

    const {isAuthenticated} = props.auth

    const user_logout = () =>{
        props.USER_LOGOUT()
        history.push(`/`)
    }

    const login = (<Button variant={"outlined"} color={"inherit"} onClick={()=>setAuth(true)}>Login</Button>)
    const logout = (<Button variant={"contained"} color={"secondary"} onClick={()=>user_logout()}>logout</Button>)

    return(
        <Box className={classes.root}>
            <AppBar color={"primary"} position={"fixed"}>
                <Toolbar>
                    <IconButton color={"inherit"} edge={"start"} onClick={()=>setSidebar(true)}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant={"h6"} className={classes.title}>
                        BUBT
                    </Typography>
                    {isAuthenticated ? logout:login}
                </Toolbar>
            </AppBar>
            <Toolbar />
            <Auth open={auth} onClose={()=>setAuth(false)}/>
            <Drawer anchor={"left"} open={sidebar} onClose={()=>setSidebar(false)}><SideBar /></Drawer>
        </Box>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.Auth
    }
}

export default connect(mapStateToProps, {USER_LOGOUT})(Header)
