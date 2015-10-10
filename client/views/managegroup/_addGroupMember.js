Template._addGroupMember.events({
  'click .save': function(e) {
    e.preventDefault();
    var email = $("#email").val();
    var name = $("#name").val();
    var relationship = $("#relationship").val();
    var newMember = {
        name: name,
        relationship: relationship,
        email: email,
        invitationStatus: 'invited'
    };
    var user = Meteor.user();
    console.log('newMember', newMember);
    Group.update({_id: user.profile.groupId[0]}, {$push: {members: newMember}});
    IonModal.close('_addGroupMember')
  }
});
