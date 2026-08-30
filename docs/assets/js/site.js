(() => {
  "use strict";

  // GitHub Pages-ready configuration. If the repository is renamed or a custom
  // domain is used, set repositoryUrl explicitly, e.g. https://github.com/user/repo
  const config = {
    repositoryName: "OJmemory-Apple",
    repositoryUrl: ""
  };

  function repositoryUrl() {
    if (config.repositoryUrl) return config.repositoryUrl.replace(/\/$/, "");
    const host = window.location.hostname.toLowerCase();
    if (host.endsWith(".github.io")) {
      const owner = host.slice(0, -".github.io".length);
      if (owner) return `https://github.com/${owner}/${config.repositoryName}`;
    }
    return "";
  }

  const repo = repositoryUrl();
  document.querySelectorAll("[data-github-repository]").forEach((el) => {
    if (!repo) return;
    el.href = repo;
  });

  document.querySelectorAll("[data-github-issues]").forEach((el) => {
    if (!repo) {
      el.setAttribute("aria-disabled", "true");
      el.title = "GitHub-länken aktiveras automatiskt när sidan körs på GitHub Pages.";
      el.addEventListener("click", (event) => event.preventDefault());
      return;
    }
    const title = el.dataset.issueTitle || "[Support] ";
    el.href = `${repo}/issues/new?title=${encodeURIComponent(title)}`;
    el.rel = "noopener noreferrer";
  });

  document.querySelectorAll("[data-github-issue-list]").forEach((el) => {
    if (!repo) return;
    el.href = `${repo}/issues`;
    el.rel = "noopener noreferrer";
  });

  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = new Date().getFullYear().toString();
  });
})();
