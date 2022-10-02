import React from "react";
import BotCard from "./BotCard";
import BotSpecs from "./BotSpecs";

function BotCollection({ deleteBot, isLoading, allBots, enlistedBots, setEnlistedBots, currentBot, setCurrentBot }) {

  const addBotToList = (botId, bot) => {
    const foundEnlistedBot = enlistedBots.find((bot) => bot.id === botId);
    if (foundEnlistedBot) {
      return;
    }
    setEnlistedBots(prevBots => [...prevBots, bot])
  };

  const viewBotHandler = (bot) => {
    setCurrentBot(bot);
  }
  const goBackHandler = () => {
    setCurrentBot(null);
  }

  return (
    <div className="ui four column grid">
      <div className="row">
        {isLoading && <p>Loading...</p>}
        {!isLoading && !currentBot && allBots.map((bot, index) => <BotCard deleteBot={deleteBot} key={index} viewBotHandler={viewBotHandler} bot={bot}></BotCard>)}
        {!isLoading && currentBot && <BotSpecs goBackHandler={goBackHandler} addBotToList={addBotToList} bot={currentBot}></BotSpecs>}
      </div>
    </div>
  );
}

export default BotCollection;