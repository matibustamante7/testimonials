import React, { useState } from 'react'
import './Home.css'
import { players } from '../../Data';

function Home() {

  const [player, setPlayer] = useState(players);

  return (
    <div className='card'>
      <table className='table'>
        <thead className='thead'>
          <tr>
            <th>Name</th>
            <th>Clubes</th>
            <th>Goles</th>
            <th>Asistencias</th>
          </tr>
        </thead>
        <tbody>
          {player.map((player, index) => (
            <React.Fragment key={index}>
              <tr>
                <td rowSpan={Math.max(player.clubes.length, 1)} className='td_name'><b>{player.name}</b></td>
                <td >{player.clubes[0]}</td>
                <td>{player.goles[player.clubes[0]]}</td>
                <td>{player.asistencias[player.clubes[0]]}</td>
              </tr>
              {player.clubes.slice(1).map((club, clubIndex) => (
                <tr key={clubIndex}>
                  <td>{club}</td>
                  <td>{player.goles[club]}</td>
                  <td>{player.asistencias[club]}</td>
                </tr>
              ))}
            </React.Fragment>
          ))}

        </tbody>
      </table>

    </div>
  )
}
export default Home;
