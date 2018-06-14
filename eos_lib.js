'use strict';

module.exports = {

    init: function (req, res) {
        var config = require('./config');
        var Eos = require('eosjs');
        var eos = Eos({
            chainId: config.get("scp_chain_id"),
            httpEndpoint: config.get("scp_nodeos_url"),
            expireInSeconds: 60,
            keyProvider: config.get("scp_auth_privkey"),
            broadcast: true,
            debug: false, // API and transactions
            sign: true
        });
        return eos;
    },

    gen_account_name: function() {
        var possible = "abcdefghijklmnopqrstuvwxyz12345";
        var text = "scp.";
        for (var i = 0; i < 8; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    }
};