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
  waitOn: function() {}
});
Router.route('/signup', {
  name: 'signup',
  onBeforeAction: function() {
    this.next();
  },
  data: function() {},
  waitOn: function() {}
});
Router.route('/addkids', {
  name: 'addkids',
  onBeforeAction: function() {
    this.next();
  },
  data: function() {},
  waitOn: function() {}
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

