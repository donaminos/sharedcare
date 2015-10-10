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