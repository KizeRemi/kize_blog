import React from 'react';
import styled from 'styled-components';

const GradientLayout = styled.div`
  background: linear-gradient(45deg, #5E50FF 20%, #EA74F4);
  padding: 1rem;
  flex: 1;
  color: white;
  min-height: 270px; 
`;

const MissionCard = ({ company, duration, occupation, children, companyLogo }) => (
  <div className="w-full lg:flex border-2 border-gray-200 rounded leading-normal">
    <GradientLayout>
      <h3 className="font-bold text-xl mb-0">{company}</h3>
      <div className="font-bold text-2xl mb-0">{occupation}</div>
      <div class="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap">
        <div class="flex items-center text-sm leading-5">
          <svg class="flex-shrink-0 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd" />
            <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
          </svg>
          {duration}
        </div>
      </div>
      <p class="text-sm mt-6">{children}</p>
    </GradientLayout>
    {companyLogo && (
      <div className="h-48 lg:h-auto lg:w-48 flex items-center justify-center bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" title="Woman holding a mug">
        <img src={companyLogo} />
      </div>
    )}
  </div>
);

export default MissionCard;
