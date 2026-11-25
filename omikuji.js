const fortunes = [
    { rank: "大吉", comment: "素晴らしい運命です！"},
    { rank: "中吉", comment: "よいことが起こるでしょう。"},
    { rank: "小吉", comment: "少しの幸運があります。"},
    { rank: "吉", comment: "運が良いです。"},
];

const nameInput = document.getElementById("nameInput");
const drawBtn = document.getElementById("drawBtn");
const resultText = document.getElementById("resultText");
const commentText = document.getElementById("commentText");

drawBtn.addEventListener("click", () => {
    const idx = Math.floor(Math.random() * fortunes.length);
    const picked = fortunes[idx];

    const trimmedName = nameInput.value.trim();
    const targetName = trimmedName !== "" ? `${trimmedName}さん` : "匿名";

resultText.textContent = `${targetName}の運勢: ${picked.rank}`;
commentText.textContent = picked.comment;
});