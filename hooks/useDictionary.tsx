import { useAppDispatch, useAppSelector } from '@/store/hooks/hooksRedux'
import { fetchDictionaryData } from '@/store/slices/dictionarySlice';
import { RootState } from '@/store/store';

export const useDictionary = () => {
    const dispatch = useAppDispatch();
    const { data, loading, error } = useAppSelector((state: RootState) => state.dictionary);

    const searchWord = (word: string) => {
        if (!word.trim()) {
            return;
        }
        dispatch(fetchDictionaryData(word.trim()));
    };

    return { loading, error, data, searchWord };
};
