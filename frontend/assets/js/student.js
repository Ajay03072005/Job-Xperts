document.addEventListener("DOMContentLoaded", async () => {
  try {
    const testId = "demo-test-123"; // Replace with real testId from UI/session
    const attempt = await API.startAttempt(testId);

    if (!attempt.attemptId) {
      throw new Error("No attemptId returned from backend");
    }

    console.log("Attempt started:", attempt.attemptId);

    // Example: log an event on visibility change
    document.addEventListener("visibilitychange", async () => {
      try {
        await API.logEvent(attempt.attemptId, "VISIBILITY_CHANGE", {
          hidden: document.hidden,
        });
        console.log(" Event logged");
      } catch (err) {
        console.error("Failed to log event", err);
      }
    });
  } catch (err) {
    console.error(" Failed to initialize attempt", err);
  }
});

