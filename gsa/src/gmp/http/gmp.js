/* Greenbone Security Assistant
 *
 * Authors:
 * Björn Ricks <bjoern.ricks@greenbone.net>
 *
 * Copyright:
 * Copyright (C) 2016 - 2018 Greenbone Networks GmbH
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; either version 2
 * of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA.
 */
import Http from './http.js';
import {buildServerUrl} from './utils.js';

import X2JsTransform from './transform/x2js.js';

class GmpHttp extends Http {

  constructor(server, protocol, options) {
    const url = buildServerUrl(server, 'gmp', protocol);
    super(url, {...options, transform: X2JsTransform});
  }

  get token() {
    return this.params.token;
  }

  set token(token) {
    this.params.token = token;
  }

}

export default GmpHttp;

// vim: set ts=2 sw=2 tw=80:
