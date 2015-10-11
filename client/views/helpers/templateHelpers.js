Template.registerHelper('isSelected', function(left,right) {
   return left == right ? 'selected' : '';
  });
Template.registerHelper('uppercase', function(text) {
  return text.toUpperCase();
});

Template.registerHelper('avatarUrlWithEmail', function(email) {
    var user = Meteor.users.findOne({'emails.0.address': email});
    console.log(user);
    return user.profile.avatarUrl ? user.profile.avatarUrl : "";
 });

Template.registerHelper('avatarUrlWithUserId', function(userId) {
    var user = Meteor.users.findOne({_id: userId});
    console.log(user);
    return user.profile.avatarUrl ? user.profile.avatarUrl : "";
 });

Template.registerHelper('userName', function(userId) {
    var user = Meteor.users.findOne({_id: userId});
    console.log(user);
    return user.profile.name ? user.profile.name : "";
 });