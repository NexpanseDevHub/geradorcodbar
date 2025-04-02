function generateBarcode() {
    let textInput = document.getElementById("textInput");
    let showNumber = document.getElementById("showNumber").checked;
    let canvas = document.getElementById("barcodeCanvas");

    let text = textInput.value.trim();
    
    // Se o campo estiver vazio, mostra "Bem-vindo"
    if (text === "") {
        text = "Bem-vindo";
    }

    JsBarcode(canvas, text, {
        format: "CODE128",
        displayValue: showNumber,
        background: "transparent",
        lineColor: "#000",
        width: 2,
        height: 60
    });
}

function redirectToWhatsApp() {
    const button = document.querySelector("button");
    
    // Adiciona feedback visual
    button.classList.add("button-loading");
    button.disabled = true;
    button.innerHTML = '<span>Carregando...</span>';
    
    setTimeout(() => {
        window.open("https://wa.me/5541987206591?text=Olá,%20quero%20criar%20meu%20próprio%20sistema", "_blank");
        
        // Restaura o botão após 1 segundo
        setTimeout(() => {
            button.classList.remove("button-loading");
            button.disabled = false;
            button.innerHTML = 'Quero Um App Igual A Esse<span>Para Minha Empresa</span>';
        }, 1000);
    }, 500);
}

// Gera o código de barras "Bem-vindo" ao carregar a página
window.onload = function() {
    // Carrega a fonte do Google
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    // Gera o código de barras
    generateBarcode();
};
