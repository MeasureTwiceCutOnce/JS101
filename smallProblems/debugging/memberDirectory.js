let memberDirectory = {
    'Jane Doe': '323-8293',
    'Margaret Asbury': '989-1111',
    'Callum Beech': '533-9090',
    'Juanita Eastman': '424-1919',
  };

  function isValidName(name) {
    return (/^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/).test(name);
  }

  function isValidPhone(phone) {
    return (/^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i).test(phone);
  }

  function validMemberInfo(name, phone) {
    return isValidName(name) && isValidPhone(phone);
  }

  function addMember(name, phone) {
    if (validMemberInfo(name, phone)) {
      memberDirectory[name] = phone;
    } else {
      console.log('Invalid member information.');
    }
  }

//   addMember('Laura Carlisle', '444-2223');
//   addMember('Rachel Garcia', '232-1191');
//   addMember('Earl 5mith', '331-9191');

//   console.log(memberDirectory);
console.log(
    // isValidName('Laura Carlisle1'), //true even with non alpha
    // isValidName('Laura Carlisle'),
    // isValidName('Laura Carlisle '),
    isValidPhone('444-2223'), //false no matter what
    isValidPhone('44(4)-2223'),
    // isValidPhone('444-2as223'),
    )