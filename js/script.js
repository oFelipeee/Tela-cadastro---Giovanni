document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const listaCadastro = document.getElementById('dados-lista');
    const excluirButton = document.getElementById('excluir');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        adicionarCadastro();
    });

    excluirButton.addEventListener('click', () => {
        listaCadastro.innerHTML = '';
    });

    function adicionarCadastro() {
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const telefone = document.getElementById('telefone').value;

        if (nome && email && telefone) {
            const li = document.createElement('li');
            li.textContent = `Nome: ${nome}, Email: ${email}, Telefone: ${telefone}`;
            listaCadastro.appendChild(li);

            // Limpar campos após adicionar
            form.reset();
        }
    }
});
