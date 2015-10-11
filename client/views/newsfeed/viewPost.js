Template.viewPost.events({
    'click .saveComment': function(e) {
        e.preventDefault();
        var commentText = $("#commentText").val();
        console.log('commentText', $("#commentText"));
        if (!!commentText) {
            News.update({
                _id: this._id
            }, {
                $push: {
                    comments: {
                        commentText: commentText,
                        createdAt: new Date(),
                        userId: Meteor.userId()
                    }
                }
            });
            $("#commentText").val('');
            IonModal.close('viewPost');
        } else {
            IonModal.close('viewPost');        
        }
    }
});