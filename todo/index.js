
var app4 = new Vue({
    el: '#app4',
    data: {
        newItem: '',
        todos: [
            { text: 'Learn JavaScript', index: 0 },
        ],
        histories: [
            { text: 'Learn JavaScript', index: 0 },
        ],
    },

    methods: {
        removeTodo: function (todo) {
            var newTodos = []
            for (i = 0; i < this.todos.length; i++) {
              if (this.todos[i].index != todo.index) {
                 newTodos.push(this.todos[i])
              }
            }
            this.todos = newTodos
            this.reIndex()
            this.persist()
        },
        removeHistory: function (todo) {
            var newTodos = []
            for (i = 0; i < this.histories.length; i++) {
              if (this.histories[i].index != todo.index) {
                 newTodos.push(this.histories[i])
              }
            }
            this.histories = newTodos
            this.reIndex()
            this.persist()
        },
        doneTodo: function (todo) {
            var newTodos = []
            for (i = 0; i < this.todos.length; i++) {
              if (this.todos[i].index != todo.index) {
                 newTodos.push(this.todos[i])
              }
            }
            this.todos = newTodos

            this.histories.push(todo)
            this.reIndex()
            this.persist()
        },
        addTodo: function () {
            if (this.newItem && this.newItem != '') {
                this.todos = this.todos.concat([{text: this.newItem}])
                this.reIndex()
                this.persist()
                this.newItem = ''
            }
        },

        persist: function() {
            localStorage.newItem = this.newItem;
            localStorage.setItem('todos', JSON.stringify(this.todos));
            localStorage.setItem('histories', JSON.stringify(this.histories));
        },

        load: function() {
            if (localStorage.newItem) {
                this.newItem = localStorage.newItem;
            }
            if (localStorage.getItem('todos')) {
              try {
                this.todos = JSON.parse(localStorage.getItem('todos'));
              } catch(e) {
                localStorage.removeItem('todos');
              }
            }
            if (localStorage.getItem('histories')) {
              try {
                this.histories = JSON.parse(localStorage.getItem('histories'));
              } catch(e) {
                localStorage.removeItem('histories');
              }
            }
            this.reIndex()
        },
        reIndex: function() {
            var i;
            for (i = 0; i < this.todos.length; i++) {
              this.todos[i].index = i
            }

            var i;
            for (i = 0; i < this.histories.length; i++) {
              this.histories[i].index = i
            }
        }
    }
})

app4.load()



