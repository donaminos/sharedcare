Template.addNewsItem.events({
  'click .save': function(e) {
    e.preventDefault();
    var postText = $("#postText").val();
    var user = '1234'; //Meteor.userId()
    News.insert({postText: postText, group: 'abcd', user: user, createdAt: new Date, comments: []});
    IonModal.close('addNewsItem');
  }
});