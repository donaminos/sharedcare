Template.profilePic.events({
  'click .save': function(e) {
    e.preventDefault();
    var postText = $("#postText").val();
    var user = Meteor.user();
    Meteor.users.update({_id: Meteor.userId()}, {$set: {'profile.avatarUrl': Session.get('profile_photo')}})
    IonModal.close('profilePic');
  },
  'click .picture': function () {
      MeteorCameraUI.getPicture(CameraOptions, function (error, data) {
        Session.set("profile_photo", data);
      });
    }
});

Template.profilePic.helpers({
	photo: function () {
  		return Session.get("profile_photo");
	}
});

Template.profilePic.rendered = function () {
  Session.set("profile_photo", "");
}