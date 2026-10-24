/*
 * Copyright (c) 2026 Alsk. All rights reserved.
 */
"use strict";(function(){const e=window.__docToolNavFold;if(!e)return;const d=t=>{const o=t.dataset.nav,n=t.getAttribute("aria-expanded")==="true";e.apply(t,n),n?e.folded.add(o):e.folded.delete(o),e.write(e.folded)};for(const t of e.toggles){const o=t.closest(".nav-section-head");o&&o.addEventListener("click",n=>{n.preventDefault(),d(t)})}})();
