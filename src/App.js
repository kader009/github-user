import './App.css';
import { useEffect, useState } from 'react';
import Display from './Display/Display'; 


function App() {
  const [name, setname] = useState('');
  const [data, setdata] = useState({});




  const fetchRequest = async () => {
    const data = await fetch(
      `https://api.github.com/users/${name}`
      );
      const dataJ = await data.json();
      const result = dataJ.results;
      setname(result)
  };
  useEffect(() => {
    fetchRequest();
  }, []);


  const onChange = (e) =>{
    setname(e.target.value)
  }

  const handleForm = (e) =>{
    e.preventDefault()
    fetch(`https://api.github.com/users/${name}`)
    .then(res => res.json())
    .then(find => {setdata(find)
    })
  }

  return (
    <div className="App">
      <h1 className='mt-3 mb-2'>Find Github user With Search</h1>
    <div className='container  w-50'>

    <form onSubmit={handleForm}>
    
    <input
    type={name}
    placeholder="Search github user ..."
    // value={name}
    onChange={onChange} className='mt-3'
    />

    </form>

    </div>

    {/* pass data here */}
    <div>
      <Display data={data}  key={data.id}></Display>
    </div>
    </div>
  );
}

export default App;
