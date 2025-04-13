const colaboratorsUl = document.querySelector(".colaboradores");
const inputEl = document.getElementById("input-pesquisa");

const colaboratorsInfo = [
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
];

const makeAListOfColaborators = ({
  name,
  isMale,
  hasBackButton,
  path,
  picture,
  devSpecialization,
}) => {
  colaboratorsUl.innerHTML += `
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
