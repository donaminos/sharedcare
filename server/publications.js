Meteor.publish('countries', function () {
	return Countries.find({}, {name: 1}, {sort: {name: 1}});
});

Meteor.publish('kids', function(userId) {
	console.log(userId);
  return Children.find();//{userId: {$in: parents}}
});

Meteor.publish('kid', function(_id) {
	console.log('kid', _id);
  return Children.find({_id: _id});
});
Meteor.publish('groupCalendar', function(id) {
  return CalendarEvents.find({group: id});
});
Meteor.publish('expenses', function(id) {
  return Expenses.find({group: id});
})
Meteor.publish('groupMembers', function(id) {
  return Group.find({groupId: id});
});