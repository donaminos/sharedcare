Template.acceptInvitation.created = function () {
  this.autorun(function () {
    this.subscription = Meteor.subscribe('acceptInvitation');
  }.bind(this));
};

Template.acceptInvitation.rendered = function () {
  this.autorun(function () {
    if (!this.subscription.ready()) {
      IonLoading.show();
    } else {
      IonLoading.hide();
    }
  }.bind(this));
};

Template.acceptInvitation.helpers({
  children: function () {
    var raw = Children.find().fetch();
    var names = _.pluck(raw, 'firstName');
    return names.join(', ');
  }
});

Template.acceptInvitation.events({
  'click .accept': function (e) {
    e.preventDefault();
    var user = Meteor.user();
    Meteor.call('updateInvitationStatus', user.profile.groupId[0], user.emails[0].address);
    IonPopup.show({
                title: 'Thank You!',
                template: 'You will now to taken to the shared care center.',
                buttons: [{
                    text: 'OK',
                    type: 'button-balanced',
                    onTap: function() {
                        IonPopup.close();
                        Router.go('/');
                    }
                }]
            });
  }
});