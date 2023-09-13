import { useEffect, useState } from "react";
import Card from "./Card";

interface IAdvice {
  id: number;
  advice: string;
}

export default function Advice() {
  const [advice, setAdvice] = useState<IAdvice>();
  const [newAdvice, setnewAdvice] = useState<boolean>(false);

  const changeAdvice = () => {
    setnewAdvice(!newAdvice);
  };

  const getAdvice = async () => {
    const data = await fetch("https://api.adviceslip.com/advice");
    const advice = await data.json();
    setAdvice(advice.slip);
  };

  useEffect(() => {
    getAdvice();
  }, [newAdvice]);

  return (
    <div className="m-4">
      <Card
        id={advice?.id}
        advice={advice?.advice}
        changeAdvice={changeAdvice}
      ></Card>
    </div>
  );
}
