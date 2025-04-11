const colaboradoresUl = document.querySelector(".colaboradores");
const inputEl = document.getElementById("input-pesquisa");

const colaboradoresInfo = [
  {
    name: "Igor",
    isMale: true,
    hasBackButton: true,
    path: "/igor/igor.html",
    picture:
      "https://media.licdn.com/dms/image/v2/D4D03AQEQsxrzUhbVkg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1705305900860?e=1749686400&v=beta&t=rhNEWW401j4BCNHxM5ir0y7l_vE9UC3qnPYY1yIZjdY",
    pictureDescription: "foto de Igor.",
  },
  {
    name: "Carlos",
    isMale: false,
    hasBackButton: false,
    path: "/igor/igor.html",
    picture:
      "https://media.licdn.com/dms/image/v2/D4D03AQEQsxrzUhbVkg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1705305900860?e=1749686400&v=beta&t=rhNEWW401j4BCNHxM5ir0y7l_vE9UC3qnPYY1yIZjdY",
    pictureDescription: "foto de Igor.",
  },
  {
    name: "Rafael",
    isMale: true,
    hasBackButton: true,
    path: "/igor/igor.html",
    picture:
      "https://media.licdn.com/dms/image/v2/D4D03AQEQsxrzUhbVkg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1705305900860?e=1749686400&v=beta&t=rhNEWW401j4BCNHxM5ir0y7l_vE9UC3qnPYY1yIZjdY",
    pictureDescription: "foto de Igor.",
  },
  {
    name: "Maria",
    isMale: false,
    hasBackButton: false,
    path: "/igor/igor.html",
    picture:
      "https://media.licdn.com/dms/image/v2/D4D03AQEQsxrzUhbVkg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1705305900860?e=1749686400&v=beta&t=rhNEWW401j4BCNHxM5ir0y7l_vE9UC3qnPYY1yIZjdY",
    pictureDescription: "foto de Igor.",
  },
];

const makeAListOfColaborators = ({
  name,
  isMale,
  path,
  picture,
  pictureDescription,
  hasBackButton,
}) => {
  colaboradoresUl.innerHTML += `
    <li class="colaborador">
    <img class='img-perfil' src="${picture}" alt="${pictureDescription}" />
          
            <div class='colaborador-info'>
              
              <h3>${isMale ? "Colaborador" : "Colaboradora"}</h3>
              <div>${name}</div>
              <a href="${path}" target="${
    hasBackButton ? "_self" : "_blank"
  }">Página pessoal</a>
            </div>
          
        </li>
  `;
};

colaboradoresInfo.forEach(makeAListOfColaborators);

inputEl.addEventListener("keyup", () => {
  colaboradoresUl.innerHTML = "";
  const inputValue = inputEl.value.toLowerCase();
  const colaboradoresInfoFiltered = colaboradoresInfo.filter(({ name }) =>
    name.toLowerCase().includes(inputValue)
  );
  colaboradoresInfoFiltered.forEach(makeAListOfColaborators);
});
