User:{
    Name: '',
    Email: '',
    Grade: number,
    Points: number,
    Courses:{
        total:[],
        active:[],
        completed:[],
    },
    multiplier: 1,
}

Course:{
    Name: '',
    id:number,
    Description: '',
    Points: number,
    Icon: Image,
    Completed: boolean,
    Progress: number,
    Lessons: {
        Name: '',
        Description: '',
        LessonImage: [ImageURLs],

    },
    FAQs:{
        question: '',
        answer: '',
    }
 
    Activities:{
        Object
    }
}


