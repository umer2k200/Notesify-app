import React,{useState} from 'react'
import ProfileInfo from '../Cards/ProfileInfo'
import { useNavigate } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
const Navbar = ({userInfo, onSearchNote, handleClearSearch, isLoginPage}) => {

  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const onLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  const handleSearch = () => {
    if(searchQuery){
      onSearchNote(searchQuery);
    }
  };
  const onClearSearch = () => {
    setSearchQuery('');
    handleClearSearch();
  };
  return (
    <div className='bg-white flex items-center justify-between px-6 py-2 drop-shadow'>
        <h2 className='text-xl font-medium text-black py-2'>Notesify</h2>   
        
        {!isLoginPage? (<SearchBar
          value={searchQuery}
          onChange={({target}) => {
            setSearchQuery(target.value);
          }}
          handleSearch={handleSearch}
          onClearSearch={onClearSearch}
        />) : null}
    
        {!isLoginPage? (<ProfileInfo userInfo={userInfo} onLogout={onLogout}/>): null}
    </div>
  )
}

export default Navbar