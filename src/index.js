import moment from 'moment';

function getCheesesteakDay(target = moment()) {
  // find a 12pm friday of the week
  const csDay = target.clone().startOf('week').add(5, 'days').add(12, 'hours');

  // if it is past, add 1 week
  if (csDay < target) {
    csDay.add(1, 'week');
  }

  // make it biweekly depends on the week number
  if (csDay.week() % 2 !== 0) {
    csDay.add(1, 'week');
  }

  console.info(`${csDay.format('LLL')} (${csDay.fromNow()})`);
}

export default getCheesesteakDay;
