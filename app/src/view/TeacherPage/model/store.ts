import {configureStore} from "@reduxjs/toolkit";
import {useDispatch, useSelector, type TypedUseSelectorHook} from "react-redux";
import {teacherReducer} from "@/view/TeacherPage/model/slice";

export const store = configureStore({
    reducer: {
        teacher: teacherReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({serializableCheck: false}),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
