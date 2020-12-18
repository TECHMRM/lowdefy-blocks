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
import { Label } from '@lowdefy/blocks-antd';
import { type } from '@lowdefy/helpers';
import { blockDefaultProps } from '@lowdefy/block-tools';
import Angry from './smileys/Angry';
import Sad from './smileys/Sad';
import Mediocre from './smileys/Mediocre';
import Satisfied from './smileys/Satisfied';
import Happy from './smileys/Happy';

const defaultOptions = [
  {
    value: 'Angry',
    component: Angry,
    color: 'rgb(255,29,37)',
  },
  {
    value: 'Sad',
    component: Sad,
    color: 'rgb(255,139,36)',
  },
  {
    value: 'Mediocre',
    component: Mediocre,
    color: 'rgb(255,249,34)',
  },
  {
    value: 'Satisfied',
    component: Satisfied,
    color: 'rgb(128,230,17)',
  },
  {
    value: 'Happy',
    component: Happy,
    color: 'rgb(0,211,0)',
  },
];

const getOptions = (options) => {
  if (!options || !type.isArray(options)) return defaultOptions;
  if (!type.isObject(options[0])) {
    return defaultOptions.map((op, i) => ({ ...op, value: options[i] }));
  }
  return defaultOptions.map((op, i) => ({ ...op, ...options[i], component: op.component }));
};

const Selector = ({ blockId, loading, methods, properties, required, validation, value }) => {
  const options = getOptions(properties.options);
  return (
    <Label
      blockId={blockId}
      loading={loading}
      methods={methods}
      properties={{ title: properties.title, size: properties.size, ...properties.label }}
      required={required}
      validation={validation}
      content={{
        content: () => (
          <div style={{ display: 'flex' }} id={`${blockId}_input`}>
            {options.map((option, i) => {
              const Comp = option.component;
              return (
                <div
                  key={i}
                  style={{
                    height:
                      properties.size === 'small' ? 30 : properties.size === 'large' ? 54 : 42,
                  }}
                >
                  <Comp
                    color={
                      (type.isNone(value) || value === options[i].value) && !properties.disabled
                        ? option.color
                        : properties.disabledColor || 'rgb(156,156,156)'
                    }
                    disabled={properties.disabled}
                    strokeColor={properties.strokeColor || 'rgb(56,56,56)'}
                    onClick={() => {
                      if (properties.disabled) return;
                      methods.setValue(options[i].value);
                      methods.callAction({ action: 'onChange' });
                    }}
                  />
                </div>
              );
            })}
          </div>
        ),
      }}
    />
  );
};

Selector.defaultProps = blockDefaultProps;

export default Selector;
