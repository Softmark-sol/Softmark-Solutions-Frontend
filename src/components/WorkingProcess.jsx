import React from 'react';
import '../css/workingProcess.css';
import working from '../assets/images/working.webp';

import icon1 from '../assets/images/wor-icon1.webp'
import icon2 from '../assets/images/wor-icon2.webp'
import icon3 from '../assets/images/wor-icon3.webp'

const WorkingProcess = () => {
  return (
    <div className='main-workingProcess' style={{ padding: '1rem', backgroundColor: '#f2f9ff' }}>
      {/* Section 1: Cards */}
      <div className='workingCards'>
        <h4 className='container' style={{ textAlign: 'left', color: 'rgb(220, 166, 66)' }}>Our Working Process</h4>
        <h2 className='container' style={{ color: '#4599b4', fontWeight: 'bold' }}>
          Our Easy and Understandable <br /> Working Process
        </h2>
        <div className='cards-container container' style={{ display: 'grid', gap: '1rem', gridTemplateColumns: '1fr', marginBottom: '3rem' }}>
        {/* Card 1 */}
        <div className='working-card' style={{ display: 'flex', gap: '1rem', padding: '2rem', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
          <div style={{ width: '50%',  display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src={icon1} alt="Consultation Icon" style={{ width: '60%' }} />
          </div>
          <div >
            <h4  style={{ color: '#4599b4', fontWeight: 'bold' }}>01. Initial Consultation & Goal <br /> Setting</h4>
            <p style={{ color: 'gray',textAlign:'left', fontSize:'1rem' }}>
              Our digital marketing agency team begins with a detailed discussion to understand your business, target audience, and objectives.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className='working-card' style={{ display: 'flex', gap: '1rem', padding: '2rem', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
          <div style={{ width: '50%',  display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src={icon2} alt="Strategy Icon" style={{ width: '60%' }} />
          </div>
          <div>
            <h4 style={{ color: '#4599b4', fontWeight: 'bold', }}>02. Strategy Development & <br /> Implementation</h4>
            <p style={{ color: 'gray',textAlign:'left',fontSize:'1rem'  }}>
              Initial phase insights help in bespoke digital marketing strategy covering SEO, content marketing, social media, and more.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className='working-card' style={{ display: 'flex', gap: '1rem', padding: '2rem', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
          <div style={{ width: '50%',  display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src={icon3} alt="Analysis Icon" style={{ width: '60%' }} />
          </div>
          <div>
            <h4 style={{ color: '#4599b4', fontWeight: 'bold',}}>03. Performance Analysis & Continuous Improvement</h4>
            <p style={{ color: 'gray',textAlign:'left',fontSize:'1rem'  }}>
              Advanced analytics review regular performance of implemented strategies, securing goal achievement with informed adjustments.
            </p>
          </div>
        </div>
      </div>
      </div>
      

      {/* Section 2: Image */}
      <div className='hide-img' >
        <img src={working} style={{ width: '100%', borderRadius: '8px', paddingTop:'150px' }} alt="Working team" />
      </div>
    </div>
  );
};

export default WorkingProcess;
