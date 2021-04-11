/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getTradeSkillsData } from '../../redux/actions/portfolioActionCreators';

import './index.scss';

export function TradeSkills({ tradeSkills, actions }) {
  useEffect(() => {
    actions.getTradeSkillsData();
  }, []);
  return (
    <section id="whatido" className="tradeskills__container">
      <div className="knowledge-top__container">
        <h2 className="knowledge-top__title">KNOWLEDGE</h2>
        <p className="knowledge-top__subtitle">What Can I Offer</p>
      </div>
      <div className="knowledge__item">
        {tradeSkills && tradeSkills.map((tradeSkill) => (
          <ul className="knowledge__list">
            <li className="knowledge__skill-name">{tradeSkill.skillName}</li>
            <li className="knowledge__skill-description">{tradeSkill.skillDescription}</li>
          </ul>
        ))}

      </div>
    </section>
  );
}

function mapStateToProps(tradeSkills) {
  return tradeSkills;
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ getTradeSkillsData }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TradeSkills);
