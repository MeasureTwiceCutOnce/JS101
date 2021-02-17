// Here the LS answer below took the stack approach. So it looks like filter is the method that I could have used to get this problem done.

function isBlockWord(word) {
    let blocks = ['BO', 'XK', 'DQ', 'CP', 'NA', 'GT', 'RE', 'FS', 'JW', 'HU', 'VI', 'LY', 'ZM'];
    let letters = word.split("");

    for (let index = 0; index < letters.length; index += 1) {
      let matchingBlock = blocks.filter(block => {
        return block.indexOf(letters[index].toUpperCase()) > -1;
      })[0];

      if (matchingBlock === undefined) {
        return false;
      } else {
        blocks.splice(blocks.indexOf(matchingBlock), 1);
      }
    }

    return true;
  }

// LS below using regex
function isBlockWord(word) {
    let blocks = [/B|O/gi, /X|K/gi, /D|Q/gi, /C|P/gi, /N|A/gi,
                  /G|T/gi, /R|E/gi, /F|S/gi, /J|W/gi, /H|U/gi,
                  /V|I/gi, /L|Y/gi, /Z|M/gi];

    return blocks.every(regExp => {
      return (word.match(regExp) || []).length < 2;
    });
  }

// Coen below did a smooth way of creating a new array of the used letters and then checking to see if the length of that array is the same as the length of the original string.
function isBlockWord(str) {
    let letterCount = [];
    let blocks = ['BO', 'XK', 'DQ', 'CP', 'NA', 'GT', 'RE',
                  'FS', 'JW', 'HU', 'VI', 'LY', 'ZM'];

    str.split('').forEach(char => {
      for (let block = 0; block < blocks.length; block += 1) {
        if (blocks[block].includes(char.toUpperCase())) {
          letterCount.push(blocks.splice(block, 1));
          continue;
        }
      }
    });

    return letterCount.length === str.length;
  }
// Nicolle has a smooth answer which checks each letter's index and compares that with the same letter's last index. If they match then true, if not then false. Then she checks if the ...not sure what the second if statement is checking.
let blocks = {
    B:'O',
    X:'K',
    D:'Q',
    C:'P',
    N:'A',
    G:'T',
    R:'E',
    F:'S',
    J:'W',
    H:'U',
    V:'I',
    L:'Y',
    Z:'M'
  };

  function isBlockWord(word) {
    let ucWord = word.toUpperCase();

    for (let i = 0; i < ucWord.length; i++) {
      if (i !== ucWord.lastIndexOf(ucWord[i])) {
        return false;
      }
      if (blocks[ucWord[i]] && ucWord.includes(blocks[ucWord[i]])) {
        return false;
      }
    }
    return true;
  }