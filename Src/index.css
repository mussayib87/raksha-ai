@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Space+Grotesk:wght@500;600;700&display=swap");

:root {
  font-family: "Inter", sans-serif;
  color: #f5f7fa;
  background: #030508;
  font-synthesis: none;
  text-rendering: optimizeLegibility;

  --bg: #030508;
  --panel: #080d13;
  --panel-2: #0b1119;
  --border: rgba(255, 255, 255, 0.09);

  --red: #ff2935;
  --red-bright: #ff3d45;
  --orange: #ff8b27;
  --green: #35e6a1;
  --blue: #36b7ff;
  --yellow: #ffc62e;

  --text: #f5f7fa;
  --muted: #8b96a5;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-width: 320px;
  background: var(--bg);
}

button,
a {
  font: inherit;
}

button {
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
}

.app {
  min-height: 100vh;
  overflow: hidden;
  position: relative;
  background:
    radial-gradient(
      circle at 75% 20%,
      rgba(255, 30, 42, 0.07),
      transparent 30%
    ),
    radial-gradient(
      circle at 25% 70%,
      rgba(30, 90, 150, 0.06),
      transparent 35%
    ),
    #030508;
}

.background-grid {
  position: fixed;
  inset: 0;
  pointer-events: none;
  opacity: 0.13;
  background-image:
    linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px);
  background-size: 70px 70px;
  mask-image: linear-gradient(to bottom, black, transparent 80%);
}

/* NAVBAR */

.navbar {
  width: min(1460px, calc(100% - 70px));
  margin: auto;
  height: 92px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;
  z-index: 20;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo-shield {
  position: relative;
  width: 43px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--red);
}

.logo-name {
  font-family: "Space Grotesk", sans-serif;
  font-size: 22px;
  font-weight: 700;
  letter-spacing: -0.8px;
}

.logo-name span {
  color: var(--red);
}

.logo-tagline {
  margin-top: 1px;
  color: #87919e;
  font-size: 7px;
  letter-spacing: 1.3px;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 35px;
}

.nav-links a {
  position: relative;
  color: #b8c0ca;
  font-size: 14px;
  transition: color .25s ease;
}

.nav-links a:hover,
.nav-links a.active {
  color: white;
}

.nav-links a.active::after {
  content: "";
  position: absolute;
  height: 2px;
  width: 100%;
  bottom: -12px;
  left: 0;
  background: var(--red);
  box-shadow: 0 0 12px rgba(255, 41, 53, .8);
}

.command-button {
  display: flex;
  align-items: center;
  gap: 10px;

  padding: 13px 21px;
  color: white;
  background: transparent;

  border: 1px solid var(--red);
  border-radius: 7px;

  font-size: 12px;
  font-weight: 700;
  letter-spacing: .3px;

  transition: .25s ease;
}

.command-button:hover {
  background: var(--red);
  box-shadow: 0 0 30px rgba(255, 41, 53, .25);
}

.mobile-menu {
  display: none;
  color: white;
  background: none;
  border: 0;
}

/* HERO */

.hero {
  width: min(1460px, calc(100% - 70px));
  margin: 0 auto;

  min-height: 610px;

  display: grid;
  grid-template-columns: 0.85fr 1.35fr;
  gap: 55px;

  align-items: center;

  position: relative;
  z-index: 2;
}

.hero-copy {
  position: relative;
  padding-top: 30px;
}

.eyebrow,
.section-kicker {
  color: #c4ccd5;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1.4px;
}

.eyebrow {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 24px;
}

.pulse-dot {
  width: 8px;
  height: 8px;
  background: var(--red);
  border-radius: 50%;
  box-shadow: 0 0 0 5px rgba(255, 41, 53, .08),
    0 0 15px var(--red);

  animation: pulse 1.8s infinite;
}

@keyframes pulse {
  50% {
    box-shadow:
      0 0 0 9px rgba(255, 41, 53, .02),
      0 0 25px var(--red);
  }
}

.hero h1 {
  max-width: 680px;

  margin: 0;

  font-family: "Space Grotesk", sans-serif;
  font-size: clamp(46px, 4.1vw, 73px);
  line-height: 1.03;
  letter-spacing: -3px;
}

.red-text {
  color: var(--red);
  text-shadow: 0 0 35px rgba(255, 41, 53, .13);
}

.hero-description {
  max-width: 570px;

  margin: 27px 0 30px;

  color: #9ca6b3;
  font-size: 16px;
  line-height: 1.75;
}

.hero-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.primary-button,
.secondary-button {
  height: 51px;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  border-radius: 6px;

  font-size: 12px;
  font-weight: 800;
  letter-spacing: .2px;

  transition: .25s ease;
}

.primary-button {
  border: 1px solid var(--red);
  color: white;
  padding: 0 22px;
  background: linear-gradient(
    135deg,
    #ff2633,
    #e61524
  );

  box-shadow:
    0 12px 35px rgba(255, 41, 53, .17),
    inset 0 1px rgba(255,255,255,.15);
}

.primary-button:hover {
  transform: translateY(-2px);
  box-shadow:
    0 15px 45px rgba(255, 41, 53, .3);
}

.secondary-button {
  padding: 0 20px;
  color: #dce2e9;
  border: 1px solid #33404d;
  background: rgba(10, 15, 21, .7);
}

.secondary-button:hover {
  border-color: #657281;
  background: #0d141c;
}

.hero-features {
  display: flex;
  gap: 22px;
  flex-wrap: wrap;

  margin-top: 29px;
}

.hero-features span {
  display: flex;
  align-items: center;
  gap: 7px;

  color: #788391;
  font-size: 10px;
}

.hero-features svg {
  color: #b9c4cf;
}

.city-silhouette {
  position: absolute;

  width: 100%;
  height: 125px;

  left: -30px;
  bottom: -30px;

  display: flex;
  align-items: flex-end;
  gap: 4px;

  opacity: .3;
  mask-image: linear-gradient(to top, black, transparent);
}

.building {
  background: linear-gradient(to top, #111d28, transparent);
  width: 45px;
}

.b1 { height: 40px; }
.b2 { height: 75px; width: 35px; }
.b3 { height: 105px; width: 52px; }
.b4 { height: 55px; width: 28px; }
.b5 { height: 90px; width: 45px; }
.b6 { height: 120px; width: 32px; }
.b7 { height: 65px; width: 58px; }
.b8 { height: 100px; width: 40px; }

/* COMMAND CENTER */

.command-preview {
  height: 570px;

  overflow: hidden;

  border: 1px solid rgba(133, 159, 183, .2);
  border-radius: 11px;

  background: rgba(7, 12, 18, .95);

  box-shadow:
    0 35px 100px rgba(0, 0, 0, .5),
    0 0 80px rgba(26, 90, 130, .07);

  position: relative;

  animation: float 7s ease-in-out infinite;
}

@keyframes float {
  50% {
    transform: translateY(-6px);
  }
}

.command-top {
  height: 57px;

  display: flex;
  align-items: center;
  gap: 19px;

  padding: 0 16px;

  border-bottom: 1px solid var(--border);
}

.mini-brand {
  display: flex;
  align-items: center;
  gap: 6px;

  font-family: "Space Grotesk", sans-serif;
  font-weight: 700;
  font-size: 14px;
}

.mini-brand svg {
  color: var(--red);
}

.mini-brand span {
  color: var(--red);
}

.live-command {
  display: flex;
  align-items: center;
  gap: 8px;

  color: #e3e8ed;

  font-size: 11px;
  font-weight: 700;
}

.live-command span,
.live-label {
  display: flex;
  align-items: center;
  gap: 5px;

  color: #50e5a4;

  font-size: 8px;
  padding: 3px 7px;

  background: rgba(53, 230, 161, .07);
  border: 1px solid rgba(53, 230, 161, .2);
  border-radius: 4px;
}

.live-command i,
.live-label span {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #35e6a1;
}

.location {
  margin-left: auto;

  display: flex;
  align-items: center;
  gap: 6px;

  padding: 7px 10px;

  color: #c1c9d1;
  font-size: 9px;

  border: 1px solid #263543;
  border-radius: 5px;
}

.location svg:first-child {
  color: var(--orange);
}

.top-icon {
  color: #8995a3;
}

.command-body {
  height: calc(100% - 57px);
  display: grid;
  grid-template-columns: 112px 1fr 190px;
}

.command-sidebar {
  border-right: 1px solid var(--border);
  padding-top: 14px;
}

.side-item {
  height: 41px;

  display: flex;
  align-items: center;
  gap: 10px;

  padding: 0 14px;

  color: #788391;
  font-size: 9px;
}

.side-item svg {
  width: 15px;
  height: 15px;
}

.side-item.active {
  margin: 0 7px;
  padding-left: 8px;

  border-radius: 5px;

  color: var(--red);

  background: rgba(255, 41, 53, .1);
}

.command-main {
  min-width: 0;
  padding: 12px;
}

.stat-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  margin-bottom: 10px;
}

.command-stat {
  min-height: 73px;

  padding: 10px;

  display: flex;
  justify-content: space-between;

  border: 1px solid #26323d;
  border-radius: 7px;

  background: #080e15;
}

.command-stat strong {
  display: block;
  font-family: "Space Grotesk", sans-serif;
  font-size: 20px;
}

.command-stat span {
  display: block;
  margin-top: 1px;
  color: #85909d;
  font-size: 8px;
}

.command-stat small {
  display: block;
  margin-top: 7px;
  font-size: 7px;
  color: #4ec99c;
}

.command-stat svg {
  width: 21px;
  color: #ff5a61;
}

.command-stat.warning svg {
  color: var(--orange);
}

.command-stat.safe svg {
  color: var(--yellow);
}

.command-stat.time svg {
  color: var(--blue);
}

.map-area {
  position: relative;
  height: calc(100% - 83px);
  overflow: hidden;
  border: 1px solid #26323d;
  border-radius: 7px;
}

.map-background {
  position: absolute;
  inset: 0;

  overflow: hidden;

  background:
    radial-gradient(circle at 55% 48%, rgba(12, 82, 103, .2), transparent 24%),
    #071018;
}

.map-grid-lines {
  position: absolute;
  inset: 0;
  opacity: .3;

  background-image:
    linear-gradient(rgba(31, 92, 111, .2) 1px, transparent 1px),
    linear-gradient(90deg, rgba(31, 92, 111, .2) 1px, transparent 1px);

  background-size: 32px 32px;
}

.map-river {
  position: absolute;

  width: 55%;
  height: 140%;

  left: 34%;
  top: -20%;

  transform: rotate(27deg);

  border-radius: 50%;

  border-left: 7px solid rgba(20, 111, 142, .45);
  filter: blur(1px);
}

.road {
  position: absolute;
  height: 2px;
  width: 120%;
  background: rgba(89, 109, 120, .35);
}

.road-1 {
  left: -10%;
  top: 25%;
  transform: rotate(20deg);
}

.road-2 {
  left: -10%;
  top: 65%;
  transform: rotate(-15deg);
}

.road-3 {
  left: -5%;
  top: 48%;
  transform: rotate(3deg);
}

.road-4 {
  left: 20%;
  top: 30%;
  transform: rotate(78deg);
}

.road-5 {
  left: 50%;
  top: 10%;
  transform: rotate(60deg);
}

.incident-marker {
  position: absolute;

  width: 33px;
  height: 33px;

  transform: translate(-50%, -50%);

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;

  color: white;

  z-index: 3;
}

.incident-marker::before {
  content: "";
  position: absolute;
  inset: -9px;

  border: 1px solid currentColor;
  border-radius: 50%;
  opacity: .35;

  animation: markerPulse 2.3s infinite;
}

.marker-pulse {
  position: absolute;
  inset: 4px;

  border-radius: 50%;
  background: currentColor;
  opacity: .16;
}

.incident-marker svg {
  position: relative;
  z-index: 2;
}

.incident-marker.fire {
  color: var(--red);
  background: rgba(255, 41, 53, .18);
  border: 1px solid rgba(255, 41, 53, .6);
}

.incident-marker.flood {
  color: var(--blue);
  background: rgba(54, 183, 255, .16);
  border: 1px solid rgba(54, 183, 255, .6);
}

.incident-marker.warning {
  color: var(--orange);
  background: rgba(255, 139, 39, .15);
  border: 1px solid rgba(255, 139, 39, .6);
}

.incident-marker.safe {
  color: var(--green);
  background: rgba(53, 230, 161, .14);
  border: 1px solid rgba(53, 230, 161, .5);
}

@keyframes markerPulse {
  50% {
    transform: scale(1.45);
    opacity: .05;
  }
}

.map-legend,
.resources {
  position: absolute;
  z-index: 5;

  left: 10px;

  padding: 10px;

  min-width: 78px;

  border: 1px solid rgba(105, 131, 151, .2);
  border-radius: 6px;

  background: rgba(5, 10, 15, .86);
  backdrop-filter: blur(8px);

  font-size: 8px;
}

.map-legend {
  top: 10px;
}

.resources {
  bottom: 10px;
}

.map-legend > span,
.resources > span {
  display: block;
  margin-bottom: 8px;

  color: #8793a0;
  font-size: 7px;
  font-weight: 700;
}

.legend-item,
.resource-item {
  display: flex;
  align-items: center;
  gap: 6px;

  color: #aeb7c1;

  margin: 5px 0;
}

.legend-item i {
  width: 6px;
  height: 6px;
  border-radius: 50%;
}

.legend-item i.critical {
  background: var(--red);
}

.legend-item i.high {
  background: var(--orange);
}

.legend-item i.medium {
  background: var(--yellow);
}

.legend-item i.low {
  background: var(--green);
}

.resource-item svg {
  width: 11px;
  color: var(--green);
}

.map-controls {
  position: absolute;
  z-index: 5;

  right: 10px;
  bottom: 10px;

  display: flex;
  flex-direction: column;
}

.map-controls button {
  width: 28px;
  height: 28px;

  color: #aeb8c3;

  border: 1px solid #263641;
  background: rgba(5, 10, 15, .88);

  font-size: 15px;
}

.command-right {
  padding: 13px;
  border-left: 1px solid var(--border);
  overflow: hidden;
}

.analysis-header,
.recent-header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: #8894a1;
  font-size: 8px;
  font-weight: 700;
}

.analysis-header b {
  padding: 4px 7px;

  color: var(--red);

  border: 1px solid rgba(255, 41, 53, .4);
  border-radius: 4px;

  font-size: 7px;
}

.analysis-icon {
  width: 37px;
  height: 37px;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 16px;

  color: var(--red);

  background: rgba(255, 41, 53, .09);
  border: 1px solid rgba(255, 41, 53, .25);

  border-radius: 8px;
}

.command-right h3 {
  margin: 11px 0 3px;

  font-size: 12px;
}

.analysis-location {
  margin: 0;

  color: #778391;
  font-size: 8px;
}

.analysis-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;

  margin-top: 17px;

  gap: 7px;
}

.analysis-grid div {
  padding: 8px;

  border: 1px solid #27333e;
  border-radius: 5px;
}

.analysis-grid span,
.eta span {
  display: block;

  color: #6e7b88;
  font-size: 6px;
}

.analysis-grid strong {
  display: block;
  margin-top: 5px;
  font-size: 10px;
}

.eta {
  display: flex;
  justify-content: space-between;

  margin: 11px 0;

  padding: 9px;

  border: 1px solid #26333e;
  border-radius: 5px;
}

.eta strong {
  color: var(--orange);
  font-size: 8px;
}

.details-button {
  width: 100%;
  height: 28px;

  color: #b8c1cb;

  background: transparent;
  border: 1px solid #35424e;
  border-radius: 4px;

  font-size: 7px;
  font-weight: 700;
}

.recent-alerts {
  margin-top: 22px;
}

.recent-header small {
  color: #65717e;
  font-size: 7px;
}

.alert-row {
  display: grid;
  grid-template-columns: 24px 1fr auto;

  align-items: center;

  gap: 7px;

  margin-top: 12px;
}

.alert-icon {
  width: 23px;
  height: 23px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 5px;

  background: #111b24;
  color: var(--orange);
}

.alert-icon svg {
  width: 12px;
}

.alert-row strong {
  display: block;
  font-size: 8px;
}

.alert-row span {
  display: block;
  margin-top: 2px;

  color: #687583;
  font-size: 7px;
}

.alert-row small {
  color: #687583;
  font-size: 6px;
}

/* METRICS */

.metrics {
  width: min(1460px, calc(100% - 70px));

  margin: 0 auto;

  min-height: 115px;

  display: grid;
  grid-template-columns: repeat(4, 1fr);

  border: 1px solid rgba(125, 149, 170, .25);
  border-radius: 10px;

  background: rgba(7, 12, 18, .86);

  position: relative;
  z-index: 4;

  backdrop-filter: blur(15px);
}

.metric {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;

  position: relative;
}

.metric + .metric::before {
  content: "";
  position: absolute;

  left: 0;
  height: 45px;
  width: 1px;

  background: #25313c;
}

.metric-icon {
  width: 48px;
  height: 48px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid currentColor;
  border-radius: 11px;
}

.metric-icon svg {
  width: 22px;
}

.metric strong {
  display: block;

  font-family: "Space Grotesk", sans-serif;
  font-size: 28px;
}

.metric strong small {
  margin-left: 5px;
  font-size: 13px;
}

.metric span {
  display: block;
  margin-top: 2px;
  color: #7d8996;
  font-size: 10px;
}

.metric.red {
  color: #ff515a;
}

.metric.orange {
  color: var(--orange);
}

.metric.green {
  color: var(--green);
}

.metric.blue {
  color: #6a8cff;
}

/* WORKFLOW */

.workflow-section {
  width: min(1460px, calc(100% - 70px));

  margin: 100px auto 0;

  text-align: center;
}

.section-heading {
  max-width: 700px;
  margin: auto;
}

.section-kicker {
  color: #87929f;
}

.section-heading h2,
.solution-section h2,
.cta-section h2 {
  margin: 13px 0;

  font-family: "Space Grotesk", sans-serif;

  font-size: clamp(34px, 4vw, 52px);
  line-height: 1.08;
  letter-spacing: -2px;
}

.section-heading h2 span,
.solution-section h2 span,
.cta-section h2 span {
  color: var(--red);
}

.section-heading p,
.solution-section > div > p,
.cta-section p {
  color: #7f8b98;
  font-size: 14px;
  line-height: 1.7;
}

.workflow {
  margin-top: 60px;

  display: grid;
  grid-template-columns: repeat(7, 1fr);

  gap: 15px;
}

.workflow-item {
  position: relative;
}

.workflow-icon {
  width: 57px;
  height: 57px;

  margin: auto;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #ff5861;

  border: 1px solid rgba(255, 41, 53, .5);
  border-radius: 50%;

  background: rgba(255, 41, 53, .04);

  box-shadow: 0 0 25px rgba(255, 41, 53, .05);
}

.workflow-number {
  margin-top: 8px;

  color: #414c58;
  font-size: 8px;
  font-weight: 700;
}

.workflow-item h3 {
  margin: 8px 0 5px;

  color: #e8edf2;
  font-size: 10px;
  letter-spacing: .4px;
}

.workflow-item p {
  margin: 0 auto;

  max-width: 125px;

  color: #697582;
  font-size: 8px;
  line-height: 1.5;
}

.workflow-arrow {
  position: absolute;

  right: -20px;
  top: 18px;

  color: #3c4650;
}

/* SOLUTION */

.solution-section {
  width: min(1180px, calc(100% - 70px));

  margin: 130px auto;

  display: grid;
  grid-template-columns: 1fr 400px;

  gap: 100px;

  align-items: center;
}

.solution-section > div > p {
  max-width: 600px;
}

.solution-list {
  margin-top: 35px;

  display: grid;
  gap: 17px;
}

.solution-list > div {
  display: flex;
  align-items: center;
  gap: 14px;
}

.solution-list svg {
  width: 21px;
  color: var(--red);
}

.solution-list span {
  display: grid;
  gap: 3px;
}

.solution-list strong {
  font-size: 13px;
}

.solution-list small {
  color: #697581;
  font-size: 10px;
}

.risk-card {
  padding: 25px;

  border: 1px solid #26343f;
  border-radius: 12px;

  background:
    radial-gradient(circle at 90% 0%, rgba(255, 41, 53, .1), transparent 35%),
    #080e14;

  box-shadow: 0 25px 70px rgba(0,0,0,.35);
}

.risk-card-header {
  display: flex;
  justify-content: space-between;

  color: #8b96a2;

  font-size: 9px;
  font-weight: 700;
  letter-spacing: 1px;
}

.risk-score {
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 35px 0;
}

.risk-score small {
  display: block;
  color: #697682;
  font-size: 8px;
}

.risk-score strong {
  font-family: "Space Grotesk";
  font-size: 64px;
  line-height: 1;
}

.risk-score > div > span {
  color: #5e6975;
  font-size: 14px;
}

.risk-ring {
  width: 90px;
  height: 90px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 7px solid #2b1c20;
  border-top-color: var(--red);
  border-right-color: var(--orange);

  border-radius: 50%;
}

.risk-ring div {
  display: grid;
  justify-items: center;
  gap: 2px;

  color: var(--red);
}

.risk-ring span {
  font-size: 7px;
  font-weight: 800;
}

.risk-bars {
  display: grid;
  gap: 17px;
}

.risk-bar > div:first-child {
  display: flex;
  justify-content: space-between;

  color: #8b96a1;
  font-size: 9px;
}

.risk-bar strong {
  color: #cbd2d9;
}

.bar {
  height: 4px;

  margin-top: 7px;

  background: #18212a;
  border-radius: 10px;

  overflow: hidden;
}

.bar i {
  display: block;
  height: 100%;

  background: linear-gradient(
    90deg,
    var(--red),
    var(--orange)
  );

  border-radius: inherit;
}

/* CTA */


.cta-section {
  width: min(1100px, calc(100% - 70px));

  margin: 0 auto 130px;

  text-align: center;

  padding: 90px 30px;

  position: relative;

  border: 1px solid rgba(255, 41, 53, .15);
  border-radius: 18px;

  background:
    radial-gradient(
      circle at center,
      rgba(255, 41, 53, .09),
      transparent 55%
    ),
    #070b10;

  overflow: hidden;
}

.cta-glow {
  position: absolute;

  width: 400px;
  height: 400px;

  left: 50%;
  top: 50%;

  transform: translate(-50%, -50%);

  background: rgba(255, 41, 53, .05);

  filter: blur(90px);

  pointer-events: none;
}

.cta-section > * {
  position: relative;
  z-index: 2;
}

.cta-section p {
  max-width: 600px;
  margin: 0 auto 28px;
}

.large {
  min-width: 220px;
}

/* FOOTER */

footer {
  width: min(1460px, calc(100% - 70px));

  margin: auto;

  padding: 35px 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-top: 1px solid #18212a;
}

footer > div {
  display: flex;
  gap: 30px;

  color: #505b66;
  font-size: 8px;
  letter-spacing: .7px;
}

/* RESPONSIVE */

@media (max-width: 1200px) {
  .hero {
    grid-template-columns: 1fr;
  }

  .hero-copy {
    text-align: center;
  }

  .eyebrow,
  .hero-actions,
  .hero-features {
    justify-content: center;
  }

  .hero-description {
    margin-left: auto;
    margin-right: auto;
  }

  .command-preview {
    width: 100%;
  }

  .workflow {
    grid-template-columns: repeat(4, 1fr);
    row-gap: 45px;
  }

  .workflow-arrow {
    display: none;
  }

  .solution-section {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 900px) {
  .navbar,
  .hero,
  .metrics,
  .workflow-section,
  .solution-section,
  footer {
    width: min(100% - 35px, 700px);
  }

  .desktop-command {
    display: none;
  }

  .mobile-menu {
    display: block;
  }

  .nav-links {
    position: absolute;

    top: 75px;
    left: 0;
    right: 0;

    padding: 18px;

    display: none;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;

    background: rgba(7, 11, 16, .97);

    border: 1px solid var(--border);
    border-radius: 9px;

    backdrop-filter: blur(15px);
  }

  .nav-links.mobile-open {
    display: flex;
  }

  .nav-links a.active::after {
    display: none;
  }

  .command-body {
    grid-template-columns: 90px 1fr;
  }

  .command-right {
    display: none;
  }

  .metrics {
    grid-template-columns: repeat(2, 1fr);
  }

  .metric:nth-child(3)::before {
    display: none;
  }
}

@media (max-width: 650px) {
  .navbar,
  .hero,
  .metrics,
  .workflow-section,
  .solution-section,
  footer,
  .cta-section {
    width: calc(100% - 24px);
  }

  .navbar {
    height: 75px;
  }

  .logo-name {
    font-size: 18px;
  }

  .hero {
    gap: 30px;
    min-height: auto;
  }

  .hero h1 {
    font-size: 43px;
    letter-spacing: -2px;
  }

  .hero-description {
    font-size: 14px;
  }

  .hero-features {
    gap: 13px;
  }

  .command-preview {
    height: 450px;
  }

  .command-top {
    gap: 8px;
  }

  .live-command {
    display: none;
  }

  .location {
    margin-left: auto;
  }

  .command-sidebar {
    display: none;
                          }
  .command-body {
    grid-template-columns: 1fr;
  }

  .stat-row {
    grid-template-columns: repeat(2, 1fr);
  }

  .command-stat {
    min-height: 65px;
  }

  .command-stat strong {
    font-size: 17px;
  }

  .map-area {
    height: calc(100% - 145px);
  }

  .resources {
    display: none;
  }

  .metrics {
    margin-top: 35px;
  }

  .metric {
    padding: 20px 8px;
  }

  .metric-icon {
    width: 38px;
    height: 38px;
  }

  .metric strong {
    font-size: 22px;
  }

  .workflow {
    grid-template-columns: repeat(2, 1fr);
    margin-top: 40px;
  }

  .workflow-item:last-child {
    grid-column: span 2;
  }

  .solution-section {
    margin: 90px auto;
    gap: 45px;
  }

  .risk-card {
    padding: 18px;
  }

  .cta-section {
    padding: 65px 18px;
    margin-bottom: 80px;
  }

  footer {
    flex-direction: column;
    gap: 25px;
    align-items: flex-start;
  }

  footer > div {
    flex-direction: column;
    gap: 8px;
  }
}

@media (max-width: 420px) {
  .hero h1 {
    font-size: 37px;
  }

  .primary-button,
  .secondary-button {
    width: 100%;
  }

  .metrics {
    grid-template-columns: 1fr 1fr;
  }

  .metric {
    justify-content: flex-start;
    padding-left: 13px;
  }

  .metric-icon {
    display: none;
  }

  .command-preview {
    height: 410px;
  }
    }
