import React from 'react'


function BotCollectionItem({ bot, botFunction, dischargeBot, enlisted }) {

  let active = enlisted

    const botTypeClasses = {
        Assault: require("../../assets/blade-bite.svg").default,
        Defender: require("../../assets/layered-armor.svg").default,
        Support: require("../../assets/bat-blade.svg").default,
        Medic: require("../../assets/plague-doc.svg").default,
        Witch: require("../../assets/witch-face.svg").default,
        Captain: require("../../assets/air-man.svg").default,
      }

     

    const { id, name, health, damage, armor, bot_class, catchphrase, avatar_url } = bot
  return (
    <div className={active ? `item-wrapper enlisted` : "item-wrapper"}>
      {active ? (<div className='enrolled'><p>Enrolled</p></div>) : (<button onClick={() => dischargeBot(id)} className='discharge'>X</button>) }
        
    <div className='bot-item' onClick={() => botFunction(bot)}>
          <div className='avatar'>
            <img src={avatar_url} alt={name} />
          </div>
          <div className='title'>
            <h3>{name}</h3>
            <img src={botTypeClasses[bot_class]} alt={name} />
          </div>
          <p>{catchphrase}</p>
          <div className='divider'></div>
          
          <div className='attributes'>
            <div>
                <img src={require('../../assets/health.svg').default} alt="health"/>
                <p>{health}</p>
            </div>
            <div>
                <img src={require('../../assets/lightning.svg').default} alt="damage"/>
                <p>{damage}</p>
            </div>
            <div>
                <img src={require('../../assets/chest-armor.svg').default} alt="armor"/>
                <p>{armor}</p>
            </div>
          </div>

          
         
        </div>
        </div>

  )
}

export default BotCollectionItem