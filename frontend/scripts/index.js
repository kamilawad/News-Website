const news_container = $("#news");
const addbtn = $('#add-news');
const titleContainer = $('#title');
const textContainer = $('#content');
const form = $('#add-news-form');

const getNews = () => {
  $.ajax({
    url: "http://localhost/News-Website/backend/getNews.php",
    type: "GET",
    dataType: "json",
    success: data => {
      displayNews(data);
    },
    error: function(error) {
      console.error(error);
    }
  });

  /*fetch("http://localhost/News-Website/backend/getNews.php", {
    method: "GET",
  })
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    displayNews(data);
  })
  .catch((error) => {
    console.error(error);
  });*/
};

const addNews = () => {
  const formData = new FormData();
  formData.append('title', titleContainer.val());
  formData.append('text', textContainer.val());

  $.ajax({
    url: "http://localhost/News-Website/backend/create.php",
    type: "POST",
    data: formData,
    processData: false,
    contentType: false,
    success: data => getNews(),
    error: function(error) {
      console.error(error);
    }
  });
  
  /*
  contentType: "application/json",
  data: JSON.stringify(jsonData),
  data: {
    title: "Example Title",
    text: "Example Text"
  },*/

  /*fetch("http://localhost/News-Website/backend/create.php", {
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
});*/
};

form.on('submit', (e) => {
  e.preventDefault();
  addNews();
});

const displayNews = (data) => {
  $.each(data.news, (index, element) => {
    const newCard = generateNew(element);
    news_container.append(newCard);
  });
};

const generateNew = (data) => {
  const {title, text} = data;
  return `<div class='card mb-3'>
            <div class='card-body'>
              <h5 class='card-title'>${title}</h5>
              <p class='card-text'>${text}</p>
              <p class='card-text'><small class='text-muted'>Author: Kamil Awad</small></p>
            </div>
          </div>`
}

getNews();