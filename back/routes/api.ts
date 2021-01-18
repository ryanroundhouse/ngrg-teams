import { Presence } from '../enums/presence';
import { Role } from '../enums/role';
import { Attendance } from '../interfaces/attendance';

var express = require('express');
var router = express.Router();

var _dashboardData = {
  teamId: 0,
  teamName: "Katie's Kapows",
  memberships: [
    {
      person: {
        id: 0,
        name: 'Ryan',
        email: 'rg@ryangraham.ca',
      },
      role: Role.Captain,
    },
    {
      person: {
        id: 1,
        name: 'Katie',
        email: 'kt@ryangraham.ca',
      },
      role: Role.Member,
    },
    {
      person: {
        id: 2,
        name: 'Crowley',
        email: 'sk@ryangraham.ca',
      },
      role: Role.Member,
    },
  ],
  games: [
    {
      id: 0,
      teamId: 0,
      date: new Date(
        'Tue May 12 2020 00:00:00 GMT-0400 (Eastern Daylight Time)'
      ),
      time: '8:00',
    },
    {
      id: 1,
      teamId: 0,
      date: new Date(
        'Tue May 19 2020 00:00:00 GMT-0400 (Eastern Daylight Time)'
      ),
      time: '8:00',
    },
  ],
  attendances: [
    {
      gameId: 0,
      personId: 0,
      presence: Presence.In,
      message: null,
    },
    {
      gameId: 0,
      personId: 1,
      presence: Presence.Out,
      message: null,
    },
  ],
};

/* GET home page. */
router.get('/dashboard/team/:id', function (req, res, next) {
  const teamId = req.params['id'];
  console.log(teamId);
  res.send(fillData(_dashboardData));
});

function fillData(dashboardData) {
  let memberIds = dashboardData.memberships.map((member) => member.person.id);
  let gameIds = dashboardData.games.map((game) => game.id);

  memberIds.forEach((memberId) => {
    gameIds.forEach((gameId) => {
      let foundItem = dashboardData.attendances.find(
        (attendanceItem) =>
          attendanceItem.gameId == gameId && attendanceItem.personId == memberId
      );
      if (foundItem === undefined) {
        let newAttendanceItem: Attendance = {
          gameId: gameId,
          personId: memberId,
          presence: Presence.Unknown,
          message: null,
        };
        dashboardData.attendances.push(newAttendanceItem);
      }
    });
  });
  return dashboardData;
}

/* GET home page. */
router.get('/', function (req, res, next) {
  console.log('base');
  res.send(_dashboardData);
});
/* GET home page. */
router.get('/dashboard', function (req, res, next) {
  console.log('dashboard');
  res.send(_dashboardData);
});
/* GET home page. */
router.get('/dashboard/team', function (req, res, next) {
  console.log('team');
  res.send(_dashboardData);
});

module.exports = router;
