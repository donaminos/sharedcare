Meteor.methods({
	checkInvitation: function(email) {
		var exists = Group.find({'members.email':email, 'members.invitationStatus': 'invited'}).fetch();
		console.log(exists);
		return exists;
	},
	updateInvitationStatus: function(groupId, email) {
		Group.update({_id: groupId, 'members.email': email}, {$set: {'members.$.invitationStatus': 'connected'}});
		return;
	},
	checkChildrenExists: function (groupId) {
		var exists = Children.find({groupId: groupId}).fetch();
		console.log(exists);
		return exists;

	}
})