import React from 'react';
import GenericInfo from '../genericInfo';
import TradeSkills from '../tradeSkills';
import './index.scss';

export default function Landing() {
  return (
    <>
      <section id="landing" className="section__landing">
        <div className="mid-container__welcome">
          <h2>Welcome</h2>
          <h1>I am a web Developer in the making.</h1>
          <h4>based in Barcelona, Spain.</h4>
        </div>
        <div className="section__content">
          <GenericInfo />
          <TradeSkills />
        </div>
      </section>

    </>
  );
}
