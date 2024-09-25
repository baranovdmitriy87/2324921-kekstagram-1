const thumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture');

const createThumbnail = ({ comments, description, likes, url, id }) => {
  const thumbnail = thumbnailTemplate.cloneNode(true);
  const imageElement = thumbnail.querySelector('.picture__img');

  imageElement.src = url;
  imageElement.alt = description;
  thumbnail.querySelector('.picture__comments').textContent = comments.length;
  thumbnail.querySelector('.picture__likes').textContent = likes;
  thumbnail.dataset.thumbnailId = id;

  return thumbnail;
};

const renderThumbnails = (pictures, containerElement) => {
  containerElement.querySelectorAll('.picture').forEach((element) => element.remove());
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const thumbnail = createThumbnail(picture);
    fragment.append(thumbnail);
  });
  containerElement.append(fragment);
};

export { renderThumbnails };

