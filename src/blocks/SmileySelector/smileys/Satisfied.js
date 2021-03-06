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
    <g transform="matrix(1,0,0,1,-737.502,-32.2427)">
      <g transform="matrix(1,0,0,1,8.65873,-42.7542)">
        <path
          d="M922.693,178.606C922.693,228.444 882.291,268.846 832.453,268.846C782.614,268.846 742.212,228.444 742.212,178.606C742.212,128.768 782.614,88.366 832.453,88.366C882.291,88.366 922.693,128.768 922.693,178.606Z"
          style={{ fill: color, fillRule: 'nonzero', strokeWidth: '11.96px' }}
          stroke={strokeColor}
        />
        <path
          d="M831.492,233.365C831.491,233.365 831.492,233.365 831.492,233.365C819.479,233.365 808.452,227.855 801.24,218.249C799.257,215.608 799.79,211.86 802.431,209.878C805.072,207.895 808.819,208.428 810.802,211.069C815.735,217.639 823.276,221.407 831.492,221.407C839.708,221.407 847.249,217.639 852.182,211.069C854.164,208.428 857.912,207.895 860.553,209.878C863.193,211.86 863.727,215.608 861.744,218.249C854.532,227.855 843.504,233.365 831.492,233.365Z"
          style={{ fill: strokeColor, fillRule: 'nonzero' }}
        />
        <path
          d="M818.554,157.738C818.554,164.267 813.261,169.56 806.732,169.56C800.203,169.56 794.91,164.267 794.91,157.738C794.91,151.208 800.203,145.915 806.732,145.915C813.261,145.915 818.554,151.208 818.554,157.738Z"
          style={{ fill: strokeColor, fillRule: 'nonzero' }}
        />
        <path
          d="M869.996,157.738C869.996,164.267 864.703,169.56 858.174,169.56C851.644,169.56 846.351,164.267 846.351,157.738C846.351,151.208 851.644,145.915 858.174,145.915C864.703,145.915 869.996,151.208 869.996,157.738Z"
          style={{ fill: strokeColor, fillRule: 'nonzero' }}
        />
        <path
          d="M922.693,178.606C922.693,228.444 882.291,268.846 832.453,268.846C782.614,268.846 742.212,228.444 742.212,178.606C742.212,128.768 782.614,88.366 832.453,88.366C882.291,88.366 922.693,128.768 922.693,178.606Z"
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
