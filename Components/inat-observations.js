class INatObservations extends HTMLElement {
  connectedCallback() {
    // Optional: allow custom attributes for flexibility
    const taxonId = this.getAttribute('taxon-id') || '47170';
    const perPage = this.getAttribute('per-page') || '50';
    const interval = parseInt(this.getAttribute('interval')) || 10000;

    this.innerHTML = `<ul class="list-none"></ul>`;
    const apiUrl = `https://api.inaturalist.org/v1/observations?taxon_id=${taxonId}&per_page=${perPage}&order_by=random&random_seed=${Math.random()}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const ul = this.querySelector('ul');
        data.results
          .filter(observation => observation.species_guess)
          .forEach(observation => {
            const li = document.createElement('li');
            li.className = "hidden";
            li.innerHTML = `
              <a href="${observation.uri}" target="_blank" class="block">
                <div class="w-60 h-48 overflow-hidden flex justify-center items-center mx-auto pt-5">
                  <img src="${observation.photos[0]?.url.replace('square', 'large') || ''}" alt="${observation.taxon.name}" class="w-full h-full object-cover">
                </div>
                <div class="w-60 h-24 flex flex-col justify-center items-center rounded-lg mx-auto">
                  <p class="text-lg text-white truncate">${observation.species_guess}</p>
                  <p class="text-sm italic text-white truncate"><em>${observation.taxon.name}</em></p>
                </div>
              </a>
            `;
            ul.appendChild(li);
          });

        // Slideshow logic
        let currentIndex = 0;
        const slides = ul.getElementsByTagName("li");

        function showSlide(index) {
          for (let i = 0; i < slides.length; i++) {
            slides[i].classList.add("hidden");
          }
          slides[index].classList.remove("hidden");
        }

        function startSlideshow() {
          showSlide(currentIndex);
          currentIndex = (currentIndex + 1) % slides.length;
          setInterval(() => {
            showSlide(currentIndex);
            currentIndex = (currentIndex + 1) % slides.length;
          }, interval);
        }

        if (slides.length > 0) {
          startSlideshow();
        }
      })
      .catch(error => console.error("Error fetching iNaturalist data:", error));
  }
}

customElements.define('inat-observations', INatObservations);