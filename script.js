const grupos = [
    { nome: "IA na Educação", area: "Tecnologia", desc: "Uso de redes neurais para tutorias." },
    { nome: "Sustentabilidade", area: "Engenharia", desc: "Novos materiais de construção." },
    { nome: "Sociedade Digital", area: "Humanas", desc: "Impacto das redes sociais." }
];

const container = document.getElementById('groupsContainer');
const search = document.getElementById('searchInput');

function render(filtro = "") {
    container.innerHTML = "";
    const filtrados = grupos.filter(g => g.nome.toLowerCase().includes(filtro.toLowerCase()) || g.area.toLowerCase().includes(filtro.toLowerCase()));
    
    if(filtrados.length === 0) return container.innerHTML = "<p>Nenhum grupo encontrado.</p>";

    filtrados.forEach(g => {
        container.innerHTML += `
            <div class="card">
                <h3>${g.nome}</h3><span class="area">${g.area}</span>
                <p>${g.desc}</p><button onclick="alert('Solicitação enviada!')">Participar</button>
            </div>
        `;
    });
}

search.addEventListener('input', (e) => render(e.target.value));
render();