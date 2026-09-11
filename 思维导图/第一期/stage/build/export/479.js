"use strict";(()=>{(self.webpackChunkProtyle=self.webpackChunkProtyle||[]).push([[479],{6479(pe,W,A){A.r(W),A.d(W,{bazaar:()=>a,mountBazaarTab:()=>ue,renderReadme:()=>_e,unmountBazaarTab:()=>ge});var D=A(5966),R=A(2753),x=A(7537),j=A(3641),B=A(5741),k=A(5264),Z=A(1409),O=A(1946),_=A(4178);const H=e=>{const t=typeof e=="string"?parseFloat(e):e;if(!Number.isFinite(t))return e;if(t<1e3)return e.toString();let n,i;return t<1e6?(n=t/1e3,i="k"):(n=t/1e6,i="M"),n.toFixed(1).replace(/\.0$/,"")+i};var E=A(6057),te=A(2389),ne=A(7066),v=A(7692),ie=A(8617),se=A(3690),oe=Object.defineProperty,le=Object.defineProperties,de=Object.getOwnPropertyDescriptors,Y=Object.getOwnPropertySymbols,re=Object.prototype.hasOwnProperty,ce=Object.prototype.propertyIsEnumerable,J=(e,t,n)=>t in e?oe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,C=(e,t)=>{for(var n in t||(t={}))re.call(t,n)&&J(e,n,t[n]);if(Y)for(var n of Y(t))ce.call(t,n)&&J(e,n,t[n]);return e},q=(e,t)=>le(e,de(t));const ue=(e,t,n)=>{(0,k.Fr)()&&e.classList.add("config--mobile");const i=e.innerHTML==="";a._activateMount(e,i),i&&(e.innerHTML=a.genHTML(),n&&a.bindEvent(n)),a._syncRatingUser()&&a._refreshVisibleRatingUI(),t&&(0,te.WD)(e,t,[{type:"downloaded",label:window.siyuan.languages.downloaded},{type:"plugin",label:window.siyuan.languages.plugin},{type:"theme",label:window.siyuan.languages.theme},{type:"icon",label:window.siyuan.languages.icon},{type:"template",label:window.siyuan.languages.template},{type:"widget",label:window.siyuan.languages.widget}])},ge=e=>{a.element===e&&a._invalidateMount()},_e=(e,t,n)=>{a.element==null||n.invalidReason||a._renderReadme(e,t,n)},a={element:void 0,_mountGeneration:0,_bazaarRequestIDs:new Map,_updateState:"idle",_updateRequestID:0,_localPackageUploading:!1,_pluginEnablePending:new Set,_ratingUserID:"",_ratingUserChangeHandler:void 0,_activateMount(e,t=!1){!t&&this.element===e||(this._invalidateMount(),this.element=e)},_invalidateMount(){this._mountGeneration++,this._updateRequestID++,this._data.deprecationMetadata.clear(),this._data.deprecationTypesLoaded.clear(),this._data.deprecationTypesLoading.clear(),this._ratingUserChangeHandler&&(window.removeEventListener("siyuan-login-success",this._ratingUserChangeHandler),this._ratingUserChangeHandler=void 0)},_captureMount(){return{element:this.element,generation:this._mountGeneration}},_beginBazaarRequest(e,t=this._captureMount()){if(!this._isMountCurrent(t))return t;const n=(this._bazaarRequestIDs.get(e)||0)+1;return this._bazaarRequestIDs.set(e,n),q(C({},t),{requestID:n})},_isMountCurrent(e){return e.element===this.element&&e.generation===this._mountGeneration},_isBazaarRequestCurrent(e,t){return this._isMountCurrent(t)&&(t.requestID===void 0||this._bazaarRequestIDs.get(e)===t.requestID)},genHTML(){if(!window.siyuan.config.bazaar.trust)return`<div class="config-bazaar__trust fn__flex-column" style="margin: 0 48px;">
<div class="fn__flex-1"></div>
<div class="b3-label">
    <div>${window.siyuan.languages.bazaarTrust}</div>
    <div class="fn__hr--b"></div>
    <div>${window.siyuan.languages.bazaarTrust3}</div>
</div>
<div class="fn__flex b3-label">
    <svg class="b3-label__icon"><use xlink:href="#iconEye"></use></svg>
    <div>
        ${window.siyuan.languages.bazaarTrustCodeReview}
        <div class="b3-label__text">${window.siyuan.languages.bazaarTrustCodeReviewTip}</div>
    </div>
</div>
<div class="fn__flex b3-label">
    <svg class="b3-label__icon"><use xlink:href="#iconGithub"></use></svg>
    <div>
        ${window.siyuan.languages.bazaarTrustOpenSource}
        <div class="b3-label__text">${window.siyuan.languages.bazaarTrustOpenSourceTip}</div>
    </div>
</div>
<div class="fn__flex b3-label">
    <svg class="b3-label__icon"><use xlink:href="#iconUsers"></use></svg>
    <div>
        ${window.siyuan.languages.bazaarCommunityReview}
        <div class="b3-label__text">${window.siyuan.languages.bazaarPeerReviewTip}</div>
    </div>
</div>
<div class="fn__flex b3-label">
    <svg class="b3-label__icon"><use xlink:href="#iconInfo"></use></svg>
    <div>
        ${window.siyuan.languages.bazaarUserReport}
        <div class="b3-label__text">${window.siyuan.languages.bazaarUserReportTip}</div>
    </div>
</div>
<div class="b3-label b3-label--noborder">
    <div>${window.siyuan.languages.bazaarTrust1}</div>
    <div class="fn__hr--b"></div>
    <div>${window.siyuan.languages.bazaarTrust2}</div>
</div>
<div class="ft__center b3-label b3-label--noborder">
    <button class="b3-button fn__size200">${window.siyuan.languages.trust}</button>
</div>
<div class="fn__flex-1"></div>
</div>`;const e=window.siyuan.storage[B.Constants.LOCAL_BAZAAR],t=`<div style="height: ${a.element.clientHeight-160}px;display: flex;align-items: center;justify-content: center;"><img src="/stage/loading-pure.svg"></div>`;return`<div class="config-bazaar fn__flex-column" style="height: 100%">
<div class="config-bazaar__main fn__flex-column fn__flex-1">
<div class="config-bazaar__drop fn__none">
    <svg><use xlink:href="#iconUpload"></use></svg>
    <div>${window.siyuan.languages.dropLocalBazaarPackage}</div>
</div>
<div class="layout-tab-bar fn__flex">
    <div data-type="downloaded" class="item item--full item--focus"><span class="fn__flex-1"></span><span class="item__text">${window.siyuan.languages.downloaded}</span><span class="fn__flex-1"></span></div>
    <div data-type="plugin" class="item item--full"><span class="fn__flex-1"></span><span class="item__text">${window.siyuan.languages.plugin}</span><span class="fn__flex-1"></span></div>
    <div data-type="theme" class="item item--full"><span class="fn__flex-1"></span><span class="item__text">${window.siyuan.languages.theme}</span><span class="fn__flex-1"></span></div>
    <div data-type="icon" class="item item--full"><span class="fn__flex-1"></span><span class="item__text">${window.siyuan.languages.icon}</span><span class="fn__flex-1"></span></div>
    <div data-type="template" class="item item--full"><span class="fn__flex-1"></span><span class="item__text">${window.siyuan.languages.template}</span><span class="fn__flex-1"></span></div>
    <div data-type="widget" class="item item--full"><span class="fn__flex-1"></span><span class="item__text">${window.siyuan.languages.widget}</span><span class="fn__flex-1"></span></div>
</div>
<div class="fn__flex-1">
    <div class="config-bazaar__panel" data-type="downloaded" data-init="true">
        <div class="fn__flex config-bazaar__title config-bazaar__title--downloaded">
            <div class="fn__flex config-bazaar__tabs">
                <button data-type="myUpdate" class="b3-button b3-button--outline config-bazaar__update-tab">${window.siyuan.languages.update}<span data-type="update-tab-count" class="config-bazaar__update-count fn__none"></span></button>
                <button data-type="myPlugin" class="b3-button">${window.siyuan.languages.plugin}</button>
                <button data-type="myTheme" class="b3-button b3-button--outline">${window.siyuan.languages.theme}</button>
                <button data-type="myIcon" class="b3-button b3-button--outline">${window.siyuan.languages.icon}</button>
                <button data-type="myTemplate" class="b3-button b3-button--outline">${window.siyuan.languages.template}</button>
                <button data-type="myWidget" class="b3-button b3-button--outline">${window.siyuan.languages.widget}</button>
            </div>
            <div class="fn__flex config-bazaar__tools">
                <div class="fn__flex config-bazaar__sort">
                    <svg class="svg ft__on-surface fn__flex-center"><use xlink:href="#iconSort"></use></svg>
                    <select class="b3-select" data-type="downloaded-sort">
                        <option ${e.downloadedPlugin==="0"?"selected":""} value="0">${window.siyuan.languages.sortDefault}</option>
                        <option ${e.downloadedPlugin==="1"?"selected":""} value="1">${window.siyuan.languages.sortByInstallTimeDesc}</option>
                        <option ${e.downloadedPlugin==="2"?"selected":""} value="2">${window.siyuan.languages.sortByInstallTimeAsc}</option>
                        <option ${e.downloadedPlugin==="3"?"selected":""} value="3">${window.siyuan.languages.sortByUpdateTimeDesc}</option>
                        <option ${e.downloadedPlugin==="4"?"selected":""} value="4">${window.siyuan.languages.sortByUpdateTimeAsc}</option>
                        <option ${e.downloadedPlugin==="5"?"selected":""} data-plugin-only="true" value="5">${window.siyuan.languages.sortByEnabledFirst}</option>
                        <option ${e.downloadedPlugin==="6"?"selected":""} data-plugin-only="true" value="6">${window.siyuan.languages.sortByDisabledFirst}</option>
                    </select>
                </div>
                <input data-type="downloaded-filter" class="b3-text-field config-bazaar__filter" placeholder="${window.siyuan.languages.enterKey} ${window.siyuan.languages.search}">
                <div class="fn__flex config-bazaar__actions">
                    <label class="block__icon block__icon--show config-bazaar__local-package ariaLabel" data-type="install-local-package" data-position="north" aria-label="${window.siyuan.languages.installLocalBazaarPackage}">
                        <svg class="b3-button__icon"><use xlink:href="#iconUpload"></use></svg>
                        <input class="b3-form__upload" data-type="local-package-file" type="file" accept=".zip,application/zip">
                    </label>
                    <button class="b3-button fn__none" data-type="install-all">${window.siyuan.languages.updateAll}</button>
                    <input ${window.siyuan.config.bazaar.petalDisabled?"":" checked"} data-type="plugins-enable" data-position="north" type="checkbox" class="b3-switch fn__flex-center ariaLabel" aria-label="${window.siyuan.languages[window.siyuan.config.bazaar.petalDisabled?"enable":"disableAll"]}">
                    <div class="counter counter--bg fn__none fn__flex-center ariaLabel" data-position="north" aria-label="${window.siyuan.languages.total}"></div>
                </div>
            </div>
        </div>
        <div id="configBazaarDownloaded" class="config-bazaar__content b3-cards b3-cards--nowrap">
            ${t}
        </div>
    </div>
    <div data-type="theme" class="config-bazaar__panel fn__none">
        <div class="fn__flex config-bazaar__title">
            <svg class="svg ft__on-surface fn__flex-center"><use xlink:href="#iconSort"></use></svg>
            <div class="fn__space"></div>
            <select class="b3-select">
                <option ${e.theme==="0"?"selected":""} value="0">${window.siyuan.languages.sortByUpdateTimeDesc}</option>
                <option ${e.theme==="1"?"selected":""} value="1">${window.siyuan.languages.sortByUpdateTimeAsc}</option>
                <option ${e.theme==="2"?"selected":""} value="2">${window.siyuan.languages.sortByDownloadsDesc}</option>
                <option ${e.theme==="3"?"selected":""} value="3">${window.siyuan.languages.sortByDownloadsAsc}</option>
                <option ${e.theme==="4"?"selected":""} value="4">${window.siyuan.languages.sortByRatingDesc}</option>
                <option ${e.theme==="5"?"selected":""} value="5">${window.siyuan.languages.sortByRatingAsc}</option>
            </select>
            <div class="fn__space"></div>
            <select id="bazaarSelect" class="b3-select">
                <option selected value="2">${window.siyuan.languages.all}</option>
                <option value="0">${window.siyuan.languages.themeLight}</option>
                <option value="1">${window.siyuan.languages.themeDark}</option>
            </select>
            <div class="fn__space"></div>
            <div class="fn__flex config-bazaar__filter-row">
                <input class="b3-text-field" placeholder="${window.siyuan.languages.enterKey} ${window.siyuan.languages.search}">
                <div class="counter counter--bg fn__flex-center ariaLabel" data-position="north" aria-label="${window.siyuan.languages.total}"></div>
            </div>
        </div>
        <div id="configBazaarTheme" class="config-bazaar__content">
            ${t}
        </div>
    </div>
    <div class="fn__none config-bazaar__panel" data-type="template">
        <div class="fn__flex config-bazaar__title">
            <svg class="svg ft__on-surface fn__flex-center"><use xlink:href="#iconSort"></use></svg>
            <div class="fn__space"></div>
            <select class="b3-select">
                <option ${e.template==="0"?"selected":""} value="0">${window.siyuan.languages.sortByUpdateTimeDesc}</option>
                <option ${e.template==="1"?"selected":""} value="1">${window.siyuan.languages.sortByUpdateTimeAsc}</option>
                <option ${e.template==="2"?"selected":""} value="2">${window.siyuan.languages.sortByDownloadsDesc}</option>
                <option ${e.template==="3"?"selected":""} value="3">${window.siyuan.languages.sortByDownloadsAsc}</option>
                <option ${e.template==="4"?"selected":""} value="4">${window.siyuan.languages.sortByRatingDesc}</option>
                <option ${e.template==="5"?"selected":""} value="5">${window.siyuan.languages.sortByRatingAsc}</option>
            </select>
            <div class="fn__space"></div>
            <div class="fn__flex config-bazaar__filter-row">
                <input class="b3-text-field" placeholder="${window.siyuan.languages.enterKey} ${window.siyuan.languages.search}">
                <div class="counter counter--bg fn__flex-center ariaLabel" data-position="north" aria-label="${window.siyuan.languages.total}"></div>
            </div>
        </div>
        <div id="configBazaarTemplate" class="config-bazaar__content">
            ${t}
        </div>
    </div>
    <div class="fn__none config-bazaar__panel" data-type="plugin">
        <div class="fn__flex config-bazaar__title">
            <svg class="svg ft__on-surface fn__flex-center"><use xlink:href="#iconSort"></use></svg>
            <div class="fn__space"></div>
            <select class="b3-select">
                <option ${e.plugin==="0"?"selected":""} value="0">${window.siyuan.languages.sortByUpdateTimeDesc}</option>
                <option ${e.plugin==="1"?"selected":""} value="1">${window.siyuan.languages.sortByUpdateTimeAsc}</option>
                <option ${e.plugin==="2"?"selected":""} value="2">${window.siyuan.languages.sortByDownloadsDesc}</option>
                <option ${e.plugin==="3"?"selected":""} value="3">${window.siyuan.languages.sortByDownloadsAsc}</option>
                <option ${e.plugin==="4"?"selected":""} value="4">${window.siyuan.languages.sortByRatingDesc}</option>
                <option ${e.plugin==="5"?"selected":""} value="5">${window.siyuan.languages.sortByRatingAsc}</option>
            </select>
            <div class="fn__space"></div>
            <div class="fn__flex config-bazaar__filter-row">
                <input class="b3-text-field" placeholder="${window.siyuan.languages.enterKey} ${window.siyuan.languages.search}">
                <div class="counter counter--bg fn__flex-center ariaLabel" data-position="north" aria-label="${window.siyuan.languages.total}"></div>
            </div>
        </div>
        <div id="configBazaarPlugin" class="config-bazaar__content">
            ${t}
        </div>
    </div>
    <div class="fn__none config-bazaar__panel" data-type="icon">
        <div class="fn__flex config-bazaar__title">
            <svg class="svg ft__on-surface fn__flex-center"><use xlink:href="#iconSort"></use></svg>
            <div class="fn__space"></div>
            <select class="b3-select">
                <option ${e.icon==="0"?"selected":""} value="0">${window.siyuan.languages.sortByUpdateTimeDesc}</option>
                <option ${e.icon==="1"?"selected":""} value="1">${window.siyuan.languages.sortByUpdateTimeAsc}</option>
                <option ${e.icon==="2"?"selected":""} value="2">${window.siyuan.languages.sortByDownloadsDesc}</option>
                <option ${e.icon==="3"?"selected":""} value="3">${window.siyuan.languages.sortByDownloadsAsc}</option>
                <option ${e.icon==="4"?"selected":""} value="4">${window.siyuan.languages.sortByRatingDesc}</option>
                <option ${e.icon==="5"?"selected":""} value="5">${window.siyuan.languages.sortByRatingAsc}</option>
            </select>
            <div class="fn__space"></div>
            <div class="fn__flex config-bazaar__filter-row">
                <input class="b3-text-field" placeholder="${window.siyuan.languages.enterKey} ${window.siyuan.languages.search}">
                <div class="counter counter--bg fn__flex-center ariaLabel" data-position="north" aria-label="${window.siyuan.languages.total}"></div>
            </div>
        </div>
        <div id="configBazaarIcon" class="config-bazaar__content">
            ${t}
        </div>
    </div>
    <div class="fn__none config-bazaar__panel" data-type="widget">
        <div class="fn__flex config-bazaar__title">
            <svg class="svg ft__on-surface fn__flex-center"><use xlink:href="#iconSort"></use></svg>
            <div class="fn__space"></div>
            <select class="b3-select">
                <option ${e.widget==="0"?"selected":""} value="0">${window.siyuan.languages.sortByUpdateTimeDesc}</option>
                <option ${e.widget==="1"?"selected":""} value="1">${window.siyuan.languages.sortByUpdateTimeAsc}</option>
                <option ${e.widget==="2"?"selected":""} value="2">${window.siyuan.languages.sortByDownloadsDesc}</option>
                <option ${e.widget==="3"?"selected":""} value="3">${window.siyuan.languages.sortByDownloadsAsc}</option>
                <option ${e.widget==="4"?"selected":""} value="4">${window.siyuan.languages.sortByRatingDesc}</option>
                <option ${e.widget==="5"?"selected":""} value="5">${window.siyuan.languages.sortByRatingAsc}</option>
            </select>
            <div class="fn__space"></div>
            <div class="fn__flex config-bazaar__filter-row">
                <input class="b3-text-field" placeholder="${window.siyuan.languages.enterKey} ${window.siyuan.languages.search}">
                <div class="counter counter--bg fn__flex-center ariaLabel" data-position="north" aria-label="${window.siyuan.languages.total}"></div>
            </div>
        </div>
        <div id="configBazaarWidget" class="config-bazaar__content">
            ${t}
        </div>
    </div>
</div>
</div>
<div id="configBazaarReadme" class="config-bazaar__readme config__view"></div>
</div>`},_genFundingHTML(e,t=!0){if(!e)return"";const n=t?'<span class="fn__space--small"></span>':"";try{const i=new URL(e);if(!["http:","https:","mailto:"].includes(i.protocol))throw new Error("not an allowed URL protocol");return`${n}<a target="_blank" href="${(0,_.dc)(e)}" class="block__icon block__icon--show ariaLabel" data-position="north" aria-label="${window.siyuan.languages.sponsor} ${(0,_.dc)(e)}"><svg class="ft__pink"><use xlink:href="#iconHeart"></use></svg></a>`}catch(i){return`${n}<span data-type="copy-funding" data-funding="${(0,_.dc)(e)}" class="block__icon block__icon--show ariaLabel" data-position="north" aria-label="${window.siyuan.languages.sponsor} ${(0,_.dc)(e)}"><svg class="ft__pink"><use xlink:href="#iconHeart"></use></svg></span>`}},_genReadmeFundingHTML(e){try{const t=new URL(e);if(!["http:","https:","mailto:"].includes(t.protocol))throw new Error("not an allowed URL protocol");const n=t.host||t.pathname||e;return`<a target="_blank" href="${(0,_.dc)(e)}" title="${(0,_.dc)(e)}" class="item__meta-funding">${(0,_.ZD)(n)}</a>`}catch(t){return`<span data-type="copy-funding" data-funding="${(0,_.dc)(e)}" title="${(0,_.dc)(e)}" class="item__meta-funding ft__primary fn__pointer">${(0,_.ZD)(e)}</span>`}},_genIncompatibleChipHTML(e,t,n){return(n==="themes"?!(0,ne.Qj)(e.frontends,(0,k.N$)()):t==="installed"?e.installedIncompatible:e.bazaarIncompatible)?`<span class="fn__space"></span><span${n==="themes"?"":` data-position="north" aria-label="${window.siyuan.languages.incompatiblePluginTip}"`} class="fn__flex-center${n==="themes"?"":" ariaLabel"} b3-chip b3-chip--error b3-chip--small">${window.siyuan.languages.incompatible}</span>`:""},_genDeprecatedChipHTML(e,t=!0){if(!e.deprecated)return"";const n=t?'<span class="fn__space"></span>':"",i=e.preferredDeprecatedReason||window.siyuan.languages.bazaarDeprecatedTip;return`${n}<span data-position="north" aria-label="${(0,_.dc)(i)}" class="fn__flex-center ariaLabel b3-chip b3-chip--warning b3-chip--small">${(0,_.ZD)(window.siyuan.languages.bazaarDeprecated)}</span>`},_genDeprecatedDetailHTML(e,t){if(!e.deprecated)return"";const n=e.preferredDeprecatedReason||window.siyuan.languages.bazaarDeprecatedTip,o=(Array.isArray(e.alternatives)?e.alternatives.filter(s=>typeof s=="string"&&s.length>0):[]).map(s=>`<button type="button" data-type="bazaar-alternative" data-package-type="${t}" data-package-name="${(0,_.dc)(s)}" class="b3-chip b3-chip--small b3-chip--pointer config-bazaar__deprecated-button">${(0,_.ZD)(s)}</button>`).join("");return`<section class="config-bazaar__deprecated">
    <div class="config-bazaar__deprecated-title">${(0,_.ZD)(window.siyuan.languages.bazaarDeprecated)}</div>
    <div class="config-bazaar__deprecated-reason">${(0,_.ZD)(n)}</div>
    ${o?`<div class="config-bazaar__deprecated-alternatives">
        <span class="config-bazaar__deprecated-label">${window.siyuan.languages.bazaarAlternatives}</span>
        <div class="config-bazaar__deprecated-list">${o}</div>
    </div>`:""}
</section>`},_getInvalidPackageTip(e){return window.siyuan.languages[(0,v.Gq)(e)]},_genInvalidDownloadedCardHTML(e,t){const n=a._getInvalidPackageTip(e.invalidReason);return`<div data-name="${(0,_.dc)(e.name)}" data-package-type="${t}" data-package-source="downloaded" class="b3-card">
    <div class="b3-card__img"><img src="/stage/images/icon.png" loading="lazy"/></div>
    <div class="fn__flex-1 fn__flex-column">
        <div class="b3-card__info b3-card__info--left fn__flex-1">${(0,_.ZD)(e.name)}</div>
    </div>
    <div class="b3-card__actions b3-card__actions--right">
        <span data-position="north" aria-label="${(0,_.dc)(n)}" class="fn__flex-center ariaLabel b3-chip b3-chip--error b3-chip--small">${window.siyuan.languages.bazaarPackageInvalid}</span>
        <span data-position="north" class="ariaLabel block__icon block__icon--show" data-type="uninstall" aria-label="${window.siyuan.languages.uninstall}">
            <svg><use xlink:href="#iconTrashcan"></use></svg>
        </span>
        <span data-position="north" class="ariaLabel block__icon block__icon--show${(0,k.Bd)()?" fn__none":""}" data-type="open" aria-label="${window.siyuan.languages.showInFolder}">
            <svg><use xlink:href="#iconFolder"></use></svg>
        </span>
    </div>
</div>`},_getDetailKey(e,t){return`${e}:${t}`},_getPackageDetail(e,t){return a._data.details.get(a._getDetailKey(e,t))},_setPackageDetail(e,t,n){a._data.details.set(a._getDetailKey(e,t),n)},_fetchPackageDetail(e,t,n){const i=a._captureMount();(0,R.fetchPost)("/api/bazaar/getBazaarPackage",{packageType:e,packageName:t,frontend:(0,k.N$)()},o=>{if(!a._isMountCurrent(i))return;if(o.code!==0||!o.data){n(a._getPackageDetail(e,t)||{});return}const s=o.data;a._setPackageDetail(e,t,s),n(s)})},_openBazaarAlternative(e,t){var n;const i=a._getPackageDetail(e,t),o=(i==null?void 0:i.available)||a._data[e].find(s=>s.name===t)||((n=a._data.deprecationMetadata.get(e))==null?void 0:n.get(t));if(o){a._renderReadme(e,"bazaar",o,i);return}a._fetchPackageDetail(e,t,s=>{if(s.available){a._renderReadme(e,"bazaar",s.available,s);return}(0,D.rG)(window.siyuan.languages.bazaarPackageNotFound.replace("${name}",(0,_.ZD)(t)))})},_genReadmeMetaRow(e,t,n=!1){return t?`<div class="item__meta-row">
    <span>${(0,_.ZD)(e)}</span>
    <span>${n?t:(0,_.ZD)(t)}</span>
</div>`:""},_genReadmeChips(e,t=!1){return t&&e.length===1&&e[0]===window.siyuan.languages.all?(0,_.ZD)(e[0]):e.map(n=>`<span class="b3-chip b3-chip--small">${(0,_.ZD)(n)}</span>`).join("")},_genReadmeKeywords(e){const n=e.map((i,o)=>`<span${o>=5?" data-keyword-hidden":""} class="b3-chip b3-chip--small${o>=5?" fn__none":""}">${(0,_.ZD)(i)}</span>`).join("");return e.length<=5?n:`${n}<button type="button" data-type="keywords-expand" data-position="north" aria-label="${(0,_.dc)(window.siyuan.languages.showMore)}" class="item__keywords-more b3-chip b3-chip--small b3-chip--hover ariaLabel">...</button>`},_getFrontendLabels(e,t=!1){if(!(e!=null&&e.length))return t&&["mobile","browser-mobile"].includes((0,k.N$)())?[]:[window.siyuan.languages.all];if(e.includes("all"))return[window.siyuan.languages.all];const n=new Set;return e.forEach(i=>{["desktop","desktop-window"].includes(i)?n.add(window.siyuan.languages.desktop):i==="mobile"?n.add(window.siyuan.languages.mobile):["browser-desktop","browser-mobile"].includes(i)?n.add(window.siyuan.languages.bazaarWeb):n.add(i)}),Array.from(n)},_genReadmeActionsHTML(e,t,n){if(!t)return!n||n.installed?"":`<button ${n.disallowInstall?`disabled aria-label="${a._genInstallButtonAriaLabel(n,e)}" data-position="north"`:""} class="b3-button ariaLabel fn__block" data-type="install">${window.siyuan.languages.download}</button>`;let i="";const o=(0,v.rz)(e,t)?" disabled":"";return e==="plugins"?i=`<button${o} class="b3-button fn__block" data-type="${t.enabled?"package-disable":"package-enable"}">${t.enabled?window.siyuan.languages.disable:window.siyuan.languages.enable}</button>`:["themes","icons"].includes(e)&&(i=`<button${o} class="b3-button fn__block" data-type="${t.current?"package-disable":"package-enable"}">${t.current?window.siyuan.languages.disable:window.siyuan.languages.use}</button>`),`${i}
${i?'<div class="fn__hr"></div>':""}
<button class="b3-button b3-button--remove fn__block" data-type="uninstall">${window.siyuan.languages.uninstall}</button>`},_getRatingKey(e,t){return`${e}:${t}`},_syncRatingUser(){const e=window.siyuan.user?`${window.siyuan.config.cloudRegion}:${window.siyuan.user.userId}`:"";return a._ratingUserID!==e?(a._ratingUserID=e,a._data.userRatings.clear(),a._data.userRatingKeys.clear(),a._data.userRatingLoadingKeys.clear(),a._data.userRatingSubmitRequestIDs.clear(),a._data.userRatingBatchRequestIDs.clear(),!0):!1},_refreshVisibleRatingUI(){var e,t;const n=new Set;(e=a.element)==null||e.querySelectorAll("[data-package-type][data-name]").forEach(l=>{const r=l.dataset.packageType,u=l.dataset.name;r&&u&&n.add(a._getRatingKey(r,u))}),n.forEach(l=>{const r=l.indexOf(":");a._refreshRatingUI(l.slice(0,r),l.slice(r+1))});const i=(t=a.element)==null?void 0:t.querySelector("#configBazaarReadme.config__view--show .item__side"),o=i==null?void 0:i.getAttribute("data-package-type"),s=i==null?void 0:i.getAttribute("data-name"),d=i==null?void 0:i.getAttribute("data-from");o&&s&&d&&a._loadReadmeRating(o,s,d),window.siyuan.user&&(a._isUpdatePanelActive()?a._loadUpdatedRatings():a._data.downloadedType&&a._loadDownloadedUserRatings(a._data.downloadedType,a._data.downloadedDefault))},_bindRatingUserChange(){a._ratingUserChangeHandler&&window.removeEventListener("siyuan-login-success",a._ratingUserChangeHandler);const e=a._captureMount();a._ratingUserChangeHandler=()=>{a._isMountCurrent(e)&&(a._syncRatingUser(),a._refreshVisibleRatingUI())},window.addEventListener("siyuan-login-success",a._ratingUserChangeHandler)},_getRatingSummaryText(e){const t=(0,v.F)(e);return t?window.siyuan.languages.bazaarRatingSummary.replace("${average}",t.average.toLocaleString(void 0,{minimumFractionDigits:1,maximumFractionDigits:1})).replace("${count}",t.count.toLocaleString()):window.siyuan.languages.bazaarNoRatings},_genRatingStarsHTML(e){const t=Math.max(0,Math.min(100,e/5*100)),n=Array.from({length:5},()=>'<svg class="config-bazaar__rating-star config-bazaar__rating-star--outline"><use xlink:href="#iconStar"></use></svg>').join(""),i=Array.from({length:5},()=>'<svg class="config-bazaar__rating-star"><use xlink:href="#iconStar"></use></svg>').join("");return`<span class="config-bazaar__rating-stars" aria-hidden="true">
    ${n}
    <span class="config-bazaar__rating-stars--active" style="width: ${t}%">${i}</span>
</span>`},_genCardRatingHTML(e,t=!0){const n=(0,v.F)(e.rating),i=!t||!n,o=a._getRatingSummaryText(n),s=n==null?void 0:n.average.toLocaleString(void 0,{minimumFractionDigits:1,maximumFractionDigits:1});return`<span data-rating-card-slot data-position="north" class="ariaLabel block__icon block__icon--show block__icon--text${i?" fn__none":""}" aria-label="${(0,_.dc)(o)}">
    <svg aria-hidden="true"><use xlink:href="#iconStar"></use></svg>
    <span class="fn__space--small"></span>
    <span>${(0,_.ZD)(s||"")}</span>
</span>`},_genRatePackageActionHTML(e,t){const n=(0,v.ds)(t),i=n!==void 0&&n>0,o=i?window.siyuan.languages.bazaarYourRatingValue.replace("${rating}",n.toString()):window.siyuan.languages.bazaarRatePackage;return`<span data-rating-card-slot data-position="north" data-type="rate-package"${i?` data-user-rating="${n}"`:""} class="ariaLabel block__icon block__icon--show${e?"":" fn__none"}" aria-label="${(0,_.dc)(o)}">
    <svg aria-hidden="true"><use xlink:href="#iconStar"></use></svg>
</span>`},_genRatingDistributionHTML(e){const t=(0,v.F)(e);return[5,4,3,2,1].map(n=>{const i=(t==null?void 0:t.distribution[n-1])||0,o=t?Math.min(1,i/t.count):0,s=o*100,d=new Intl.NumberFormat(void 0,{style:"percent",maximumFractionDigits:0}).format(o),l=window.siyuan.languages.bazaarRatingDistributionLabel.replace("${star}",n.toString()).replace("${count}",i.toLocaleString());return`<div class="config-bazaar__rating-row" aria-label="${(0,_.dc)(`${l} ${d}`)}">
    <span>${n}</span>
    <svg class="config-bazaar__rating-star" aria-hidden="true"><use xlink:href="#iconStar"></use></svg>
    <span class="config-bazaar__rating-track" aria-hidden="true"><span style="width: ${s}%"></span></span>
    <span>${(0,_.ZD)(d)}</span>
    <span>${i.toLocaleString()}</span>
</div>`}).join("")},_genReadmeRatingHTML(e,t,n){if(!n)return"";a._syncRatingUser();const i=(0,v.F)(t.rating),o=a._data.userRatings.get(a._getRatingKey(e,t.name))||0;let s="";if(t.installed)if(window.siyuan.user){const r=o?window.siyuan.languages.bazaarYourRatingValue.replace("${rating}",o.toString()):window.siyuan.languages.bazaarRatePackage;s=`<button type="button" class="config-bazaar__rating-action" data-type="rate-package" aria-label="${(0,_.dc)(r)}">
    ${a._genRatingStarsHTML(o)}
    <span>${(0,_.ZD)(r)}</span>
</button>`}else s=`<div class="config-bazaar__rating-tip">${window.siyuan.languages.bazaarRatingLoginTip}</div>`;else s=`<div class="config-bazaar__rating-tip">${window.siyuan.languages.bazaarRatingInstallTip}</div>`;const d=i?a._getRatingSummaryText(i):"",l=i?`<div class="config-bazaar__rating-summary" aria-label="${(0,_.dc)(d)}">
        ${a._genRatingStarsHTML(i.average)}
        <span>${(0,_.ZD)(d)}</span>
    </div>
    <div class="config-bazaar__rating-distribution">${a._genRatingDistributionHTML(i)}</div>`:"";return`<section class="item__meta-section config-bazaar__rating-detail">
    <div class="item__meta-title">${window.siyuan.languages.bazaarRating}</div>
    ${l}
    ${s}
</section>`},_genCardHTML(e,t){const n=e.installed&&!e.current&&["icons","themes"].includes(t),i=e.installed&&e.current&&["icons","themes"].includes(t);return`<div data-name="${(0,_.dc)(e.name)}" data-package-type="${t}" data-package-source="bazaar" class="b3-card${e.current?" b3-card--current":""}">
    <div class="b3-card__img">
        <img src="${(0,_.dc)(e.iconURL)}" loading="lazy" onerror="this.src='/stage/images/icon.png'"/>
    </div>
    <div class="fn__flex-1 fn__flex-column">
        <div class="b3-card__info fn__flex-1">
            ${(0,_.ZD)(e.preferredName)}
            <div class="b3-card__desc" title="${(0,_.dc)(e.preferredDesc)}">
                ${(0,_.ZD)(e.preferredDesc)}
            </div>
        </div>
        <div class="b3-card__actions">
            <span class="block__icon block__icon--show block__icon--text">
                <svg><use xlink:href="#iconDownload"></use></svg>
                <span class="fn__space--small"></span>
                ${H(e.downloads)}
            </span>
            ${a._genCardRatingHTML(e,(0,v.cW)("bazaar",!1,e.ratingAvailable))}
            <span class="block__icon block__icon--show block__icon--text">
                <svg><use xlink:href="#iconAccount"></use></svg>
                <span class="fn__space--small"></span>
                <span class="b3-card__author">${(0,_.ZD)(e.author)}</span>
            </span>
            ${a._genFundingHTML(e.preferredFunding)}
            ${a._genIncompatibleChipHTML(e,"bazaar",t)}
            ${a._genDeprecatedChipHTML(e)}
            <span class="fn__space--small"></span>
            <div class="fn__flex-1"></div>
            <div class="fn__space--small${n?"":" fn__none"}"></div>
            <span data-position="north" class="ariaLabel block__icon block__icon--show${n?"":" fn__none"}" data-type="switch" aria-label="${window.siyuan.languages.use}">
                <svg><use xlink:href="#iconSelect"></use></svg>
            </span>
            <span data-position="north" class="ariaLabel block__icon block__icon--show${i?"":" fn__none"}" data-type="package-disable" aria-label="${window.siyuan.languages.disable}">
                <svg><use xlink:href="#iconClose"></use></svg>
            </span>
            <div class="fn__space--small${e.outdated?"":" fn__none"}"></div>
            ${a._genUpdateButtonHTML(e,t)}
        </div>
    </div>
</div>`},_genInstallButtonAriaLabel(e,t){return e.disallowInstall?e.bazaarIncompatible?t==="themes"?window.siyuan.languages.incompatible:window.siyuan.languages.incompatiblePluginTip:window.siyuan.languages.bazaarNeedVersion.replace("${x}",e.minAppVersion||""):window.siyuan.languages.download},_genUpdateButtonAriaLabel(e,t){return e.disallowUpdate?e.bazaarIncompatible?t==="themes"?window.siyuan.languages.incompatible:window.siyuan.languages.incompatiblePluginTip:window.siyuan.languages.bazaarNeedVersion.replace("${x}",e.updateRequiredMinAppVer||""):window.siyuan.languages.update},_genUpdateButtonHTML(e,t,n=!1){if(!(e!=null&&e.outdated)&&!n)return"";const i=e?this._genUpdateButtonAriaLabel(e,t):window.siyuan.languages.update;return`<span data-position="north" data-type="install-t" ${e!=null&&e.disallowUpdate?"disabled":""} aria-label="${i}" class="ariaLabel block__icon block__icon--show${e!=null&&e.outdated?"":" fn__hidden"}">
    <svg class="ft__primary"><use xlink:href="#iconRefresh"></use></svg>
</span>`},_genReadmeUpdateButtonHTML(e,t,n=!1){if(!(e!=null&&e.outdated)&&!n)return"";const i=e?this._genUpdateButtonAriaLabel(e,t):window.siyuan.languages.update;return`<div data-type="readme-update-slot" class="${e!=null&&e.outdated?"":"fn__none"}">
    ${n?'<div class="fn__hr"></div>':""}
    <button ${e!=null&&e.disallowUpdate?`disabled aria-label="${i}" data-position="north"`:""} class="b3-button ariaLabel" style="width: 168px" data-type="install-t">${window.siyuan.languages.update}</button>
</div>`},_genUpdateItemHTML(e,t){const n=e.installed,i=e.available,o=a._getRatingKey(t,n.name),s=(0,v.cW)("updated",a._data.downloadedRatingKeys.has(o));return`<div class="b3-card" data-name="${(0,_.dc)(n.name)}" data-package-type="${t}" data-package-source="updated">
    <div class="b3-card__img"><img src="${(0,_.dc)(n.iconURL)}" loading="lazy" onerror="this.src='/stage/images/icon.png'"/></div>
    <div class="fn__flex-1 fn__flex-column">
        <div class="b3-card__info b3-card__info--left fn__flex-1">
            ${(0,_.ZD)(n.preferredName)}
            <div class="b3-card__desc" title="${(0,_.dc)(n.preferredDesc)}">${(0,_.ZD)(n.preferredDesc)}</div>
        </div>
    </div>
    <div class="b3-card__actions b3-card__actions--right">
        ${a._genIncompatibleChipHTML(i,"bazaar",t)}
        ${a._genDeprecatedChipHTML(i,!1)}
        ${a._genFundingHTML(n.preferredFunding,!1)}
        <span data-position="north" class="ariaLabel block__icon block__icon--show${(0,k.Bd)()?" fn__none":""}" data-type="open" aria-label="${window.siyuan.languages.showInFolder}">
            <svg><use xlink:href="#iconFolder"></use></svg>
        </span>
        ${a._genUpdateButtonHTML(i,t)}
        ${a._genRatePackageActionHTML(s,a._data.userRatings.get(o))}
    </div>
</div>`},_getUpdatedItems(){const e=[];return["plugins","themes","icons","templates","widgets"].forEach(t=>{a._data.update[t].forEach(n=>e.push({type:t,item:n}))}),e},_getUpdatedItem(e,t){return a._data.update[e].find(n=>n.installed.name===t)},_isUpdatePanelActive(){var e;return!((e=a.element.querySelector('[data-type="myUpdate"]'))!=null&&e.classList.contains("b3-button--outline"))},_syncUpdateTabCounter(){var e;const t=(e=a.element)==null?void 0:e.querySelector('[data-type="update-tab-count"]');if(!t)return;const n=this._updateState==="loaded"?this._getUpdatedItems().length:0;t.classList.toggle("fn__none",n===0),t.textContent=n.toString()},_checkUpdate(e=!1){if(!e&&["loading","loaded"].includes(this._updateState))return;this._updateState="loading",this._syncUpdateTabCounter();const t=++this._updateRequestID,n=this._captureMount();this._isUpdatePanelActive()&&this._renderUpdatePanel(),(0,R.fetchPost)("/api/bazaar/getUpdatedPackage",{frontend:(0,k.N$)()},i=>{var o;if(!(t!==this._updateRequestID||!this._isMountCurrent(n)||!((o=this.element)!=null&&o.isConnected))){if(i.code!==0||!i.data){this._updateState="error",this._syncUpdateTabCounter(),this._isUpdatePanelActive()&&this._renderUpdatePanel();return}this._data.update=i.data,this._updateState="loaded",this._syncUpdateTabCounter(),this._syncDownloadedUpdateButtons(),this._isUpdatePanelActive()&&this._renderUpdatePanel()}})},_renderUpdatePanel(){const e=a.element.querySelector("#configBazaarDownloaded"),t=e.previousElementSibling.querySelector(".counter"),n=e.previousElementSibling.querySelector('[data-type="install-all"].b3-button');if(n==null||n.classList.add("fn__none"),this._updateState==="loading"||this._updateState==="idle"){t.classList.add("fn__none"),e.innerHTML=`<div style="height: ${a.element.clientHeight-160}px;display: flex;align-items: center;justify-content: center;"><img src="/stage/loading-pure.svg"></div>`;return}if(this._updateState==="error"){t.classList.add("fn__none"),e.innerHTML=`<div class="fn__flex-center" style="height: 96px">
    <span>${window.siyuan.languages.bazaarCheckUpdateFailed}</span>
    <span class="fn__space"></span>
    <button class="b3-button" data-type="retry-update">${window.siyuan.languages.retry}</button>
</div>`;return}const i=this._getUpdatedItems();if(i.length===0){t.classList.add("fn__none"),e.innerHTML=`<ul class="b3-list b3-list--background"><li class="b3-list--empty">${window.siyuan.languages.emptyContent}</li></ul>`;return}t.classList.remove("fn__none"),t.textContent=i.length.toString(),n==null||n.classList.toggle("fn__none",!i.some(({item:o})=>!o.available.disallowUpdate)),e.innerHTML=i.map(({type:o,item:s})=>this._genUpdateItemHTML(s,o)).join(""),this._loadUpdatedRatings()},_syncDownloadedUpdateButtons(){var e;a.element.querySelectorAll("#configBazaarDownloaded .b3-card[data-package-source='downloaded']").forEach(n=>{var i;const o=n.getAttribute("data-package-type"),s=n.getAttribute("data-name"),d=n.querySelector('[data-type="install-t"]');if(!d||!o||!s)return;const l=(i=a._getUpdatedItem(o,s))==null?void 0:i.available;d.outerHTML=a._genUpdateButtonHTML(l,o,!0)});const t=a.element.querySelector("#configBazaarReadme.config__view--show .item__side");if((t==null?void 0:t.getAttribute("data-from"))==="downloaded"){const n=t.getAttribute("data-package-type"),i=t.getAttribute("data-name"),o=t.querySelector('[data-type="readme-update-slot"]'),s=n&&i?(e=a._getUpdatedItem(n,i))==null?void 0:e.available:void 0;o&&(o.outerHTML=a._genReadmeUpdateButtonHTML(s,n,!0),t.setAttribute("data-progress-id",(s==null?void 0:s.repoURL)||t.getAttribute("data-repourl")||""))}},_cacheBazaarDeprecations(e,t){const n=new Map;t.forEach(i=>{n.set(i.name,i)}),a._data.deprecationMetadata.set(e,n),a._data.deprecationTypesLoaded.add(e)},_applyDownloadedDeprecations(e,t){if(!a._data.deprecationTypesLoaded.has(e))return;const n=a._data.deprecationMetadata.get(e);t.forEach(i=>{(0,v.OZ)(i,n==null?void 0:n.get(i.name))})},_loadDownloadedDeprecations(e,t){if(a._data.deprecationTypesLoaded.has(e)||a._data.deprecationTypesLoading.has(e))return;const n={plugins:"/api/bazaar/getBazaarPlugin",themes:"/api/bazaar/getBazaarTheme",icons:"/api/bazaar/getBazaarIcon",templates:"/api/bazaar/getBazaarTemplate",widgets:"/api/bazaar/getBazaarWidget"},i=a._captureMount();a._data.deprecationTypesLoading.add(e);const o=["plugins","themes"].includes(e)?{frontend:(0,k.N$)()}:{};(0,R.fetchPost)(n[e],o,s=>{var d,l;if(a._data.deprecationTypesLoading.delete(e),!a._isMountCurrent(i)||s.code!==0||!Array.isArray((d=s.data)==null?void 0:d.packages)||(a._cacheBazaarDeprecations(e,s.data.packages),a._data.downloadedType!==e))return;const r=a.element.querySelector("#configBazaarDownloaded"),u=(l=r==null?void 0:r.previousElementSibling)==null?void 0:l.querySelector('.b3-button[data-type^="my"]:not(.b3-button--outline)');(u==null?void 0:u.getAttribute("data-type"))===a._type2myType(e)&&a._genMyHTML(e,t,!0)})},_genMyHTML(e,t,n=!1){var i;const o=a.element.querySelector("#configBazaarDownloaded"),s=a._type2myType(e),d=o.previousElementSibling.querySelector(`[data-type="${s}"]`);if(o.getAttribute("data-loading")==="true"||d!=null&&d.classList.contains("b3-button--outline"))return!1;a._updateDownloadedToolbar(e),o.setAttribute("data-loading","true");const l={plugins:"/api/bazaar/getInstalledPlugin",themes:"/api/bazaar/getInstalledTheme",icons:"/api/bazaar/getInstalledIcon",templates:"/api/bazaar/getInstalledTemplate",widgets:"/api/bazaar/getInstalledWidget"};if(!(e in l))return o.removeAttribute("data-loading"),!1;a._updateDownloadedSortSelect(e);const r=a._getDownloadedSortValue(e),u=a._captureMount();return(0,R.fetchPost)(l[e],{frontend:(0,k.N$)(),keyword:((i=o.previousElementSibling.querySelector(".b3-text-field"))==null?void 0:i.value)||""},f=>{if(!a._isMountCurrent(u))return;o.removeAttribute("data-loading");const b=o.previousElementSibling.querySelector('.b3-button[data-type^="my"]:not(.b3-button--outline)');if((b==null?void 0:b.getAttribute("data-type"))!==s)return;const m=f.data.packages;a._applyDownloadedDeprecations(e,m);const y=a._getDownloadedSortValue(e),$=n&&r===y?a._preserveDownloadedOrder(m):a._sortDownloadedPackages(m,y);let p="";const S=o.previousElementSibling.querySelector(".counter");$.length===0?S.classList.add("fn__none"):(S.classList.remove("fn__none"),S.textContent=$.length.toString(),p=$.map(c=>{var w;if(c.invalidReason)return a._genInvalidDownloadedCardHTML(c,e);const h=["icons","themes"].includes(e)&&!c.current,L=["icons","themes"].includes(e)&&c.current;let U=!1;if(e==="plugins"){const I=t.plugins.find(N=>N.name===c.name);U=I&&(I.setting||I.__proto__.hasOwnProperty("openSetting"))}const T=e==="plugins"&&window.siyuan.config.publish.enable,G=(0,v.wp)(c),K=T?`<label data-type="plugin-publish-enable-label" class="config-bazaar__publish-switch" title="${(0,_.dc)(c.disabledInPublish?window.siyuan.languages.pluginDisabledInPublishTip:window.siyuan.languages.publishService)}">
                <input data-type="plugin-publish-enable" data-position="north" class="b3-switch fn__flex-center" type="checkbox"${G?" checked":""}${c.disabledInPublish?" disabled":""}>
                <span class="fn__space--small"></span>
                <span class="fn__flex-center ft__on-surface">${window.siyuan.languages.publishService}</span>
            </label>`:"",V=(w=a._getUpdatedItem(e,c.name))==null?void 0:w.available,F=a._getRatingKey(e,c.name);return`<div data-name="${(0,_.dc)(c.name)}" data-package-type="${e}" data-package-source="downloaded" class="b3-card${c.current?" b3-card--current":""}">
    <div class="b3-card__img"><img src="${(0,_.dc)(c.iconURL)}" loading="lazy" onerror="this.src='/stage/images/icon.png'"/></div>
    <div class="fn__flex-1 fn__flex-column">
        <div class="b3-card__info b3-card__info--left fn__flex-1">
            ${(0,_.ZD)(c.preferredName)}
            <div class="b3-card__desc" title="${(0,_.dc)(c.preferredDesc)}">${(0,_.ZD)(c.preferredDesc)}</div>
            ${T&&!(0,k.Fr)()?`<div class="fn__hr--b"></div>${K}`:""}
        </div>
    </div>
    <div class="b3-card__actions b3-card__actions--right">
        ${(0,k.Fr)()?K:""}
        ${a._genUpdateButtonHTML(V,e,!0)}
        ${a._genRatePackageActionHTML(a._data.downloadedRatingKeys.has(F),a._data.userRatings.get(F))}
        ${a._genIncompatibleChipHTML(c,"installed",e)}
        ${a._genDeprecatedChipHTML(c,!1)}
        ${a._genFundingHTML(c.preferredFunding,!1)}
        ${U?`<span data-position="north" class="ariaLabel block__icon block__icon--show${window.siyuan.config.bazaar.petalDisabled?" fn__none":""}" data-type="setting" aria-label="${window.siyuan.languages.config}">
            <svg><use xlink:href="#iconSettings"></use></svg>
        </span>`:""}
        <span data-position="north" class="ariaLabel block__icon block__icon--show" data-type="uninstall" aria-label="${window.siyuan.languages.uninstall}">
            <svg><use xlink:href="#iconTrashcan"></use></svg>
        </span>
        <span data-position="north" class="ariaLabel block__icon block__icon--show${(0,k.Bd)()?" fn__none":""}" data-type="open" aria-label="${window.siyuan.languages.showInFolder}">
            <svg><use xlink:href="#iconFolder"></use></svg>
        </span>
        <span data-position="north" class="ariaLabel block__icon block__icon--show${h?"":" fn__none"}" data-type="switch" aria-label="${window.siyuan.languages.use}">
            <svg><use xlink:href="#iconSelect"></use></svg>
        </span>
        <span data-position="north" class="ariaLabel block__icon block__icon--show${L?"":" fn__none"}" data-type="package-disable" aria-label="${window.siyuan.languages.disable}">
            <svg><use xlink:href="#iconClose"></use></svg>
        </span>
        <span class="fn__space${e==="plugins"?"":" fn__none"}"></span>
        <span class="fn__space${e==="plugins"?"":" fn__none"}"></span>
        <input ${c.disallowInstall&&!c.enabled||c.installedIncompatible?"disabled":""} 
aria-label="${c.disallowInstall&&!c.enabled?window.siyuan.languages.bazaarNeedVersion.replace("${x}",c.minAppVersion):window.siyuan.languages[c.enabled?"disable":"enable"]}"
data-position="north" class="ariaLabel b3-switch fn__flex-center${e==="plugins"?"":" fn__none"}" 
${c.enabled?"checked":""} 
data-type="plugin-enable" 
data-disabletip="${c.disallowInstall?window.siyuan.languages.bazaarNeedVersion.replace("${x}",c.minAppVersion):""}"
type="checkbox">
    </div>
</div>`}).join("")),a._data.downloadedDefault=m,a._data.downloaded=$,a._data.downloadedType=e,o.innerHTML=p||`<ul class="b3-list b3-list--background"><li class="b3-list--empty">${window.siyuan.languages.emptyContent}</li></ul>`,a._loadDownloadedRatings(e,m),a._loadDownloadedUserRatings(e,m),a._loadDownloadedDeprecations(e,t);const g=a.element.querySelector("#configBazaarReadme.config__view--show .item__side");if((g==null?void 0:g.getAttribute("data-from"))==="downloaded"&&g.getAttribute("data-package-type")===e){const c=g.getAttribute("data-name"),w=a._data.downloaded.find(h=>h.name===c);if(w){const h=a._getPackageDetail(e,c);a._setPackageDetail(e,c,q(C({},h),{installed:w})),a._refreshReadmeDetail(e,c)}}}),!0},_data:{themes:[],templates:[],icons:[],widgets:[],plugins:[],downloadedDefault:[],downloaded:[],downloadedType:void 0,deprecationMetadata:new Map,deprecationTypesLoaded:new Set,deprecationTypesLoading:new Set,downloadedRatingKeys:new Set,ratings:new Map,userRatings:new Map,userRatingKeys:new Set,userRatingLoadingKeys:new Set,userRatingSubmittingKeys:new Set,userRatingSubmitRequestIDs:new Map,userRatingBatchRequestIDs:new Map,ratingBatchRequestIDs:new Map,ratingMutationVersions:new Map,details:new Map,update:{themes:[],templates:[],icons:[],widgets:[],plugins:[]}},_upsertReadmeData(e,t,n){const i=o=>{const s=o.findIndex(d=>d.name===n.name);s>=0?o[s]=n:o.push(n)};if(t==="downloaded")i(a._data.downloaded);else if(t==="updated"){const o=a._data.update[e].find(s=>s.installed.name===n.name);o&&(o.available=n)}else i(a._data[e])},_renderReadme(e,t,n,i){var o,s;const d=a._captureMount(),l=a.element.querySelector("#configBazaarReadme"),r={plugins:window.siyuan.languages.plugin,themes:window.siyuan.languages.theme,icons:window.siyuan.languages.icon,templates:window.siyuan.languages.template,widgets:window.siyuan.languages.widget};if(!(e in r))return;a._upsertReadmeData(e,t,n);const u=t==="updated"?a._getUpdatedItem(e,n.name):void 0,f=(i==null?void 0:i.installed)||(u==null?void 0:u.installed)||(t==="downloaded"?n:void 0),b=(i==null?void 0:i.available)||(u==null?void 0:u.available)||(t==="downloaded"?(o=a._getUpdatedItem(e,n.name))==null?void 0:o.available:n),m=t==="downloaded"?f||n:b||n,y=a._getRatingKey(e,m.name),$=(0,v.cW)(t,a._data.downloadedRatingKeys.has(y),m.ratingAvailable);if(t!=="bazaar"&&$){const P=a._data.ratings.get(y);P?m.rating=P:delete m.rating}const p=(0,v.sV)(t,f,b,n),S=(0,v.gO)(f,b,n),g=b||m;a._setPackageDetail(e,n.name,{installed:f,available:b});const c=g.repoURL.split("/");c.pop();const w=(0,v.CS)(e),h=w.frontends?a._getFrontendLabels(p.frontends,e==="themes"):[],L=w.systems?(0,v.Yw)(p.backends,window.siyuan.languages.all):[],U=w.kernelSystems?(0,v.vW)(p.kernels,window.siyuan.languages.all):[],T=w.modes?(0,v.fl)(p.modes,window.siyuan.languages.themeLight,window.siyuan.languages.themeDark):[],G=f?`<section class="item__meta-section">
    <div class="item__meta-title">${window.siyuan.languages.bazaarInstallInfo}</div>
    ${a._genReadmeMetaRow(window.siyuan.languages.version,`v${f.version}`)}
    ${a._genReadmeMetaRow(window.siyuan.languages.installDate,f.hInstallDate)}
    ${a._genReadmeMetaRow(window.siyuan.languages.installSize,`<span data-type="installed-size">${window.siyuan.languages.loading}</span>`,!0)}
</section>`:"",K=`<section class="item__meta-section">
    <div class="item__meta-title">${window.siyuan.languages.bazaarCompatibility}</div>
    ${a._genReadmeMetaRow(window.siyuan.languages.bazaarMinAppVersion,p.minAppVersion?`v${p.minAppVersion}`:"-")}
    ${w.frontends?a._genReadmeMetaRow(window.siyuan.languages.bazaarPlatforms,h.length?a._genReadmeChips(h,!0):"-",!0):""}
    ${w.systems?a._genReadmeMetaRow(window.siyuan.languages.bazaarSystems,a._genReadmeChips(L,!0),!0):""}
    ${U.length?a._genReadmeMetaRow(window.siyuan.languages.bazaarKernelPlugin,a._genReadmeChips(U,!0),!0):""}
    ${w.disabledInPublish?a._genReadmeMetaRow(window.siyuan.languages.publishService,p.disabledInPublish?window.siyuan.languages.disable:window.siyuan.languages.enable):""}
    ${w.modes?a._genReadmeMetaRow(window.siyuan.languages.appearanceMode,T.length?a._genReadmeChips(T):"-",!0):""}
</section>`,V=b?`<section class="item__meta-section">
    <div class="item__meta-title">${window.siyuan.languages.bazaarMarketInfo}</div>
    ${a._genReadmeMetaRow(window.siyuan.languages.version,`v${b.version}`)}
    ${a._genReadmeMetaRow(window.siyuan.languages.releaseDate,b.hUpdated)}
    ${a._genReadmeMetaRow(window.siyuan.languages.pkgSize,b.hSize)}
    ${(s=b.keywords)!=null&&s.length?a._genReadmeMetaRow(window.siyuan.languages.keywords,a._genReadmeKeywords(b.keywords),!0):""}
</section>`:"",F=b?`<div class="fn__hr"></div>
<div class="fn__flex">
    <svg class="svg ft__on-surface"><use xlink:href="#iconStar"></use></svg>
    <span class="fn__space--small"></span>
    <a href="${(0,_.dc)(g.repoURL)}/stargazers" target="_blank" title="Stars">${H(g.stars)}</a>
    <span class="fn__space"></span>
    <svg class="svg ft__on-surface"><use xlink:href="#iconGitHubI"></use></svg>
    <span class="fn__space--small"></span>
    <a href="${(0,_.dc)(g.repoURL)}/issues" target="_blank" title="Open issues">${H(g.openIssues)}</a>
    <span class="fn__space"></span>
    <svg class="svg ft__on-surface"><use xlink:href="#iconDownload"></use></svg>
    <span class="fn__space--small"></span>
    ${H(g.downloads)}
</div>`:"",I=(0,v.f)(g.funding);I.length===0&&g.preferredFunding&&I.push(g.preferredFunding);const N=`<section class="item__meta-section">
    <div class="item__meta-title">${window.siyuan.languages.bazaarPackageInfo}</div>
    ${a._genReadmeMetaRow(window.siyuan.languages.bazaarPackageName,m.name)}
    ${m.author?a._genReadmeMetaRow(window.siyuan.languages.author,`<a href="${(0,_.dc)(c.join("/"))}" target="_blank" title="${(0,_.dc)(c.join("/"))}">${(0,_.ZD)(m.author)}</a>`,!0):""}
    ${I.length?a._genReadmeMetaRow(window.siyuan.languages.bazaarFunding,I.map(P=>a._genReadmeFundingHTML(P)).join("<br>"),!0):""}
</section>`,X=`<div class="item__header fn__pointer" data-type="goBack">
        <svg class="b3-list-item__graphic"><use xlink:href="#iconLeft"></use></svg>
        <span class="b3-list-item__text ft__breakword">${r[e]}</span>
    </div>`,Q=`<div class="item__actions${(0,k.Fr)()?" item__actions--mobile":""}" data-from="${t}" data-name="${(0,_.dc)(m.name)}" data-package-type="${e}">
        ${a._genReadmeActionsHTML(e,f,b)}
        ${a._genReadmeUpdateButtonHTML(b,e,Boolean(f))}
    </div>`;if(l.innerHTML=`${(0,k.Fr)()?X:""}<div class="item__body"><div class="item__side" data-from="${t}" data-name="${(0,_.dc)(m.name)}" data-package-type="${e}" data-repourl="${(0,_.dc)(g.repoURL)}" data-progress-id="${(0,_.dc)((b==null?void 0:b.repoURL)||g.repoURL)}">
    ${(0,k.Fr)()?"":X}
    <div class="fn__flex-1">
        <img class="item__img" src="${(0,_.dc)(m.iconURL)}" loading="lazy" onerror="this.src='/stage/images/icon.png'">
        <div>
            <span class="item__title">${(0,_.ZD)(m.preferredName)}</span>
        </div>
        <div class="item__meta">
            ${a._genDeprecatedDetailHTML(S,e)}
            ${N}
            ${G}
            ${V}
            ${K}
            <div data-type="rating-detail-slot">${a._genReadmeRatingHTML(e,m,$)}</div>
            <section class="item__meta-section item__resources">
                <div class="item__meta-title">${window.siyuan.languages.bazaarResources}</div>
                <div class="fn__flex">
                    <a href="${(0,_.dc)(g.repoURL)}" target="_blank" title="${(0,_.dc)(g.repoURL)}">GitHub</a>
                    <span class="fn__space"></span>
                    <a href="${(0,_.dc)(g.repoURL)}/issues" target="_blank" title="Feedback via GitHub Issues" data-type="feedback">${window.siyuan.languages.feedback}</a>
                </div>
                ${F}
            </section>
        </div>
        <div class="fn__hr--b"></div>
    </div>
    ${(0,k.Fr)()?"":Q}
</div>
<div class="item__main">
    <div class="item__preview" data-preview-url="${(0,_.dc)(m.previewURL)}" style="background-image: url(${(0,_.dc)(m.previewURL)})"></div>
    <div class="b3-typography${m.preferredDesc?"":" fn__none"}">
        <blockquote>
            <p>
                ${(0,_.ZD)(m.preferredDesc)}
            </p>
         </blockquote>
    </div>
    <div class="item__readme b3-typography b3-typography--default">
        <img data-type="img-loading" style="height: 64px;width: 100%;padding: 16px 0;" src="/stage/loading-pure.svg">
    </div>
</div></div>${(0,k.Fr)()?Q:""}`,t==="downloaded"){const P=l.querySelector(".item__readme");P.innerHTML=window.DOMPurify.sanitize(m.preferredReadme||"",{FORBID_TAGS:["iframe","frame","frameset"]}),(0,j.$)(P)}else(0,R.fetchPost)("/api/bazaar/getBazaarPackageREADME",{repoURL:m.repoURL,repoHash:m.repoHash,packageType:e},P=>{if(!a._isMountCurrent(d))return;const z=l.querySelector(".item__side");if(P.code!==0||(z==null?void 0:z.getAttribute("data-package-type"))!==e||z.getAttribute("data-name")!==m.name)return;const M=l.querySelector(".item__readme");M.innerHTML=window.DOMPurify.sanitize(P.data.html,{FORBID_TAGS:["iframe","frame","frameset"]}),(0,j.$)(M)});const ee=!i&&(t==="downloaded"||t==="bazaar"&&n.installed);f&&!ee&&(0,R.fetchPost)("/api/bazaar/getInstalledPackageSize",{packageType:e,packageName:f.name},P=>{var z;if(!a._isMountCurrent(d))return;const M=l.querySelector(".item__side");if((M==null?void 0:M.getAttribute("data-package-type"))!==e||M.getAttribute("data-name")!==f.name)return;const ae=M.querySelector('[data-type="installed-size"]');ae&&(ae.textContent=P.code===0&&((z=P.data)!=null&&z.hInstallSize)?P.data.hInstallSize:"-")}),l.classList.add("config__view--show"),a._loadReadmeRating(e,m.name,t),ee&&a._fetchPackageDetail(e,n.name,P=>{if(!l.classList.contains("config__view--show"))return;const z=l.querySelector(".item__side");if((z==null?void 0:z.getAttribute("data-from"))!==t||z.getAttribute("data-package-type")!==e||z.getAttribute("data-name")!==n.name)return;const M=t==="downloaded"?P.installed||n:P.available||n;a._renderReadme(e,t,M,P)})},_myType2Type(e){return e.replace("my","").toLowerCase()+"s"},_type2tabType(e){return e.slice(0,-1)},_type2myType(e){const t=a._type2tabType(e);return"my"+t.charAt(0).toUpperCase()+t.slice(1)},_getDownloadedSortStorageKey(e){const t=a._type2tabType(e);return"downloaded"+t.charAt(0).toUpperCase()+t.slice(1)},_getDownloadedSortValue(e){const t=window.siyuan.storage[B.Constants.LOCAL_BAZAAR][a._getDownloadedSortStorageKey(e)]||"0";return e!=="plugins"&&["5","6"].includes(t)?"0":t},_updateDownloadedSortSelect(e){const t=a.element.querySelector('[data-type="downloaded-sort"]');t&&(t.value=a._getDownloadedSortValue(e),t.querySelectorAll('[data-plugin-only="true"]').forEach(n=>{n.hidden=e!=="plugins"}))},_updateDownloadedToolbar(e){var t,n;const i=a.element.querySelector('.config-bazaar__panel[data-type="downloaded"] .config-bazaar__title'),o=e==="update";i==null||i.querySelectorAll(".config-bazaar__filter, .config-bazaar__sort").forEach(s=>{s.classList.toggle("fn__none",o)}),(t=i==null?void 0:i.querySelector('[data-type="plugins-enable"]'))==null||t.classList.toggle("fn__none",e!=="plugins"),o||(n=i==null?void 0:i.querySelector('[data-type="install-all"].b3-button'))==null||n.classList.add("fn__none")},_preserveDownloadedOrder(e){const t=new Map(a._data.downloaded.map((n,i)=>[n.name,i]));return e.map((n,i)=>({item:n,index:i})).sort((n,i)=>{const o=t.get(n.item.name),s=t.get(i.item.name);return o===void 0&&s===void 0?n.index-i.index:o===void 0?1:s===void 0?-1:o-s}).map(n=>n.item)},_sortDownloadedPackages(e,t){const n=e.map((o,s)=>({item:o,index:s})),i=(o,s)=>n.sort((d,l)=>{const r=d.item[o]||0,u=l.item[o]||0;return r<1&&u<1?d.index-l.index:r<1?1:u<1?-1:(s?u-r:r-u)||d.index-l.index}).map(d=>d.item);return t==="1"?i("installTime",!0):t==="2"?i("installTime",!1):t==="3"?i("updateTime",!0):t==="4"?i("updateTime",!1):["5","6"].includes(t)?n.sort((o,s)=>{const d=o.item.enabled?1:0,l=s.item.enabled?1:0;return(t==="5"?l-d:d-l)||o.index-s.index}).map(o=>o.item):[...e]},_reorderDownloadedCards(e){const t=a.element.querySelector("#configBazaarDownloaded"),n=new Map(Array.from(t.children).filter(o=>o.classList.contains("b3-card")).map(o=>[o.getAttribute("data-name"),o])),i=document.createDocumentFragment();e.forEach(o=>{const s=n.get(o.name);s&&i.append(s)}),t.append(i),a._data.downloaded=e},_applyPackageRating(e,t,n,i=!0){const o=a._getRatingKey(e,t);n?a._data.ratings.set(o,n):a._data.ratings.delete(o);const s=l=>{(0,v.TE)(l,t,n)};a._data[e].forEach(s),a._data.downloadedType===e&&(a._data.downloadedDefault.forEach(s),a._data.downloaded.forEach(s)),a._data.update[e].forEach(l=>{s(l.installed),s(l.available)});const d=a._getPackageDetail(e,t);s(d==null?void 0:d.installed),s(d==null?void 0:d.available),i&&a._refreshRatingUI(e,t)},_applyPackageRatingResponse(e,t,n,i=!0){const o=a._getRatingKey(e,t),s=(0,v.Zz)(n);return s.loaded?(a._data.downloadedRatingKeys.add(o),a._applyPackageRating(e,t,s.rating,i)):(a._data.downloadedRatingKeys.delete(o),i&&a._refreshRatingUI(e,t)),s.loaded},_getRatingItem(e,t,n){var i;const o=a._getPackageDetail(e,t);return n==="downloaded"?(o==null?void 0:o.installed)||(a._data.downloadedType===e?a._data.downloaded.find(s=>s.name===t):void 0):n==="updated"?(o==null?void 0:o.available)||((i=a._getUpdatedItem(e,t))==null?void 0:i.available):(o==null?void 0:o.available)||a._data[e].find(s=>s.name===t)},_refreshRatingUI(e,t){var n,i;a._syncRatingUser(),(n=a.element)==null||n.querySelectorAll(`.b3-card[data-package-type="${e}"]`).forEach(r=>{if(r.getAttribute("data-name")!==t)return;const u=r.getAttribute("data-package-source"),f=a._getRatingItem(e,t,u),b=r.querySelector("[data-rating-card-slot]");if(f&&b){const m=a._getRatingKey(e,t),y=(0,v.cW)(u,a._data.downloadedRatingKeys.has(m),f.ratingAvailable);if(u==="bazaar"){const $=y?(0,v.F)(f.rating):void 0;if(b.classList.toggle("fn__none",!$),$){b.setAttribute("aria-label",a._getRatingSummaryText($));const p=b.lastElementChild;p&&(p.textContent=$.average.toLocaleString(void 0,{minimumFractionDigits:1,maximumFractionDigits:1}))}}else{b.classList.toggle("fn__none",!y);const $=a._data.userRatingKeys.has(m)?(0,v.ds)(a._data.userRatings.get(m)):void 0;$!==void 0&&$>0?(b.dataset.userRating=$.toString(),b.setAttribute("aria-label",window.siyuan.languages.bazaarYourRatingValue.replace("${rating}",$.toString()))):(b.removeAttribute("data-user-rating"),b.setAttribute("aria-label",window.siyuan.languages.bazaarRatePackage))}}});const o=(i=a.element)==null?void 0:i.querySelector("#configBazaarReadme.config__view--show .item__side");if((o==null?void 0:o.getAttribute("data-package-type"))!==e||o.getAttribute("data-name")!==t)return;const s=o.getAttribute("data-from"),d=a._getRatingItem(e,t,s),l=o.querySelector('[data-type="rating-detail-slot"]');if(d&&l){const r=a._getRatingKey(e,t),u=(0,v.cW)(s,a._data.downloadedRatingKeys.has(r),d.ratingAvailable),f=s==="bazaar"?d:q(C({},d),{rating:a._data.ratings.get(r)});l.innerHTML=a._genReadmeRatingHTML(e,f,u)}},_loadDownloadedRatings(e,t){const n=t.filter(d=>!d.invalidReason).map(d=>d.name);if(n.length===0)return;const i=(a._data.ratingBatchRequestIDs.get(e)||0)+1;a._data.ratingBatchRequestIDs.set(e,i);const o=new Map(n.map(d=>{const l=a._getRatingKey(e,d);return[d,(0,v.yP)(a._data.ratingMutationVersions,l)]})),s=a._captureMount();(0,R.fetchPost)("/api/bazaar/getBazaarPackageRatings",{packageType:e,packageNames:n},d=>{var l;if(d.code!==0||a._data.ratingBatchRequestIDs.get(e)!==i||!a._isMountCurrent(s)||!((l=a.element)!=null&&l.isConnected))return;const r=(0,v.A4)(n,d.data);r&&r.forEach((u,f)=>{const b=a._getRatingKey(e,f);(0,v.nJ)(a._data.ratingMutationVersions,b,o.get(f)||0)&&a._applyPackageRatingResponse(e,f,u)})})},_loadDownloadedUserRatings(e,t){if(a._syncRatingUser(),!window.siyuan.user)return;const n=a._ratingUserID,i=Array.from(new Set(t.filter(u=>!u.invalidReason).map(u=>u.name))).filter(u=>{const f=a._getRatingKey(e,u);return!a._data.userRatingKeys.has(f)&&!a._data.userRatingLoadingKeys.has(`${n}|${f}`)});if(i.length===0)return;const o=`${n}|${e}|${JSON.stringify(i)}`,s=(a._data.userRatingBatchRequestIDs.get(o)||0)+1;a._data.userRatingBatchRequestIDs.set(o,s);const d=i.map(u=>{const f=`${n}|${a._getRatingKey(e,u)}`;return a._data.userRatingLoadingKeys.add(f),f}),l=new Map(i.map(u=>{const f=a._getRatingKey(e,u);return[u,(0,v.yP)(a._data.ratingMutationVersions,f)]})),r=a._captureMount();(0,R.fetchPost)("/api/bazaar/getBazaarPackageUserRatings",{packageType:e,packageNames:i},u=>{var f;if(a._syncRatingUser(),u.code!==0||n!==a._ratingUserID||a._data.userRatingBatchRequestIDs.get(o)!==s||!a._isMountCurrent(r)||!((f=a.element)!=null&&f.isConnected))return;const b=(0,v.r0)(i,u.data);b&&b.forEach((m,y)=>{const $=a._getRatingKey(e,y);(0,v.nJ)(a._data.ratingMutationVersions,$,l.get(y)||0)&&(a._data.userRatings.set($,m),a._data.userRatingKeys.add($),a._refreshRatingUI(e,y))})}).finally(()=>{d.forEach(u=>a._data.userRatingLoadingKeys.delete(u)),a._data.userRatingBatchRequestIDs.get(o)===s&&a._data.userRatingBatchRequestIDs.delete(o)})},_loadUpdatedRatings(){["plugins","themes","icons","templates","widgets"].forEach(e=>{const t=a._data.update[e],n=t.map(i=>i.installed);t.length&&!t.every(i=>a._data.downloadedRatingKeys.has(a._getRatingKey(e,i.installed.name)))&&a._loadDownloadedRatings(e,n),t.length&&window.siyuan.user&&a._loadDownloadedUserRatings(e,n)})},_fetchPackageRating(e,t,n,i=!0){a._syncRatingUser();const o=a._ratingUserID,s=a._getRatingKey(e,t),d=`${o}|${s}`;a._data.userRatingLoadingKeys.add(d);const l=a._captureMount();let r=!1;(0,R.fetchPost)("/api/bazaar/getBazaarPackageRating",{packageType:e,packageName:t},u=>{if(r=!0,a._syncRatingUser(),o!==a._ratingUserID||!a._isMountCurrent(l))return;if(u.code!==0||!u.data){if(!i){const b=(0,v.MC)(u.data);(0,D.rG)(b?window.siyuan.languages[b]:u.msg||window.siyuan.languages.bazaarRatingFailed)}return}const f=u.data.userRating;if(a._data.userRatings.set(s,(0,v.ds)(f)||0),a._data.userRatingKeys.add(s),!a._applyPackageRatingResponse(e,t,u.data)){i||(0,D.rG)(window.siyuan.languages.bazaarRatingFailed);return}n==null||n()}).finally(()=>{a._data.userRatingLoadingKeys.delete(d),!r&&!i&&o===a._ratingUserID&&(0,D.rG)(window.siyuan.languages.bazaarRatingFailed)})},_loadReadmeRating(e,t,n){var i;a._syncRatingUser();const o=a._getRatingKey(e,t),s=`${a._ratingUserID}|${o}`;(i=a._getRatingItem(e,t,n))!=null&&i.installed&&window.siyuan.user&&!a._data.userRatingKeys.has(o)&&!a._data.userRatingLoadingKeys.has(s)&&a._fetchPackageRating(e,t)},_submitPackageRating(e,t,n,i){a._syncRatingUser();const o=a._captureMount(),s=n===0,d=s?window.siyuan.languages.bazaarRemoveRatingFailed:window.siyuan.languages.bazaarRatingFailed;if((0,v.ds)(n)===void 0){(0,D.rG)(d),i(!1);return}const l=a._ratingUserID,r=a._getRatingKey(e,t),u=`${l}|${r}`;if(!(0,v.Wi)(a._data.userRatingSubmittingKeys,u)){(0,D.rG)(window.siyuan.languages.loading),i(!1);return}const f=(0,v.tI)(a._data.userRatingSubmitRequestIDs,u);let b=!1,m=!1;const y=()=>l===a._ratingUserID&&(0,v.XX)(a._data.userRatingSubmitRequestIDs,u,f),$=p=>{m||(m=!0,i(p))};(0,R.fetchPost)("/api/bazaar/setBazaarPackageRating",{packageType:e,packageName:t,rating:n},p=>{var S,g;if(b=!0,a._syncRatingUser(),!y()){$(!1);return}if(p.code!==0||!p.data){const L=(0,v.MC)(p.data);(0,D.rG)(L?window.siyuan.languages[L]:p.msg||d),$(!1);return}const c=p.data.userRating;a._data.userRatings.set(r,(S=(0,v.ds)(c))!=null?S:n),a._data.userRatingKeys.add(r),(0,v.tI)(a._data.ratingMutationVersions,r);const w=a._isMountCurrent(o);a._applyPackageRatingResponse(e,t,p.data,w);const h=window.siyuan.storage[B.Constants.LOCAL_BAZAAR][a._type2tabType(e)];w&&["4","5"].includes(h)&&a._renderBazaarCards(a.element.querySelector({plugins:"#configBazaarPlugin",themes:"#configBazaarTheme",icons:"#configBazaarIcon",templates:"#configBazaarTemplate",widgets:"#configBazaarWidget"}[e]),a._sortPackages(a._data[e],h),e,e==="themes"?(g=a.element.querySelector("#bazaarSelect"))==null?void 0:g.value:void 0),(0,D.rG)(s?window.siyuan.languages.bazaarRatingRemoved:window.siyuan.languages.bazaarRatingSubmitted),$(!0)}).finally(()=>{a._data.userRatingSubmittingKeys.delete(u),!m&&(a._syncRatingUser(),!b&&y()&&(0,D.rG)(d),$(!1))})},_openRatingDialog(e,t){var n;if(a._syncRatingUser(),!window.siyuan.user){(0,D.rG)(window.siyuan.languages.bazaarRatingLoginTip);return}const i=a._getRatingKey(e,t),o=`${a._ratingUserID}|${i}`;if(a._data.userRatingSubmittingKeys.has(o)){(0,D.rG)(window.siyuan.languages.loading);return}if(!a._data.userRatingKeys.has(i)){const c=`${a._ratingUserID}|${i}`;if(a._data.userRatingLoadingKeys.has(c)){(0,D.rG)(window.siyuan.languages.loading);return}a._fetchPackageRating(e,t,()=>{a._openRatingDialog(e,t)},!1);return}const s=document.activeElement;let d=a._data.userRatings.get(i)||0;const l=(0,v.Km)(d),r=[1,2,3,4,5].map(c=>{const w=window.siyuan.languages.bazaarRatingStarLabel.replace("${star}",c.toString());return`<button type="button" role="radio" data-rating-value="${c}" aria-checked="${d===c}" aria-label="${(0,_.dc)(w)}" tabindex="${d===c||!d&&c===1?"0":"-1"}">
    <svg class="config-bazaar__rating-star config-bazaar__rating-star--outline" aria-hidden="true"><use xlink:href="#iconStar"></use></svg>
</button>`}).join(""),u=new ie.l({title:window.siyuan.languages.bazaarRatePackage,content:`<div class="b3-dialog__content">
    <div class="config-bazaar__rating-picker" role="radiogroup" aria-label="${(0,_.dc)(window.siyuan.languages.bazaarYourRating)}">${r}</div>
</div>
<div class="b3-dialog__action">
    ${l?`<button type="button" class="b3-button b3-button--remove" data-type="rating-remove">${window.siyuan.languages.bazaarRemoveRating}</button><div class="fn__space"></div>`:""}
    <button type="button" class="b3-button b3-button--cancel" data-type="rating-cancel">${window.siyuan.languages.cancel}</button>
    <div class="fn__space"></div>
    <button type="button" class="b3-button b3-button--text" data-type="rating-confirm"${d?"":" disabled"}>${window.siyuan.languages.confirm}</button>
</div>`,width:(0,k.Fr)()?"92vw":"360px",destroyCallback:()=>{s!=null&&s.isConnected&&s.focus({preventScroll:!0})}}),f=u.element.querySelector(".config-bazaar__rating-picker"),b=u.element.querySelector('[data-type="rating-cancel"]'),m=u.element.querySelector('[data-type="rating-confirm"]'),y=u.element.querySelector('[data-type="rating-remove"]');let $=!1;const p=c=>{$=c,f.querySelectorAll("[data-rating-value]").forEach(w=>{w.disabled=c}),y&&(y.disabled=c),b.disabled=c,m.disabled=c||!d},S=c=>{f.querySelectorAll("[data-rating-value]").forEach(w=>{w.classList.toggle("config-bazaar__rating-picker--active",Number(w.dataset.ratingValue)<=c)})},g=(c,w=!1)=>{$||(d=c,S(c),f.querySelectorAll("[data-rating-value]").forEach(h=>{const L=Number(h.dataset.ratingValue);h.setAttribute("aria-checked",(L===c).toString()),h.tabIndex=L===c?0:-1,w&&L===c&&h.focus()}),m.disabled=!1)};d&&g(d),f.addEventListener("click",c=>{const w=c.target.closest("[data-rating-value]");w&&g(Number(w.dataset.ratingValue))}),f.addEventListener("mouseover",c=>{const w=c.target.closest("[data-rating-value]");w&&S(Number(w.dataset.ratingValue))}),f.addEventListener("mouseleave",()=>S(d)),f.addEventListener("keydown",c=>{var w;if(!["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(c.key))return;let h=d||Number((w=c.target.closest("[data-rating-value]"))==null?void 0:w.dataset.ratingValue)||1;["ArrowLeft","ArrowUp"].includes(c.key)?h=h===1?5:h-1:["ArrowRight","ArrowDown"].includes(c.key)?h=h===5?1:h+1:h=c.key==="Home"?1:5,g(h,!0),c.preventDefault()}),b.addEventListener("click",()=>{$||u.destroy()}),y==null||y.addEventListener("click",()=>{$||(p(!0),a._submitPackageRating(e,t,0,c=>{c?u.destroy():p(!1)}))}),m.addEventListener("click",()=>{!d||$||(p(!0),a._submitPackageRating(e,t,d,c=>{c?u.destroy():p(!1)}))}),(n=f.querySelector('[tabindex="0"]'))==null||n.focus({preventScroll:!0})},_refreshReadmeDetail(e,t){const n=a.element.querySelector("#configBazaarReadme.config__view--show .item__side");if((n==null?void 0:n.getAttribute("data-package-type"))!==e||n.getAttribute("data-name")!==t)return;const i=n.getAttribute("data-from"),o=a._getPackageDetail(e,t),s=i==="downloaded"?o==null?void 0:o.installed:o==null?void 0:o.available;s&&a._fetchPackageDetail(e,t,d=>{const l=a.element.querySelector("#configBazaarReadme.config__view--show .item__side");if((l==null?void 0:l.getAttribute("data-from"))!==i||l.getAttribute("data-package-type")!==e||l.getAttribute("data-name")!==t)return;const r=i==="downloaded"?d.installed||s:d.available||s;a._renderReadme(e,i,r,d)})},_reloadBazaarType(e){const t={plugins:"/api/bazaar/getBazaarPlugin",themes:"/api/bazaar/getBazaarTheme",icons:"/api/bazaar/getBazaarIcon",templates:"/api/bazaar/getBazaarTemplate",widgets:"/api/bazaar/getBazaarWidget"},n=a._beginBazaarRequest(e);(0,R.fetchPost)(t[e],{frontend:(0,k.N$)()},i=>{i.code===0&&a._onBazaar(i,e,n)})},_refreshPackageUI(e,t,n){const i=a.element.querySelector("#configBazaarReadme.config__view--show .item__side"),o=(i==null?void 0:i.getAttribute("data-from"))==="downloaded"&&i.getAttribute("data-package-type")===e,s=a._genMyHTML(e,n);e!=="plugins"&&a._reloadBazaarType(e),(!o||!s)&&a._refreshReadmeDetail(e,t)},_updateReadmePluginAction(e,t,n=!1){var i;const o=(i=a.element)==null?void 0:i.querySelector("#configBazaarReadme.config__view--show"),s=o==null?void 0:o.querySelector(".item__side");if((s==null?void 0:s.getAttribute("data-package-type"))!=="plugins"||s.getAttribute("data-name")!==e)return;const d=o.querySelector('.item__actions [data-type="package-enable"], .item__actions [data-type="package-disable"]');d&&(typeof t=="boolean"&&(d.dataset.type=t?"package-disable":"package-enable",d.textContent=window.siyuan.languages[t?"disable":"enable"]),d.toggleAttribute("disabled",n))},_setPluginEnabled(e,t,n,i){if(a._pluginEnablePending.has(t.name)){a._updateReadmePluginAction(t.name,void 0,!0);return}a._pluginEnablePending.add(t.name),a._updateReadmePluginAction(t.name,void 0,!0),(0,R.fetchPost)("/api/petal/setPetalEnabled",{packageName:t.name,enabled:n,app:B.Constants.SIYUAN_APPID},o=>{var s;if(o.code!==0){(0,D.rG)(o.msg),a._pluginEnablePending.delete(t.name),a._updateReadmePluginAction(t.name,t.enabled,!1),i();return}t.enabled=n;const d=(s=a._getPackageDetail("plugins",t.name))==null?void 0:s.installed;d&&(d.enabled=n),a._updateReadmePluginAction(t.name,n,!0);const l=()=>{a._pluginEnablePending.delete(t.name),a._updateReadmePluginAction(t.name,n,!1),i()};if(!n){(0,E.BI)(e,t.name).then(l);return}if(window.siyuan.config.bazaar.petalDisabled){(0,D.rG)(window.siyuan.languages.pluginGlobalDisabledTip),l();return}(0,E.W3)(e,o.data).then(l,r=>{console.error(r),l()})})},_setPluginPublishEnabled(e,t,n){(0,R.fetchPost)("/api/petal/setPetalPublishEnabled",{packageName:e.name,enabled:t},i=>{if(i.code!==0){(0,D.rG)(i.msg),n();return}e.userDisabledInPublish=!t,n()})},_resolveThemeAppearanceMode(e){const t=window.siyuan.config.appearance,n=e.modes||[],i=t.mode;return n.length===0||n.includes(i===0?"light":"dark")?{mode:i,modeOS:t.modeOS}:{mode:n.includes("dark")?1:0,modeOS:!1}},_setAppearancePackage(e,t,n,i){const o=C({},window.siyuan.config.appearance);if(e==="icons")o.icon=n?t.name:"litheness";else if(n){const s=t.modes||[],d=s.length===0?o.mode===0:s.includes("light"),l=s.length===0?o.mode===1:s.includes("dark");d&&(o.themeLight=t.name),l&&(o.themeDark=t.name);const r=a._resolveThemeAppearanceMode(t);o.mode=r.mode,o.modeOS=r.modeOS}else o.themeLight===t.name&&(o.themeLight="daylight"),o.themeDark===t.name&&(o.themeDark="midnight");(0,R.fetchPost)("/api/setting/setAppearance",o,s=>{if(s.code!==0){(0,D.rG)(s.msg),i();return}window.siyuan.config.appearance=s.data,i()})},_initBazaarPanel(e,t,n){if(n.getAttribute("data-init"))return;const i=a._beginBazaarRequest(t);switch(a._type2tabType(t)){case"template":(0,R.fetchPost)("/api/bazaar/getBazaarTemplate",{},o=>{a._onBazaar(o,"templates",i)});break;case"icon":(0,R.fetchPost)("/api/bazaar/getBazaarIcon",{},o=>{a._onBazaar(o,"icons",i)});break;case"widget":(0,R.fetchPost)("/api/bazaar/getBazaarWidget",{},o=>{a._onBazaar(o,"widgets",i)});break;case"theme":(0,R.fetchPost)("/api/bazaar/getBazaarTheme",{frontend:(0,k.N$)()},o=>{a._onBazaar(o,"themes",i)});break;case"plugin":(0,R.fetchPost)("/api/bazaar/getBazaarPlugin",{frontend:(0,k.N$)()},o=>{a._onBazaar(o,"plugins",i)});break}n.setAttribute("data-init","true")},switchBazaarTab(e,t,n){var i;if(!a.element)return;const o=n==="bazaar"?a._type2tabType(t):"downloaded",s=a.element.querySelector(`.layout-tab-bar .item[data-type="${o}"]`),d=a.element.querySelector(".layout-tab-bar .item--focus");if(s&&s!==d&&(d==null||d.classList.remove("item--focus"),s.classList.add("item--focus")),a.element.querySelectorAll(".config-bazaar__panel").forEach(l=>{const u=l.getAttribute("data-type")===o;l.classList.toggle("fn__none",!u),u&&n==="bazaar"&&a._initBazaarPanel(e,t,l)}),n!=="bazaar"){const l=n==="updated"?"myUpdate":a._type2myType(t),r=a.element.querySelector('.config-bazaar__panel[data-type="downloaded"] .config-bazaar__title');r==null||r.querySelectorAll('.b3-button[data-type^="my"]').forEach(u=>{u.classList.toggle("b3-button--outline",u.getAttribute("data-type")!==l)}),(i=a.element.querySelector("#configBazaarDownloaded"))==null||i.removeAttribute("data-loading"),n==="updated"?(a._updateDownloadedToolbar("update"),a._renderUpdatePanel(),a._checkUpdate()):a._genMyHTML(t,e)}},_setLocalPackageUploading(e,t){if(a._localPackageUploading=e,!a._isMountCurrent(t))return;const n=t.element.querySelector('[data-type="install-local-package"]'),i=n==null?void 0:n.querySelector('input[type="file"]');n==null||n.toggleAttribute("disabled",e),i&&(i.disabled=e)},_installLocalPackage(e,t,n,i=!1){if(a._localPackageUploading)return;a._setLocalPackageUploading(!0,n);const o=new FormData;o.append("file",e),o.append("frontend",(0,k.N$)()),o.append("overwrite",i.toString()),(0,R.fetchPost)("/api/bazaar/installLocalBazaarPackage",o,s=>{var d;const l=s.data;if(s.code!==0){(l==null?void 0:l.reason)==="package-exists"&&l.packageName?(0,x.Z)("\u26A0\uFE0F "+window.siyuan.languages.update,window.siyuan.languages.confirmOverwriteLocalBazaarPackage.replace("${name}",(0,_.ZD)(l.packageName)),()=>{a._installLocalPackage(e,t,n,!0)}):(l==null?void 0:l.reason)==="package-incompatible"?(0,D.rG)(l.minAppVersion?window.siyuan.languages.bazaarNeedVersion.replace("${x}",l.minAppVersion):window.siyuan.languages.incompatible):(0,D.rG)((0,_.ZD)(s.msg));return}if(!(l!=null&&l.packageType)||!l.packageName){(0,D.rG)(window.siyuan.languages.uploadError);return}a._data.details.delete(a._getDetailKey(l.packageType,l.packageName)),a._data.update[l.packageType]=a._data.update[l.packageType].filter(r=>r.installed.name!==l.packageName),a._isMountCurrent(n)&&((d=n.element.querySelector("#configBazaarReadme"))==null||d.classList.remove("config__view--show"),a._syncUpdateTabCounter(),a.switchBazaarTab(t,l.packageType,"downloaded")),l.packageType==="plugins"&&!l.updated&&(window.siyuan.config.bazaar.petalDisabled?(0,x.Z)(window.siyuan.languages.confirm,window.siyuan.languages.enablePluginTip2):(0,x.Z)("\u{1F4A1} "+window.siyuan.languages.enablePlugin,window.siyuan.languages.enablePluginTip,()=>{a._setPluginEnabled(t,{name:l.packageName,enabled:!1},!0,()=>{a._isMountCurrent(n)&&a._genMyHTML("plugins",t,!1)})}))}).finally(()=>{const s=a._isMountCurrent(n)?n:a._captureMount();a._setLocalPackageUploading(!1,s)})},_getLocalPackageFile(e){if((e==null?void 0:e.length)!==1||!e[0].name.toLowerCase().endsWith(".zip")){(0,D.rG)(window.siyuan.languages.localBazaarPackageFileError);return}return e[0]},_bindLocalPackageEvent(e,t){const n=t.element.querySelector('[data-type="local-package-file"]');if(n==null||n.addEventListener("change",()=>{const l=a._getLocalPackageFile(n.files);n.value="",l&&a._installLocalPackage(l,e,t)}),(0,k.N$)()==="mobile")return;const i=t.element.firstElementChild,o=i.querySelector(".config-bazaar__drop");let s=0;const d=l=>{var r;return Array.from(((r=l.dataTransfer)==null?void 0:r.types)||[]).includes("Files")};i.addEventListener("dragenter",l=>{d(l)&&(s++,o.classList.remove("fn__none"),l.preventDefault(),l.stopPropagation())}),i.addEventListener("dragover",l=>{d(l)&&(l.dataTransfer.dropEffect="copy",l.preventDefault(),l.stopPropagation())}),i.addEventListener("dragleave",l=>{s!==0&&(s=Math.max(0,s-1),s===0&&o.classList.add("fn__none"),l.stopPropagation())}),i.addEventListener("drop",l=>{if(!d(l))return;s=0,o.classList.add("fn__none"),l.preventDefault(),l.stopPropagation();const r=a._getLocalPackageFile(l.dataTransfer.files);r&&a._installLocalPackage(r,e,t)})},bindEvent(e){if(!window.siyuan.config.bazaar.trust){a.element.querySelector("button").addEventListener("click",()=>{const n=a._captureMount();(0,R.fetchPost)("/api/setting/setBazaar",q(C({},window.siyuan.config.bazaar),{trust:!0,app:B.Constants.SIYUAN_APPID}),i=>{window.siyuan.config.bazaar=i.data,(0,E.ND)(e,null,!1).then(()=>{a._isMountCurrent(n)&&(a.element.innerHTML=a.genHTML(),a.bindEvent(e))}).catch(o=>{console.error(o)})})});return}this._updateState="idle",this._updateRequestID++,this._data.details.clear(),this._syncRatingUser(),this._bindRatingUserChange();const t=this._captureMount();["plugins","themes","icons","templates","widgets"].forEach(n=>{this._data.update[n]=[]}),this._genMyHTML("plugins",e),this._checkUpdate(!0),this._setLocalPackageUploading(this._localPackageUploading,t),this._bindLocalPackageEvent(e,t),a.element.firstElementChild.addEventListener("click",n=>{var i,o;a._syncRatingUser()&&a._refreshVisibleRatingUI();let s=n.target;const d=(0,O.Th)(s,"data-name",null);let l,r,u,f,b;d&&(b=d.getAttribute("data-name")||void 0,l=d.getAttribute("data-package-type"),f=d.getAttribute("data-package-source")||d.getAttribute("data-from"),b&&l&&f==="downloaded"?r=a._data.downloaded.find(p=>p.name===b):b&&l&&f==="updated"?(u=a._getUpdatedItem(l,b),r=u==null?void 0:u.available):b&&l&&f==="bazaar"&&(r=(i=a._data[l])==null?void 0:i.find(p=>p.name===b)));const m=b&&l?a._getPackageDetail(l,b):void 0,y=(m==null?void 0:m.installed)||(u==null?void 0:u.installed)||(f==="downloaded"?r:void 0),$=(m==null?void 0:m.available)||(u==null?void 0:u.available)||(f==="bazaar"?r:void 0);for(;s&&!s.isEqualNode(a.element);){const p=s.getAttribute("data-type");if(s.tagName==="A")break;const S=Boolean(y)||f==="bazaar"&&(r==null?void 0:r.installed)===!0;if(p==="rate-package"&&l&&b&&(0,v.NX)(f,S)){a._openRatingDialog(l,b),n.preventDefault(),n.stopPropagation();break}else if(p==="copy-funding"){const g=s.getAttribute("data-funding");g&&((0,Z.x3)(g),(0,D.rG)(window.siyuan.languages.copied)),n.preventDefault(),n.stopPropagation();break}else if(p==="keywords-expand"){(o=s.parentElement)==null||o.querySelectorAll("[data-keyword-hidden]").forEach(g=>{g.classList.remove("fn__none")}),s.remove(),n.preventDefault(),n.stopPropagation();break}else if(p==="bazaar-alternative"){const g=s.getAttribute("data-package-type"),c=s.getAttribute("data-package-name");g&&c&&a._openBazaarAlternative(g,c),n.preventDefault(),n.stopPropagation();break}else if(p==="open"&&(y||r)&&l){const g=y||r;n.preventDefault(),n.stopPropagation();break}else if(["myTheme","myTemplate","myIcon","myWidget","myPlugin","myUpdate"].includes(p)){const g=a.element.querySelector("#configBazaarDownloaded").getAttribute("data-loading");s.classList.contains("b3-button--outline")&&(p==="myUpdate"||!g)&&(s.parentElement.querySelectorAll('.b3-button[data-type^="my"]').forEach(c=>{c.classList.add("b3-button--outline")}),s.classList.remove("b3-button--outline"),p==="myUpdate"?(a._updateDownloadedToolbar("update"),a._renderUpdatePanel(),a._checkUpdate()):this._genMyHTML(a._myType2Type(p),e)),n.preventDefault(),n.stopPropagation();break}else if(p==="retry-update"){a._checkUpdate(!0),n.preventDefault(),n.stopPropagation();break}else if(p==="goBack"){a.element.querySelector("#configBazaarReadme").classList.remove("config__view--show"),n.preventDefault(),n.stopPropagation();break}else if(p==="install"){n.preventDefault(),n.stopPropagation();const g=$||r;if(!s.classList.contains("b3-button--progress")&&!s.hasAttribute("disabled")&&g&&l){const c={plugins:"/api/bazaar/installBazaarPlugin",themes:"/api/bazaar/installBazaarTheme",icons:"/api/bazaar/installBazaarIcon",templates:"/api/bazaar/installBazaarTemplate",widgets:"/api/bazaar/installBazaarWidget"},w=l==="themes"?a._resolveThemeAppearanceMode(g):{},h=a._beginBazaarRequest(l,t);(0,R.fetchPost)(c[l],q(C({keyword:t.element.querySelector(`.config-bazaar__panel[data-type="${a._type2tabType(l)}"] .b3-text-field`).value,repoURL:g.repoURL,packageName:g.name,repoHash:g.repoHash},w),{frontend:(0,k.N$)()}),L=>{if(a._onBazaar(L,l,h),L.code!==0){a._isBazaarRequestCurrent(l,h)&&a._refreshReadmeDetail(l,g.name);return}a._isMountCurrent(t)&&(a._genMyHTML(l,e,!1),a._refreshReadmeDetail(l,g.name)),l==="plugins"&&(window.siyuan.config.bazaar.petalDisabled?(0,x.Z)(window.siyuan.languages.confirm,window.siyuan.languages.enablePluginTip2):(0,x.Z)("\u{1F4A1} "+window.siyuan.languages.enablePlugin,window.siyuan.languages.enablePluginTip,()=>{a._setPluginEnabled(e,g,!0,()=>{a._isMountCurrent(t)&&(a._genMyHTML(l,e,!1),a._refreshReadmeDetail(l,g.name))})}))})}break}else if(p==="install-all"){(0,x.Z)("\u2B06\uFE0F "+window.siyuan.languages.updateAll,window.siyuan.languages.confirmUpdateAll,()=>{(0,R.fetchPost)("/api/bazaar/batchUpdatePackage",{frontend:(0,k.N$)()},g=>{var c;if(g.code!==0){(0,D.rG)(g.msg);return}a._isMountCurrent(t)&&((c=t.element.querySelector("#configBazaarReadme"))==null||c.classList.remove("config__view--show"),a._checkUpdate(!0))})}),n.preventDefault(),n.stopPropagation();break}else if(p==="feedback"){n.preventDefault(),n.stopPropagation();break}else if(p==="install-t"){const g=(u==null?void 0:u.installed.name)||(r==null?void 0:r.name);!s.classList.contains("b3-button--progress")&&!s.hasAttribute("disabled")&&g&&l&&(0,x.Z)("\u2B06\uFE0F "+window.siyuan.languages.update,window.siyuan.languages.confirmUpdate,()=>{s.classList.contains("b3-button")||s.parentElement.insertAdjacentHTML("afterend",'<img data-type="img-loading" style="position: absolute;top: 0;left: 0;height: 100%;width: 100%;padding: 16px;box-sizing: border-box;" src="/stage/loading-pure.svg">');const c=a._beginBazaarRequest(l,t);(0,R.fetchPost)("/api/bazaar/updateBazaarPackage",{packageType:l,packageName:g,frontend:(0,k.N$)()},w=>{var h,L;if(w.code!==0){(0,D.rG)(w.msg),(h=s.parentElement.parentElement.querySelector("img[data-type='img-loading']"))==null||h.remove();return}a._onBazaar(w,l,c),a._isMountCurrent(t)&&((L=t.element.querySelector("#configBazaarReadme"))==null||L.classList.remove("config__view--show"),this._genMyHTML(l,e),a._checkUpdate(!0))})}),n.preventDefault(),n.stopPropagation();break}else if(p==="uninstall"&&y&&l){n.preventDefault(),n.stopPropagation();const g={plugins:"/api/bazaar/uninstallBazaarPlugin",themes:"/api/bazaar/uninstallBazaarTheme",icons:"/api/bazaar/uninstallBazaarIcon",templates:"/api/bazaar/uninstallBazaarTemplate",widgets:"/api/bazaar/uninstallBazaarWidget"},c=y.name,w=t.element.querySelector(`.config-bazaar__panel[data-type="${a._type2tabType(l)}"] .b3-text-field`).value;(0,x.Z)("\u26A0\uFE0F "+window.siyuan.languages.uninstall,window.siyuan.languages.confirmUninstall.replace("${name}",(0,_.ZD)(c)),()=>{const h=a._beginBazaarRequest(l,t);(0,R.fetchPost)(g[l],{packageName:c,keyword:w,frontend:(0,k.N$)()},L=>{var U;if(L.code!==0){(0,D.rG)(L.msg);return}a._data.details.delete(a._getDetailKey(l,c)),a._onBazaar(L,l,h),a._isMountCurrent(t)&&((U=t.element.querySelector("#configBazaarReadme"))==null||U.classList.remove("config__view--show"),this._genMyHTML(l,e),a._checkUpdate(!0))})});break}else if(p==="switch"&&(y||r)&&l&&["icons","themes"].includes(l)){if(n.preventDefault(),n.stopPropagation(),s.hasAttribute("disabled"))break;const g=y||r;s.setAttribute("disabled","disabled"),a._setAppearancePackage(l,g,!0,()=>{a._isMountCurrent(t)&&a._refreshPackageUI(l,g.name,e)});break}else if(["package-enable","package-disable"].includes(p)&&(y||r)&&l){if(n.preventDefault(),n.stopPropagation(),s.hasAttribute("disabled"))break;const g=p==="package-enable",c=y||r;s.setAttribute("disabled","disabled"),l==="plugins"&&y?a._setPluginEnabled(e,y,g,()=>{a._isMountCurrent(t)&&a._refreshPackageUI(l,y.name,e)}):["icons","themes"].includes(l)&&a._setAppearancePackage(l,c,g,()=>{a._isMountCurrent(t)&&a._refreshPackageUI(l,c.name,e)});break}else if(p==="setting"&&r){if(window.siyuan.config.bazaar.petalDisabled){n.preventDefault(),n.stopPropagation();break}e.plugins.find(g=>{if(g.name===r.name)return g.openSetting(),!0}),n.preventDefault(),n.stopPropagation();break}else if(p==="plugins-enable"){if(!s.getAttribute("disabled")){s.setAttribute("disabled","disabled");const g=e.plugins.map(c=>c.name);window.siyuan.config.bazaar.petalDisabled=!s.checked,(0,R.fetchPost)("/api/setting/setBazaar",q(C({},window.siyuan.config.bazaar),{app:B.Constants.SIYUAN_APPID}),()=>{const c=()=>{a._isMountCurrent(t)&&(s.removeAttribute("disabled"),s.setAttribute("aria-label",window.siyuan.languages[window.siyuan.config.bazaar.petalDisabled?"enable":"disableAll"]))};window.siyuan.config.bazaar.petalDisabled?Promise.all(g.map(w=>(0,E.BI)(e,w))).then(()=>{a._isMountCurrent(t)&&t.element.querySelectorAll("#configBazaarDownloaded .b3-card").forEach(w=>{var h;(h=w.querySelector('[data-type="setting"]'))==null||h.classList.add("fn__none")})}).catch(w=>{console.error(w)}).finally(c):(0,E.ND)(e,null,!1).then(()=>{a._isMountCurrent(t)&&this._genMyHTML("plugins",e,!1)}).catch(w=>{console.error(w)}).finally(c)})}n.stopPropagation();break}else if(p==="plugin-publish-enable-label"){n.stopPropagation();break}else if(p==="plugin-publish-enable"&&y){if(!s.hasAttribute("disabled")){s.setAttribute("disabled","disabled");const g=s.checked;a._setPluginPublishEnabled(y,g,()=>{a._isMountCurrent(t)&&(s.removeAttribute("disabled"),this._genMyHTML("plugins",e,!0))})}n.stopPropagation();break}else if(p==="plugin-enable"&&(y||r)){if(!s.hasAttribute("disabled")){s.setAttribute("disabled","disabled");const g=s.checked,c=y||r;a._setPluginEnabled(e,c,g,()=>{a._isMountCurrent(t)&&(s.removeAttribute("disabled"),this._genMyHTML("plugins",e,!0))})}n.stopPropagation();break}else if(s.classList.contains("b3-card")){!(0,O.KJ)(n.target,"b3-card__actions--right")&&r&&!r.invalidReason&&l&&a._renderReadme(l,f,r),n.preventDefault(),n.stopPropagation();break}else if(s.classList.contains("item")&&!s.classList.contains("item--focus")){a.element.querySelector(".layout-tab-bar .item--focus").classList.remove("item--focus"),s.classList.add("item--focus"),a.element.querySelectorAll(".config-bazaar__panel").forEach(g=>{p===g.getAttribute("data-type")?(g.classList.remove("fn__none"),p!=="downloaded"&&a._initBazaarPanel(e,p+"s",g)):g.classList.add("fn__none")}),n.preventDefault(),n.stopPropagation();break}else if(s.classList.contains("item__preview")){if((0,k.Fr)()){const g=s.dataset.previewUrl;g&&(0,se.z1)([g],g)}else s.classList.toggle("item__preview--fullscreen");n.preventDefault(),n.stopPropagation();break}s=s.parentElement}}),a.element.querySelectorAll(".config-bazaar__panel .b3-text-field").forEach(n=>{n.addEventListener("keydown",i=>{var o,s;if(!i.isComposing&&i.key==="Enter"){const d=n.value.trim(),l=(0,O.KJ)(n,"config-bazaar__panel").getAttribute("data-type");if(l==="template"){const r=a._beginBazaarRequest("templates",t);(0,R.fetchPost)("/api/bazaar/getBazaarTemplate",{keyword:d},u=>{a._onBazaar(u,"templates",r)})}else if(l==="icon"){const r=a._beginBazaarRequest("icons",t);(0,R.fetchPost)("/api/bazaar/getBazaarIcon",{keyword:d},u=>{a._onBazaar(u,"icons",r)})}else if(l==="widget"){const r=a._beginBazaarRequest("widgets",t);(0,R.fetchPost)("/api/bazaar/getBazaarWidget",{keyword:d},u=>{a._onBazaar(u,"widgets",r)})}else if(l==="theme"){const r=a._beginBazaarRequest("themes",t);(0,R.fetchPost)("/api/bazaar/getBazaarTheme",{frontend:(0,k.N$)(),keyword:d},u=>{a._onBazaar(u,"themes",r)})}else if(l==="plugin"){const r=a._beginBazaarRequest("plugins",t);(0,R.fetchPost)("/api/bazaar/getBazaarPlugin",{frontend:(0,k.N$)(),keyword:d},u=>{a._onBazaar(u,"plugins",r)})}else if(l==="downloaded"){const r=(s=(o=n.closest(".config-bazaar__title"))==null?void 0:o.querySelector('.b3-button[data-type^="my"]:not(.b3-button--outline)'))==null?void 0:s.getAttribute("data-type");r&&r!=="myUpdate"&&this._genMyHTML(a._myType2Type(r),e)}i.preventDefault();return}})}),a.element.querySelectorAll(".b3-select").forEach(n=>{n.addEventListener("change",()=>{var i,o;if(n.getAttribute("data-type")==="downloaded-sort"){const s=(o=(i=a.element.querySelector("#configBazaarDownloaded"))==null?void 0:i.previousElementSibling)==null?void 0:o.querySelector('.b3-button[data-type^="my"]:not(.b3-button--outline)');if((s==null?void 0:s.getAttribute("data-type"))==="myUpdate")return;const d=a._myType2Type(s.getAttribute("data-type"));window.siyuan.storage[B.Constants.LOCAL_BAZAAR][a._getDownloadedSortStorageKey(d)]=n.value,(0,Z.XI)(B.Constants.LOCAL_BAZAAR,window.siyuan.storage[B.Constants.LOCAL_BAZAAR]),a._reorderDownloadedCards(a._sortDownloadedPackages(a._data.downloadedDefault,n.value))}else if(n.id==="bazaarSelect")a._renderBazaarCards(a.element.querySelector("#configBazaarTheme"),a._data.themes,"themes",n.value);else{const s=n.parentElement.parentElement,d=s.getAttribute("data-type"),l={plugin:"plugins",theme:"themes",icon:"icons",template:"templates",widget:"widgets"}[d];a._renderBazaarCards(s.querySelector(".config-bazaar__content"),a._sortPackages(a._data[l],n.value),l,l==="themes"?a.element.querySelector("#bazaarSelect").value:void 0),window.siyuan.storage[B.Constants.LOCAL_BAZAAR][d]=n.value,(0,Z.XI)(B.Constants.LOCAL_BAZAAR,window.siyuan.storage[B.Constants.LOCAL_BAZAAR])}})})},_sortPackages(e,t){const n=[...e];return t==="0"?n.sort((i,o)=>o.updated<i.updated?-1:1):t==="1"?n.sort((i,o)=>o.updated<i.updated?1:-1):t==="2"?n.sort((i,o)=>o.downloads<i.downloads?-1:1):t==="3"?n.sort((i,o)=>o.downloads<i.downloads?1:-1):["4","5"].includes(t)?(0,v.bk)(n,t==="4"):n},_renderBazaarCards(e,t,n,i){var o,s;const d=[];for(const r of t)n==="themes"&&i&&i!=="2"&&(i==="0"&&((o=r.modes)!=null&&o.includes("dark"))||i==="1"&&((s=r.modes)!=null&&s.includes("light")))||d.push(a._genCardHTML(r,n));const l=d.join("");e.innerHTML=`<div class="b3-cards${l?"":" b3-cards--nowrap"}">${l||`<ul class="b3-list b3-list--background"><li class="b3-list--empty">${window.siyuan.languages.emptyContent}</li></ul>`}</div>`,e.parentElement.querySelector(".counter").textContent=d.length.toString()},_onBazaar(e,t,n){var i;if(!a._isBazaarRequestCurrent(t,n))return;const o={plugins:"#configBazaarPlugin",themes:"#configBazaarTheme",icons:"#configBazaarIcon",templates:"#configBazaarTemplate",widgets:"#configBazaarWidget"},s=a.element.querySelector(o[t]);if(!s)return;if(e.code===1){(0,D.rG)(e.msg),s.querySelectorAll("img[data-type='img-loading']").forEach(r=>{r.remove()});return}a._data[t]=e.data.packages,a._cacheBazaarDeprecations(t,e.data.packages);const d=window.siyuan.storage[B.Constants.LOCAL_BAZAAR][a._type2tabType(t)],l=d&&d!=="0"?a._sortPackages(e.data.packages,d):e.data.packages;a._renderBazaarCards(s,l,t,t==="themes"?(i=a.element.querySelector("#bazaarSelect"))==null?void 0:i.value:void 0)}}}}]);})();
