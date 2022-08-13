import { galleryItems } from "./gallery-items";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createGalleryCardsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

function createGalleryCardsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `

        <a class="gallery__item" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>`;
    })
    .join("");
}

const lightbox = new SimpleLightbox(".gallery a", {
  caption: true,
  captionType: "attr",
  captionPosition: "bottom",
  captionDelay: 350,
  captionsData: "alt",
});

console.log(galleryItems);
