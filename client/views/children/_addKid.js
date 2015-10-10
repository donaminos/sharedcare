Template._addKid.events({
  'click .save': function(e) {
    e.preventDefault();
    var firstName = $("#firstName").val();
    var lastName = $("#lastName").val();
    var birthday = $("#birthday").val();
    var gender = $("#gender").val();
    var user = Meteor.users.findOne({_id: Meteor.userId()});
    console.log(user);
    var newKid = {
    	firstName: firstName,
    	lastName: lastName,
    	birthday: birthday,
    	gender: gender,
        groupId: user.profile.groupId,
    	createdAt: new Date()
    };
    console.log('kid', newKid);
    Children.insert(newKid);
    IonModal.close('_addKid')
  }
});
