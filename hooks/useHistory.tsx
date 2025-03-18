import { useAppSelector, useAppDispatch } from '@/store/hooks/hooksRedux';
import { RootState } from '../store/store';
import { addToHistory, clearHistory } from '../store/slices/historySlice';

export const useHistory = () => {
    const historyItems = useAppSelector((state: RootState) => state.history.items);
    const dispatch = useAppDispatch();

    const addWordToHistory = (word: string) => {
        dispatch(addToHistory(word));
    };

    const clearAllHistory = () => {
        dispatch(clearHistory());
    };

    return { historyItems, addWordToHistory, clearAllHistory};
};
