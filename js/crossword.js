// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL 
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have 
		// two entries: an across entry and a down entry
		var puzzleData = [
			 	{
					clue: "India is known for its strict class system from rich to poor...called the __ system",
					answer: "caste",
					position: 1,
					orientation: "across",
					startx: 1,
					starty: 1
				},
			 	{
					clue: "The earliest known work of Indian literature",
					answer: "vedas",
					position: 3,
					orientation: "across",
					startx: 7,
					starty: 1
				},
				{
					clue: "Sri Lanka is an island that was formerly called....",
					answer: "capacitance",
					position: 5,
					orientation: "across",
					startx: 1,
					starty: 3
				},
				{
					clue: "This country broke away from India because they are mostly Islamic",
					answer: "idlespeeds",
					position: 8,
					orientation: "across",
					startx: 1,
					starty: 5
				},
				{
					clue: "Governor-general of India.",
					answer: "impedances",
					position: 10,
					orientation: "across",	
					startx: 2,
					starty: 7
				},
				{
					clue: "An Indian officer in the British Indian Army.",
					answer: "transformer",
					position: 13,
					orientation: "across",
					startx: 1,
					starty: 9
				},
				{
					clue: "A ruler exercising authority in a colony on behalf of a sovereign.",
					answer: "gamma",
					position: 16,
					orientation: "across",
					startx: 1,
					starty: 11
				},
				{
					clue: "The former Hindu practice of a widow throwing herself onto her husband's funeral pyre.",
					answer: "cysan",
					position: 17,
					orientation: "across",
					startx: 7,
					starty: 11
				},
				{
					clue: "An invention brought to India by the British.",
					answer: "ascii",
					position: 1,
					orientation: "down",
					startx: 1,
					starty: 1
				},
				{
					clue: "The Mughal empire ______ in 1857",
					answer: "end",
					position: 2,
					orientation: "down",
					startx: 5,
					starty: 1
				},
				{
					clue: "Vedic literature contains Gayatri Mantra",
					answer: "dig",
					position: 4,
					orientation: "down",
					startx: 9,
					starty: 1
				},
				{
					clue: "The hymns of regveda were composed by",
					answer: "udgatri",
					position: 6,
					orientation: "down",
					startx: 7,
					starty: 3
				},
				{
					clue: "___ Singh was a chief organizer in the fight against the British in Bih",
					answer: "em",
					position: 7,
					orientation: "down",
					startx: 11,
					starty: 3
				},
				{
					clue: "Rani of ___ was a powerful female leader in the rebellion.",
					answer: "steps",
					position: 9,
					orientation: "down",
					startx: 5,
					starty: 5
				},
				{
					clue: "The adopted son of the ex-peshwa was named Nana ___.",
					answer: "siren",
					position: 11,
					orientation: "down",
					startx: 11,
					starty: 7
				},
				{
					clue: "A term used for Indian land holders in Mughal and British times.",
					answer: "it",
					position: 12,
					orientation: "down",
					startx: 1,
					starty: 8
				},
				{
					clue: "A severe uprising occurred here on May 30th.",
					answer: "atm",
					position: 14,
					orientation: "down",
					startx: 3,
					starty: 9
				},
				{
					clue: "Indian state that was annexed on Feb. 13th",
					answer: "occ",
					position: 15,
					orientation: "down",
					startx: 7,
					starty: 9
				}
			] 
	
		$('#puzzle-wrapper').crossword(puzzleData);
		
	})
	
})(jQuery)
