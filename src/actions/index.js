export const CHOOSE_TERM = 'CHOOSE_TERM';
export const chooseTerm = termDesc => ({
    type: CHOOSE_TERM,
    termDesc
});

export const CHOOSE_COURSE = 'CHOOSE_COURSE';
export const chooseCourse = courseName => ({
    type: CHOOSE_COURSE,
    courseName
});

export const CHOOSE_WEEK = 'CHOOSE_WEEK';
export const chooseWeek = weekNum => ({
    type: CHOOSE_WEEK,
    weekNum
});