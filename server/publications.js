Meteor.publish('countries', function () {
	return Countries.find({}, {name: 1}, {sort: {name: 1}});
});

Meteor.publish('kids', function(groupId) {
	console.log(groupId);
  return Children.find({groupId: groupId});//{userId: {$in: parents}}
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
});
Meteor.publish('news', function(id) {
  return News.find({group: id});
});
Meteor.publish('groupMembers', function(id) {
  return Group.find({groupId: id});
});

Meteor.publish('groupUsers', function(id) {
  return Meteor.users.find({'profile.groupId': id});
});

Meteor.publish('acceptInvitation', function(id) {
  return Children.find({groupId: id});
});
