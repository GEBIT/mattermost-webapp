// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See License.txt for license information.

import React from 'react';

import * as Utils from 'utils/utils.jsx';

import AdminSettings from './admin_settings.jsx';
import BooleanSetting from './boolean_setting.jsx';
import {FormattedHTMLMessage, FormattedMessage} from 'react-intl';
import SettingsGroup from './settings_group.jsx';
import TextSetting from './text_setting.jsx';

export default class OidcSettings extends AdminSettings {
    constructor(props) {
        super(props);

        this.getConfigFromState = this.getConfigFromState.bind(this);

        this.renderSettings = this.renderSettings.bind(this);
    }

    getConfigFromState(config) {
        config.OidcSettings.Enable = this.state.enable;
        config.OidcSettings.Id = this.state.id;
        config.OidcSettings.Secret = this.state.secret;
        config.OidcSettings.UserApiEndpoint = this.state.userApiEndpoint;
        config.OidcSettings.AuthEndpoint = this.state.authEndpoint;
        config.OidcSettings.TokenEndpoint = this.state.tokenEndpoint;

        return config;
    }

    getStateFromConfig(config) {
        return {
            enable: config.OidcSettings.Enable,
            id: config.OidcSettings.Id,
            secret: config.OidcSettings.Secret,
            userApiEndpoint: config.OidcSettings.UserApiEndpoint,
            authEndpoint: config.OidcSettings.AuthEndpoint,
            tokenEndpoint: config.OidcSettings.TokenEndpoint
        };
    }

    renderTitle() {
        return (
            <FormattedMessage
                id='admin.authentication.oidc'
                defaultMessage='OpenID Connect'
            />
        );
    }

    renderSettings() {
        return (
            <SettingsGroup>
                <BooleanSetting
                    id='enable'
                    label={
                        <FormattedMessage
                            id='admin.oidc.enableTitle'
                            defaultMessage='Enable authentication with OpenID Connect: '
                        />
                    }
                    helpText={
                        <div>
                            <FormattedMessage
                                id='admin.oidc.enableDescription'
                                defaultMessage='When true, Mattermost allows team creation and account signup using OpenID Connect OAuth.'
                            />
                            <br/>
                            <FormattedHTMLMessage
                                id='admin.oidc.EnableHtmlDesc'
                                defaultMessage='<ol><li>Log in to your OpenID Connect account and go to Profile Settings -> Applications.</li><li>Enter Redirect URIs "<your-mattermost-url>/login/oidc/complete" (example: http://localhost:8065/login/oidc/complete) and "<your-mattermost-url>/signup/oidc/complete". </li><li>Then use "Application Secret Key" and "Application ID" fields from OpenID Connect to complete the options below.</li><li>Complete the Endpoint URLs below. </li></ol>'
                            />
                        </div>
                    }
                    value={this.state.enable}
                    onChange={this.handleChange}
                />
                <TextSetting
                    id='id'
                    label={
                        <FormattedMessage
                            id='admin.oidc.clientIdTitle'
                            defaultMessage='Application ID:'
                        />
                    }
                    placeholder={Utils.localizeMessage('admin.oidc.clientIdExample', 'Ex "jcuS8PuvcpGhpgHhlcpT1Mx42pnqMxQY"')}
                    helpText={
                        <FormattedMessage
                            id='admin.oidc.clientIdDescription'
                            defaultMessage='Obtain this value via the instructions above for logging into OpenID Connect'
                        />
                    }
                    value={this.state.id}
                    onChange={this.handleChange}
                    disabled={!this.state.enable}
                />
                <TextSetting
                    id='secret'
                    label={
                        <FormattedMessage
                            id='admin.oidc.clientSecretTitle'
                            defaultMessage='Application Secret Key:'
                        />
                    }
                    placeholder={Utils.localizeMessage('admin.oidc.clientSecretExample', 'Ex "jcuS8PuvcpGhpgHhlcpT1Mx42pnqMxQY"')}
                    helpText={
                        <FormattedMessage
                            id='admin.gitab.clientSecretDescription'
                            defaultMessage='Obtain this value via the instructions above for logging into OpenID Connect.'
                        />
                    }
                    value={this.state.secret}
                    onChange={this.handleChange}
                    disabled={!this.state.enable}
                />
                <TextSetting
                    id='userApiEndpoint'
                    label={
                        <FormattedMessage
                            id='admin.oidc.userTitle'
                            defaultMessage='User API Endpoint:'
                        />
                    }
                    placeholder={Utils.localizeMessage('admin.oidc.userExample', 'Ex "https://<your-open-id-url>/oauth/user"')}
                    helpText={
                        <FormattedMessage
                            id='admin.oidc.userDescription'
                            defaultMessage='Enter https://<your-open-id-url>/oauth/user.   Make sure you use HTTP or HTTPS in your URL depending on your server configuration.'
                        />
                    }
                    value={this.state.userApiEndpoint}
                    onChange={this.handleChange}
                    disabled={!this.state.enable}
                />
                <TextSetting
                    id='authEndpoint'
                    label={
                        <FormattedMessage
                            id='admin.oidc.authTitle'
                            defaultMessage='Auth Endpoint:'
                        />
                    }
                    placeholder={Utils.localizeMessage('admin.oidc.authExample', 'Ex "https://<your-open-id-url>/oauth/authorize"')}
                    helpText={
                        <FormattedMessage
                            id='admin.oidc.authDescription'
                            defaultMessage='Enter https://<your-open-id-url>/oauth/authorize (example https://example.com:3000/oauth/authorize).   Make sure you use HTTP or HTTPS in your URL depending on your server configuration.'
                        />
                    }
                    value={this.state.authEndpoint}
                    onChange={this.handleChange}
                    disabled={!this.state.enable}
                />
                <TextSetting
                    id='tokenEndpoint'
                    label={
                        <FormattedMessage
                            id='admin.oidc.tokenTitle'
                            defaultMessage='Token Endpoint:'
                        />
                    }
                    placeholder={Utils.localizeMessage('admin.opidc.tokenExample', 'Ex "https://<your-open-id-url>/oauth/token"')}
                    helpText={
                        <FormattedMessage
                            id='admin.oidc.tokenDescription'
                            defaultMessage='Enter https://<your-open-id-url>/oauth/token.   Make sure you use HTTP or HTTPS in your URL depending on your server configuration.'
                        />
                    }
                    value={this.state.tokenEndpoint}
                    onChange={this.handleChange}
                    disabled={!this.state.enable}
                />
            </SettingsGroup>
        );
    }
}
