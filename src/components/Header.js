import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import DescriptionIcon from '@material-ui/icons/Description';
import IconButton from '@material-ui/core/IconButton'
import ScheduleIcon from '@material-ui/icons/Schedule';
import RestoreIcon from '@material-ui/icons/Restore';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#10ac84',
        padding: '8px'
    },
    iconButton: {
        color: 'white',
    },
    title:{
        flexGrow:1
    }
}));

const Header = ({resetReports, sendReports}) => {
    const classes = useStyles();
    return (<AppBar position="static" className={classes.root}>
        <Toolbar>
            <DescriptionIcon fontSize='large' />
            <Typography variant="h5" className={classes.title}>
                Reports
            </Typography>
            <IconButton className={classes.iconButton} onClick={sendReports}>
                <ScheduleIcon />
            </IconButton>
            <IconButton className={classes.iconButton} onClick={resetReports}>
                <RestoreIcon />
            </IconButton>
        </Toolbar>
    </AppBar>)
}

export default Header;