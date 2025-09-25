/**
 * Функция ассинхронная берет с Центробанка по API данные курсов валют и возвращает элемент состоящий из заголовка и курса валюты
 */
import S from './CurrencyEx.module.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CurrencyEx = ({currency, text}) => {
  const [curToRubles, setCurToRubles] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://www.cbr-xml-daily.ru/latest.js');
        if (response.data && response.data.rates) {
          // console.log(currency)
          setCurToRubles(1 / response.data.rates[currency]);
        }
      } catch (err) {
        console.error("Ошибка загрузки курса:", err.message);
      }
    };

    fetchData();
  }, []);

  if (!curToRubles) return <p>Загрузка...</p>;

  return (
    <div className={S.curCurrens }>
      <h2 className={S.titleCurCurrency}>{text}</h2>
      <p className={S.textCurCurrency}>{curToRubles.toFixed(2)}</p>
    </div>
  );
};

export default CurrencyEx;