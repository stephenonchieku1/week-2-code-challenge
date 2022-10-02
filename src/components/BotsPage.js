import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [allBots, setAllBots] = useState([]);
  const [enlistedBots, setEnlistedBots] = useState([]);
  const [currentBot, setCurrentBot] = useState(null);

  useEffect(() => {
    const getAllBotsHandler = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('http://localhost:8002/bots');
        const responseData = await response.json();
        setAllBots(responseData);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }
    getAllBotsHandler();
  }, [])

  const deleteBot = async (botId) => {
    try {
      setIsLoading(true);
      const response = await fetch(`http://localhost:8002/bots/${botId}`, { method: 'DELETE', headers: { 'Content-Type': 'application/json', 'accept': 'application/json' } });
      if(!response.ok){
        throw new Error('Error occured');
      }
      const responseData = await response.json();
      console.log(responseData);
      setCurrentBot(null);
      const inEnlisted = enlistedBots.find((bot) => bot.id === botId);
      if(inEnlisted){
        setEnlistedBots(prevBots => prevBots.filter((bot) => bot.id !== botId));
      }
      setAllBots(prevBots => prevBots.filter((bot) => bot.id !== botId));
    } catch (err) {} finally {
      setIsLoading(false);
    }
  }

  return (
    <div>
      <YourBotArmy deleteBot={deleteBot} enlistedBots={enlistedBots} />
      <BotCollection deleteBot={deleteBot} currentBot={currentBot} setCurrentBot={setCurrentBot} isLoading={isLoading} allBots={allBots} enlistedBots={enlistedBots} setEnlistedBots={setEnlistedBots} />
    </div>
  )
}

export default BotsPage;
