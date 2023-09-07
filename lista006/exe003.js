
    const tituloElement = document.getElementById("titulo");
    const conteudoElement = document.getElementById("conteudo");
    const idiomaSelector = document.getElementById("idiomaSelector");

    
    function atualizarIdioma() {
        const selectedLanguage = idiomaSelector.value;

        if (selectedLanguage === "pt") {
            tituloElement.textContent = "Bem-vindo ao Meu Site";
            conteudoElement.textContent = "Este é o conteúdo em português.";
        } else if (selectedLanguage === "es") {
            tituloElement.textContent = "Bienvenido a Mi Sitio";
            conteudoElement.textContent = "Este es el contenido en español.";
        } else if (selectedLanguage === "en") {
            tituloElement.textContent = "Welcome to My Site";
            conteudoElement.textContent = "This is the content in English.";
        }
    }

    idiomaSelector.addEventListener("change", atualizarIdioma);

   
    const userLanguage = navigator.language || navigator.userLanguage;
    idiomaSelector.value = userLanguage.startsWith("pt") ? "pt" : (userLanguage.startsWith("es") ? "es" : "en");

    // Atualizar o idioma inicial da página
    atualizarIdioma();

