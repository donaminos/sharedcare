Children.permit(['insert','update']).apply();
CalendarEvents.permit(['insert','update', 'remove']).apply();
Group.permit(['insert','update', 'remove']).apply();
Expenses.permit(['insert','update', 'remove']).apply();
Meteor.users.permit(['insert', 'update']).apply();
News.permit(['insert','update', 'remove']).apply();
Images.permit(['insert','update', 'remove']).apply();



