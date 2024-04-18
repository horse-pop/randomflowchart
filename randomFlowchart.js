document.addEventListener("DOMContentLoaded", function () {
    const words = ["Alpha", "Beta", "Gamma", "Delta", "Epsilon", "Zeta", "Eta", "Theta", "Iota", "Kappa", "Lambda", "Mu", "Nu", "Xi", "Omicron", "Pi", "Rho", "Sigma", "Tau", "Upsilon", "Phi", "Chi", "Psi", "Omega"];
    const numNodes = Math.floor(Math.random() * 200) + 1;
    let mermaidText = "graph TD;\n";

    // Helper function to generate random words
    function getRandomWord() {
        return words[Math.floor(Math.random() * words.length)];
    }

    // Generate nodes with random labels
    for (let i = 1; i <= numNodes; i++) {
        const shape = Math.random() > 0.5 ? "((%text%))" : "[%text%]";
        mermaidText += `A${i}${shape.replace("%text%", getRandomWord())};\n`;
    }

    // Generate links with random styles
    for (let i = 1; i < numNodes; i++) {
        const nextNode = Math.floor(Math.random() * (numNodes - i)) + i + 1;
        const linkStyle = Math.random() > 0.5 ? "-->" : "-.->";
        mermaidText += `A${i} ${linkStyle} A${nextNode};\n`;
    }

    // Update the inner HTML of the Mermaid div
    document.querySelector('.mermaid').innerHTML = mermaidText;
});
