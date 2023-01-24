import React from 'react'

function BotCollectionItem({ bot, botFunction }) {

    const { id, name, health, damage, armor, bot_class, catchphrase, avatar_url } = bot
  return (
    <div className='bot-item' onClick={() => botFunction(bot)}>
          <div className='avatar'>
            <img src={avatar_url} alt={name} />
          </div>
          <div className='title'>
            <h3>{name}</h3>
          </div>
          <p>{catchphrase}</p>
        </div>
  )
}

export default BotCollectionItem