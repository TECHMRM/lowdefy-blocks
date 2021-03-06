/*
  Copyright 2020 MRM Tech (Pty) Ltd.

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/

import React from 'react';

const Smiley = ({ color, disabled, strokeColor, onClick }) => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 208 208"
    style={{ fillRule: 'evenodd', clipRule: 'evenodd', strokeMiterlimit: 2 }}
  >
    <g transform="matrix(1,0,0,1,-243.61,-52.4026)">
      <g transform="matrix(1,0,0,1,-20.3276,-22.5943)">
        <path
          d="M457.788,178.606C457.788,228.444 417.386,268.846 367.547,268.846C317.709,268.846 277.307,228.444 277.307,178.606C277.307,128.768 317.709,88.366 367.547,88.366C417.386,88.366 457.788,128.768 457.788,178.606Z"
          style={{ fill: color, fillRule: 'nonzero', strokeWidth: '11.96px' }}
          stroke={strokeColor}
        />
        <path
          d="M353.649,157.738C353.649,164.267 348.356,169.56 341.826,169.56C335.297,169.56 330.004,164.267 330.004,157.738C330.004,151.208 335.297,145.915 341.826,145.915C348.356,145.915 353.649,151.208 353.649,157.738Z"
          style={{ fill: strokeColor, fillRule: 'nonzero' }}
        />
        <path
          d="M405.09,157.738C405.09,164.267 399.797,169.56 393.268,169.56C386.739,169.56 381.446,164.267 381.446,157.738C381.446,151.208 386.739,145.915 393.268,145.915C399.797,145.915 405.09,151.208 405.09,157.738Z"
          style={{ fill: strokeColor, fillRule: 'nonzero' }}
        />
        <path
          d="M341.111,220.635C339.861,220.635 338.601,220.245 337.525,219.436C334.885,217.454 334.351,213.706 336.334,211.065C343.546,201.46 354.574,195.949 366.586,195.949L366.587,195.949C378.599,195.949 389.626,201.459 396.839,211.065C398.821,213.706 398.288,217.454 395.647,219.436C393.007,221.419 389.259,220.886 387.276,218.245C382.343,211.675 374.802,207.907 366.586,207.907C358.371,207.907 350.829,211.675 345.896,218.245C344.722,219.81 342.927,220.635 341.111,220.635Z"
          style={{ fill: strokeColor, fillRule: 'nonzero' }}
        />
        <path
          d="M457.788,178.606C457.788,228.444 417.386,268.846 367.547,268.846C317.709,268.846 277.307,228.444 277.307,178.606C277.307,128.768 317.709,88.366 367.547,88.366C417.386,88.366 457.788,128.768 457.788,178.606Z"
          style={{
            fill: '#fff',
            opacity: 0,
            strokeWidth: '11.96px',
            cursor: disabled ? 'not-allowed' : 'pointer',
          }}
          onClick={onClick}
        />
      </g>
    </g>
  </svg>
);

export default Smiley;
