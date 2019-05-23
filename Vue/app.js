const students = [
    {name: 'Александр', secondname: 'Туголуков', age: '33', stud_group: 'ИВТ-2-16'},
    {name: 'Василий', secondname: 'Петров', age: '19', stud_group: 'ИВТ-1-19'}
]


var app = new Vue({
    el: '#app',
    data: {
        students: students,
        message: 'Список студентов!'
    }
})