import { Plug } from 'mindtouch-http.js/plug.js';
import { Settings } from './lib/settings.js';
import { utility } from './lib/utility.js';
import { modelParser } from './lib/modelParser.js';
import { licenseUsageModel } from './models/licenseUsage.model.js';
import { licenseUsageLogsModel } from './models/licenseUsageLogs.model.js';

export class License {

    /**
     * Construct a new License object.
     * @param {Settings} [settings] - The {@link Settings} information to use in construction. If not supplied, the default settings are used.
     */
    constructor(settings = new Settings()) {
        this._plug = new Plug(settings.host, settings.plugConfig).at('@api', 'deki', 'license');
    }

    /**
     * Retrieve license usage totals for the current license period
     * @param {Object} [options] - Parameters that will direct the usage information that is returned.
     * @param {Date} [options.since] - Get license usage starting at this date.
     * @param {Date} [options.upTo=Date.now()] - Get license usage ending at this date.
     */
    getUsage(options = {}) {
        const params = {};
        if(options.since) {
            if(!(options.since instanceof Date)) {
                return Promise.reject(new Error('The `since` parameter must be of type Date.'));
            }
            params.since = utility.getApiDateString(options.since);
        }
        if(options.upTo) {
            if(!(options.upTo instanceof Date)) {
                return Promise.reject(new Error('The `upTo` parameter must be of type Date.'));
            }
            params.upto = utility.getApiDateString(options.upTo);
        }
        return this._plug.at('usage').withParams(params).get().then((r) => r.json()).then(modelParser.createParser(licenseUsageModel));
    }

    /**
     * Retrieve license usage totals for the current license period.
     */
    getUsageLogs() {
        return this._plug.at('usage', 'logs').get().then((r) => r.json()).then(modelParser.createParser(licenseUsageLogsModel));
    }

    /**
     * Retrieve the download URL for a license usage log.
     * @param {String} name - The name identifier for the usage log.
     */
    getUsageLogUrl(name) {
        if(!name) {
            return Promise.reject(new Error('The log name must be supplied.'));
        }
        return this._plug.at('usage', 'logs', name, 'url')
            .get()
            .then((r) => r.json())
            .then(modelParser.createParser([ { field: 'url' } ]));
    }
}