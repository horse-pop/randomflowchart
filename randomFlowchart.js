document.addEventListener("DOMContentLoaded", function () {
    const words = ["Alpha", "Beta", "Gamma", "Delta", "Epsilon", "Zeta", "Eta", "Theta", "Iota", "Kappa", "Lambda", "Mu", "Nu", "Xi", "Omicron", "Pi", "Rho", "Sigma", "Tau", "Upsilon", "Phi", "Chi", "Psi", "Omega"];
    const numNodes = Math.floor(Math.random() * 50) + 20; // Ensures between 20 and 100 nodes
    let mermaidText = "graph TD;\n";
    let nodeIdentifiers = []; // Array to keep track of node identifiers

    // Helper function to generate random words
    function getRandomWord() {
        return words[Math.floor(Math.random() * words.length)];
    }

    // Generate nodes with random labels and store their identifiers
    for (let i = 1; i <= numNodes; i++) {
        const label = `${getRandomWord()}-${i}`;
        const shape = Math.random() > 0.5 ? "((%text%))" : "[%text%]";
        const nodeId = `A${i}`;
        nodeIdentifiers.push(nodeId);
        mermaidText += `${nodeId}${shape.replace("%text%", label)};\n`;
    }

    // Generate links with random styles
    for (let i = 1; i < numNodes; i++) {
        const nextNodeIndex = Math.floor(Math.random() * (numNodes - i)) + i;
        const linkStyle = Math.random() > 0.5 ? "-->" : "-.->";
        mermaidText += `${nodeIdentifiers[i - 1]} ${linkStyle} ${nodeIdentifiers[nextNodeIndex]};\n`;
    }

    // Randomly link one of the last three nodes to one of the first three
    const lastThree = nodeIdentifiers.slice(-3); // Grab the last three nodes
    const firstThree = nodeIdentifiers.slice(0, 3); // Grab the first three nodes
    const randomLastNode = lastThree[Math.floor(Math.random() * lastThree.length)];
    const randomFirstNode = firstThree[Math.floor(Math.random() * firstThree.length)];
    mermaidText += `${randomLastNode} --> ${randomFirstNode};\n`;

    // Update the inner HTML of the Mermaid div
    document.querySelector('.mermaid').innerHTML = mermaidText;

    // Add a debug block to the page
    var debugPre = document.createElement('pre');
    debugPre.textContent = mermaidText;
    document.body.appendChild(debugPre);
    
});
