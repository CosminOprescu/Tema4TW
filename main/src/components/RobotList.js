import React, { useState, useEffect } from 'react';
import store from '../stores/RobotStore';
import Robot from './Robot';

function RobotList() {
  const [robots, setRobots] = useState([]);
  const [newRobot, setNewRobot] = useState({ name: '', type: '', mass: '' });

  useEffect(() => {
    setRobots(store.getRobots());
    store.emitter.addEventListener('UPDATE', () => {
      setRobots([...store.getRobots()]);
    });
  }, []);

  const handleInputChange = (event) => {
    setNewRobot({ ...newRobot, [event.target.name]: event.target.value });
  };

  const addRobot = () => {
    store.addRobot(newRobot);
    setNewRobot({ name: '', type: '', mass: '' }); // Reset form
  };

  return (
    <div>
      <div>
        <input
          placeholder="name"
          name="name"
          value={newRobot.name}
          onChange={handleInputChange}
        />
        <input
          placeholder="type"
          name="type"
          value={newRobot.type}
          onChange={handleInputChange}
        />
        <input
          placeholder="mass"
          name="mass"
          type="number"
          value={newRobot.mass}
          onChange={handleInputChange}
        />
        <button onClick={addRobot}>add</button>
      </div>
      <div>
        {robots.map((e, i) => (
          <div key={i} className='robot'>
            Hello, my name is {e.name || ''}. I am a {e.type || ''} {e.mass !== undefined && e.mass !== '' ? 'and weigh ' + e.mass : 'and weigh '}
          </div>
        ))}
      </div>
    </div>
  );
}

export default RobotList;
