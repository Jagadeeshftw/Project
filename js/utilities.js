
var U = {
    $: function(id) {
        if (typeof id == 'string') {
            return document.getElementById(id);
        }
    },

    addEvent: function(obj, type, fn) {
        //Add event listener to an object
        if (obj && obj.addEventListener) {
            obj.addEventListener(type, fn, false);
        }
        else if (obj && obj.attachEvent) {
            obj.attachEvent('on' + type, fn);
        }
    }
};