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
    <g transform="matrix(1,0,0,1,-25.0838,-74.9969)">
      <g transform="matrix(1,0,0,1,-6.40111,0)">
        <path
          d="M225.335,178.606C225.335,228.444 184.933,268.846 135.094,268.846C85.256,268.846 44.854,228.444 44.854,178.606C44.854,128.768 85.256,88.366 135.094,88.366C184.933,88.366 225.335,128.768 225.335,178.606Z"
          style={{ fill: color, fillRule: 'nonzero', strokeWidth: '11.96px' }}
          stroke={strokeColor}
        />
        <path
          d="M121.196,157.738C121.196,164.267 115.903,169.56 109.374,169.56C102.844,169.56 97.551,164.267 97.551,157.738C97.551,151.208 102.844,145.915 109.374,145.915C115.903,145.915 121.196,151.208 121.196,157.738Z"
          style={{ fill: strokeColor, fillRule: 'nonzero' }}
        />
        <path
          d="M172.638,157.738C172.638,164.267 167.345,169.56 160.815,169.56C154.286,169.56 148.993,164.267 148.993,157.738C148.993,151.208 154.286,145.915 160.815,145.915C167.345,145.915 172.638,151.208 172.638,157.738Z"
          style={{ fill: strokeColor, fillRule: 'nonzero' }}
        />
        <path
          d="M146.149,149.72C144.865,149.72 143.564,149.392 142.374,148.7C138.782,146.611 137.563,142.006 139.651,138.414C146.298,126.982 156.345,121.545 169.512,122.246C173.662,122.468 176.846,126.011 176.624,130.161C176.402,134.31 172.859,137.491 168.71,137.272C161.14,136.868 156.49,139.39 152.66,145.977C151.263,148.379 148.741,149.72 146.149,149.72Z"
          style={{ fill: strokeColor, fillRule: 'nonzero' }}
        />
        <path
          d="M124.04,149.72C121.448,149.721 118.926,148.38 117.529,145.977C113.699,139.39 109.047,136.866 101.479,137.272C97.329,137.494 93.786,134.31 93.564,130.161C93.343,126.011 96.527,122.468 100.677,122.246C113.845,121.544 123.892,126.982 130.537,138.414C132.626,142.006 131.407,146.611 127.815,148.7C126.625,149.391 125.324,149.72 124.04,149.72Z"
          style={{ fill: strokeColor, fillRule: 'nonzero' }}
        />
        <path
          d="M177.282,224.257C175.563,224.257 173.856,223.519 172.674,222.091C163.756,211.324 150.059,205.149 135.094,205.149C120.13,205.149 106.433,211.324 97.514,222.091C95.408,224.634 91.639,224.988 89.096,222.882C86.553,220.776 86.199,217.007 88.305,214.464C99.503,200.945 116.557,193.191 135.094,193.191C153.632,193.191 170.686,200.945 181.883,214.464C183.989,217.007 183.635,220.776 181.092,222.882C179.977,223.806 178.625,224.257 177.282,224.257Z"
          style={{ fill: strokeColor, fillRule: 'nonzero' }}
        />
        <path
          d="M225.335,178.606C225.335,228.444 184.933,268.846 135.094,268.846C85.256,268.846 44.854,228.444 44.854,178.606C44.854,128.768 85.256,88.366 135.094,88.366C184.933,88.366 225.335,128.768 225.335,178.606Z"
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
