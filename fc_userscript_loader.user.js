// ==UserScript==
// @name           Frozen Cookies
// @version        github-latest
// @description    Userscript to load Frozen Cookies written by Icehawk78, forked by Lordshinjo
// @author         Lordshinjo
// @homepage       https://github.com/Mtarnuhal/FrozenCookies
// @include        http://orteil.dashnet.org/cookieclicker/
// @updateURL      https://rawgit.com/Mtarnuhal/FrozenCookies/master/fc_userscript_loader.js
// @downloadURL    https://rawgit.com/Mtarnuhal/FrozenCookies/master/fc_userscript_loader.js
// @run-at         document-start
// ==/UserScript==

// Dev:       https://github.com/Mtarnuhal/FrozenCookies/development/
// Master:    https://github.com/Mtarnuhal/FrozenCookies/master/
// Github.io: http://lordshinjo.github.io/FrozenCookies/

function LoadFrozenCookies() {
    Game.LoadMod('https://rawgit.com/Mtarnuhal/FrozenCookies/master/frozen_cookies.js');
}

window.addEventListener("load", LoadFrozenCookies, false);
// It's not the best way but Chrome doesn't work with addEventListener... :(
// Delay load by 5 seconds to allow the site to load itself first.)
window.setTimeout(LoadFrozenCookies, 5000);
