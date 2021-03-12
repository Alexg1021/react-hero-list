import { useState } from 'react';

import HeadingComponent from './Heading';
import HeroListComponent from './HeroList';
import HeroFormComponent from './HeroForm';
import './App.css';

let heroesData = [
  {
    id: 1,
    name: 'Goku',
    universe: 'Dragon Ball Z',
    power: 'Sayan',
    coolNessRating: 10,
  },
  {
    id: 2,
    name: 'Ash Ketchum',
    universe: 'Pokemon',
    power: 'Persistent',
    coolNessRating: 6,
  },
  {
    id: 3,
    name: 'Sailor Moon',
    universe: 'Sailor Moon',
    power: 'Silver Crystal',
    coolNessRating: 8,
  },
  {
    id: 4,
    name: 'ElizaBest',
    universe: 'Alkali',
    power: 'Knows All Things',
    coolNessRating: 15,
  },
];

const App = () => {
  const [heroes, setHeroes] = useState(heroesData);
  const [success, setSuccess] = useState(false);
  let title = 'Welcome to Hero List!';
  let subTitle = 'The Place Where Heroes Live';

  const addNewHero = hero => {
    // let heroesCopy = [...heroes];
    // heroesCopy.push(hero);
    // console.log(heroesCopy);
    setHeroes([...heroes, hero]);
    // alert(`Your hero ${hero.name} was added to your list!`);
    // heroes = heroes.push(hero);
    // console.log(heroes);

    // Alert user of successful hero to the list
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
    }, 2000);
  };

  return (
    <div className='container'>
      {success ? (
        <div className='row'>
          <div className='col-6 offset-3'>
            <div class='alert alert-success text-center' role='alert'>
              You've successfully added a hero!
            </div>
          </div>
        </div>
      ) : (
        ''
      )}

      <HeadingComponent title={title} subTitle={subTitle} />
      <HeroFormComponent addNewHero={addNewHero} />
      <HeroListComponent heroes={heroes} />
    </div>
  );
};

export default App;
