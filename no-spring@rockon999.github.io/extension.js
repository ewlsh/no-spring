/* exported init, enable, disable */

const ViewSelector = imports.ui.viewSelector;
const Main = imports.ui.main;

const ORIG_animateIn = ViewSelector.ViewSelector.prototype._animateIn;
const ORIG_animateOut = ViewSelector.ViewSelector.prototype._animateOut;


function init() { }

function enable() {
    ViewSelector.ViewSelector.prototype._animateIn = MOD_animateIn;
    ViewSelector.ViewSelector.prototype._animateOut = MOD_animateOut;
    Main.overview.viewSelector._animateIn = MOD_animateIn;
    Main.overview.viewSelector._animateOut = MOD_animateOut;
}

function disable() {
    ViewSelector.ViewSelector.prototype._animateIn = ORIG_animateIn;
    ViewSelector.ViewSelector.prototype._animateOut = ORIG_animateOut;
    Main.overview.viewSelector._animateIn = ORIG_animateIn;
    Main.overview.viewSelector._animateOut = ORIG_animateOut;
}


/* Removes the App Grid "spring" effect */

function MOD_animateIn(oldPage) {
    if (oldPage) {
        oldPage.hide();
    }

    this.emit('page-empty');

    this._activePage.show();

    this._fadePageIn();
}

function MOD_animateOut(page) {
    this._fadePageOut(page);
}