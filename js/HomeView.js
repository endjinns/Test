var HomeView = function (store) {

  
    this.render = function () {
        this.el.html(HomeView.template());
        return this;
    };
    this.findByName = function () {
        store.findByName($('.search-key').val(), function (employees) {
            $('.employee-list').html(HomeView.liTemplate(employees));
        });
    };



    this.initialize = function () {
        // Define a div wrapper for the view. The div wrapper is used to attach events.
        this.el = $('<div/>');
        this.el.on('keyup', '.search-key', this.findByName);
        this.detailsURL = /^#employees\/(\d{1,})/;
    };

    this.initialize();



    var EmployeeView = function (employee) {

        this.initialize = function () {
            this.el = $('<div/>');
        };

        this.initialize();

    }

    EmployeeView.template = Handlebars.compile($("#employee-tpl").html());


    this.render = function () {
        this.el.html(EmployeeView.template(employee));
        return this;
    };

}
HomeView.template = Handlebars.compile($("#home-tpl").html());
HomeView.liTemplate = Handlebars.compile($("#employee-li-tpl").html());

