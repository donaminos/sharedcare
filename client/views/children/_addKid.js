Template._addKid.events({
  'click .save': function(e) {
    e.preventDefault();
    var firstName = $("#firstName").val();
    var lastName = $("#lastName").val();
    var birthday = $("#birthday").val();
    var gender = $("#gender").val();
    var newKid = {
    	firstName: firstName,
    	lastName: lastName,
    	birthday: birthday,
    	gender: gender,
    	createdAt: new Date()
    };
    console.log('kid', newKid);
    Children.insert(newKid);
    Router.go('children', {});
  }
});
