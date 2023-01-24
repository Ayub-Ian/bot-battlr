import React from "react";
import BotCollectionItem from "./BotCollectionItem";

function BotCollection({ bots, onEnlistBot }) {

  const list = bots.map(bot => (
    <BotCollectionItem key={bot.id} bot={bot} botFunction={onEnlistBot} />
  ))

  return (
    <div className="collection-wrapper">
      <h3>Bot Collection</h3>
      <div className="collection-bot">
        {list}
      </div>
    </div>
  );
}

export default BotCollection;
