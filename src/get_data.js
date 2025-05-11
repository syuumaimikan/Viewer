const config = {
  id: {
    star_rail: "804836415",
  },
};

const id = config.id.star_rail; // 一時的に埋め込み（Node用のconfigは使えない）
const viewer = document.getElementById("data");
const get_btn = document.getElementById("button");
const user_name = document.getElementById("name");
const uid = document.getElementById("uid");
const lvl = document.getElementById("lvl");

get_btn.addEventListener("click", () => {
  fetch(`https://api.mihomo.me/sr_info_parsed/${id}?lang=jp`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      viewer.textContent = JSON.stringify(data, null, 2); // 整形表示
      user_name.textContent = data.player.nickname;
      uid.textContent = data.player.uid;
      lvl.textContent = `level${data.player.level}`;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
