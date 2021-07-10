import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import ReportCard from './ReportCard';

const useStyles = makeStyles(() => ({
    reportList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      marginTop: '8px',
      height: '90vh',
      overflow: 'auto'
    }
  }));

const ReportList = ({ reports }) => {
    const classes = useStyles();
    
    return (
    <Container maxWidth="xl" className={classes.reportList}>
        {reports.map((report, i) => <ReportCard report={report} key={i} />)}
    </Container>)
}

export default ReportList;