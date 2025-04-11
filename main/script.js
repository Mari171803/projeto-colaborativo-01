const colaboradores = document.querySelector(".colaboradores");

const colaboradoresInfo = [
  {
    name: "Igor",
    isMale: true,
    path: "/igor/igor.html",
    picture:
      "https://media.licdn.com/dms/image/v2/D4D03AQEQsxrzUhbVkg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1705305900860?e=1749686400&v=beta&t=rhNEWW401j4BCNHxM5ir0y7l_vE9UC3qnPYY1yIZjdY",
    pictureDescription: "foto de Igor.",
  },
];

colaboradoresInfo.forEach(
  ({ name, isMale, path, picture, pictureDescription }) => {
    colaboradores.innerHTML += `
    <li class="colaborador">
          <a href="${path}" target="_blank">
            <div>
              <img src="${picture}" alt="${pictureDescription}" />
              <h2>${isMale ? "Colaborador" : "Colaboradora"}</h2>
              <h3>${name}</h3>
            </div>
          </a>
        </li>
  `;
  }
);
