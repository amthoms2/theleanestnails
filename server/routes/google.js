const router = require('express').Router();
const {google} = require('googleapis')
const privateKey = require('../../../leanest_nails_servce.json')
const path = require('path');

router.get('/find', async (req, res) => {

  const jwtClient = new google.auth.JWT(
    privateKey.client_email,
    null,
    privateKey.private_key,
    [
      'https://www.googleapis.com/auth/calendar'
    ],
    null
  )

  const calendar = google.calendar({
    version: "v3",
    auth: jwtClient
  });

  const params = {
    calendarId: 'primary'
  }
  try {
    const eventList = await calendar.calendarList.list();

    res.status(200).json(eventList.data);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
