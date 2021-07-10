import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Divider from '@material-ui/core/Divider'
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import dateString from "../utils/dateString";
import ScheduleIcon from '@material-ui/icons/Schedule';
import DoneAllRoundedIcon from '@material-ui/icons/DoneAllRounded';

const useStyles = makeStyles({
    root: {
        minWidth: 300,
        minHeight:'30vh'
    },
    content:{
        display:'flex',
        flexDirection: 'column',
        height: '30vh',
        gap:'8px'
    },
    section1:{
        flexGrow:1,
        display:'flex',
        alignItems:'center',
        gap:8
    },
    section2:{
        flexGrow:4,
        display:'flex',
        overflow: 'auto'
    },
    checkIcon:{
        color:'#1dd1a1'
    }
});

const ReportCard = ({report}) => {
    const classes = useStyles();
    const {recipients, emailBody, days, hour, timeZoneOffset, treated} = report;

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent className={classes.content}>
                <div className={classes.section1}>
                    <PeopleAltIcon/>
                    <Typography variant="body1">{recipients.join(', ')}</Typography>
                </div>
                <Divider/>
                <div className={classes.section2}>
                    <Typography variant="body2">
                        {emailBody}
                    </Typography>
                </div>
                <div className={classes.section1}>
                    <ScheduleIcon fontSize='small'/>
                    <Typography variant="overline" style={{flexGrow:1}}>
                        {dateString(days,hour,timeZoneOffset)}
                    </Typography>
                    {treated?<DoneAllRoundedIcon className={classes.checkIcon}/>:''}
                </div>
            </CardContent>
        </Card>
    );
}

export default ReportCard