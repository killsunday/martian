/**
 * Martian - Core JavaScript API for MindTouch
 *
 * Copyright (c) 2015 MindTouch Inc.
 * www.mindtouch.com  oss@mindtouch.com
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { modelHelper } from './modelHelper.js';
import { pageModel } from './page.model.js';
import { permissionsModel } from './permissions.model.js';
let userModel = {
    parse: function(data) {
        let obj = modelHelper.fromJson(data);
        let parsed = {
            id: modelHelper.getInt(obj['@id']),
            wikiId: obj['@wikiid'],
            href: obj['@href'],
            dateCreated: modelHelper.getDate(obj['date.created']),
            email: obj.email,
            fullname: obj.fullname,
            username: obj.username,
            nick: obj.nick,
            status: obj.status
        };
        if(typeof obj['license.seat'] === 'string') {
            parsed.seated = modelHelper.getBool(obj['license.seat']);
            parsed.siteOwner = false;
        } else {
            parsed.seated = modelHelper.getBool(modelHelper.getString(obj['license.seat']));
            parsed.siteOwner = modelHelper.getBool(obj['license.seat']['@owner']);
        }
        if('date.lastlogin' in obj) {
            parsed.dateLastLogin = modelHelper.getDate(obj['date.lastlogin']);
        }
        if('page.home' in obj) {
            parsed.pageHome = pageModel.parse(obj['page.home']);
        }
        if('permissions.user' in obj) {
            parsed.userPermissions = permissionsModel.parse(obj['permissions.user']);
        }
        return parsed;
    }
};
export { userModel };
