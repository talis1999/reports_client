import convertFromUtc from "./convertFromUtc";

const dateString = (days, hour, tz) => {
    const { days: cDays, hour: cHour } = convertFromUtc(days, hour, tz);
    const week = [null, 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const date = `${cDays.map(day => week[day]).join(', ')} - ${cHour}:00${cHour < 12 ? 'am' : 'pm'} GMT ${tz >= 0 ? '+' : ''}${tz}`;
    return date;
}

export default dateString;