constructor(props) {
    super(props);
    state={
        
        currentsuggestion:{
            category: "Study Skills",
            credit: "anonymous",
            desc: "print things out",
            id: "5cc5c453f66e162ea7842295"
        },

        // state: for specific ui 
        rightSideDrawerOpen: false,
        showNavButtons:true,
        dashboardFlag:false,
        deliverablesFlag:false,
        coursesFlag:false,
        weeksFlag:false,
        reviewWeekFlag:false,
       
       // state: login/reg info
        authToken:'eyJhbGxi01',
        currentusername:'cat@gmail.com',
        error:'',
        isError: false,
        islogin: true,
        loginFailed:false,
        isModal: false,
        loading:false,
        loggedIn: false,
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
        pLastSunday:0,
        SpringFall:16,
        SummerLong:8,
        SummerShort:4,
        Short:4,
        todaydate:"",

        //state: terms info
        currentterm: "Summer (4 weeks)",
        selectingterm:false,
        terms:['Spring (16 weeks)','Summer (4 weeks)', 'Fall (16 weeks)'],

        //state: weeks info
        currentweek: 1,
        weekUpdated: false,
        selectingweek:false,
        thistermweekcount:4,
        thistermweeks: [
                {id: "5d2220aa655e29001755d6f1", studentFullName: "Cat Maloney", studentUserName: "cat@gmail.com", termDesc: "Summer (4 weeks)", weekNum: 1},
                {id: "5d2220aa655e29001755d6f3", studentFullName: "Cat Maloney", studentUserName: "cat@gmail.com", termDesc: "Summer (4 weeks)", weekNum: 2},
                {id: "5d2220aa655e29001755d6f2", studentFullName: "Cat Maloney", studentUserName: "cat@gmail.com", termDesc: "Summer (4 weeks)", weekNum: 3},
                {id: "5d2220aa655e29001755d6f4", studentFullName: "Cat Maloney", studentUserName: "cat@gmail.com", termDesc: "Summer (4 weeks)", weekNum: 4},
        ],
        thisweekdetailsold:[{
            likedMost:"",
            likedLeast:"",
            mostDifficult:"",
            leastDifficult:""
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
            {id: "5d2220aa655e29001755d6f0", studentFullName: "Cat Maloney", termDesc: "Summer (4 weeks)", courseName: "Bio 101", courseDesc: "Bio 111 desc v 1"},
            {id: "5d2220fd655e29001755d6f9", studentFullName: "Cat Maloney", termDesc: "Summer (4 weeks)", courseName: "Math 101", courseDesc: "asdfasdf"},
            {id: "5d2221f9655e29001755d6fe", studentFullName: "Cat Maloney", termDesc: "Summer (4 weeks)", courseName: "History 101", courseDesc: "sdfasdf"},
            {id: "5d222245655e29001755d703", studentFullName: "Cat Maloney", termDesc: "Summer (4 weeks)", courseName: "Science 101", courseDesc: ""},
            {id: "5d2222bc655e29001755d708", studentFullName: "Cat Maloney", termDesc: "Summer (4 weeks)", courseName: "Philosophy 101", courseDesc: ""},

        ],

        // state: deliverables info
        
        deliverableAdded: false,
        deliverableUpdated:false,
        deliverableDeleted: false,
        deliverableMessage:"",
        currentdeliverable:{
            termDesc:"",
            courseName: "",
            dueDate: null,
            deliverableName: "",
            prephrs: 0,
            desc: "",
            impact:""
        },
        deliverablesUpdated:false,
        allprephrs:[1,2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        deliverableNames:['Quiz', 'Test', 'Midterm', 'Final', 'Lab/Essay', 'Term Paper/Group Project Final', 'Term Paper/Group-Project Checkpoint', 'Homework', 'Participation'],
        prephrstoday:0,
        prephrsthisweek:0,
        thistermdeliverables:[],
        thiscoursedeliverables:[],
        thisweekdeliverables:[],
        todaydeliverables:[],

        // state: grades info
        gradeAdded: false,
        gradeUpdated: false,
        gradeMessage:"",
        thistermgradecount:0,
        thistermgrades:[],
        thisweekgrades:[],
        thisweekcoursegrades:[]
    }
