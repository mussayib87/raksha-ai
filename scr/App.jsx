import {
  Activity,
  AlertTriangle,
  ArrowRight,
  Bell,
  Building2,
  ChevronDown,
  Clock3,
  Flame,
  Globe2,
  HeartPulse,
  Map,
  Menu,
  Navigation,
  Play,
  Radio,
  Search,
  Shield,
  Siren,
  Truck,
  Users,
  Waves,
  X,
  Zap,
} from "lucide-react";
import { useState } from "react";
console.log("RAKSHA-AI APP LOADED");

/* -------------------------------------------------------
   DEMO INCIDENT DATA
------------------------------------------------------- */

const incidents = [
  { type: "fire", x: 67, y: 47, label: "Critical" },
  { type: "flood", x: 28, y: 67, label: "High" },
  { type: "warning", x: 49, y: 30, label: "High" },
  { type: "safe", x: 79, y: 61, label: "Low" },
  { type: "fire", x: 37, y: 39, label: "Critical" },
  { type: "warning", x: 83, y: 31, label: "Medium" },
];

const workflow = [
  {
    icon: Users,
    title: "REPORT",
    description: "Citizens & IoT submit incidents",
  },
  {
    icon: Zap,
    title: "AI ANALYSIS",
    description: "AI triages incoming reports",
  },
  {
    icon: AlertTriangle,
    title: "RISK PRIORITY",
    description: "Risk score & urgency",
  },
  {
    icon: Map,
    title: "GIS MAPPING",
    description: "Live location visualization",
  },
  {
    icon: Bell,
    title: "SMART ALERTS",
    description: "Notify relevant departments",
  },
  {
    icon: Truck,
    title: "RESOURCE ASSIGNMENT",
    description: "Coordinate response teams",
  },
  {
    icon: Activity,
    title: "RESPONSE TRACKING",
    description: "Track until resolution",
  },
];

/* -------------------------------------------------------
   LOGO
------------------------------------------------------- */

function Logo() {
  return (
    <div className="logo">
      <div className="logo-shield">
        <Shield size={28} strokeWidth={1.8} />

        <span className="logo-node logo-node-1" />
        <span className="logo-node logo-node-2" />
        <span className="logo-node logo-node-3" />
      </div>

      <div>
        <div className="logo-name">
          RAKSHA<span>-AI</span>
        </div>

        <div className="logo-tagline">
          INTELLIGENT. RESPONSIVE. LIFE-SAVING.
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------
   MAIN APP
------------------------------------------------------- */

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  return (
    <div className="app">
      <div className="background-grid" />

      {/* =================================================
          NAVIGATION
      ================================================= */}

      <header className="navbar">
        <Logo />

        <nav
          className={`nav-links ${
            mobileOpen ? "mobile-open" : ""
          }`}
        >
          <a
            className="active"
            href="#home"
            onClick={closeMobileMenu}
          >
            Home
          </a>

          <a
            href="#platform"
            onClick={closeMobileMenu}
          >
            Platform
          </a>

          <a
            href="#solutions"
            onClick={closeMobileMenu}
          >
            Solutions
          </a>

          <a
            href="#technology"
            onClick={closeMobileMenu}
          >
            Technology
          </a>

          <a
            href="#resources"
            onClick={closeMobileMenu}
          >
            Resources
          </a>

          <a
            href="#about"
            onClick={closeMobileMenu}
          >
            About Us
          </a>
        </nav>

        <button
          className="command-button desktop-command"
          type="button"
          onClick={() => {
            document
              .getElementById("platform")
              ?.scrollIntoView({
                behavior: "smooth",
              });
          }}
        >
          LAUNCH COMMAND CENTER
          <ArrowRight size={17} />
        </button>

        <button
          className="mobile-menu"
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main>
        {/* =================================================
            HERO
        ================================================= */}

        <section className="hero" id="home">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="pulse-dot" />
              AI-POWERED DISASTER INTELLIGENCE
            </div>

            <h1>
              When every second
              <br />
              matters,{" "}
              <span className="red-text">
                intelligence
              </span>
              <br />
              should move first.
            </h1>

            <p className="hero-description">
              RAKSHA-AI transforms fragmented emergency
              reports into prioritized action, real-time
              intelligence, and coordinated response.
            </p>

            <div className="hero-actions">
              <button
                className="primary-button"
                type="button"
                onClick={() => {
                  document
                    .getElementById("platform")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    });
                }}
              >
                <Shield size={18} />
                ENTER COMMAND CENTER
                <ArrowRight size={17} />
              </button>

              <button
                className="secondary-button"
                type="button"
                onClick={() => {
                  document
                    .getElementById("platform")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    });
                }}
              >
                <Play size={17} />
                WATCH OVERVIEW
              </button>
            </div>

            <div className="hero-features">
              <span>
                <Zap size={15} />
                AI Incident Triage
              </span>

              <span>
                <Globe2 size={15} />
                Real-time GIS
              </span>

              <span>
                <Bell size={15} />
                Smart Alerts
              </span>

              <span>
                <Truck size={15} />
                Resource Coordination
              </span>
            </div>

            <div className="city-silhouette">
              <div className="building b1" />
              <div className="building b2" />
              <div className="building b3" />
              <div className="building b4" />
              <div className="building b5" />
              <div className="building b6" />
              <div className="building b7" />
              <div className="building b8" />
            </div>
          </div>

          <CommandCenter />
        </section>

        {/* =================================================
            METRICS
        ================================================= */}

        <section className="metrics">
          <Metric
            icon={<Users />}
            value="10K+"
            label="Citizens Protected"
            type="red"
          />

          <Metric
            icon={<Building2 />}
            value="25+"
            label="Departments Unified"
            type="orange"
          />

          <Metric
            icon={<Clock3 />}
            value="< 9"
            suffix="min"
            label="Avg Response Time"
            type="green"
          />

          <Metric
            icon={<Shield />}
            value="99.7%"
            label="System Uptime"
            type="blue"
          />
        </section>

        {/* =================================================
            RESPONSE WORKFLOW
        ================================================= */}

        <section
          className="workflow-section"
          id="platform"
        >
          <div className="section-heading">
            <div className="section-kicker">
              RAKSHA-AI RESPONSE ENGINE
            </div>

            <h2>
              From signal to{" "}
              <span>coordinated response.</span>
            </h2>

            <p>
              Every incident passes through an intelligent
              response pipeline designed to help emergency
              teams make faster, better-informed decisions.
            </p>
          </div>

          <div className="workflow">
            {workflow.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  className="workflow-item"
                  key={item.title}
                >
                  <div className="workflow-icon">
                    <Icon size={22} />
                  </div>

                  <div className="workflow-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                  {index !== workflow.length - 1 && (
                    <ArrowRight
                      className="workflow-arrow"
                      size={20}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* =================================================
            SOLUTIONS
        ================================================= */}

        <section
          className="solution-section"
          id="solutions"
        >
          <div>
            <div className="section-kicker">
              ONE INTELLIGENCE LAYER
            </div>

            <h2>
              Built for cities that
              <br />
              <span>cannot afford delay.</span>
            </h2>

            <p>
              From floods and fires to structural hazards
              and urban emergencies, RAKSHA-AI gives
              authorities a unified operational picture of
              what is happening, where it is happening, and
              what needs to happen next.
            </p>

            <div className="solution-list">
              <div>
                <Shield />

                <span>
                  <strong>
                    AI-powered prioritization
                  </strong>

                  <small>
                    Identify critical incidents first.
                  </small>
                </span>
              </div>

              <div>
                <Map />

                <span>
                  <strong>
                    GIS command visibility
                  </strong>

                  <small>
                    Understand incidents spatially.
                  </small>
                </span>
              </div>

              <div>
                <Radio />

                <span>
                  <strong>
                    Coordinated response
                  </strong>

                  <small>
                    Connect incidents to resources.
                  </small>
                </span>
              </div>
            </div>
          </div>

          <div className="risk-card">
            <div className="risk-card-header">
              <span>LIVE RISK INTELLIGENCE</span>

              <span className="live-label">
                <span />
                LIVE
              </span>
            </div>

            <div className="risk-score">
              <div>
                <small>CITY RISK INDEX</small>

                <strong>72</strong>

                <span>/100</span>
              </div>

              <div className="risk-ring">
                <div>
                  <AlertTriangle size={24} />

                  <span>HIGH</span>
                </div>
              </div>
            </div>

            <div className="risk-bars">
              <RiskBar
                label="Fire Risk"
                value={82}
              />

              <RiskBar
                label="Flood Risk"
                value={64}
              />

              <RiskBar
                label="Traffic Risk"
                value={48}
              />

              <RiskBar
                label="Structural Risk"
                value={37}
              />
            </div>
          </div>
        </section>

        {/* =================================================
            TECHNOLOGY
        ================================================= */}

        <section
          className="technology-section"
          id="technology"
        >
          <div className="section-heading">
            <div className="section-kicker">
              INTELLIGENCE STACK
            </div>

            <h2>
              One platform.
              <br />
              <span>Multiple layers of intelligence.</span>
            </h2>

            <p>
              RAKSHA-AI combines artificial intelligence,
              geospatial intelligence, real-time alerts and
              operational coordination into a unified
              emergency response architecture.
            </p>
          </div>

          <div className="technology-grid">
            <TechnologyCard
              icon={<Zap />}
              number="01"
              title="AI Intelligence"
              description="Classify, prioritize and analyze incoming emergency information."
            />

            <TechnologyCard
              icon={<Map />}
              number="02"
              title="GIS Intelligence"
              description="Visualize incidents, risk zones and response assets geographically."
            />

            <TechnologyCard
              icon={<Radio />}
              number="03"
              title="Real-Time Alerts"
              description="Deliver actionable notifications to the right department at the right time."
            />

            <TechnologyCard
              icon={<Truck />}
              number="04"
              title="Resource Coordination"
              description="Coordinate emergency teams, vehicles and municipal resources."
            />
          </div>
        </section>

        {/* =================================================
            RESOURCE SECTION
        ================================================= */}

        <section
          className="resources-section"
          id="resources"
        >
          <div className="resource-copy">
            <div className="section-kicker">
              OPERATIONAL READINESS
            </div>

            <h2>
              Designed around
              <br />
              <span>real-world response.</span>
            </h2>

            <p>
              Emergency response is not just about
              identifying a problem. It is about getting the
              right people and resources to the right place
              at the right time.
            </p>

            <div className="resource-points">
              <div>
                <span className="resource-check">
                  <Shield size={16} />
                </span>

                <div>
                  <strong>Emergency Teams</strong>
                  <p>
                    Track and coordinate response personnel.
                  </p>
                </div>
              </div>

              <div>
                <span className="resource-check">
                  <Truck size={16} />
                </span>

                <div>
                  <strong>Response Vehicles</strong>
                  <p>
                    Monitor emergency transport and field
                    resources.
                  </p>
                </div>
              </div>

              <div>
                <span className="resource-check">
                  <HeartPulse size={16} />
                </span>

                <div>
                  <strong>Medical Response</strong>
                  <p>
                    Connect incidents with medical support.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="resource-dashboard">
            <div className="resource-dashboard-header">
              <span>RESPONSE RESOURCES</span>

              <span className="available">
                <i />
                84% AVAILABLE
              </span>
            </div>

            <ResourceDashboardRow
              icon={<HeartPulse />}
              title="Ambulance Units"
              count="24"
              available="19"
              percentage={79}
            />

            <ResourceDashboardRow
              icon={<Flame />}
              title="Fire Response Units"
              count="18"
              available="14"
              percentage={78}
            />

            <ResourceDashboardRow
              icon={<Shield />}
              title="Police Units"
              count="42"
              available="38"
              percentage={90}
            />

            <ResourceDashboardRow
              icon={<Users />}
              title="Rescue Teams"
              count="12"
              available="10"
              percentage={83}
            />
          </div>
        </section>

        {/* =================================================
            CTA
        ================================================= */}

        <section
          className="cta-section"
          id="about"
        >
          <div className="cta-glow" />

          <div className="section-kicker">
            SMART CITIES & DISASTER MANAGEMENT
          </div>

          <h2>
            Turn emergency data
            <br />
            into <span>decisive action.</span>
          </h2>

          <p>
            RAKSHA-AI brings AI, GIS, alerts, and emergency
            coordination together in one intelligent
            platform.
          </p>

          <button
            className="primary-button large"
            type="button"
            onClick={() => {
              document
                .getElementById("platform")
                ?.scrollIntoView({
                  behavior: "smooth",
                });
            }}
          >
            EXPLORE RAKSHA-AI
            <ArrowRight size={18} />
          </button>
        </section>
      </main>

      {/* =================================================
          FOOTER
      ================================================= */}

      <footer>
        <Logo />

        <div>
          <span>AI-POWERED URBAN SAFETY</span>
          <span>© 2026 RAKSHA-AI</span>
        </div>
      </footer>
    </div>
  );
}

/* =======================================================
   METRIC COMPONENT
======================================================= */

function Metric({
  icon,
  value,
  suffix,
  label,
  type,
}) {
  return (
    <div className={`metric ${type}`}>
      <div className="metric-icon">
        {icon}
      </div>

      <div>
        <strong>
          {value}

          {suffix && (
            <small>{suffix}</small>
          )}
        </strong>

        <span>{label}</span>
      </div>
    </div>
  );
}

/* =======================================================
   COMMAND CENTER
======================================================= */

function CommandCenter() {
  return (
    <div className="command-preview">
      <div className="command-top">
        <div className="mini-brand">
          <Shield size={18} />
          RAKSHA<span>-AI</span>
        </div>

        <div className="live-command">
          LIVE COMMAND CENTER
          <span>
            <i />
            LIVE
          </span>
        </div>

        <div className="location">
          <Navigation size={13} />
          Pune, Maharashtra
          <ChevronDown size={13} />
        </div>

        <Search
          size={17}
          className="top-icon"
        />

        <Bell
          size={17}
          className="top-icon"
        />
      </div>

      <div className="command-body">
        {/* SIDEBAR */}

        <aside className="command-sidebar">
          <SideItem
            icon={<Activity />}
            text="Dashboard"
            active
          />

          <SideItem
            icon={<Siren />}
            text="Incidents"
          />

          <SideItem
            icon={<Map />}
            text="Map View"
          />

          <SideItem
            icon={<Truck />}
            text="Resources"
          />

          <SideItem
            icon={<Bell />}
            text="Alerts"
          />

          <SideItem
            icon={<Activity />}
            text="Analytics"
          />

          <SideItem
            icon={<Shield />}
            text="Reports"
          />
        </aside>

        {/* MAIN COMMAND AREA */}

        <div className="command-main">
          <div className="stat-row">
            <CommandStat
              value="1,284"
              label="Total Incidents"
              icon={<Flame />}
              type="critical"
            />

            <CommandStat
              value="47"
              label="Active Incidents"
              icon={<AlertTriangle />}
              type="warning"
            />

            <CommandStat
              value="92%"
              label="Response Success"
              icon={<Shield />}
              type="safe"
            />

            <CommandStat
              value="08:42"
              label="Avg Response Time"
              icon={<Clock3 />}
              type="time"
            />
          </div>

          <div className="map-area">
            <div className="map-background">
              <div className="map-river" />

              <div className="road road-1" />
              <div className="road road-2" />
              <div className="road road-3" />
              <div className="road road-4" />
              <div className="road road-5" />

              <div className="map-grid-lines" />

              {incidents.map(
                (incident, index) => (
                  <IncidentMarker
                    key={index}
                    {...incident}
                  />
                )
              )}
            </div>

            {/* MAP LEGEND */}

            <div className="map-legend">
              <span>INCIDENTS</span>

              <Legend
                color="critical"
                label="Critical"
              />

              <Legend
                color="high"
                label="High"
              />

              <Legend
                color="medium"
                label="Medium"
              />

              <Legend
                color="low"
                label="Low"
              />
            </div>

            {/* RESOURCES */}

            <div className="resources">
              <span>RESOURCES</span>

              <Resource
                icon={<HeartPulse />}
                text="Ambulance"
              />

              <Resource
                icon={<Flame />}
                text="Fire Brigade"
              />

              <Resource
                icon={<Shield />}
                text="Police"
              />

              <Resource
                icon={<Users />}
                text="Rescue Team"
              />
            </div>

            {/* MAP CONTROLS */}

            <div className="map-controls">
              <button type="button">
                +
              </button>

              <button type="button">
                −
              </button>

              <button type="button">
                <Search size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* AI ANALYSIS */}

        <aside className="command-right">
          <div className="analysis-header">
            <span>AI ANALYSIS</span>

            <b>CRITICAL</b>
          </div>

          <div className="analysis-icon">
            <Flame size={20} />
          </div>

          <h3>
            Building Fire Detected
          </h3>

          <p className="analysis-location">
            Shivajinagar, Pune
          </p>

          <div className="analysis-grid">
            <div>
              <span>RISK SCORE</span>
              <strong>9.2 / 10</strong>
            </div>

            <div>
              <span>CONFIDENCE</span>
              <strong>96%</strong>
            </div>
          </div>

          <div className="eta">
            <span>ETA IMPACT</span>
            <strong>HIGH</strong>
          </div>

          <button
            className="details-button"
            type="button"
          >
            VIEW DETAILS
          </button>

          <div className="recent-alerts">
            <div className="recent-header">
              <span>
                RECENT ALERTS
              </span>

              <small>
                View All
              </small>
            </div>

            <AlertRow
              icon={<Waves />}
              title="Flood Warning"
              location="Mula River"
              time="2 min ago"
            />

            <AlertRow
              icon={<Flame />}
              title="Tree Fall"
              location="FC Road"
              time="8 min ago"
            />

            <AlertRow
              icon={<AlertTriangle />}
              title="Gas Leakage"
              location="Hadapsar"
              time="15 min ago"
            />

            <AlertRow
              icon={<Zap />}
              title="Short Circuit"
              location="Kothrud"
              time="21 min ago"
            />
          </div>
        </aside>
      </div>
    </div>
  );
}


/* =======================================================
   SIDEBAR ITEM
======================================================= */

function SideItem({
  icon,
  text,
  active,
}) {
  return (
    <div
      className={`side-item ${
        active ? "active" : ""
      }`}
    >
      {icon}

      <span>
        {text}
      </span>
    </div>
  );
}


/* =======================================================
   COMMAND STAT
======================================================= */

function CommandStat({
  value,
  label,
  icon,
  type,
}) {
  return (
    <div
      className={`command-stat ${type}`}
    >
      <div>
        <strong>
          {value}
        </strong>

        <span>
          {label}
        </span>

        <small>
          +5.2% from yesterday
        </small>
      </div>

      {icon}
    </div>
  );
}


/* =======================================================
   INCIDENT MARKER
======================================================= */

function IncidentMarker({
  x,
  y,
  type,
}) {
  let Icon;

  if (type === "fire") {
    Icon = Flame;
  } else if (type === "flood") {
    Icon = Waves;
  } else if (type === "warning") {
    Icon = AlertTriangle;
  } else {
    Icon = Shield;
  }

  return (
    <div
      className={`incident-marker ${type}`}
      style={{
        left: `${x}%`,
        top: `${y}%`,
      }}
    >
      <div className="marker-pulse" />

      <Icon size={18} />
    </div>
  );
}


/* =======================================================
   LEGEND
======================================================= */

function Legend({
  color,
  label,
}) {
  return (
    <div className="legend-item">
      <i className={color} />

      {label}
    </div>
  );
}


/* =======================================================
   RESOURCE
======================================================= */

function Resource({
  icon,
  text,
}) {
  return (
    <div className="resource-item">
      {icon}

      <span>
        {text}
      </span>
    </div>
  );
}


/* =======================================================
   ALERT ROW
======================================================= */

function AlertRow({
  icon,
  title,
  location,
  time,
}) {
  return (
    <div className="alert-row">
      <div className="alert-icon">
        {icon}
      </div>

      <div>
        <strong>
          {title}
        </strong>

        <span>
          {location}
        </span>
      </div>

      <small>
        {time}
      </small>
    </div>
  );
}


/* =======================================================
   RISK BAR
======================================================= */

function RiskBar({
  label,
  value,
}) {
  return (
    <div className="risk-bar">
      <div>
        <span>
          {label}
        </span>

        <strong>
          {value}%
        </strong>
      </div>

      <div className="bar">
        <i
          style={{
            width: `${value}%`,
          }}
        />
      </div>
    </div>
  );
}


/* =======================================================
   TECHNOLOGY CARD
======================================================= */

function TechnologyCard({
  icon,
  number,
  title,
  description,
}) {
  return (
    <div className="technology-card">
      <div className="technology-card-top">
        <div className="technology-icon">
          {icon}
        </div>

        <span>
          {number}
        </span>
      </div>

      <h3>
        {title}
      </h3>

      <p>
        {description}
      </p>

      <div className="technology-line" />
    </div>
  );
}


/* =======================================================
   RESOURCE DASHBOARD ROW
======================================================= */

function ResourceDashboardRow({
  icon,
  title,
  count,
  available,
  percentage,
}) {
  return (
    <div className="resource-dashboard-row">
      <div className="resource-dashboard-icon">
        {icon}
      </div>

      <div className="resource-dashboard-info">
        <div className="resource-dashboard-title">
          <strong>
            {title}
          </strong>

          <span>
            {available}/{count}
          </span>
        </div>

        <div className="resource-progress">
          <i
            style={{
              width: `${percentage}%`,
            }}
          />
        </div>

        <small>
          {percentage}% operational
        </small>
      </div>
    </div>
  );
}


/* =======================================================
   EXPORT
======================================================= */

export default App;
