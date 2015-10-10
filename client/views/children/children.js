Template.children.created = function () {
  this.autorun(function () {
    this.subscription = Meteor.subscribe('kids');
  }.bind(this));
};

Template.children.rendered = function () {
  this.autorun(function () {
    if (!this.subscription.ready()) {
      IonLoading.show();
    } else {
      IonLoading.hide();
    }
  }.bind(this));
};

Template.children.helpers({
  children: function () {
    return Children.find();
  }
});
