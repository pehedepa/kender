/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import getGenericData from '../../redux/actions/portfolioActionCreators';
import './index.scss';

export function GenericInfo({ generic, actions }) {
  useEffect(() => {
    actions.getGenericData();
  }, []);

  return (
    <section id="about-me" className="generic__container">
      <div className="about-me__container">
        <h2 className="about-me__title">ABOUT ME</h2>
        <p className="about-me__subtitle">Know me more</p>
      </div>
      <div className="about-info__container">
        <div className="about-info__presentation">
          <h2>Im Pablo H. Depares, a Web Developer</h2>
          <p>
            Once a former computer technician, and curious by nature, I have spent
            the past decade traveling and working in the hospitality bussiness
            as a Front Desk Agent. I am always eager to learn, let it be languages,
            general knowledge or may anything specific arise, I will always be
            the first to try and get the grasp of it. I have spent the last four
            years studying Social and Cultural Anthropology and once Covid hit
            hard, I felt it was time to reinvent myself once again.
          </p>
        </div>
        <div className="about-info__specific-info">
          {generic && generic.map((item) => (
            <ul>
              <li className="about-info__personal-data">
                Name:
                {item.name}
              </li>
              <li className="about-info__personal-data">
                Email:
                {item.email}
              </li>
              <li className="about-info__personal-data">
                Phone:
                {item.phone}
              </li>
              <li className="about-info__personal-data">
                From:
                {item.nationality}
              </li>
              <button type="button">Download CV</button>
            </ul>
          ))}
        </div>

      </div>
    </section>
  );
}

function mapStateToProps(generic) {
  return generic;
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ getGenericData }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GenericInfo);
