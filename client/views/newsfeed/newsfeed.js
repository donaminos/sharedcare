Template.newsfeed.events({
    'click .addNew': function(e) {
        e.preventDefault();
        IonModal.open('addNewsItem');
    },
});
Template.newsfeed.helpers({
    newsList: function() {
        var news = News.find({
            group: 'abcd'
        }, {
            sort: {
                createdAt: -1
            }
        }).fetch();
        console.log(news);
        return news.length > 0 ? news : false;
    },
});
Template.singleNewsItem.helpers({
    commentCount: function() {
        var cl = this.comments.length;
        if (cl === 1) return '1 Comment';
        if (cl > 1) return cl + ' Comments';
        return 'Comment';
    },
    dateDisplay: function() {
        return moment(this.createdAt).fromNow();
    }
});
Template.singleNewsItem.events({
    'click .comment': function(e) {
        e.preventDefault();
        IonModal.open('viewPost', this);
    },
    'click .edit-post': function(e) {
        e.preventDefault();
        IonModal.open('editNewsItem', this);
    }
})