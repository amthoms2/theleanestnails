/*
USE below instead of key in future
Workload identity federation
*/
// import { JWT } from 'google-auth-library'
// const CREDENTIALS = JSON.parse(process.env.REACT_APP_CREDENTIALS);
// const calendarId = process.env.CALENDAR_ID;

// // Google calendar API settings
// const SCOPES = 'https://www.googleapis.com/auth/calendar';
// const calendar = google.calendar({version : "v3"});

// const auth = new google.auth.JWT(
//     CREDENTIALS.client_email,
//     null,
//     CREDENTIALS.private_key,
//     SCOPES
// );
// console.log(CREDENTIALS.private_key)
// async function main() {
//   const client = new JWT({
//     email: CREDENTIALS.client_email,
//     key: CREDENTIALS.private_key,
//     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
//   });
//   console.log('CLIENT HERE',client)
//   const url = `https://dns.googleapis.com/dns/v1/projects/${CREDENTIALS.project_id}`;
//   const res = await client.request({url});
//   console.log('res',res);
// }
// main().catch(console.error);

// Your TIMEOFFSET Offset
// const TIMEOFFSET = '+05:30';

const Practice = () => {
  return (
    <>
      <button style={{width: 100, height: 50}}>Add Event</button>
    </>
  )
}

export default Practice
