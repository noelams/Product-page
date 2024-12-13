fetch("products.json")
  .then((response) => response.json())
  .then((data) => {
    const productsContainer = document.getElementById("productsContainer");

    data.forEach((product) => {
      productsContainer.innerHTML += `
        <div class="products" id="${product.id}">
          <img src="${product.imgSrc}" alt="${product.alt}" width="300px" height="400px" />
          <button class="favorites"></button>
          <button class="open-modal">View</button>
          <div class="product-details">
            <p class="product-name">${product.name}</p>
            <p class="product-price">${product.price}</p>
          </div>
        </div>
      `;
    });
  })
  .catch((error) => console.error("Error fetching products:", error));

document.addEventListener("click", (e) => {
  if (e.target.matches(".open-modal")) {
    const openModal = document.querySelector("#modal-view");
    const modalView = document.querySelector(".modal-view");
    const productElement = e.target.closest(".products");
    const productId = productElement.getAttribute("id");

    const productImage = productElement.querySelector("img").src;
    const productAlt = productElement.querySelector("img").alt;
    productElement.querySelector(".product-name").textContent;
    const productName =
      productElement.querySelector(".product-name").textContent;
    const productPrice =
      productElement.querySelector(".product-price").textContent;
    console.log("clicked");
    console.log(
      productId,
      productImage,
      productName,
      productPrice,
      productElement,
      productAlt
    );
    modalView.innerHTML = `<div class="modal-content">
      <img src=${productImage} alt=${productAlt} width=300px height = 400px/>
      <p>${productName}</p>
      <p>${productPrice}</p>
      <button class="close-modal"></button>
    </div>`;
    openModal.showModal();

    // Close modal when the close button is clicked
    document.querySelector(".close-modal").addEventListener("click", () => {
      openModal.close();
    });

    // Close modal when clicking outside the modal content
    openModal.addEventListener("click", (e) => {
      const modalContent = openModal.querySelector(".modal-content");
      if (!modalContent.contains(e.target)) {
        openModal.close();
      }
    });
  }
});
