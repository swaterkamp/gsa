/* Copyright (C) 2020 Greenbone Networks GmbH
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

import React from 'react';
import styled, {keyframes} from 'styled-components';

import _ from 'gmp/locale';

import {isDefined} from 'gmp/utils/identity';

import Button from 'web/components/form/button';
import MultiSelect from 'web/components/form/multiselect';

import EditIcon from 'web/components/icon/editicon';

import Loading from 'web/components/loading/loading';

import PropTypes from 'web/utils/proptypes';
import Theme from 'web/utils/theme';

import HostTable from './hosttable';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  left: 70%;
  top: 0;
  width: 30%;
  min-width: 250px;
  height: 100%;
  background-color: ${Theme.white};
  border-left: 2px solid ${Theme.lightGray}
  animation: ${keyframes({
    '0%': {
      left: '100%',
    },
    '100%': {
      left: '70%',
    },
  })}
    0.3s ease;
`;

const TitleBox = styled.div`
  display: flex;
  font-size: 16px;
  font-weight: bold;
  justify-content: space-between;
  padding: 20px 20px 10px 20px;
  width: 100%;
`;

const CommentBox = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  padding: 0px 0px 10px 20px;
  min-height: 21px;
`;

const HostsList = styled.div`
  display: flex;
  height: 100%;
  overflow: auto;
`;

class ProcessPanel extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {processDialogVisible: false};

    this.openProcessDialog = this.openProcessDialog.bind(this);
    this.closeProcessDialog = this.closeProcessDialog.bind(this);
    this.handleProcessChange = this.handleProcessChange.bind(this);
  }

  openProcessDialog() {
    this.setState({processDialogVisible: true});
  }

  closeProcessDialog() {
    this.setState({processDialogVisible: false});
  }

  handleProcessChange(value) {
    this.props.onProcessChange(value);
    this.closeProcessDialog();
  }

  render() {
    const {
      element = {},
      hostList,
      isLoadingHosts,
      onEditProcessClick,
    } = this.props;
    const {name = _('No process selected'), comment} = element;
    return (
      <Container isShown={isDefined(element)}>
        <TitleBox>
          {name}
          <EditIcon
            disabled={element.type !== 'process'}
            onClick={onEditProcessClick}
          />
        </TitleBox>
        <CommentBox>{comment}</CommentBox>
        <MultiSelect width="100%" />
        <Button title={_('Add hosts')} />
        <HostsList>
          {isLoadingHosts ? <Loading /> : <HostTable hosts={hostList} />}
        </HostsList>
      </Container>
    );
  }
}

ProcessPanel.propTypes = {
  element: PropTypes.object,
  hostList: PropTypes.array,
  isLoadingHosts: PropTypes.boolean,
  onEditProcessClick: PropTypes.func.isRequired,
  onProcessChange: PropTypes.func,
};

export default ProcessPanel;

// vim: set ts=2 sw=2 tw=80:
