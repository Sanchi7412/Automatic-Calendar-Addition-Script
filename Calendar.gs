function myFunction() {
	const CalenderID = '参照元カレンダーID';
	const MyCalenderID = '記入したいカレンダーID';
	const Search_word = '探したいワード';

	let calendar = CalendarApp.getCalendarById(CalenderID);
	let mycalendar = CalendarApp.getCalendarById(MyCalenderID);
	// let mycalendar = CalendarApp.getDefaultCalendar() // デフォルトのカレンダーであればこちら

	let startDate = new Date();
	let endDate = get_nextmonth_date(startDate);

	console.log(startDate);
	console.log(endDate);

	let events = calendar.getEvents(startDate, endDate, {
		search: Search_word,
	});
	let myevents = mycalendar.getEvents(startDate, endDate, {
		search: Search_word,
	});

	delete_calendar(myevents);
	add_calendar(events, mycalendar);
}

function delete_calendar(myevent) {
	for (i = 0; i < myevent.length; i++) {
		console.log(myevent[i].getTitle());
		myevent[i].deleteEvent();
	}
}

function add_calendar(event, mycalendar) {
	for (i = 0; i < event.length; i++) {
		console.log(event[i].getTitle());
		console.log(event[i].getDescription());
		// console.log(events[i].getStartTime())
		// console.log(events[i].getEndTime())

		let title = event[i].getTitle();
		let start = event[i].getStartTime();
		let end = event[i].getEndTime();

		let option = {
			description: event[i].getDescription(),
			// guest : event[i].getGuestByEmail(),
			// location : event[i].getLocation()
		};

		mycalendar.createEvent(title, start, end, option);
	}

	mycalendar.setColor(CalendarApp.EventColor.ORANGE);
}

function get_nextmonth_date(date, months) {
	var months = months || 2;

	var year = date.getFullYear();
	var month = date.getMonth();
	var day = date.getDate();

	var nextDate = new Date(year, month);
	nextDate.setMonth(nextDate.getMonth() + months);
	var lastDay = new Date(
		nextDate.getFullYear(),
		nextDate.getMonth() + 1,
		0
	).getDate();
	if (lastDay < day) {
		nextDate.setDate(lastDay);
	} else {
		nextDate.setDate(day);
	}
	return nextDate;
}
