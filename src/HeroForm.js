import { useState } from 'react';

const HeroFormComponent = () => {
  // initialize my variable and state hooks first
  const [heroName, setHeroName] = useState('');
  //   let heroName = ''
  //   const setHeroName = (value) => {
  //     //   updates heroName
  //     heroName += value;
  //   }

  // initialize my functions
  const handleChange = event => {
    event.preventDefault();
    // debugger;
    console.log(event.target.value);
  };
  return (
    <div className='row mb-5'>
      <div className='col-6 offset-3'>
        <form action='submit' id='hero-form'>
          <div className='form-group'>
            <label htmlFor='heroName'>Hero Name</label>
            <input
              type='text'
              id='heroName'
              className='form-control'
              value={heroName}
              onChange={event => {
                setHeroName(event.target.value);
              }}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='heroPower'>Hero Power</label>
            <input
              type='text'
              className='form-control'
              id='heroPower'
              value=''
            />
          </div>
          <div className='row'>
            <div className='form-group col'>
              <label htmlFor='heroUniverse'>Hero Universe</label>
              <input
                type='text'
                id='heroUniverse'
                className='form-control'
                value=''
              />
            </div>
            <div className='form-group col'>
              <label htmlFor='heroCoolnessRating'>Coolness</label>
              <input
                type='text'
                className='form-control'
                id='heroCoolnessRating'
                value=''
              />
            </div>
          </div>
          <button className='btn btn-primary btn-block'>Save</button>
        </form>
      </div>
    </div>
  );
};

export default HeroFormComponent;
