/* Copyright (C) 2017-2020 Greenbone Networks GmbH
 *
 * SPDX-License-Identifier: GPL-2.0-or-later
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
export const USER_SETTINGS_LOAD_BUSINESS_PROCESS_MAPS_SUCCESS =
  'USER_SETTINGS_LOAD_BUSINESS_PROCESS_MAPS_SUCCESS';
export const USER_SETTINGS_LOAD_REPORT_COMPOSER_DEFAULTS_SUCCESS =
  'USER_SETTINGS_LOAD_REPORT_COMPOSER_DEFAULTS_SUCCESS';
export const USER_SETTINGS_SET_TIMEZONE = 'USER_SETTINGS_SET_TIMEZONE';
export const USER_SETTINGS_SET_LOCALE = 'USER_SETTINGS_SET_LOCALE';
export const USER_SETTINGS_SET_USERNAME = 'USER_SETTINGS_SET_USERNAME';
export const USER_SETTINGS_SET_SESSION_TIMEOUT =
  'USER_SETTINGS_SET_SESSION_TIMEOUT';
export const USER_SETTINGS_SET_LOGGED_IN = 'USER_SETTINGS_SET_LOGGED_IN';

export const getReportComposerDefaultsAction = data => ({
  type: USER_SETTINGS_LOAD_REPORT_COMPOSER_DEFAULTS_SUCCESS,
  data,
});

export const loadReportComposerDefaults = gmp => () => dispatch =>
  gmp.user
    .getReportComposerDefaults()
    .then(response => dispatch(getReportComposerDefaultsAction(response.data)));

export const saveReportComposerDefaults = gmp => defaults => dispatch =>
  gmp.user
    .saveReportComposerDefaults(defaults)
    .then(response => dispatch(getReportComposerDefaultsAction(defaults)));

export const getBusinessProcessMapsAction = data => ({
  type: USER_SETTINGS_LOAD_BUSINESS_PROCESS_MAPS_SUCCESS,
  data,
});

export const loadBusinessProcessMaps = gmp => () => dispatch =>
  gmp.user
    .getBusinessProcessMaps()
    .then(response => dispatch(getBusinessProcessMapsAction(response.data)));

export const saveBusinessProcessMapAction = gmp => defaults => dispatch =>
  gmp.user
    .saveBusinessProcessMaps(defaults)
    .then(response => dispatch(getBusinessProcessMapsAction(defaults)));

export const setTimezone = timezone => ({
  type: USER_SETTINGS_SET_TIMEZONE,
  timezone,
});

export const setLocale = locale => ({
  type: USER_SETTINGS_SET_LOCALE,
  locale,
});

export const setUsername = username => ({
  type: USER_SETTINGS_SET_USERNAME,
  username,
});

export const setSessionTimeout = timeout => ({
  type: USER_SETTINGS_SET_SESSION_TIMEOUT,
  timeout,
});

export const setIsLoggedIn = isLoggedIn => ({
  type: USER_SETTINGS_SET_LOGGED_IN,
  isLoggedIn: isLoggedIn === true,
});

export const renewSessionTimeout = gmp => () => dispatch =>
  gmp.user
    .renewSession()
    .then(response => dispatch(setSessionTimeout(response.data)));

export const updateTimezone = gmp => timezone => dispatch => {
  gmp.setTimezone(timezone);
  return Promise.resolve(dispatch(setTimezone(timezone)));
};

// vim: set ts=2 sw=2 two=80:
