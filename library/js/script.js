document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const periodicalList = document.getElementById("periodicalList");

  if (searchInput) {
    searchInput.addEventListener("keyup", function () {
      const filter = searchInput.value.toLowerCase();
      const items = periodicalList.getElementsByTagName("li");

      for (let i = 0; i < items.length; i++) {
        const text = items[i].textContent || items[i].innerText;
        items[i].style.display = text.toLowerCase().includes(filter) ? "" : "none";
      }
    });
  }
});
