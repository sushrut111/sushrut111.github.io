if (typeof annyang !== 'undefined') {
  const commands = {
    'scroll (to) *tag': scroll,
    'show (me) *tag': scroll,
    'go (to) *tag': scroll,
  };

  function scroll(argument) {
    const target = argument.toLowerCase().replace(/\s+/g, '-');
    const section = document.getElementById(target) ? `#${target}` : '#home';
    UIkit.scroll(document.documentElement).scrollTo(section);
  }

  annyang.addCommands(commands);
  annyang.start();
}
