// Demo Interactiva de Box-Sizing - Con efectos artísticos

const widthSlider = document.getElementById('widthSlider');
const paddingSlider = document.getElementById('paddingSlider');
const borderSlider = document.getElementById('borderSlider');

const widthValue = document.getElementById('widthValue');
const paddingValue = document.getElementById('paddingValue');
const borderValue = document.getElementById('borderValue');

const demoContentBox = document.getElementById('demoContentBox');
const demoBorderBox = document.getElementById('demoBorderBox');

const totalContentBox = document.getElementById('totalContentBox');
const totalBorderBox = document.getElementById('totalBorderBox');

// Efecto de pulso en los valores cuando cambian
function pulseValue(element) {
    element.style.transform = 'scale(1.2)';
    element.style.color = '#ec4899';
    setTimeout(() => {
        element.style.transform = 'scale(1)';
        element.style.color = '#8b5cf6';
    }, 300);
}

function updateBoxes() {
    const width = parseInt(widthSlider.value);
    const padding = parseInt(paddingSlider.value);
    const border = parseInt(borderSlider.value);
    
    // Efecto visual en los valores
    pulseValue(widthValue);
    pulseValue(paddingValue);
    pulseValue(borderValue);
    
    // Actualizar valores mostrados
    widthValue.textContent = `${width}px`;
    paddingValue.textContent = `${padding}px`;
    borderValue.textContent = `${border}px`;
    
    // Aplicar estilos con transición suave
    [demoContentBox, demoBorderBox].forEach(box => {
        box.style.transition = 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        box.style.width = `${width}px`;
        box.style.padding = `${padding}px`;
        box.style.borderWidth = `${border}px`;
        
        // Efecto de "respiración" al cambiar
        box.style.transform = 'scale(1.05)';
        setTimeout(() => {
            box.style.transform = 'scale(1)';
        }, 300);
    });
    
    // Calcular totales
    const contentBoxTotal = width + (padding * 2) + (border * 2);
    const borderBoxTotal = width;
    
    totalContentBox.textContent = `Total: ${contentBoxTotal}px`;
    totalBorderBox.textContent = `Total: ${borderBoxTotal}px`;
    
    // Efecto en los textos de total
    totalContentBox.style.transform = 'translateY(-5px)';
    totalBorderBox.style.transform = 'translateY(-5px)';
    setTimeout(() => {
        totalContentBox.style.transform = 'translateY(0)';
        totalBorderBox.style.transform = 'translateY(0)';
    }, 200);
    
    // Actualizar colores de borde dinámicamente
    demoContentBox.style.borderColor = `rgb(${200 + border * 2}, ${100 - border * 2}, ${150 + border})`;
    demoBorderBox.style.borderColor = `rgb(${100 - border}, ${150 + border * 3}, ${100 + border})`;
}

// Event listeners con efecto de sonido visual (solo visual)
widthSlider.addEventListener('input', function() {
    updateBoxes();
    // Efecto visual en el slider
    this.style.boxShadow = '0 0 20px rgba(139, 92, 246, 0.7)';
    setTimeout(() => {
        this.style.boxShadow = '0 4px 10px rgba(139, 92, 246, 0.5)';
    }, 200);
});

paddingSlider.addEventListener('input', function() {
    updateBoxes();
    this.style.boxShadow = '0 0 20px rgba(236, 72, 153, 0.7)';
    setTimeout(() => {
        this.style.boxShadow = '0 4px 10px rgba(236, 72, 153, 0.5)';
    }, 200);
});

borderSlider.addEventListener('input', function() {
    updateBoxes();
    this.style.boxShadow = '0 0 20px rgba(16, 185, 129, 0.7)';
    setTimeout(() => {
        this.style.boxShadow = '0 4px 10px rgba(16, 185, 129, 0.5)';
    }, 200);
});

// Efecto al cargar la página
window.addEventListener('load', function() {
    // Animación de entrada para los controles
    const controls = document.querySelector('.controls');
    controls.style.opacity = '0';
    controls.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        controls.style.transition = 'all 0.6s ease-out';
        controls.style.opacity = '1';
        controls.style.transform = 'translateY(0)';
    }, 300);
    
    // Efecto de bienvenida
    const title = document.querySelector('h1');
    title.style.transform = 'scale(0.9)';
    setTimeout(() => {
        title.style.transition = 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        title.style.transform = 'scale(1)';
    }, 100);
});

// Inicializar
updateBoxes();

console.log('🎨 Box-sizing demo artística cargada');
console.log('🌈 Ajusta los sliders para ver la diferencia visual!');