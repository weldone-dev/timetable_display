"use client"
import {TeacherContent} from "./ui/TeacherContent";
import {ReduxProvider} from "./model";

export function TeacherPage() {
    return (
        <ReduxProvider>
            <TeacherContent/>
        </ReduxProvider>
    );
}