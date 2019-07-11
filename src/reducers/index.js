import * as actions from '../actions';

const initialState = {
    currentsuggestion:[{
        category: "Study Skills",
        credit: "anonymous",
        desc: "print things out",
        id: "5cc5c453f66e162ea7842295"
    }],

    // state: for specific ui 
    rightSideDrawerOpen: false,
    showNavButtons:true,
   
   // state: login/reg info
    currentusername:'cat@gmail.com',
    isModal: false,
    password: "cat9515",
    
    // state: date info
    currentdate:"2019-07-8",
    fCurrentDate:"Monday, Aug 8",
    pCurrentDate:1562558400000,
    nextweek: 0,
    nextSunday:"",
    pNextSunday:1563076800000,
    followingSunday:"",
    lastSunday:"",
    fLastSunday: "Sunday, Aug 7",
    fNextSunday: "Sunday, Aug 14",
    pLastSunday:null,
    SpringFall:16,
    SummerLong:8,
    SummerShort:4,
    Short:4,
    todaydate:"07/08/2019",

    //state: terms info
    currentterm: "Summer (4 weeks)",
    selectingterm:false,
    terms:[
        {termDesc: 'Spring (16 weeks)'},
        {termDesc:'Summer (4 weeks)'},
        {termDesc: 'Fall (16 weeks)'}
    ],

    //state: weeks info
    currentweek: 1,
    weekUpdated: false,
    selectingweek:false,
    thistermweekcount:4,
    thistermweeks: [
            {studentFullName: "Cat Maloney", studentUserName: "cat@gmail.com", termDesc: "Summer (4 weeks)", weekNum: 1, likedMost: "History 101", likedLeast: "Math 101", mostDifficult: "Philosophy 101", leastDifficult: "History 101"},
            {studentFullName: "Cat Maloney", studentUserName: "cat@gmail.com", termDesc: "Summer (4 weeks)", weekNum: 2, likedMost: "History 101", likedLeast: "Math 101", mostDifficult: "Math 101", leastDifficult: "History 101"},
            {studentFullName: "Cat Maloney", studentUserName: "cat@gmail.com", termDesc: "Summer (4 weeks)", weekNum: 3, likedMost: "Math 101", likedLeast: "Philosophy 101", mostDifficult: "Philosophy 101", leastDifficult: "History 101"},
            {studentFullName: "Cat Maloney", studentUserName: "cat@gmail.com", termDesc: "Summer (4 weeks)", weekNum: 4, likedMost: "History 101", likedLeast: "History 101", mostDifficult: "Philosophy 101", leastDifficult: "History 101"},
    ],
    thisweekdetailsold:[{
        likedMost:"Bio 101",
        likedLeast:"Math 101",
        mostDifficult:"History 101",
        leastDifficult:"History 101"
    }],

    // state: course info
    currentcoursename: '',
    courseAdded:false,
    courseUpdated:false,
    courseDeleted: false,
    courseMessage: "",
    showcoursedeletemodal: false,
    thistermcoursecount:5,
    thistermcourses: [
        {studentFullName: "Cat Maloney", termDesc: "Summer (4 weeks)", courseName: "History 101", courseDesc: "Bio 111 desc v 1"},
        {studentFullName: "Cat Maloney", termDesc: "Summer (4 weeks)", courseName: "Math 101", courseDesc: "asdfasdf"},
        {studentFullName: "Cat Maloney", termDesc: "Summer (4 weeks)", courseName: "Science 101", courseDesc: "study of man"},
        {studentFullName: "Cat Maloney", termDesc: "Summer (4 weeks)", courseName: "Philosophy 101", courseDesc: "ethical studies"},

    ],

    // state: deliverables info
    currentdeliverable:{
        termDesc:"Summer (4 weeks)",
        courseName: "History 101",
        dueDate: "07/09/2019",
        deliverableName: "Homework",
        prephrs: 1,
        desc: "fill out sheet",
        impact:"low"
    },
    deliverablesUpdated:false,
    allprephrs:[1,2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    deliverableNames:['Quiz', 'Test', 'Midterm', 'Final', 'Lab/Essay', 'Term Paper/Group Project Final', 'Term Paper/Group-Project Checkpoint', 'Homework', 'Participation'],
    prephrstoday:2,
    prephrsthisweek:15,
    thistermdeliverables:[
        {
            termDesc:"Summer (4 weeks)",
            courseName: "History 101",
            dueDate: "07/09/2019",
            deliverableName: "Homework",
            prephrs: 1,
            desc: "fill out sheet",
            impact:"low"
        },
        {
            termDesc:"Summer (4 weeks)",
            courseName: "Math 101",
            dueDate: "07/09/2019",
            deliverableName: "Homework",
            prephrs: 1,
            desc: "fill out sheet",
            impact:"low"
        },
        {
            termDesc:"Summer (4 weeks)",
            courseName: "Philosophy 101",
            dueDate: "07/09/2019",
            deliverableName: "Homework",
            prephrs: 1,
            desc: "fill out sheet",
            impact:"low"
        },
        {
            termDesc:"Summer (4 weeks)",
            courseName: "History 101",
            dueDate: "07/09/2019",
            deliverableName: "Homework",
            prephrs: 1,
            desc: "fill out sheet",
            impact:"low"
        },
        {
            termDesc:"Summer (4 weeks)",
            courseName: "Science 101",
            dueDate: "07/10/2019",
            deliverableName: "Quiz",
            prephrs: 1,
            desc: "fill out sheet",
            impact:"Moderate"
        },
        {
            termDesc:"Summer (4 weeks)",
            courseName: "History 101",
            dueDate: "07/08/2019",
            deliverableName: "Lab",
            prephrs: 3,
            desc: "fill out sheet",
            impact:"Moderate"
        },
        {
            termDesc:"Summer (4 weeks)",
            courseName: "History 101",
            dueDate: "07/09/2019",
            deliverableName: "Homework",
            prephrs: 1,
            desc: "fill out sheet",
            impact:"low"
        }
    ],
    thiscoursedeliverables:[
        {
            termDesc:"Summer (4 weeks)",
            courseName: "History 101",
            dueDate: "07/09/2019",
            deliverableName: "Lab",
            prephrs: 3,
            desc: "fill out sheet",
            impact:"Moderate"
        },
        {
            termDesc:"Summer (4 weeks)",
            courseName: "History 101",
            dueDate: "07/09/2019",
            deliverableName: "Homework",
            prephrs: 1,
            desc: "fill out sheet",
            impact:"low"
        }
    ],
    thisweekdeliverables:[
        {
            termDesc:"Summer (4 weeks)",
            courseName: "Philosophy 101",
            dueDate: "07/09/2019",
            deliverableName: "Homework",
            prephrs: 1,
            desc: "fill out sheet",
            impact:"low"
        },
        {
            termDesc:"Summer (4 weeks)",
            courseName: "History 101",
            dueDate: "07/09/2019",
            deliverableName: "Homework",
            prephrs: 1,
            desc: "fill out sheet",
            impact:"low"
        },
        {
            termDesc:"Summer (4 weeks)",
            courseName: "Science 101",
            dueDate: "07/10/2019",
            deliverableName: "Quiz",
            prephrs: 1,
            desc: "fill out sheet",
            impact:"Moderate"
        },
    ],
    todaydeliverables:[
        {
            termDesc:"Summer (4 weeks)",
            courseName: "History 101",
            dueDate: "07/08/2019",
            deliverableName: "Lab",
            prephrs: 3,
            desc: "fill out sheet",
            impact:"Moderate"
        }
    ],

    // state: grades info
    thistermgradecount:16,
    thistermgrades:[
        {
        termDesc:"Summer (4 weeks)",
        course: "History 101",
        weekNum: 1,
        gradeNum: 100
        },
        {
        termDesc:"Summer (4 weeks)",
        course: "Science 101",
        weekNum: 1,
        gradeNum: 65
        },
        {
        termDesc:"Summer (4 weeks)",
        course: "Philosophy 101",
        weekNum: 1,
        gradeNum: 80
        },
        {
        termDesc:"Summer (4 weeks)",
        course: "Math 101",
        weekNum: 1,
        gradeNum: 75
        }
    ],
    thisweekgrades:[{
        termDesc:"Summer (4 weeks)",
        course: "History 101",
        weekNum: 1,
        gradeNum: 100
        },
        {
        termDesc:"Summer (4 weeks)",
        course: "Science 101",
        weekNum: 1,
        gradeNum: 65
        },
        {
        termDesc:"Summer (4 weeks)",
        course: "Philosophy 101",
        weekNum: 1,
        gradeNum: 80
        },
        {
        termDesc:"Summer (4 weeks)",
        course: "Math 101",
        weekNum: 1,
        gradeNum: 75
        }
    ],
    thisweekcoursegrades:[]
}

export const efuReducer= (state=initialState, action) => {
    if (action.type === actions.CHOOSE_TERM) {
        return Object.assign({}, state, {
            currentterm: action.termDesc
        });
    }
    else if (action.type === actions.CHOOSE_COURSE) {
            return Object.assign({}, state, {
                currentcourse: action.courseName
            });
    }
    else if (action.type === actions.CHOOSE_WEEK) {
        return Object.assign({}, state, {
            currentweek: action.weekNum
        });
    }
    return state;
};
