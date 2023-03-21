// JSON 데이터 가져오기
const data = [
  {
    title: "제목1",
    author: "작성자1",
    date: "2022-03-21",
    views: "0",
  },
  {
    title: "제목2",
    author: "작성자2",
    date: "2022-03-21",
    views: "0",
  },
  {
    title: "제목3",
    author: "작성자3",
    date: "2022-03-21",
    views: "0",
  },
  {
    title: "제목4",
    author: "작성자4",
    date: "2022-03-21",
    views: "0",
  },
  {
    title: "제목5",
    author: "작성자5",
    date: "2022-03-21",
    views: "0",
  },
  {
    title: "제목6",
    author: "작성자6",
    date: "2022-03-21",
    views: "0",
  },
  {
    title: "제목7",
    author: "작성자7",
    date: "2022-03-21",
    views: "0",
  },
  {
    title: "제목8",
    author: "작성자8",
    date: "2022-03-21",
    views: "0",
  },
  {
    title: "제목9",
    author: "작성자9",
    date: "2022-03-21",
    views: "0",
  },
  {
    title: "제목10",
    author: "작성자10",
    date: "2022-03-21",
    views: "0",
  },
];

// HTML 리스트 생성하기

const textList = document.getElementById("mainPage-text-list");
data.forEach((item) => {
  const li = document.createElement("li");
  li.classList.add("my-list-item");
  li.innerHTML = `
  <div id="my-list-item-title">
    <p class="title">${item.title}</p>
  </div>
  <div id="my-list-item-except-title">
    <p class="author">${item.author}</p>
    <p class="date">${item.date}</p>
    <p class="views">${item.views}</p>
  </div>
  `;
  const line = document.createElement("hr");
  textList.appendChild(li);
  textList.appendChild(line);
});
