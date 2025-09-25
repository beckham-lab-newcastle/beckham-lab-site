fetch('assets/data/orcid-works.json')
  .then(response => response.json())
  .then(data => {
    const publicationList = document.getElementById('publication-list');
    data['group'].forEach(item => {
      const title = item['work-summary'][0]['title']['title']['value'];
      const url = item['work-summary'][0]['url'] || '#';
      const li = document.createElement('li');
      li.innerHTML = `<a href="${url}" target="_blank">${title}</a>`;
      publicationList.appendChild(li);
    });
  })
  .catch(error => console.error('Error loading publications:', error));
