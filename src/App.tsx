import React, { useState } from "react";
import "./index.css";

type ViewId = "console" | "agents" | "workflows" | "analytics" | "settings";

const navItems: { id: ViewId; label: string }[] = [
  { id: "console", label: "Console" },
  { id: "agents", label: "Agents" },
  { id: "workflows", label: "Workflows" },
  { id: "analytics", label: "Analytics" },
  { id: "settings", label: "Settings" },
];

const titles: Record<ViewId, { title: string; subtitle: string }> = {
  console: {
    title: "Command Console",
    subtitle: "Unified live view of all AI assistants and systems.",
  },
  agents: {
    title: "AI Agents",
    subtitle: "Inspect individual AI agents and their performance.",
  },
  workflows: {
    title: "Workflows",
    subtitle: "See how triggers, AI steps and actions connect.",
  },
  analytics: {
    title: "Analytics",
    subtitle: "High-level load and reliability overview.",
  },
  settings: {
    title: "Settings",
    subtitle: "Demo preferences for the AETHER AI Ops console.",
  },
};

const App: React.FC = () => {
  const [view, setView] = useState<ViewId>("console");

  const currentTitle = titles[view];

  return (
    <div className="app-shell">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-logo">
          <div className="sidebar-logo-mark" />
          <div className="sidebar-logo-text">
            <div className="sidebar-logo-title">AETHER</div>
            <div className="sidebar-logo-subtitle">AI Ops Command</div>
          </div>
        </div>

        <nav className="sidebar-nav">
          {navItems.map((item) => {
            const isActive = item.id === view;
            return (
              <button
                key={item.id}
                className={
                  "sidebar-nav-item" +
                  (isActive ? " sidebar-nav-item--active" : "")
                }
                onClick={() => setView(item.id)}
              >
                <span className="sidebar-nav-dot" />
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="sidebar-footer">
          <div className="sidebar-metric-label">AI automation</div>
          <div className="sidebar-metric-value">83%</div>
          <div className="sidebar-metric-caption">
            of tickets are resolved without a human reply.
          </div>

          <div className="sidebar-user">
            <div className="sidebar-user-avatar">M</div>
            <div className="sidebar-user-meta">
              <div className="sidebar-user-name">Maksym H.</div>
              <div className="sidebar-user-role">Support Lead</div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="main">
        <header className="top-bar">
          <div>
            <h1 className="page-title">{currentTitle.title}</h1>
            <p className="page-subtitle">{currentTitle.subtitle}</p>
          </div>

          <div className="top-bar-right">
            <div className="top-bar-chip top-bar-chip--ghost">Demo · no real data</div>
            <button className="primary-button">
              <span>⌘K</span>
              <span>Command palette</span>
              <span className="primary-button-kbd">Ctrl+K</span>
            </button>
          </div>
        </header>

        {view === "console" && <ConsoleView />}
        {view === "agents" && <AgentsView />}
        {view === "workflows" && <WorkflowsView />}
        {view === "analytics" && <AnalyticsView />}
        {view === "settings" && <SettingsView />}
      </main>
    </div>
  );
};

/* ---------- Views ---------- */

const ConsoleView: React.FC = () => {
  return (
    <>
      <section className="kpi-row">
        <div className="kpi-card">
          <div className="kpi-label">Active agents</div>
          <div className="kpi-value">4</div>
          <div className="kpi-caption">
            Orchestrating support, billing and sales.
          </div>
        </div>
        <div className="kpi-card">
          <div className="kpi-label">Messages (last 24h)</div>
          <div className="kpi-value">1,948</div>
          <div className="kpi-caption">Chat, email and internal tools.</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-label">Automation success</div>
          <div className="kpi-value">93%</div>
          <div className="kpi-caption">
            Completed without human handoff.
          </div>
        </div>
        <div className="kpi-card">
          <div className="kpi-label">Open incidents</div>
          <div className="kpi-value">3</div>
          <div className="kpi-caption">All under investigation.</div>
        </div>
      </section>

      <section className="grid-two">
        {/* Live events */}
        <div className="panel">
          <div className="panel-header">
            <div>
              <h2 className="panel-title">Live event stream</h2>
              <p className="panel-subtitle">
                Real-time status across all AI ops agents.
              </p>
            </div>
            <span className="pill pill--soft">Real-time · demo</span>
          </div>
          <ul className="event-list">
            <li className="event-row">
              <span className="event-agent event-agent--orion">ORION</span>
              <span className="event-text">
                Qualified 4 new leads from inbound forms.
              </span>
              <span className="event-time">23:18:55</span>
            </li>
            <li className="event-row">
              <span className="event-agent event-agent--selene">SELENE</span>
              <span className="event-text">
                Resolved 12 chat conversations without handoff.
              </span>
              <span className="event-time">23:18:58</span>
            </li>
            <li className="event-row">
              <span className="event-agent event-agent--titan">TITAN</span>
              <span className="event-text">
                Executed nightly automation run for billing exports.
              </span>
              <span className="event-time">23:19:03</span>
            </li>
            <li className="event-row">
              <span className="event-agent event-agent--vega">VEGA</span>
              <span className="event-text">
                Generated summary of yesterday&apos;s usage for #ops.
              </span>
              <span className="event-time">23:19:07</span>
            </li>
          </ul>
        </div>

        {/* System health */}
        <div className="panel">
          <div className="panel-header">
            <div>
              <h2 className="panel-title">System health</h2>
              <p className="panel-subtitle">
                Snapshot of infrastructure status.
              </p>
            </div>
          </div>
          <ul className="health-list">
            <li className="health-row">
              <span className="health-label">LLM provider</span>
              <span className="pill pill--success">Operational</span>
            </li>
            <li className="health-row">
              <span className="health-label">Automation runners</span>
              <span className="pill pill--success">Healthy</span>
            </li>
            <li className="health-row">
              <span className="health-label">Inbox processing</span>
              <span className="pill pill--neutral">Stable</span>
            </li>
            <li className="health-row">
              <span className="health-label">Incident queue</span>
              <span className="pill pill--warn">Slight delay</span>
            </li>
            <li className="health-row">
              <span className="health-label">Open incidents</span>
              <span className="pill pill--alert">3 open</span>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

const AgentsView: React.FC = () => {
  const agents = [
    {
      name: "ORION",
      role: "Lead qualification agent",
      msgs: 214,
      success: "96%",
    },
    {
      name: "SELENE",
      role: "Support deflection agent",
      msgs: 593,
      success: "91%",
    },
    {
      name: "TITAN",
      role: "Back-office automation",
      msgs: 87,
      success: "99%",
    },
    {
      name: "VEGA",
      role: "Ops reporting agent",
      msgs: 61,
      success: "97%",
    },
  ];

  return (
    <section className="grid-two">
      <div className="panel">
        <div className="panel-header">
          <div>
            <h2 className="panel-title">AI agents</h2>
            <p className="panel-subtitle">
              Inspect individual agents and their health.
            </p>
          </div>
          <span className="pill pill--soft">Click an agent to inspect</span>
        </div>

        <ul className="event-list">
          {agents.map((agent) => (
            <li key={agent.name} className="event-row">
              <span className="event-agent event-agent--orion">
                {agent.name}
              </span>
              <span className="event-text">
                {agent.role} · {agent.msgs} msgs today
              </span>
              <span className="event-time">{agent.success} success</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="panel">
        <div className="panel-header">
          <div>
            <h2 className="panel-title">Recent runs</h2>
            <p className="panel-subtitle">
              High-level history of the last executions.
            </p>
          </div>
        </div>
        <p style={{ fontSize: 12, color: "#6b7280" }}>
          This is a static portfolio preview. In a real product this area would
          show execution logs, latency, error rates and links to observability
          tools.
        </p>
      </div>
    </section>
  );
};

const WorkflowsView: React.FC = () => {
  return (
    <section className="grid-two">
      <div className="panel">
        <div className="panel-header">
          <div>
            <h2 className="panel-title">Workflows</h2>
            <p className="panel-subtitle">
              How triggers, AI steps and actions connect.
            </p>
          </div>
          <span className="pill pill--soft">Portfolio demo</span>
        </div>

        <ul className="event-list">
          <li className="event-row">
            <span className="event-agent event-agent--orion">Lead intake</span>
            <span className="event-text">
              Web form → ORION + TITAN → CRM update + Slack alert.
            </span>
            <span className="event-time">On form submit</span>
          </li>
          <li className="event-row">
            <span className="event-agent event-agent--selene">Support triage</span>
            <span className="event-text">
              Live chat → SELENE → deflect FAQs, escalate complex tickets.
            </span>
            <span className="event-time">On new chat</span>
          </li>
          <li className="event-row">
            <span className="event-agent event-agent--vega">Daily ops digest</span>
            <span className="event-text">
              Schedule → VEGA → AI summary of incidents and KPIs.
            </span>
            <span className="event-time">09:00 daily</span>
          </li>
        </ul>
      </div>

      <div className="panel">
        <div className="panel-header">
          <div>
            <h2 className="panel-title">Design note</h2>
            <p className="panel-subtitle">
              This view exists to prove multi-screen UX.
            </p>
          </div>
        </div>
        <p style={{ fontSize: 12, color: "#6b7280" }}>
          In the case study on Upwork you can describe how each workflow is
          configured: triggers, AI prompts, routing rules and failure-handling
          policies. This shows you understand both UX and AI-Ops logic.
        </p>
      </div>
    </section>
  );
};

const AnalyticsView: React.FC = () => {
  return (
    <section className="grid-two">
      <div className="panel">
        <div className="panel-header">
          <div>
            <h2 className="panel-title">Load over last 24 hours</h2>
            <p className="panel-subtitle">
              Simulated combined message volume across all agents.
            </p>
          </div>
          <span className="pill pill--soft">Demo chart</span>
        </div>
        <div
          style={{
            height: 140,
            borderRadius: 12,
            background:
              "linear-gradient(180deg, rgba(191,219,254,0.8), rgba(249,250,251,1))",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Простий «фейковий» графік */}
          <div
            style={{
              position: "absolute",
              inset: 16,
              borderRadius: 10,
              border: "1px solid rgba(148,163,184,0.6)",
              background:
                "repeating-linear-gradient(to right, rgba(148,163,184,0.15), rgba(148,163,184,0.15) 1px, transparent 1px, transparent 16px)",
            }}
          />
        </div>
      </div>

      <div className="panel">
        <div className="panel-header">
          <div>
            <h2 className="panel-title">Reliability snapshot</h2>
            <p className="panel-subtitle">
              Error budget and automation success rate.
            </p>
          </div>
        </div>
        <ul className="health-list">
          <li className="health-row">
            <span className="health-label">Automation success</span>
            <span className="pill pill--success">93% last 24h</span>
          </li>
          <li className="health-row">
            <span className="health-label">P95 response time</span>
            <span className="pill pill--neutral">420ms</span>
          </li>
          <li className="health-row">
            <span className="health-label">Incident budget used</span>
            <span className="pill pill--warn">34%</span>
          </li>
          <li className="health-row">
            <span className="health-label">Failed automations</span>
            <span className="pill pill--alert">7 in last 24h</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

const SettingsView: React.FC = () => {
  return (
    <section className="grid-two">
      <div className="panel">
        <div className="panel-header">
          <div>
            <h2 className="panel-title">Ops preferences</h2>
            <p className="panel-subtitle">
              Demo preferences for the AETHER Ops console.
            </p>
          </div>
        </div>
        <p style={{ fontSize: 12, color: "#6b7280", marginBottom: 10 }}>
          In a real product this view would contain forms with time-zone,
          alerting thresholds and notification channels. Here it only documents
          the UX.
        </p>
        <ul className="health-list">
          <li className="health-row">
            <span className="health-label">Incident alert threshold</span>
            <span className="pill pill--soft">
              Alert when ≥ 3 incidents open
            </span>
          </li>
          <li className="health-row">
            <span className="health-label">Time zone</span>
            <span className="pill pill--soft">UTC</span>
          </li>
          <li className="health-row">
            <span className="health-label">Notification channel</span>
            <span className="pill pill--soft">Slack · #ai-ops</span>
          </li>
        </ul>
      </div>

      <div className="panel">
        <div className="panel-header">
          <div>
            <h2 className="panel-title">Case-study copy</h2>
            <p className="panel-subtitle">
              Text you can reuse in your portfolio.
            </p>
          </div>
        </div>
        <p style={{ fontSize: 12, color: "#6b7280" }}>
          “AETHER Console is a concept AI-Ops dashboard I designed and coded
          with React + TypeScript. It shows how multiple AI agents orchestrate
          customer support, billing and lead-qualification workflows, and how
          an operator can monitor automation health in real time.”
        </p>
      </div>
    </section>
  );
};

export default App;
