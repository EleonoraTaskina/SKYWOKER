import { useEffect, useState } from 'react'


function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(1);
  const [allCharacters, setAllCharacters] = useState([]);
  const [character, setCharacter] = useState({
    name: "",
    height: "",
    eye_color: "",
    gender: "",
  });


const [mas, setMas] = useState({
    mass: "",
    hair_color: "",
    birth_year: "",
});



  const up = () => {
    setNumber((prev) => {
      if (prev===82) return 82;
      return prev + 1;
  });
};


  const down = () => {
    setNumber((prev) => {
      if (prev === 1) return 1;
      return prev - 1;
    });
  };

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/`)
      .then((data) => data.json())
      .then((data) => {
        setCount(data.count);
        setAllCharacters(data.results);
      });
  }, []);
 

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/${number}/`)
    .then((data) => data.json())
    .then((data) => {
      setCharacter(prev => ({
        ...prev,
        name: data.name,
        height: data.height,
        eye_color: data.eye_color,
        gender: data.gender,
      }));
    });
  },[number]);


  useEffect(() => {
    fetch(`https://swapi.dev/api/people/`)
    .then((data) => data.json())
    .then((data) => {
      setCount(data.count);
      setAllCharacters(data.results);
    });
  },[]);


  useEffect(() => {
    fetch(`https://swapi.dev/api/people/${number}/`)
    .then((mas) => mas.json())
    .then((mas) => {
      setMas(prev => ({
        ...prev,
        mass: mas.mass,
        hair_color: mas.hair_color,
        birth_year: mas.birth_year,
      }));
    });
  }, [number]);



  return (
  <div>
    <div className="line">
      <span onClick={down} className="number"> - </span> 
      <span className='number'>{number}</span> 
      <span onClick={up} className='number'>+</span>{" "}
    </div>

    <div className="person-line">
      <span className='label'>Name: </span> <span className=''>{character.name}</span>
    </div>
    <div className="person-line">
      <span className='label'>Height: </span> <span className=''>{character.height}</span>
    </div>
    <div className="person-line">
      <span className='label'>Eye color: </span> <span className=''>{character.eye_color}</span>
    </div>
    <div className="person-line">
      <span className='label'>Gender: </span> <span className=''>{character.gender}</span>
    </div>

    <div className="person">
      <span className='label'> Mass: </span> <span className=''>{mas.mass}</span>
    </div>
    <div className="person">
      <span className='label'> Hair_color: </span> <span className=''>{mas.hair_color}</span>
    </div>
    <div className="person">
      <span className='label'> Birth_year: </span> <span className=''>{mas.birth_year}</span>
    </div>

    <div className="person">
        <ul>
          {allCharacters.map((char, index) => (
            <p key={index}>{char.name}</p>
          ))}
        </ul>
      </div>

  </div>
  );
}

export default App
