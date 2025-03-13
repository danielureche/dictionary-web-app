import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import WordDefinition from '../components/WordDefinition';
import SearchHistory from '../components/SearchHistory';
import { useDictionary } from '../hooks/useDictionary';
import { addToHistory } from '../store/slices/historySlice';
import { useTheme } from '../hooks/useTheme';
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Home() {
  const { loading, error, data, searchWord } = useDictionary();
  const dispatch = useDispatch();
  const { theme } = useTheme();

  const handleSearch = (word: string) => {
    searchWord(word);
    dispatch(addToHistory(word));
  };

  useEffect(() => {
    searchWord('keyboard');
  }, []);

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} transition-colors duration-200`}>
      <div className="max-w-3xl mx-auto px-6 py-8">
        <Header />

        <main>
          <SearchBar onSearch={handleSearch} loading={loading} />
          <SearchHistory onSelectWord={handleSearch} />
          {loading && (
            <div className="mt-10 flex justify-center">
              <AiOutlineLoading3Quarters className="animate-spin h-8 w-8 text-purple-600" />
            </div>
          )}

          {error && !loading && (
            <div className="mt-16 text-center">
              <div className="text-6xl mb-4">😕</div>
              <h3 className="text-xl font-bold mb-4">{error}</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Please try another search or check your spelling.
              </p>
            </div>
          )}

          {data && !loading && !error && (
            <WordDefinition data={data[0]} />
          )}
        </main>
      </div>
    </div>
  );
}