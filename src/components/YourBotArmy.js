import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ enlistedBots, deleteBot }) {

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {enlistedBots.map((bot, index) => <BotCard deleteBot={deleteBot} key={index} bot={bot}></BotCard>)}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;