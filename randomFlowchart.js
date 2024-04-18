document.addEventListener("DOMContentLoaded", function () {
    const words = ["Alpha", "Beta", "Gamma", "Delta", "Epsilon", "Zeta", "Eta", "Theta", "Iota", "Kappa", "Lambda", "Mu", "Nu", "Xi", "Omicron", "Pi", "Rho", "Sigma", "Tau", "Upsilon", "Phi", "Chi", "Psi", "Omega"];
    const numNodes = Math.floor(Math.random() * 50) + 20; // Ensures between 20 and 100 nodes
    let mermaidText = "graph TD;\n";
    let nodeIdentifiers = []; // Array to keep track of node identifiers

    // Helper function to generate random words
    function getRandomWord() {
        return words[Math.floor(Math.random() * words.length)];
    }

    function getRandomColor() {
        return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    }

    function getComplementaryColor(hexColor) {
        let rgb = parseInt(hexColor.slice(1), 16);
        let r = (rgb >> 16) & 255;
        let g = (rgb >> 8) & 255;
        let b = rgb & 255;
        r = 255 - r;
        g = 255 - g;
        b = 255 - b;
        return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
    }

    const baseColor = getRandomColor();
    const complementaryColor = getComplementaryColor(baseColor);
    
    // Generate nodes with random labels and store their identifiers
    for (let i = 1; i <= numNodes; i++) {
        const label = `${getRandomWord()}-${i}`;
        const shape = Math.random() > 0.5 ? "((%text%))" : "[%text%]";
        const nodeId = `A${i}`;
        nodeIdentifiers.push(nodeId);
        mermaidText += `${nodeId}${shape.replace("%text%", label)};\n`;
        // Make the nodes random colours
        const nodeColor = math.Random() > 0.5 ? baseColor : complementaryColor;
        mermaidText += `style ${nodeId} fill:${nodeColor},stroke:${nodeColor};\n`;
    }

    // Generate links with random styles
    for (let i = 1; i <= numNodes; i++) {
        const label = `${getRandomWord()}-${i}`;
        const shape = Math.random() > 0.5 ? "((%text%))" : "[%text%]";
        const nodeId = `A${i}`;
        nodeIdentifiers.push(nodeId);
        mermaidText += `${nodeId}${shape.replace("%text%", label)};\n`;
    }
    
    // Randomly link one of the last three nodes to one of the first three
    const lastThree = nodeIdentifiers.slice(-3); // Grab the last three nodes
    const firstThree = nodeIdentifiers.slice(0, 3); // Grab the first three nodes
    //Doing this twice because I want to make this more spaghetti-ey
    let randomLastNode = lastThree[Math.floor(Math.random() * lastThree.length)];
    let randomFirstNode = firstThree[Math.floor(Math.random() * firstThree.length)];
    mermaidText += `${randomLastNode} --> ${randomFirstNode};\n`;
    randomLastNode = lastThree[Math.floor(Math.random() * lastThree.length)];
    randomFirstNode = firstThree[Math.floor(Math.random() * firstThree.length)];
    mermaidText += `${randomLastNode} --> ${randomFirstNode};\n`;

    // Update the inner HTML of the Mermaid div
    document.querySelector('.mermaid').innerHTML = mermaidText;

    // Add a debug block to the page
    var debugPre = document.createElement('pre');
    debugPre.textContent = mermaidText;
    document.body.appendChild(debugPre);
    
});
