import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import WordDefinition from '../components/WordDefinition';
import SearchHistory from '../components/SearchHistory';
import { useDictionary } from '../hooks/useDictionary';
import { addToHistory } from '../store/slices/historySlice';
import { useTheme } from '../hooks/useTheme';

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
              <svg className="animate-spin h-8 w-8 text-purple-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
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