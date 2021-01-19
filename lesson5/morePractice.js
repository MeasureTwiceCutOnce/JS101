let munsters = {
    herman: { age: 32, gender: 'male' },
    lily: { age: 30, gender: 'female' },
    grandpa: { age: 402, gender: 'male' },
    eddie: { age: 10, gender: 'male' },
    marilyn: { age: 23, gender: 'female'}
  };


  let members = Object.entries(munsters);
  let data = Object.values(munsters);

  members.forEach(person => {
      console.log(`${person[0]} is a ${person[1]["age"]}-year-old ${person[1]["gender"]}.`)
  })



// let munsters = {
//     Herman: { age: 32, gender: 'male' },
//     Lily: { age: 30, gender: 'female' },
//     Grandpa: { age: 402, gender: 'male' },
//     Eddie: { age: 10, gender: 'male' },
//     Marilyn: { age: 23, gender: 'female'}
//   };

//   //   let member = Object.keys(munsters);
//   let data = Object.values(munsters);
//   let totalAge = 0;

//   console.log(data.forEach(person => {
//     if(person.gender === "male") {
//         return totalAge += person.age;
//     }
//   }))

// let books = [
//     { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
//     { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
//     { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
//     { title: 'Ulysses', author: 'James Joyce', published: '1922' },
//     { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
//   ];

//   console.log(books.sort((a,b) => Number(a.published) - Number(b.published)));



// let arr = ['10', '11', '9', '7', '8'];

// console.log(arr.sort((a,b) => b - a));

