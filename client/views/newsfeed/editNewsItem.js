Template.editNewsItem.events({
  'click .save': function(e) {
    e.preventDefault();
    var postText = $("#postText").val();
    News.update({_id: this._id}, { $set: { postText: postText}});
    IonModal.close('editNewsItem');
  }
});