import React, { useEffect, useState } from 'react'
import BotArmy from './bot-army/BotArmy'
import BotCollection from './bot-collection/BotCollection'

function BattleBots() {

    const [bots, setBots] = useState([])
    const [army, setArmy] = useState([])
    useEffect(() => {
        fetch('https://json-server-bot-battlr-vercel.vercel.app/bots')
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

    function dischargeBot(id) {
        fetch(`https://json-server-bot-battlr-vercel.vercel.app/bots/${id}`, {
            method: "DELETE",
        })
        setBots(bots.filter((bot) => bot.id !== id))
        
    }

  return (
    <div className='battle-bots'>
        <BotArmy army={army} removeFromArmy={removeFromArmy} />
        <BotCollection bots={bots} onEnlistBot={enlistArmy} dischargeBot={dischargeBot} />
    </div>
  )
}

export default BattleBots