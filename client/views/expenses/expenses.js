Template.expenses.events({
    'click .addNew': function(e) {
        e.preventDefault();
        IonModal.open('addExpense');
    },
});
Template.expenses.helpers({
    expenseList: function() {
        var list = [];
        var expenses = Expenses.find({group: 'abcd'}, { sort: { date: -1 }}).fetch();
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
});
