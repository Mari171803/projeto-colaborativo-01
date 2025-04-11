const colaboradores = document.querySelector(".colaboradores");

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
    name: "Igor",
    isMale: false,
    hasBackButton: false,
    path: "/igor/igor.html",
    picture:
      "https://media.licdn.com/dms/image/v2/D4D03AQEQsxrzUhbVkg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1705305900860?e=1749686400&v=beta&t=rhNEWW401j4BCNHxM5ir0y7l_vE9UC3qnPYY1yIZjdY",
    pictureDescription: "foto de Igor.",
  },
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
    name: "Igor",
    isMale: false,
    hasBackButton: false,
    path: "/igor/igor.html",
    picture:
      "https://media.licdn.com/dms/image/v2/D4D03AQEQsxrzUhbVkg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1705305900860?e=1749686400&v=beta&t=rhNEWW401j4BCNHxM5ir0y7l_vE9UC3qnPYY1yIZjdY",
    pictureDescription: "foto de Igor.",
  },
];

colaboradoresInfo.forEach(
  ({ name, isMale, path, picture, pictureDescription, hasBackButton }) => {
    colaboradores.innerHTML += `
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
  }
);
