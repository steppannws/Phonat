var Callbacks = {};
 
var Events = {
    EVENTS: {
        NOTIFICATIONS_EVENT: 'notifications_event',
        BADGE_EVENT: 'badge_event',
        SHOW_BADGE: 'show_badge',
        HIDE_BADGE: 'hide_badge',
        REFRESH_HOME: 'refresh_home',
        REFRESH_CALIFICATIONS: 'refresh_califications',
        FILTERS: 'filters'
    },
    on: (at, id, callback) => { return Events.listen(at, id, callback) },
    listen: (at, id, callback) => {
        if (at == '') { return false }
        if (at in Callbacks) {
            Callbacks[at][id] = callback;
        } else {
            Callbacks[at] = {};
            Callbacks[at][id] = callback;
        }
        return id;
    },
    t: (at, data) => { return Events.trigger(at, data) },
    trigger: (at, data) => {
        data = data || ''; var obj = Callbacks[at];
        for (var prop in obj) { if (obj.hasOwnProperty(prop)) { obj[prop](data) } }
    },
    rm: (at, id) => { return Events.remove(at, id) },
    remove: (at, id) => { try { delete Callbacks[at][id] } catch(error) {console.warn(error);} },
    removeAll: (at) => { delete Callbacks[at] }
};
 
module.exports = Events;