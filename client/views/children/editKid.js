Template.editKid.created = function () {
  this.autorun(function () {
    this.subscription = Meteor.subscribe('kid', Router.current().params._id);
  }.bind(this));
};

Template.editKid.rendered = function () {
    console.log('_editKid');
  this.autorun(function () {
    if (!this.subscription.ready()) {
      IonLoading.show();
    } else {
      IonLoading.hide();
    }
  }.bind(this));
};

Template.editKid.helpers({
  kid: function () {
    return Children.findOne({_id: Router.current().params._id});
  }
});

Template.editKid.events({
  'click .save': function(e) {
    e.preventDefault();
    var firstName = $("#firstName").val();
    var lastName = $("#lastName").val();
    var birthday = $("#birthday").val();
    var gender = $("#gender").val();
    var updateKid = {
    	firstName: firstName,
    	lastName: lastName,
    	birthday: birthday,
    	gender: gender,
    	updatedAt: new Date()
    };
    console.log('kid', updateKid);
    Children.update({_id: Router.current().params._id}, {$set: updateKid});
    //Router.go('children');
  },
  'click .delete': function(e) {
    e.preventDefault();
    IonPopup.show({
                title: 'Delete Kid',
                template: 'Are you sure you want to delete this kid?',
                buttons: [{
                    text: 'Cancel',
                    type: 'button-assertive',
                    onTap: function() {
                        IonPopup.close();
                    }
                },
                {
                    text: 'OK',
                    type: 'button-assertive',
                    onTap: function() {
                        IonPopup.close();
                        Children.remove({_id: Router.current().params._id});
                        Router.go('children', {});
                    }
                }]
            });
  }
});
