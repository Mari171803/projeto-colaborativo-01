const colaboratorsUl = document.querySelector(".colaboradores");
const inputEl = document.getElementById("input-pesquisa");

const colaboratorsInfo = [
  {
    name: "Igor Gazineo",
    isMale: true,
    hasBackButton: true,
    path: "/igor-000/igor.html",
    picture:
      "https://media.licdn.com/dms/image/v2/D4D03AQEQsxrzUhbVkg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1705305900860?e=1749686400&v=beta&t=rhNEWW401j4BCNHxM5ir0y7l_vE9UC3qnPYY1yIZjdY",
    pictureDescription() {
      return `foto de ${this.name}.`;
    },
    devSpecialization: "full stack",
  },
  {
    name: "André",
    isMale: true,
    hasBackButton: false,
    path: "/igor-000/igor.html",
    picture: "https://avatars.githubusercontent.com/u/185527961?v=4",
    pictureDescription() {
      return `foto de ${this.name}.`;
    },
    devSpecialization: "frontend",
  },
];

const makeAListOfColaborators = (colaborator) => {
  colaboratorsUl.innerHTML += `
    <li class="colaborador">
    <img class='img-perfil' src="${
      colaborator.picture
    }" alt="${colaborator.pictureDescription()}" />
          
            <div class='colaborador-info'>
              
              <h3 class='colaborador-title'>${
                colaborator.isMale ? "Colaborador" : "Colaboradora"
              }</h3>
              <div class='colaborador-name'>${colaborator.name}</div>
              <div class='colaborador-area'><b>Área:</b> ${
                colaborator.devSpecialization
                  ? colaborator.devSpecialization
                  : "Não informada"
              }</div>
              <a href="${colaborator.path}" class='colaborador-btn' target="${
    colaborator.hasBackButton ? "_self" : "_blank"
  }">Página pessoal</a>
            </div>
          
        </li>
  `;
};

colaboratorsInfo.forEach(makeAListOfColaborators);

inputEl.addEventListener("keyup", () => {
  colaboratorsUl.innerHTML = "";
  const inputValue = inputEl.value.toLowerCase();
  const colaboratorsInfoFiltered = colaboratorsInfo.filter(({ name }) =>
    name.toLowerCase().includes(inputValue)
  );
  colaboratorsInfoFiltered.forEach(makeAListOfColaborators);

  if (!colaboratorsInfoFiltered.length) {
    colaboratorsUl.innerHTML =
      "<li class='not-found'>Colaborador(a) não encontrado(a).</li>";
  }
});
