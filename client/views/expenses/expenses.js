Template.expenses.events({
    'click .addNew': function(e) {
        e.preventDefault();
        IonModal.open('addExpense');
    },
});
Template.expenses.helpers({
    expenseList: function() {
        var list = [];
        var user = Meteor.user();
        var expenses = Expenses.find({group: user.profile.groupId[0]}, { sort: { date: -1 }}).fetch();
        var date = '';
        for (var i = 0; i < expenses.length; i++) {
        console.log(expenses[i].date, typeof expenses[i].date, date, typeof date);
            if ((expenses[i].date).toString() != date) {
                list.push({
                    datelabel: moment(expenses[i].date).format('ddd Do MMMM, YYYY')
                });
            }
            list.push(expenses[i]);
            date = (expenses[i].date).toString();
        }
        return list.length > 0 ? list : false;
    }
});
Template.singleExpenseItem.helpers({
    isAttachment: function(attachment) {
        return attachment == "" ? false : true;
    }
});

Template.singleExpenseItem.events({
    'click .viewAttachment': function(e) {
        e.preventDefault();
        console.log('this', this);
        IonModal.open('showAttachment', this);
    }
})