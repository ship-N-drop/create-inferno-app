/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { darkGray } from '../styles';

const footerStyle = {
  'font-family': 'sans-serif',
  color: darkGray,
  'margin-top': '0.5rem',
  flex: '0 0 auto',
};

function Footer(props) {
  return (
    <div style={footerStyle}>
      {props.line1}
      <br />
      {props.line2}
    </div>
  );
}

export default Footer;
