const students = [
    {name: 'Александр', secondname: 'Туголуков', age: '33', stud_group: 'ИВТ-2-16'},
    {name: 'Василий', secondname: 'Петров', age: '19', stud_group: 'ИВТ-1-19'},
    {name: 'Бил', secondname: 'Гейтс', age: '55', stud_group: 'ИБМ-5-12'}
]
var stdname

var app = new Vue({
    el: '#app',
    data: {
        students: students,
        name1: 'name1',
    },
    methods: {
        greet: function(){
            array.push(this.name1);
            console.log(array);
        }
    }
})


const array = [1,2,3]

