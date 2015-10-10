Template.managegroup.created = function () {
  this.autorun(function () {
    this.subscription = Meteor.subscribe('groupMembers');
  }.bind(this));
};

Template.managegroup.rendered = function () {
  this.autorun(function () {
    if (!this.subscription.ready()) {
      IonLoading.show();
    } else {
      IonLoading.hide();
    }
  }.bind(this));
};

Template.managegroup.helpers({
  data: function () {
    return Group.find();
  },
  checkInvitationStatus: function (s) {
    console.log(s);
    var status = '';
    switch (s) {
      case 'created':
        status = 'Group Admin';
        break;
      case 'invited':
        status = 'Invited';
        break;
      case 'connected':
        status = 'Connected';
        break;
      default:
        break;
    }
    console.log(status);
    return status;
  }
});
