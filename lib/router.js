var subs = new SubsManager();
Router.configure({
  layoutTemplate: 'layout'
});


Router.route('/', {
  name: "home",
  onBeforeAction: function() {
    this.next();
  },
  data: function() {},
  waitOn: function() {}

});

Router.route('/login', {
  name: 'login',
  onBeforeAction: function() {
    this.next();
  },
  data: function() {},
  waitOn: function() {
    return subs.subscribe('countries');
  }
});
Router.route('/signup', {
  name: 'signup',
  onBeforeAction: function() {
    this.next();
  },
  data: function() {},
  waitOn: function() {
    return subs.subscribe('countries');
  }
});
Router.route('/children', {
  name: 'children',
  onBeforeAction: function() {
    this.next();
  },
  data: function() {},
  waitOn: function() {
    return subs.subscribe('kids', Meteor.userId());
  }
});
Router.route('/child/:_id', {
  name: 'editKid',
  onBeforeAction: function() {
    this.next();
  },
  data: function() {
    console.log(this.params._id);
    var kid = Children.findOne({_id: this.params._id});
    console.log(kid);
    return {
      kid: kid
    };
  },
  waitOn: function() { return subs.subscribe('kid', this.params._id); }
});
Router.route('/calendar', {
  name: 'calendar',
  onBeforeAction: function() {
    this.next();
  },
  data: function() {},
  waitOn: function() {}
});
Router.route('/expenses', {
  name: 'expenses',
  onBeforeAction: function() {
    this.next();
  },
  data: function() {},
  waitOn: function() {}
});
Router.route('/managegroup', {
  name: 'managegroup',
  onBeforeAction: function() {
    this.next();
  },
  data: function() {},
  waitOn: function() {}
});
Router.route('/newsfeed', {
  name: 'newsfeed',
  onBeforeAction: function() {
    this.next();
  },
  data: function() {},
  waitOn: function() {}
});
Router.route('/carearrangements', {
  name: 'carearrangements',
  onBeforeAction: function() {
    this.next();
  },
  data: function() {},
  waitOn: function() {}
});

