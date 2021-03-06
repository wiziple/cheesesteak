#!/usr/bin/env node

import moment from 'moment';

function cheesesteak(date) {
  const target = date ? moment(date) : moment();

  // find a 12pm friday of the week
  const csDay = target.clone().startOf('week').add(5, 'days').add(12, 'hours');

  // if it is past, add 1 week
  if (csDay < target) {
    csDay.add(1, 'week');
  }

  // make it biweekly depends on the week number
  if (csDay.week() % 2 === 0) {
    csDay.add(1, 'week');
  }

  // print out the date
  console.info(`Next Cheesesteak day is ${csDay.format('LLL')} (${csDay.fromNow()}) 🎉`);

  return csDay;
}

cheesesteak();

export default cheesesteak;
