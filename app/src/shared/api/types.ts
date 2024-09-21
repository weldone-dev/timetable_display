export interface IResponseTimetableGroupContentItemToday {
    subject: string;
    with: {
        room: string;
        shortTeacherName: string;
        fullTeacherName: string | null;
    }[];
    time: string;
    updatedPart: boolean;
}

export interface IResponseTimetableGroupToday {
    date: string;
    content: IResponseTimetableGroupContentItemToday[]
}



export interface IResponseTimetableContentTeacherItemToday {
    subject: string | "undefined";
    with: { room: string, group: string }[];
    time: string;
    updatedPart: boolean;
}


export interface IResponseTimetableTeacherToday {
    date: string;
    content: IResponseTimetableContentTeacherItemToday[];
}


export interface IResponseTimetableSemesterContent {
    subject: string;
    with: {
        fullTeacherName?: string;
        shortTeacherName?: string;
        group?: string;
    }[];
}

export interface IResponseTimetableSemester {
    weekOdd: IResponseTimetableSemesterContent[][];
    weekEven: IResponseTimetableSemesterContent[][];
}


//Group
//-semester
export interface IResponseTimetableListGroupComplexSemester {
    group: string;
    timetable: IResponseTimetableSemester;
}

export type IResponseTimetableListGroupSemester = IResponseTimetableListGroupComplexSemester[];

//-today
export interface IResponseTimetableListGroupComplexToday extends IResponseTimetableGroupToday {
    group: string;
}

export type IResponseTimetableListGroupToday = IResponseTimetableListGroupComplexToday[];


//teacher
//-semester
export interface IResponseTimetableListTeacherComplexSemester {
    teacher: string;
    timetable?: IResponseTimetableSemester;
}

export type IResponseTimetableListTeacherSemester = IResponseTimetableListTeacherComplexSemester[];

//-today
export interface IResponseTimetableListTeacherComplexToday extends IResponseTimetableTeacherToday{
    teacher: string;
}

export type IResponseTimetableListTeacherToday = IResponseTimetableListTeacherComplexToday[];





