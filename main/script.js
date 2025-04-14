const collaboratorsUl = document.querySelector(".colaboradores");
const inputEl = document.getElementById("input-pesquisa");

const collaboratorsInfo = [
  {
    name: "Igor Gazineo",
    isMale: true,
    hasBackButton: true,
    path: "../igor-000/igor.html",
    picture:
      "https://media.licdn.com/dms/image/v2/D4D03AQEQsxrzUhbVkg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1705305900860?e=1749686400&v=beta&t=rhNEWW401j4BCNHxM5ir0y7l_vE9UC3qnPYY1yIZjdY",
    devSpecialization: "full stack",
  },
  {
    name: "Andre Krykhtine",
    isMale: true,
    hasBackButton: false,
    path: "../andreKrykhtine/andre.html",
    picture: "https://avatars.githubusercontent.com/u/185527961?v=4",
    devSpecialization: "frontend",
  },
  {
    name: "Rodrigo Marques Tavares",
    isMale: true,
    hasBackButton: false,
    path: "../rodrigo-274/rodrigo.html",
    picture: "https://avatars.githubusercontent.com/u/157378101?v=4",
    devSpecialization: "frontend",
  },
  {
    name: "Victor Ponce Ferandes",
    isMale: true,
    hasBackButton: false,
    path: "../victor-22/victor.html",
    picture: "https://avatars.githubusercontent.com/u/157378101?v=4",
    devSpecialization: "frontend",
  },
];

const makeAListOfColaborators = ({
  name,
  isMale,
  hasBackButton,
  path,
  picture,
  devSpecialization,
}) => {
  collaboratorsUl.innerHTML += `
    <li class="colaborador">
    <img class='img-perfil' src="${picture}" alt="Foto de ${name}" />
          
            <div class='colaborador-info'>
              
              <h3 class='colaborador-title'>${
                isMale ? "Colaborador" : "Colaboradora"
              }</h3>
              <div class='colaborador-name'>${name}</div>
              <div class='colaborador-area'><b>Área:</b> ${
                devSpecialization ? devSpecialization : "Não informada"
              }</div>
              <a href="${path}" class='colaborador-btn' target="${
    hasBackButton ? "_self" : "_blank"
  }">Página pessoal</a>
            </div>
          
        </li>
  `;
};

collaboratorsInfo.forEach(makeAListOfColaborators);

inputEl.addEventListener("keyup", () => {
  collaboratorsUl.innerHTML = "";
  const inputValue = inputEl.value.toLowerCase();
  const collaboratorsInfoFiltered = collaboratorsInfo.filter(({ name }) =>
    name.toLowerCase().includes(inputValue)
  );
  collaboratorsInfoFiltered.forEach(makeAListOfColaborators);

  if (!collaboratorsInfoFiltered.length) {
    collaboratorsUl.innerHTML =
      "<li class='not-found'>Colaborador(a) não encontrado(a).</li>";
  }
});
