
    if (annyang) {
  // Let's define our first command. First the text we expect, and then the function it should call
  var commands = {
    'scroll (to) *tag': scroll,
    'show (to) *tag': scroll,
    'go (to) *tag': scroll,
  };

  function scroll(argument) {
    x = UIkit.scroll("#home");
    x.scrollTo("#"+argument);

  }
  // Add our commands to annyang
  annyang.addCommands(commands);

  // Start listening. You can call this here, or attach this call to an event, button, etc.
  annyang.start();
}




