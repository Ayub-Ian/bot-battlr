import React, { useEffect, useState } from 'react'
import BotArmy from './bot-army/BotArmy'
import BotCollection from './bot-collection/BotCollection'

function BattleBots() {

    const [bots, setBots] = useState([])
    const [army, setArmy] = useState([])
    useEffect(() => {
        fetch('http://localhost:8001/bots')
        .then(res => res.json())
        .then(data => setBots(data))
    
    }, [])

    function enlistArmy(bot) {
        if (!army.includes(bot)) {
            setArmy([...army, bot])
          }
    }
    
    function removeFromArmy(bot) {
        setArmy(army.filter((armyBot) => armyBot.id !== bot.id))
      }

  return (
    <div className='battle-bots'>
        <BotArmy army={army} removeFromArmy={removeFromArmy} />
        <BotCollection bots={bots} onEnlistBot={enlistArmy} />
    </div>
  )
}

export default BattleBots