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
    <g transform="matrix(1,0,0,1,-482.351,-74.9969)">
      <g transform="matrix(1,0,0,1,-14.0398,0)">
        <path
          d="M690.24,178.606C690.24,228.444 649.838,268.846 600,268.846C550.162,268.846 509.76,228.444 509.76,178.606C509.76,128.768 550.162,88.366 600,88.366C649.838,88.366 690.24,128.768 690.24,178.606Z"
          style={{ fill: color, fillRule: 'nonzero', strokeWidth: '11.96px' }}
          stroke={strokeColor}
        />
        <path
          d="M624.514,220.636L573.565,220.636C570.263,220.636 567.586,217.959 567.586,214.657C567.586,211.355 570.263,208.678 573.565,208.678L624.514,208.678C627.815,208.678 630.493,211.355 630.493,214.657C630.493,217.959 627.815,220.636 624.514,220.636Z"
          style={{ fill: strokeColor, fillRule: 'nonzero' }}
        />
        <path
          d="M586.101,157.738C586.101,164.267 580.808,169.56 574.279,169.56C567.75,169.56 562.457,164.267 562.457,157.738C562.457,151.208 567.75,145.915 574.279,145.915C580.808,145.915 586.101,151.208 586.101,157.738Z"
          style={{ fill: strokeColor, fillRule: 'nonzero' }}
        />
        <path
          d="M637.543,157.738C637.543,164.267 632.25,169.56 625.721,169.56C619.192,169.56 613.899,164.267 613.899,157.738C613.899,151.208 619.192,145.915 625.721,145.915C632.25,145.915 637.543,151.208 637.543,157.738Z"
          style={{ fill: strokeColor, fillRule: 'nonzero' }}
        />
        <path
          d="M690.24,178.606C690.24,228.444 649.838,268.846 600,268.846C550.162,268.846 509.76,228.444 509.76,178.606C509.76,128.768 550.162,88.366 600,88.366C649.838,88.366 690.24,128.768 690.24,178.606Z"
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
