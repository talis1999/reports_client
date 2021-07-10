import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import currentUtcTime from './utils/currentUtcTime';
import ReportList from './components/ReportList';

function App() {
  const [reports, setReports] = useState([]);

  const getReports = async () => {
    try {
      const reports = (await axios('http://localhost:8080/reports')).data;
      setReports(reports);
    } catch (e) {
      console.log(e);
    }
  }
  //runs once per week
  const resetReports = async () => {
    try {
      await axios.put('http://localhost:8080/reports/uncheckall');
      const newReports = reports.map(report => ({ ...report, treated: false }))
      setReports(newReports);
      console.log('reports have been reset');
    } catch (e) {
      console.log(e);
    }
  }
  //runs every hour
  const sendReports = async () => {
    try {
      const recipientsArrays = (await axios.put('http://localhost:8080/reports/check')).data;
      console.log(recipientsArrays)
      const { day, hour } = currentUtcTime();
      //This action mirrors the update in the server after the hourly check
      const newReports = reports.map(report => {
        if (report.days.includes(day) && report.hour === hour && (!report.treated) && !(report.days.find(d => d > day))) {
          return {...report, treated:true}
        }
        return report;
      })
      setReports(newReports);

      //logs the recipients
      recipientsArrays.forEach(({recipients}) => {
        console.log(recipients.join(', ') + " got the report");
      });
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getReports();
  }, [])

  return (
  <div>
    <Header resetReports = {resetReports} sendReports = {sendReports}/>
    <ReportList reports = {reports}/>
  </div>
  );
}

export default App;
