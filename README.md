![screen of your app](https://via.placeholder.com/1000x300)

# KANBAN BOARD (React and Hooks)

&nbsp;

## Table of contents

[⭐ Overview](#⭐-overview)
  - [The challenge](#the-challenge)
  - [Instalation](#Installation-💿)
  - [Links](#links)
  - [Screenshot](#screenshot)

[💡 My process](#💡-my-process)
  - [Technologies](#Technologies)
  - [Solutions provided in the project](#Solutions-provided-in-the-project)
  - [Useful resources](#useful-resources)
  - [Copyrights](#copyrights)

[🙋‍♂️ Author](#🙋‍♂️-author)

[👏 Special Thanks](#👏-special-thanks)


&nbsp;

## ⭐ Overview

&nbsp;

### **The challenge:**

It was my first small project using `React` and `Hooks`.
The challenge was to implement the Kanban system similar to this one: https://kanbanblog.com/explained/.
&nbsp;

To familarize the Kanban concept I recommend watching the [video]( https://www.youtube.com/watch?v=iVaFVa7HYj4&list=PLaD4FvsFdarR3oF1gp5_NmnlL-BQIE9sW&index=1).

&nbsp;

### **Installation 💿**

The project uses [node](https://nodejs.org/en/), [npm](https://www.npmjs.com/), [webpack](https://webpack.js.org/) and compiler [babel](https://babeljs.io/setup#installation) as well as package [JSON-server](https://www.npmjs.com/package/json-server) and [whatwg-fetch](https://github.com/github/fetch).

Having them installed, type into the terminal: 
```
npm i
```
Then, you may run webpack typing in the terminal:

```
npm start
```
App is available using the following addresses:
-http://localhost:8080

&nbsp;

### **Links:**
- [GitHub](https://github.com/kowackag/kanban-board-react.git)
&nbsp;

### **Screenshot:**

&nbsp;
 
## 💡 My process

&nbsp;

### **Technologies:**

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/-ReactJs-61DAFB?logo=react&logoColor=white&style=for-the-badge)

&nbsp;
  
### **Solutions provided in the project:**
- HTML:
    - The project was built using semantic HTML5 markup.
- CSS:
    - The css styles (`main.css`) is loaded into `<head>` section  thanks to `webpack`, using the appropriate loader in `webpack.config.js` for files with the extension` .css`.
    - The form was made using CSS Grid layout.
    - As the app is mainly used on desktop computers, it was prepared with a Desktop-first approach.
- JS:
    - To store all communication with the API in one place, the class ExcursionsAPI was created (in the separated file `ExcursionsAPI.js`).
    - This class is used on both the `client` and` admin` sides and it was imported into both JS files responsible for each part.
    - Communication with API is based on `fetch()` method.
    - To run the project using browsers that do not support `fetch()` method, package `whatwg-fetch` was used.
- React:
    - The following hooks was used: `useState`, `useContext` and `useReducer`.
    - Data is stored in `state` in the `<App /> ` and passed to the Components using the `Context API`.


Kanban board `<Board />` consists with a few Components:  
- `<Form />` to create new tasks with erros `<section>` to display fields that did not pass validation;
- `<Column />` with the maximum number of tasks;
- `<Task />` to display all tasks, move them to the next stage or delete;
- `<Footer />`

&nbsp;

### Data storage

Na tym etapie chcemy wykorzystać najszybszą do implementacji możliwość zapisywania ustawień naszej tablic. Dlatego wybór padł na [localStorage](http://kursjs.pl/kurs/storage/storage.php). W ten sposób będzie można testować rozwiązanie nie musząc przejmować się zaawansowanymi rozwiązaniami.

Na pewno ułatwiłby Ci pracę hook, który udostępniałby metody umożliwiające zapis i odczyt danych z localStorage np.:
```
const [getItem, setItem] = useStorage('name');
```

Dodatkowo przy pierwszym uruchomieniu należałoby pobrać dane z localStorage oraz przekazać dane do wnętrza aplikacji za pomocą Context API. Jeśli takich danych nie ma to trzeba ustawić wartości początkowe.

Data structure: 

Columns with the name of the implementation stage, the limit of tasks and the identifier:
```
columns: [
    {id: 1, name: 'To do', limit: 5},
    {id: 2, name: 'Analysis', limit: 5},
    {id: 3, name: 'Development', limit: 5},
    {id: 4, name: 'Testing', limit: 3},
    // ...
]
``` 
Tasks structure:
```
tasks: [
    {id: 1, name: 'Task1', idColumn: 1, user: 'Ann', deadline: ''},
    {id: 2, name: 'Task2', idColumn: 1, user: 'Anna', deadline: ''},
    {id: 3, name: 'Task3', idColumn: 1, user: 'Anna', deadline: ''},
    // ...
]
```
### **Useful resources:**

- [Google Font](https://fonts.google.com/specimen/Poppins) - Font (`Poppins`)
- [Font Awesome](https://fontawesome.com/) - Icons. 


## Od czego zaczać?

Najpierw utwórz strukturę danych wew. Twojej aplikacji i postaraj się wyświetlić wszystkie elementy wkorzystując odpowiednie komponenty. Dane możesz przechowywać w `state` w komponencie `<App />`, które przekazujesz przez Context API. Pamiętaj, że w ten sposób możesz też przekazywać metody, które będą aktualizować dane w `state`.

Następnie zapisz dane w localStorage i sprawdź czy nadal wszystko działa.

Potem dopiero postaraj sie przemieszczać zadania między kolumnami bez zapisywania danych w localStorage. Jak już wspomieliśmy wystarczy ikrementować lub dekrementować pole `idColumn`. Pamiętaj, aby sprawdzić czy limit zadań w kolumnie nie jest osiągnięty i czy kolumna "następna" oraz "poprzednia" istnieje.


Dopiero teraz wprowadź aktualizację danych w localStorage. Zwróć uwagę, że każda zmiana `state` aplikacji powinna być zapisywana w localStorage.

## 🙋‍♂️ Author

The project was made by Małgorzata Kowacka.
- kowackag@gmail.com
- GitHub - [kowackag](https://github.com/kowackag)
- Linked - [Małgorzata Kowacka](https://www.linkedin.com/in/ma%C5%82gorzata-kowacka-0258a812a/)

 **If you have any questions do not hesitate to contact me.**

&nbsp;

## 👏 Special thanks  
Thanks to my [Mentor - devmentor.pl](https://devmentor.pl/) - for providing me with this task and for code review.

&nbsp;

My next small project using REACT basics  [CLICK ME ](https://github.com/diet-form-and-calc-BMI) 

----