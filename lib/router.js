var subs = new SubsManager();
Router.configure({
    layoutTemplate:  'layout',
    loadingTemplate: 'loading',
/*waitOn: function() {
        return [subs.subscribe('groups'), subs.subscribe('competitions'), subs.subscribe('positions')];
    }*/
});


Router.route('/', {
  name: "home",
  layoutTemplate: 'fullscreen',
  onBeforeAction: function() {
    if (!Meteor.user()) Router.go('login');
    this.next();
  },
  data: function() {},
  waitOn: function() {}

});

Router.route('/login', {
  name: 'login',
  layoutTemplate: 'fullscreen',
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
  layoutTemplate: 'fullscreen',
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
  layoutTemplate: 'fullscreen',
  onBeforeAction: function() {
    if (!Meteor.user()) Router.go('login');
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
    if (!Meteor.user()) Router.go('login');
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
    if (!Meteor.user()) Router.go('login');
    this.next();
  },
  data: function() {},
  waitOn: function() { return subs.subscribe('groupCalendar', 'abcd');}
});
Router.route('/expenses', {
  name: 'expenses',
  onBeforeAction: function() {
    if (!Meteor.user()) Router.go('login');
    this.next();
  },
  data: function() {},
  waitOn: function() {
    var user = Meteor.user();
    return subs.subscribe('expenses', user.profile.groupId[0]);
  }
});
Router.route('/managegroup', {
  name: 'managegroup',
  onBeforeAction: function() {
    if (!Meteor.user()) Router.go('login');
    this.next();
  },
  data: function() {},
  waitOn: function() {
    var user = Meteor.user();
    return subs.subscribe('groupMembers', user.profile.groupId[0]);
  }
});
Router.route('/newsfeed', {
  name: 'newsfeed',
  onBeforeAction: function() {
    if (!Meteor.user()) Router.go('login');
    this.next();
  },
  data: function() {},
  waitOn: function() {
    var user = Meteor.user();
    return subs.subscribe('news', user.profile.groupId[0]);
  }
});
Router.route('/carearrangements', {
  name: 'carearrangements',
  onBeforeAction: function() {
    if (!Meteor.user()) Router.go('login');
    this.next();
  },
  data: function() {},
  waitOn: function() {}
});
Router.route('/acceptInvitation', {
  name: 'acceptInvitation',
  onBeforeAction: function() {
    if (!Meteor.user()) Router.go('login');
    this.next();
  },
  data: function() {},

  waitOn: function() {
    var user = Meteor.user();
    return subs.subscribe('acceptInvitation', user.profile.groupId[0]);
  }
});
