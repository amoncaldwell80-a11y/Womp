const CONTRACT = "F1oENDA4DBJZhuLN8q12PbqgSAaMHFNidTMyJPfVpump";

const copyButton = document.getElementById("copyButton");
const contract = document.getElementById("contract");

copyButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(CONTRACT);
    copyButton.textContent = "Copied ✓";
    setTimeout(() => copyButton.textContent = "Copy Contract", 1800);
  } catch {
    copyButton.textContent = "Copy failed";
    setTimeout(() => copyButton.textContent = "Copy Contract", 1800);
  }
});

document.getElementById("year").textContent = new Date().getFullYear();
