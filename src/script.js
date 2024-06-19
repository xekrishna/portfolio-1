var preloader = document.getElementById("preloader");

window.addEventListener("load", function () {
    preloader.style.display = "none";
});


function loader() {
    var sidebar = document.getElementById("sidebar");
    if (sidebar.style.display === "block") {
        sidebar.style.display = "none";
      } else {
        sidebar.style.display = "block";
      }
};

function openSpotify () {
  location.href = "https://xekrishna.github.io/spotify-clone"
}
