function download(type) {
  const url = document.getElementById("url").value.trim();
  if (!url) {
    alert("Masukkan link dulu!");
    return;
  }

  const result = document.getElementById("result");
  result.classList.remove("hidden");

  // Placeholder API
  let api = "https://API-KAMU-NANTI/download";

  // Contoh query
  let finalUrl = `${api}?type=${type}&url=${encodeURIComponent(url)}`;

  // Simulasi (nanti diganti fetch beneran)
  setTimeout(() => {
    result.innerHTML = `
      <p>🚀 Backend belum dipasang</p>
      <small>Frontend sudah siap</small>
    `;
  }, 1500);

  // Kalau backend sudah jadi:
  // window.location.href = finalUrl;
}
