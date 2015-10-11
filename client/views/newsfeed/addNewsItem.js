Template.addNewsItem.events({
    'click .save': function(e) {
        e.preventDefault();
        var postText = $("#postText").val();
        if (!!postText || !!Session.get('photo')) {
            var user = Meteor.user();
            News.insert({
                postText: postText,
                group: user.profile.groupId[0],
                userId: Meteor.userId(),
                createdAt: new Date,
                attachment: Session.get('photo') ? Session.get('photo') : "",
                comments: []
            });
            Session.set('photo', null);
            IonModal.close('addNewsItem');
        } else {
            IonModal.close('addNewsItem');
        }
    },
    'click .picture': function() {
        MeteorCameraUI.getPicture(CameraOptions, function(error, data) {
            Session.set("photo", data);
        });
    }
});
Template.addNewsItem.helpers({
    photo: function() {
        return Session.get("photo");
    }
});