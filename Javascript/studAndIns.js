function studentList(arr){
    for (var i = 0; i < arr.length; i++) {
        var theStud = arr[i];
        console.log(theStud.first_name + " " + theStud.last_name);
    }
}

var students = [ 
    {first_name:  'Michael', last_name : 'Jordan'},
    {first_name : 'John', last_name : 'Rosales'},
    {first_name : 'Mark', last_name : 'Guillen'},
    {first_name : 'KB', last_name : 'Tonel'}
];

studentList(students);

function studAndIns(obj){
    for(var names in obj){
        console.log(names);
        for (var i = 0; i < obj[names].length; i++) {
            var thePerson = obj[names][i];
            var str = thePerson.first_name + " " + thePerson.last_name;
            console.log((i + 1) + ' - ' + str.toUpperCase() + ' - ' + (str.length - 1));
        }
    }
}

var users = {
    'Students': [ 
        {first_name:  'Michael', last_name : 'Jordan'},
        {first_name : 'John', last_name : 'Rosales'},
        {first_name : 'Mark', last_name : 'Guillen'},
        {first_name : 'KB', last_name : 'Tonel'}
     ],
    'Instructors': [
        {first_name : 'Michael', last_name : 'Choi'},
        {first_name : 'Martin', last_name : 'Puryear'}
     ]
    }

studAndIns(users);