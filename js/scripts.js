var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceratops';
var dinosaurUppercase = dinosaur.toUpperCase();

// Then replace 'Velociraptor' in the text from the variable 'text'
// to the value of the variable 'dinosaur', using the built-in functions of the subtitles.
var newText = text.replace('Velociraptor',dinosaur);
/*
Display with console.log () only the first half of the received sentence (length / 2), also using the subtitle function.
*/
console.log(newText.length/2);
console.log(newText.slice(0,72));
