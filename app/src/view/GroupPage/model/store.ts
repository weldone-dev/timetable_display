import {configureStore} from "@reduxjs/toolkit";
import {
    useDispatch,
    useSelector,
    type TypedUseSelectorHook
} from "react-redux";
import {groupReducer} from "@/view/GroupPage/model/slice";

export const store = configureStore({
    reducer: {
        group: groupReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({serializableCheck: false}),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
