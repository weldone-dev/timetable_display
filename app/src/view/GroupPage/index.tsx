"use client"
import {ReduxProvider} from "./model";
import {GroupPageContent} from "./ui/GroupPageContent";

export function GroupPage() {
    return (
        <ReduxProvider>
            <GroupPageContent/>
        </ReduxProvider>
    );
}


