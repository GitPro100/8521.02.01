/*
 * Study 8521.02.02 — Qualtrics bridge v1.0.0 (Version A)
 *
 * Paste this code into the JavaScript editor of the Descriptive Text
 * question containing qualtrics-question.html.
 *
 * Requirements: in Survey Flow, set PROLIFIC_PID and assignment before
 * this question, and declare all exported fields as Embedded Data.
 *
 * IMPORTANT: the source application is hosted under the original repo
 * path until a dedicated 8521.02.02 GitHub repository is established.
 * Only the current Study 8521.02.02 subpath may be used.
 */
Qualtrics.SurveyEngine.addOnReady(function () {
  "use strict";
  var question = this;
  var appUrl = "https://gitpro100.github.io/8521.02.01/8521.02.02/";
  var appOrigin = "https://gitpro100.github.io";
  var pageOrigin = window.location.origin;
  var frameHost = document.getElementById("study85210202Frame");
  var status = document.getElementById("study85210202BridgeStatus");
  var allowed = {T_X_L:1, T_X_R:1, T_Y_L:1, T_Y_R:1};
  var finished = false, frame = null;

  function setStatus(msg) {
    if (status) status.textContent = msg || "";
  }
  function getED(name) {
    try {
      var v = Qualtrics.SurveyEngine.getEmbeddedData(name);
      return v == null ? "" : String(v).trim();
    } catch (err) { return ""; }
  }
  function setED(key, value) {
    Qualtrics.SurveyEngine.setEmbeddedData(key, value == null ? "" : String(value));
  }
  function goNext() {
    try { question.clickNextButton(); }
    catch (err) { finished = false; setStatus("Could not advance the survey. Please contact the researcher."); }
  }
  function reply(type, pid, assignment) {
    if (!frame || !frame.contentWindow) return;
    frame.contentWindow.postMessage({type:type, participant_id:pid, configuration_id:assignment}, appOrigin);
  }

  var query = new URLSearchParams(window.location.search);
  var pid = getED("PROLIFIC_PID") || query.get("PROLIFIC_PID") || query.get("pid") || "";
  var assignment = getED("assignment");
  var validPid = /^[A-Za-z0-9_.:@-]{1,120}$/.test(pid);
  if (!frameHost || !status) return;
  if (!validPid || !allowed[assignment] || pageOrigin.indexOf("https://") !== 0) {
    setStatus("This survey is missing a valid participant ID, assigned configuration, or secure connection. Please contact the researcher; do not reload repeatedly.");
    return;
  }

  // Conceal Qualtrics' own Next button: only a validated app submission
  // or an explicit withdrawal advances this page.
  if (typeof question.hideNextButton === "function") question.hideNextButton();
  frame = document.createElement("iframe");
  frame.title = "Energy bar product choice task";
  frame.referrerPolicy = "strict-origin-when-cross-origin";
  frame.style.cssText = "display:block;width:100%;min-height:540px;height:800px;border:0;background:#f3f6f9;";
  frame.src = appUrl + "?live=1&pid=" + encodeURIComponent(pid) +
    "&assignment=" + encodeURIComponent(assignment) +
    "&parent_origin=" + encodeURIComponent(pageOrigin);
  frameHost.appendChild(frame);

  var fields = ["study_id","protocol_version","app_version","stimulus_version",
    "source_study_id","participant_id","configuration_id","profile_A",
    "profile_B","A_position","consent_response","choice_label",
    "chosen_profile","choice_X","chosen_side",
    "fit_A","fit_B","desirability_A","desirability_B",
    "fit_X","fit_Y","desirability_X","desirability_Y",
    "fit_X_minus_Y","desirability_X_minus_Y",
    "completed","completed_at","completion_status","started_at"];

  window.addEventListener("message", function (event) {
    if (finished || !frame || event.source !== frame.contentWindow || event.origin !== appOrigin) return;
    var data = event.data || {};
    if (data.type === "8521_0202_HEIGHT") {
      var h = Number(data.height);
      if (Number.isFinite(h)) frame.style.height = Math.max(540, Math.min(6000, Math.ceil(h))) + "px";
      return;
    }
    if (data.type === "8521_0202_WITHDRAW") {
      if (data.study_id !== "8521.02.02" || data.participant_id !== pid || data.configuration_id !== assignment) return;
      finished = true;
      setED("study_id", "8521.02.02");
      setED("stimulus_version", "A_conservative");
      setED("participant_id", pid);
      setED("configuration_id", assignment);
      setED("consent_response", "decline");
      setED("completion_status", "withdrawn");
      setED("completed", "false");
      // Survey Flow MUST branch declined participants to the approved
      // withdrawal/screenout End-of-Survey element, not normal completion.
      goNext();
      return;
    }
    if (data.type !== "8521_0202_SUBMIT") return;
    var p = data.payload || {};
    var good = p.study_id === "8521.02.02" &&
      p.stimulus_version === "A_conservative" &&
      p.participant_id === pid && p.configuration_id === assignment &&
      p.consent_response === "agree" && p.completed === true &&
      (p.choice_X === 0 || p.choice_X === 1) &&
      ["fit_A","fit_B","desirability_A","desirability_B"].every(function(k) {
        return Number.isInteger(p[k]) && p[k] >= 1 && p[k] <= 7;
      }) &&
      p.profile_X_values && p.profile_Y_values &&
      p.profile_X_values.fat_g === 5.4 &&
      p.profile_X_values.protein_g === 10.3 &&
      p.profile_X_values.carbohydrates_g === 34.3 &&
      p.profile_Y_values.fat_g === 8.6 &&
      p.profile_Y_values.protein_g === 11.7 &&
      p.profile_Y_values.carbohydrates_g === 25.7;
    if (!good) {
      reply("8521_0202_SUBMIT_NACK", pid, assignment);
      setStatus("Response validation failed. Please retry the handoff or contact the researcher.");
      return;
    }
    try {
      fields.forEach(function (k) { setED(k, p[k]); });
      var d = p.demographics || {};
      ["gender","gender_text","age","education","income"].forEach(function(k) {
        setED(k, d[k]);
      });
      setED("profile_X_values_json", JSON.stringify(p.profile_X_values));
      setED("profile_Y_values_json", JSON.stringify(p.profile_Y_values));
      setED("screen_time_ms_json", JSON.stringify(p.screen_time_ms || {}));
      setED("app_payload_json", JSON.stringify(p));
      setED("completion_status", "transferred_to_qualtrics_pending_server_submission");
      finished = true;
      reply("8521_0202_SUBMIT_ACK", pid, assignment);
      setStatus("Submitting your responses…");
      // The ACK above is only an in-browser receipt; Qualtrics must persist
      // this page for the response to count as received.
      goNext();
    } catch (err) {
      finished = false;
      reply("8521_0202_SUBMIT_NACK", pid, assignment);
      setStatus("The response could not be transferred. Please retry.");
    }
  });
});
