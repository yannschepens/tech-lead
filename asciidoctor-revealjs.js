// Load asciidoctor.js and asciidoctor-reveal.js
var asciidoctor = require('@asciidoctor/core')();
var asciidoctorRevealjs = require('@asciidoctor/reveal.js');
asciidoctorRevealjs.register();

// Convert the document 'presentation.adoc' using the reveal.js converter
var options = {safe: 'safe', backend: 'revealjs', to_dir: '.', mkdirs: true, standalone: true};
asciidoctor.convertFile('index.adoc', options);
