const API_BASE = "https://video-downloader-api-production-2648.up.railway.app/download";

let currentType = "";
let currentUrl = "";

function download(type) {
  const url = document.getElementById("url").value.trim();
  if (!url) {
    alert("Masukkan link dulu!");
    return;
  }

  currentType = type;
  currentUrl = url;

  const previewBox = document.getElementById("preview");
  const video = document.getElementById("videoPreview");

  // reset
  video.src = "";
  previewBox.classList.remove("hidden");

  // PREVIEW pakai link asli (aman & cepat)
  if (type === "tiktok" || type === "ig") {
    video.src = url;
  } else {
    previewBox.innerHTML = `
      <p>Preview tidak tersedia untuk YouTube</p>
      <button id="downloadBtn">⬇ Download</button>
    `;
  }

  document.getElementById("downloadBtn").onclick = startDownload;
}

function startDownload() {
  const finalUrl = `${API_BASE}?type=${currentType}&url=${encodeURIComponent(currentUrl)}`;
  window.location.href = finalUrl;
}
