//https://www.codetable.net/Group/combining-diacritical-marks
//https://en.wikipedia.org/wiki/Combining_character

module.exports = string => { //Returns an array of objects with any special characters in the input string, their separated combining diacritical marks flanked by two whitespaces, and their "lost" letters for all of ISO 192-383, namely    À Á Â Ã Ä Å Æ Ç È É Ê Ë Ì Í Î Ï Ð Ñ Ò Ó Ô Õ Ö Ø Ù Ú Û Ü Ý Þ ß à á â ã ä å æ ç è é ê ë ì í î ï ð ñ ò ó ô õ ö ø ù ú û ü ý þ ÿ Ā ā Ă ă Ą ą Ć ć Ĉ ĉ Ċ ċ Č č Ď ď Đ đ Ē ē Ĕ ĕ Ė ė Ę ę Ě ě Ĝ ĝ Ğ ğ Ġ ġ Ģ ģ Ĥ ĥ Ħ ħ Ĩ ĩ Ī ī Ĭ ĭ Į į İ ı Ĳ ĳ Ĵ ĵ Ķ ķ ĸ Ĺ ĺ Ļ ļ Ľ ľ Ŀ ŀ Ł ł Ń ń Ņ ņ Ň ň ŉ Ŋ ŋ Ō ō Ŏ ŏ Ő ő Œ œ Ŕ ŕ Ŗ ŗ Ř ř Ś ś Ŝ ŝ Ş ş Š š Ţ ţ Ť ť Ŧ ŧ Ũ ũ Ū ū Ŭ ŭ Ů ů Ű ű Ų ų Ŵ ŵ Ŷ ŷ Ÿ Ź ź Ż ż Ž ž ſ    which can be found at    https://docs.oracle.com/cd/E29584_01/webhelp/mdex_basicDev/src/rbdv_chars_mapping.html    , as well as for the following: Ð ð Ĳ ĳ Þ þ Ŋ ŋ œ Ə ə Œ ĸ

    if (string === undefined) { //Need to specify    string === undefined    rather than    !string    because the latter includes empty strings and we want to be able to differentiate between    string === ''    and    string === undefined    , and    typeof(string) !== 'string'    will capture    string === null   so    !string    would just cause harm here
        return 'Your input is undefined.'
    }
    if (typeof(string) !== 'string') {
        return 'Your input is not a string.'
    }
    if (string === '') {
        return 'Your input is empty.'
    }

    const alphabeticCharactersOnly = /\b[a-zA-Z]+\b/
    const lostArray = []


    const objectArray = [
        //Grave
        { character: '\u00C0', diacritic: '  \u0300  ', lose : 'A' }, // À
        { character: '\u00C8', diacritic: '  \u0300  ', lose : 'E' }, // È
        { character: '\u00CC', diacritic: '  \u0300  ', lose : 'I' }, // Ì
        { character: '\u00D2', diacritic: '  \u0300  ', lose : 'O' }, // Ò
        { character: '\u00D9', diacritic: '  \u0300  ', lose : 'U' }, // Ù
        { character: '\u00E0', diacritic: '  \u0300  ', lose : 'a' }, // à
        { character: '\u00E8', diacritic: '  \u0300  ', lose : 'e' }, // è
        { character: '\u00EC', diacritic: '  \u0300  ', lose : 'i' }, // ì
        { character: '\u00F2', diacritic: '  \u0300  ', lose : 'o' }, // ò
        { character: '\u00F9', diacritic: '  \u0300  ', lose : 'u' }, // ù

        //Acute
        { character: '\u00C1', diacritic: '  \u0301  ', lose : 'A' }, // Á
        { character: '\u0106', diacritic: '  \u0301  ', lose : 'C' }, // Ć
        { character: '\u00C9', diacritic: '  \u0301  ', lose : 'E' }, // É
        { character: '\u00CD', diacritic: '  \u0301  ', lose : 'I' }, // Í
        { character: '\u0139', diacritic: '  \u0301  ', lose : 'L' }, // Ĺ
        { character: '\u0143', diacritic: '  \u0301  ', lose : 'N' }, // Ń
        { character: '\u00D3', diacritic: '  \u0301  ', lose : 'O' }, // Ó
        { character: '\u0154', diacritic: '  \u0301  ', lose : 'R' }, // Ŕ
        { character: '\u015A', diacritic: '  \u0301  ', lose : 'S' }, // Ś
        { character: '\u00DA', diacritic: '  \u0301  ', lose : 'U' }, // Ú
        { character: '\u00DD', diacritic: '  \u0301  ', lose : 'Y' }, // Ý
        { character: '\u0179', diacritic: '  \u0301  ', lose : 'Z' }, // Ź
        { character: '\u00E1', diacritic: '  \u0301  ', lose : 'a' }, // á
        { character: '\u0107', diacritic: '  \u0301  ', lose : 'c' }, // ć
        { character: '\u00E9', diacritic: '  \u0301  ', lose : 'e' }, // é
        { character: '\u00ED', diacritic: '  \u0301  ', lose : 'i' }, // í
        { character: '\u013A', diacritic: '  \u0301  ', lose : 'l' }, // ĺ
        { character: '\u0144', diacritic: '  \u0301  ', lose : 'n' }, // ń
        { character: '\u00F3', diacritic: '  \u0301  ', lose : 'o' }, // ó
        { character: '\u0155', diacritic: '  \u0301  ', lose : 'r' }, // ŕ
        { character: '\u015B', diacritic: '  \u0301  ', lose : 's' }, // ś
        { character: '\u00FA', diacritic: '  \u0301  ', lose : 'u' }, // ú
        { character: '\u00FD', diacritic: '  \u0301  ', lose : 'y' }, // ý
        { character: '\u017A', diacritic: '  \u0301  ', lose : 'z' }, // ź

        //Double acute
        { character: '\u0150', diacritic: '  \u030b  ', lose : 'O' }, // Ő
        { character: '\u0170', diacritic: '  \u030b  ', lose : 'U' }, // Ű
        { character: '\u0151', diacritic: '  \u030b  ', lose : 'o' }, // ő
        { character: '\u0171', diacritic: '  \u030b  ', lose : 'u' }, // ű

        //Circumflex
        { character: '\u00C2', diacritic: '  \u0302  ', lose : 'A' }, // Â
        { character: '\u0108', diacritic: '  \u0302  ', lose : 'C' }, // Ĉ
        { character: '\u00CA', diacritic: '  \u0302  ', lose : 'E' }, // Ê
        { character: '\u011C', diacritic: '  \u0302  ', lose : 'G' }, // Ĝ
        { character: '\u0124', diacritic: '  \u0302  ', lose : 'H' }, // Ĥ
        { character: '\u00CE', diacritic: '  \u0302  ', lose : 'I' }, // Î
        { character: '\u0134', diacritic: '  \u0302  ', lose : 'J' }, // Ĵ
        { character: '\u00D4', diacritic: '  \u0302  ', lose : 'O' }, // Ô
        { character: '\u015C', diacritic: '  \u0302  ', lose : 'S' }, // Ŝ
        { character: '\u00DB', diacritic: '  \u0302  ', lose : 'U' }, // Û
        { character: '\u0174', diacritic: '  \u0302  ', lose : 'W' }, // Ŵ
        { character: '\u0176', diacritic: '  \u0302  ', lose : 'Y' }, // Ŷ
        { character: '\u00E2', diacritic: '  \u0302  ', lose : 'a' }, // â
        { character: '\u0109', diacritic: '  \u0302  ', lose : 'c' }, // ĉ
        { character: '\u00EA', diacritic: '  \u0302  ', lose : 'e' }, // ê
        { character: '\u011D', diacritic: '  \u0302  ', lose : 'g' }, // ĝ
        { character: '\u0125', diacritic: '  \u0302  ', lose : 'h' }, // ĥ
        { character: '\u00EE', diacritic: '  \u0302  ', lose : 'i' }, // î
        { character: '\u0135', diacritic: '  \u0302  ', lose : 'j' }, // ĵ
        { character: '\u00F4', diacritic: '  \u0302  ', lose : 'o' }, // ô
        { character: '\u015D', diacritic: '  \u0302  ', lose : 's' }, // ŝ
        { character: '\u00FB', diacritic: '  \u0302  ', lose : 'u' }, // û
        { character: '\u0175', diacritic: '  \u0302  ', lose : 'w' }, // ŵ
        { character: '\u0177', diacritic: '  \u0302  ', lose : 'y' }, // ŷ

        //Macron
        { character: '\u0100', diacritic: '  \u0304  ', lose : 'A' }, // Ā
        { character: '\u0112', diacritic: '  \u0304  ', lose : 'E' }, // Ē
        { character: '\u012A', diacritic: '  \u0304  ', lose : 'I' }, // Ī
        { character: '\u014C', diacritic: '  \u0304  ', lose : 'O' }, // Ō
        { character: '\u016A', diacritic: '  \u0304  ', lose : 'U' }, // Ū
        { character: '\u0101', diacritic: '  \u0304  ', lose : 'a' }, // ā
        { character: '\u0113', diacritic: '  \u0304  ', lose : 'e' }, // ē
        { character: '\u012B', diacritic: '  \u0304  ', lose : 'i' }, // ī
        { character: '\u014D', diacritic: '  \u0304  ', lose : 'o' }, // ō
        { character: '\u016B', diacritic: '  \u0304  ', lose : 'u' }, // ū

        //Tilde
        { character: '\u00C3', diacritic: '  \u0303  ', lose : 'A' }, // Ã
        { character: '\u0128', diacritic: '  \u0303  ', lose : 'I' }, // Ĩ
        { character: '\u00D1', diacritic: '  \u0303  ', lose : 'N' }, // Ñ
        { character: '\u00D5', diacritic: '  \u0303  ', lose : 'O' }, // Õ
        { character: '\u0168', diacritic: '  \u0303  ', lose : 'U' }, // Ũ
        { character: '\u00E3', diacritic: '  \u0303  ', lose : 'a' }, // ã
        { character: '\u0129', diacritic: '  \u0303  ', lose : 'i' }, // ĩ
        { character: '\u00F1', diacritic: '  \u0303  ', lose : 'n' }, // ñ
        { character: '\u00F5', diacritic: '  \u0303  ', lose : 'o' }, // õ
        { character: '\u0169', diacritic: '  \u0303  ', lose : 'u' }, // ũ

        //Dieresis/diaeresis/umlaut
        { character: '\u00C4', diacritic: '  \u0308  ', lose : 'A' }, // Ä
        { character: '\u00CB', diacritic: '  \u0308  ', lose : 'E' }, // Ë
        { character: '\u00CF', diacritic: '  \u0308  ', lose : 'I' }, // Ï
        { character: '\u00D6', diacritic: '  \u0308  ', lose : 'O' }, // Ö
        { character: '\u00DC', diacritic: '  \u0308  ', lose : 'U' }, // Ü
        { character: '\u0178', diacritic: '  \u0308  ', lose : 'Y' }, // Ÿ
        { character: '\u00E4', diacritic: '  \u0308  ', lose : 'a' }, // ä
        { character: '\u00EB', diacritic: '  \u0308  ', lose : 'e' }, // ë
        { character: '\u00EF', diacritic: '  \u0308  ', lose : 'i' }, // ï
        { character: '\u00F6', diacritic: '  \u0308  ', lose : 'o' }, // ö
        { character: '\u00FC', diacritic: '  \u0308  ', lose : 'u' }, // ü
        { character: '\u00FF', diacritic: '  \u0308  ', lose : 'y' }, // ÿ

        //Ring
        { character: '\u00C5', diacritic: '  \u030a  ', lose : 'A' }, // Å
        { character: '\u016E', diacritic: '  \u030a  ', lose : 'U' }, // Ů
        { character: '\u00E5', diacritic: '  \u030a  ', lose : 'a' }, // å
        { character: '\u016F', diacritic: '  \u030a  ', lose : 'u' }, // ů

        //Sharp cedilla above/below
        { character: '\u0122', diacritic: '  \u0317  ', lose : 'G' }, // Ģ
        { character: '\u0136', diacritic: '  \u0317  ', lose : 'K' }, // Ķ
        { character: '\u013B', diacritic: '  \u0317  ', lose : 'L' }, // Ļ
        { character: '\u0145', diacritic: '  \u0317  ', lose : 'N' }, // Ņ
        { character: '\u0156', diacritic: '  \u0317  ', lose : 'R' }, // Ŗ
        { character: '\u0218', diacritic: '  \u0317  ', lose : 'S' }, // Ș
        { character: '\u0123', diacritic: '  \u0317  ', lose : 'g' }, // ģ
        { character: '\u0137', diacritic: '  \u0317  ', lose : 'k' }, // ķ
        { character: '\u013C', diacritic: '  \u0317  ', lose : 'l' }, // ļ
        { character: '\u0146', diacritic: '  \u0317  ', lose : 'n' }, // ņ
        { character: '\u0157', diacritic: '  \u0317  ', lose : 'r' }, // ŗ
        { character: '\u0219', diacritic: '  \u0317  ', lose : 's' }, // ș

        //Curled cedilla
        { character: '\u00C7', diacritic: '  \u0327  ', lose : 'C' }, // Ç
        { character: '\u015E', diacritic: '  \u0327  ', lose : 'S' }, // Ş
        { character: '\u0162', diacritic: '  \u0327  ', lose : 'T' }, // Ţ
        { character: '\u00E7', diacritic: '  \u0327  ', lose : 'c' }, // ç
        { character: '\u015F', diacritic: '  \u0327  ', lose : 's' }, // ş
        { character: '\u0163', diacritic: '  \u0327  ', lose : 't' }, // ţ

        //X above
        { character: '\u00F0', diacritic: '  \u033d  ', lose : 'o' }, // ð

        //Short stroke overlay (vs long which is 0335 and doesn't appear to exist in any of these characters)
        { character: '\u00D0', diacritic: '  \u0335  ', lose : 'D' }, // Ð ...looks like Đ in most fonts but it's a different character, it's the capital eth (ð)
        { character: '\u0110', diacritic: '  \u0335  ', lose : 'D' }, // Đ
        { character: '\u0126', diacritic: '  \u0335  ', lose : 'H' }, // Ħ
        { character: '\u0166', diacritic: '  \u0335  ', lose : 'T' }, // Ŧ
        { character: '\u0111', diacritic: '  \u0335  ', lose : 'd' }, // đ
        { character: '\u0127', diacritic: '  \u0335  ', lose : 'h' }, // ħ
        { character: '\u0167', diacritic: '  \u0335  ', lose : 't' }, // ŧ

        //Small solidus - this is knowingly incorrect for Ł and ł but there is no combining character
        { character: '\u00F8', diacritic: '  \u0337  ', lose : 'o' }, // ø
        { character: '\u0141', diacritic: '  \u0337  ', lose : 'L' }, // Ł
        { character: '\u0142', diacritic: '  \u0337  ', lose : 'l' }, // ł

        //Capital solidus
        { character: '\u00D8', diacritic: '  \u0338  ', lose : 'O' }, // Ø

        //Breve
        { character: '\u0102', diacritic: '  \u0306  ', lose : 'A' }, // Ă
        { character: '\u0114', diacritic: '  \u0306  ', lose : 'E' }, // Ĕ
        { character: '\u011E', diacritic: '  \u0306  ', lose : 'G' }, // Ğ
        { character: '\u012C', diacritic: '  \u0306  ', lose : 'I' }, // Ĭ
        { character: '\u014E', diacritic: '  \u0306  ', lose : 'O' }, // Ŏ
        { character: '\u016C', diacritic: '  \u0306  ', lose : 'U' }, // Ŭ
        { character: '\u0103', diacritic: '  \u0306  ', lose : 'a' }, // ă
        { character: '\u0115', diacritic: '  \u0306  ', lose : 'e' }, // ĕ
        { character: '\u011F', diacritic: '  \u0306  ', lose : 'g' }, // ğ
        { character: '\u012D', diacritic: '  \u0306  ', lose : 'i' }, // ĭ
        { character: '\u014F', diacritic: '  \u0306  ', lose : 'o' }, // ŏ
        { character: '\u016D', diacritic: '  \u0306  ', lose : 'u' }, // ŭ

        //Dot above
        { character: '\u010A', diacritic: '  \u0307  ', lose : 'C' }, // Ċ
        { character: '\u0116', diacritic: '  \u0307  ', lose : 'E' }, // Ė
        { character: '\u0120', diacritic: '  \u0307  ', lose : 'G' }, // Ġ
        { character: '\u0130', diacritic: '  \u0307  ', lose : 'I' }, // İ
        { character: '\u017B', diacritic: '  \u0307  ', lose : 'Z' }, // Ż
        { character: '\u010B', diacritic: '  \u0307  ', lose : 'c' }, // ċ
        { character: '\u0117', diacritic: '  \u0307  ', lose : 'e' }, // ė
        { character: '\u0121', diacritic: '  \u0307  ', lose : 'g' }, // ġ
        { character: '\u017C', diacritic: '  \u0307  ', lose : 'z' }, // ż

        //Dot middle
        { character: '\u013F', diacritic: '  \u00B7  ', lose : 'L' }, // Ŀ
        { character: '\u0140', diacritic: '  \u00B7  ', lose : 'l' }, // ŀ

        //Ogonek
        { character: '\u0104', diacritic: '  \u0328  ', lose : 'A' }, // Ą
        { character: '\u0118', diacritic: '  \u0328  ', lose : 'E' }, // Ę
        { character: '\u012E', diacritic: '  \u0328  ', lose : 'I' }, // Į
        { character: '\u0172', diacritic: '  \u0328  ', lose : 'U' }, // Ų
        { character: '\u0105', diacritic: '  \u0328  ', lose : 'a' }, // ą
        { character: '\u0119', diacritic: '  \u0328  ', lose : 'e' }, // ę
        { character: '\u012F', diacritic: '  \u0328  ', lose : 'i' }, // į
        { character: '\u0173', diacritic: '  \u0328  ', lose : 'u' }, // ų

        //Comma above right
        { character: '\u013D', diacritic: '  \u0315  ', lose : 'L' }, // Ľ
        { character: '\u013E', diacritic: '  \u0315  ', lose : 'l' }, // ľ
        { character: '\u0165', diacritic: '  \u0315  ', lose : 't' }, // ť
        { character: '\u010F', diacritic: '  \u0315  ', lose : 'd' }, // ď

        //Comma above left
        { character: '\u0149', diacritic: '  \u0313  ', lose : 'n' }, // ŉ

        //Caron
        { character: '\u010C', diacritic: '  \u030c  ', lose : 'C' }, // Č
        { character: '\u010E', diacritic: '  \u030c  ', lose : 'D' }, // Ď
        { character: '\u011A', diacritic: '  \u030c  ', lose : 'E' }, // Ě
        { character: '\u0147', diacritic: '  \u030c  ', lose : 'N' }, // Ň
        { character: '\u0158', diacritic: '  \u030c  ', lose : 'R' }, // Ř
        { character: '\u0160', diacritic: '  \u030c  ', lose : 'S' }, // Š
        { character: '\u0164', diacritic: '  \u030c  ', lose : 'T' }, // Ť
        { character: '\u017D', diacritic: '  \u030c  ', lose : 'Z' }, // Ž
        { character: '\u010D', diacritic: '  \u030c  ', lose : 'c' }, // č
        { character: '\u011B', diacritic: '  \u030c  ', lose : 'e' }, // ě
        { character: '\u0148', diacritic: '  \u030c  ', lose : 'n' }, // ň
        { character: '\u0159', diacritic: '  \u030c  ', lose : 'r' }, // ř
        { character: '\u0161', diacritic: '  \u030c  ', lose : 's' }, // š
        { character: '\u017E', diacritic: '  \u030c  ', lose : 'z' }, // ž

    ]

    string.split('').forEach(i => {
        if (!alphabeticCharactersOnly.test(i) && i !== ' ') {
            let characterArray = objectArray.filter(j => j.character === i)
            if (characterArray.length > 0) {
                lostArray.push(characterArray[0])
            }
            if (characterArray.length > 1) { //pending delete
                console.log(`NOOOOOO: ${JSON.stringify(i)}`);
            }
        }
    })

    return lostArray

}
