function scuberGreetingForFeet(feet){
  if (feet <= 2500) {
    if (feet <= 2000) {
      if (feet <= 400) {
        return 'This one is on me!'
      };
      return 'That will be twenty bucks.'
    };
    return 'I will gladly take your thirty bucks.'
  } else {
    return 'No can do.'
  };
};

function ternaryCheckCity(city){
  return city === 'NYC' ? "Ok, sounds good." : "No go."
}

function switchOnCharmFromTip(tip){
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
      break;
    case 'not as generous':
      return 'Thank you.';
      break;
    default:
      return 'Bye.'
      break;
  }
}