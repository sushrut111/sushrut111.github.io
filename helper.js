const sections = [
  { id: 'home', selector: '.homesel' },
  { id: 'skills', selector: '.skillssel' },
  { id: 'projects', selector: '.projectssel' },
  { id: 'about', selector: '.aboutsel' },
  { id: 'contact', selector: '.contactsel' },
];

sections.forEach(({ id, selector }) => {
  $(`#${id}`).on('inview.uk.scrollspy', () => {
    $(selector).parent().addClass('is-active');
  });

  $(`#${id}`).on('outview.uk.scrollspy', () => {
    $(selector).parent().removeClass('is-active');
  });
});
