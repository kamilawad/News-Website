const news_container = $("#news_container");
const addbtn = $('#add-news');
const title = $('#title');
const text = $('#content');
const form = $('#add-news-form');

const getNews = () => {
  fetch("http://localhost/News-Website/backend/getNews.php", {
    method: "GET",
  })
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    //display(data);
  })
  .catch((error) => {
    console.error(error);
  });
};

const addNews = () => {
  const formData = new FormData();
  formData.append('title', title.val());
  formData.append('text', text.val());
  fetch("http://localhost/News-Website/backend/create.php", {
  method: "POST",
  body: formData
})
.then((response) => {
  return response.json();
})
.then((data) => {
  console.log(data);
  getNews();
})
.catch((error) => {
  console.error(error);
});
};

form.submit((e) => {
  e.preventDefault();
  addNews();
});

const displayNews = (data) => {
  
}

getNews();