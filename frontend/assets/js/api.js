const BASE = "http://localhost:3000/api";

const API = (function () {
  async function startAttempt(testId) {
    const res = await fetch(`${BASE}/attempts/start`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ testId }),
    });
    if (!res.ok) throw new Error("Failed to start attempt");
    return res.json();
  }

  async function logEvent(attemptId, eventType, data = {}) {
    const res = await fetch(`${BASE}/attempts/${attemptId}/event`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ eventType, data }),
    });
    if (!res.ok) throw new Error("Failed to log event");
    return res.json();
  }

  return { startAttempt, logEvent };
})();

