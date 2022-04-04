const router = require('express').Router();
const { google } = require('googleapis');
const path = require('path')
const calendarId = process.env.GOOGLE_CALENDAR_ID;
const { GoogleAuth } = require('google-auth-library');

// async function main(
//   // Full path to the sevice account credential
//   keyFile = process.env.GOOGLE_APPLICATION_CREDENTIALS
// ) {
//   const auth = new google.auth.GoogleAuth({
//     keyFile: keyFile,
//     scopes: 'https://www.googleapis.com/auth/calendar',
//   });
//   const client = await auth.getClient();
//   console.log('client', client)
//   const projectId = await auth.getProjectId();
//   const url = `https://dns.googleapis.com/dns/v1/projects/${projectId}`;
//   const res = await client.request({url});
//   console.log('DNS Info:');
//   console.log(res.data);
// }
// const args = process.argv.slice(2);
// main(...args).catch(console.error);

// const auth = new google.auth.GoogleAuth({
//   keyfile: path.resolve(__dirname, 'hello'),
//   scopes: 'https://www.googleapis.com/auth/calendar'
// })

// const calendar = google.calendar({
//   version: 'v3',
//   auth: auth
// });

// calendar.events.insert(
//   {
//     calendarId: 'np9ku4ib3dsun77atv1cs8hdcc@group.calendar.google.com',
//     resource: {
//       start: {
//         dateTime: '2022-03-30T09:00:00-07:00',
//         timeZone: 'America/Denver',
//       },
//       end: {
//         dateTime: '2022-03-31T17:00:00-07:00',
//         timeZone: 'America/Denver',
//       },
//       summary: 'Test event',
//       status: 'confirmed',
//       description: 'Test description',
//     },
//   },
//   (err, event) => {
//     if (err) console.log('Error', err)
//     // console.log(event.data)
//   },
// )

router.get('/find', async (req, res) => {

  const auth = new google.auth.GoogleAuth({
    keyfile: path.resolve(__dirname, 'hello'),
    scopes: 'https://www.googleapis.com/auth/calendar'
  })

  const calendar = google.calendar({
    version: 'v3',
    auth: auth
  });

  calendar.events.insert(
    {
      calendarId: calendarId,
      resource: {
        start: {
          dateTime: '2022-03-30T09:00:00-07:00',
          timeZone: 'America/Denver',
        },
        end: {
          dateTime: '2022-03-31T17:00:00-07:00',
          timeZone: 'America/Denver',
        },
        summary: 'Test event',
        status: 'confirmed',
        description: 'Test description',
      },
    },
    (err, event) => {
      if (err) console.log('Error', err)
      // console.log(event.data)
    },
  )
  // const auth = new google.auth.GoogleAuth({
  //   keyFile: '../../Desktop/leanest_nails_servce.json',
  //   scopes: 'https://www.googleapis.com/auth/calendar', //full access to edit calendar
  // });
  // auth.getClient().then(a=>{
  //   calendar.events.insert({
  //     auth:a,
  //     calendarId: calendarId,
  //     resource: event,
  //   }, function(err, event) {
  //     console.log(auth)
  //     if (err) {
  //       console.log('There was an error contacting the Calendar service: ' + err);
  //       return;
  //     }
  //     console.log('Event created: %s', event.data);
  //     res.json("Event successfully created!");
  //   });
  // })
//   const eventStartTime = new Date()
// eventStartTime.setDate(eventStartTime.getDay() + 2)
 try {
    const eventList = await calendar.calendarList.list();
    console.log('eventList',eventList)
    res.status(200).json(eventList.data);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;


// calendar.freebusy.query(
//   {
//     resource: {
//       timeMin: eventStartTime,
//       timeMax: eventEndTime,
//       timeZone: 'America/Denver',
//       items: [{ id: 'primary' }],
//     },
//   },
//   (err, res) => {
//     // Check for errors in our query and log them if they exist.
//     if (err) return console.error('Free Busy Query Error: ', err)

//     // Create an array of all events on our calendar during that time.
//     const eventArr = res.data.calendars.primary.busy

//     // Check if event array is empty which means we are not busy
//     if (eventArr.length === 0)
//       // If we are not busy create a new calendar event.
//       return calendar.events.insert(
//         { calendarId: 'primary', resource: event },
//         err => {
//           // Check for errors and log them if they exist.
//           if (err) return console.error('Error Creating Calender Event:', err)
//           // Else log that the event was created.
//           return console.log('Calendar event successfully created.')
//         }
//       )

//     // If event array is not empty log that we are busy.
//     return console.log(`Sorry I'm busy...`)
//   }
// )
