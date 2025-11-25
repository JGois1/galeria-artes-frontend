const API_URL = "https://func-galeria-joao-eyb9aeevc9d5bpce.canadacentral-01.azurewebsites.net/api/obter_obras";

async function carregarObras() {
    const container = document.getElementById('galeria-container');
    const loading = document.getElementById('loading');

    try {
        const response = await fetch(API_URL);
        const obras = await response.json();

        loading.style.display = 'none'; // Some com o texto "Carregando"

        obras.forEach(obra => {
            // Cria o HTML de cada cartão
            const card = document.createElement('div');
            card.className = 'card';
            
            card.innerHTML = `
                <img src="${obra.url_imagem}" alt="${obra.nome}">
                <div class="card-info">
                    <h3>${obra.nome}</h3>
                    <h4>${obra.artista}</h4>
                    <p>${obra.descricao}</p>
                </div>
            `;
            
            container.appendChild(card);
        });

    } catch (error) {
        console.error("Erro ao buscar obras:", error);
        loading.innerHTML = "Erro ao carregar as obras. Verifique o console.";
    }
}

// Chama a função assim que a tela abre
carregarObras();