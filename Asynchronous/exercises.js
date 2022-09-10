"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");
//exercises  1
/*
let renderCountry = function (data) {
  let html = ` <article class="country">
          <img class="country__img" src="${data.flags.png}" />
          <div class="country__data">
            <h3 class="country__name">${data.altSpellings[1]}</h3>
            <h4 class="country__region">${data.continents}</h4>
            <p class="country__row"><span>👫</span>${data.population}</p>
           
            
          </div>
        </article>`;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};
let whereAmI = function (lon, lat) {
  fetch(
    `https://geocode.xyz/${lon},${lat}?geoit=json&auth=494236196032854532700x110203}`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("error");
      }
      return response.json();
    })
    .then((data) => {
      let d = data.prov.toLowerCase();
      console.log(`Yo're in ${data.city} , ${data.country}`);
      return fetch(`https://restcountries.com/v3.1/alpha/${d}`);
    })
    .then((response2) => {
      if (!response2.ok) {
        throw new Error("error");
      }
      return response2.json();
    })
    .then((data2) => {
      renderCountry(data2[0]);
    })
    .catch((error) => console.log("error"));
};
whereAmI(48.864716, 2.349014);
whereAmI(4716, 2.349014);

let res = function () {
  return new Promise((resolve, reject) => {
    //reject(444);
    resolve("start counting ");
  });
};
function counter(val) {
  console.log(val);
}
res()
  .then((e) => {
    counter(e);
    return "one";
  })
  .then((e) => counter(e))
  .catch((r) => console.log(new Error(r)));




*/
let img1 = document.createElement("img");
img1.setAttribute("src", "img/img-1.jpg");
let img2 = document.createElement("img");
img2.setAttribute("src", "img/img-3.jpg");
//EXERCISES 2

let images = document.querySelector(".images");
function createElement(img) {
  return new Promise((resolve) => {
    img.addEventListener("load", function () {
      images.append(img);

      resolve(img);
    });
  });
}
let gg;
createElement(img1).then((img) => {
  setTimeout(() => {
    return createElement(img2);
  }, 5000);
});
//.then(() => //console.log(3));
console.log(gg);
/*
console.log("start");

const promise1 = Promise.resolve().then(() => {
  console.log("promise1");
  const timer2 = setTimeout(() => {
    console.log("timer2");
  }, 0);
});

const timer1 = setTimeout(() => {
  console.log("timer1");
  const promise2 = Promise.resolve().then(() => {
    console.log("promise2");
  });
}, 0);

console.log("end");
Promise.reject(1)
  // skip
  // обработать reject можно только в .catch
  .then((data) => {
    console.log(data);
  })

  // второй аргумент .then вместо .catch
  .then(null, (data) => console.log(data)) // => 1

  // после обработки ошибки попадаем в .then
  // => "ok"
  .then(() => console.log("ok"));

Promise.reject()

  .then(
    (data) => console.log("ok"), 
    (data) => console.log("error")
  );

  Promise.resolve("1")
   
    .then(null)

    .then(data => console.log(data)) 
    

Promise.reject("Api Error")

  .then((data) => console.log("ok"))

  .catch((error) => {
    console.log(error);
    return "1";
  })

  .then((data) => {
    console.log(data);
  });
Promise.reject()

  .catch(() => {
    console.log("error1");
    return Promise.reject();
  })

  .catch(() => {
    console.log("error2");
  });

Promise.resolve()
  .then((data) => {
    throw new Error("Api Error");

    return 1;
  })

  .then((data) => console.log("ok"))

  .catch((error) => {
    console.log(error.message);
    return "2";
  })

  .then((data) => {
    console.log(data);
  });
Promise.resolve().then(() => {
  throw new Error("Api Error");
});

// код будет работать
setTimeout(() => {
  console.log("setTimeout"); // => "setTimeout"
}, 1000);
Promise.resolve()
  .then(() => console.log(1)) // "Первый"
  .then(() => {
    console.log(2);
    throw new Error();
  }) // "Третий"
  .catch(() => console.log(3)) // "Пятый"
  .then(() => console.log(4)); // "Седьмой"

Promise.resolve()
  .then(() => console.log(11)) // "Второй"
  .then(() => {
    console.log(12);
    throw new Error();
  }) // "Четвертый"
  .catch(() => console.log(13)) // "Шестой"
  .then(() => console.log(14));

Promise.reject()
  // обработка Promise.reject
  .catch(() => {
    console.log("error1"); // => "error1"
    return Promise.reject();
    // аналогично
    // return reject();
  })

  // обработка Promise.reject из предыдущего .catch
  .catch(() => {
    console.log("error2"); // => "error2"
  });
let arr = "fgghghfdsf";
//arr = [...new Set(arr)];
console.log(Array.from(new Set(arr)).join(""));
let object = {};
let m = 0;
let m2 = 0;
function times(arr) {
  arr.forEach((el) => {
    object[el] ? (object[el] += 1) : (object[el] = 1);
  });

  for (let [x, y] of Object.entries(object)) {
    if (y > m) {
      m = y;
      m2 = x;
    }
  }
  console.log(m2, m);
}
times(["hello", "hello", "my", "my", "my", "g"]);

function string(x, y) {
  y = y.split("").reverse().join("");
  if (x === y) {
    return true;
  } else {
    return false;
  }
}
console.log(string("mardi", "iram"));
*/
let count;
function sub(x, y) {
  if (x.length < y.length) {
    return false;
  } else {
    y.forEach((el) => {
      if (x.includes(el)) {
      } else {
        count = 1;
      }
    });
    return count !== 1;
  }
}
console.log(sub([1, 1, 1, 3], [1, 3, 3]));
