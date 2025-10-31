// Toggleable Tabs
document.querySelectorAll(".tab-btn").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));
    document.querySelectorAll(".tab-content").forEach(tab => tab.classList.remove("active"));

    button.classList.add("active");
    const tabId = button.dataset.tab;
    document.getElementById(tabId).classList.add("active");
  });
});