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
    <g transform="matrix(1,0,0,1,-969.569,-74.9969)">
      <g transform="matrix(1,0,0,1,8.27339,0)">
        <path
          d="M1155.15,178.606C1155.15,228.444 1114.74,268.846 1064.91,268.846C1015.07,268.846 974.665,228.444 974.665,178.606C974.665,128.768 1015.07,88.366 1064.91,88.366C1114.74,88.366 1155.15,128.768 1155.15,178.606Z"
          style={{ fill: color, fillRule: 'nonzero', strokeWidth: '11.96px' }}
          stroke={strokeColor}
        />
        <path
          d="M1111.24,203.762L1018.57,203.762C1015.27,203.762 1012.6,201.085 1012.6,197.783C1012.6,194.481 1015.27,191.804 1018.57,191.804L1111.24,191.804C1114.54,191.804 1117.22,194.481 1117.22,197.783C1117.22,201.085 1114.54,203.762 1111.24,203.762Z"
          style={{ fill: strokeColor, fillRule: 'nonzero' }}
        />
        <path
          d="M1065.65,239.848C1053.29,239.848 1041.35,236.277 1031.97,229.77C1021.17,222.267 1014.48,211.499 1012.64,198.63C1012.17,195.362 1014.44,192.333 1017.71,191.865C1020.98,191.396 1024.01,193.667 1024.47,196.936C1027.54,218.369 1048.14,228.007 1065.99,227.889C1082.27,227.783 1102.31,219.633 1105.25,197.013C1105.68,193.738 1108.68,191.429 1111.95,191.854C1115.22,192.279 1117.53,195.279 1117.11,198.553C1115.43,211.473 1109.13,222.232 1098.88,229.668C1089.94,236.152 1078.29,239.767 1066.07,239.847C1065.93,239.848 1065.79,239.848 1065.65,239.848Z"
          style={{ fill: strokeColor, fillRule: 'nonzero' }}
        />
        <path
          d="M1051.01,151.831C1051.01,158.36 1045.71,163.653 1039.18,163.653C1032.66,163.653 1027.36,158.36 1027.36,151.831C1027.36,145.302 1032.66,140.009 1039.18,140.009C1045.71,140.009 1051.01,145.302 1051.01,151.831Z"
          style={{ fill: strokeColor, fillRule: 'nonzero' }}
        />
        <path
          d="M1102.45,151.831C1102.45,158.36 1097.16,163.653 1090.63,163.653C1084.1,163.653 1078.8,158.36 1078.8,151.831C1078.8,145.302 1084.1,140.009 1090.63,140.009C1097.16,140.009 1102.45,145.302 1102.45,151.831Z"
          style={{ fill: strokeColor, fillRule: 'nonzero' }}
        />
        <path
          d="M1155.15,178.606C1155.15,228.444 1114.74,268.846 1064.91,268.846C1015.07,268.846 974.665,228.444 974.665,178.606C974.665,128.768 1015.07,88.366 1064.91,88.366C1114.74,88.366 1155.15,128.768 1155.15,178.606Z"
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
