const config = {
  id: {
    star_rail: "804836415",
  },
};

const id = config.id.star_rail; // 一時的に埋め込み（Node用のconfigは使えない）
const viewer = document.getElementById("data");
const get_btn = document.getElementById("button");

get_btn.addEventListener("click", () => {
  fetch(`https://api.mihomo.me/sr_info_parsed/${id}?lang=jp`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      viewer.textContent = JSON.stringify(data, null, 2); // 整形表示
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
