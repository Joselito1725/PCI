// === APPLICATION STATE ===
// Variable para mantener el control de la página actual
let currentPage = 'home';

// === PAGE TEMPLATES ===
// Objeto que contiene las plantillas HTML para cada página
const pages = {
    home: `
        <div class="container">
            <section class="hero animate-in">
                <div class="hero-content">
                    <h1><i class="fas fa-graduation-cap"></i>Portafolio de Cálculo Integral</h1>
                    <p>Sistema de Información</p>
                    <div style="height: 2px; background: rgba(255,255,255,0.3); margin: 2rem auto; max-width: 300px; border-radius: 2px;"></div>
                    <p style="font-style: italic; font-size: 1.1rem;">Segundo Semestre</p>
                </div>
            </section>

            <section>
                <h2 class="text-center mb-2" style="font-size: 2rem; font-weight: 600;">
                    <i class="fas fa-books"></i> TEMAS
                </h2>
                
                <div class="topics-grid">
                    <div class="topic-card" onclick="showPage('definidas-indefinidas')">
                        <div class="topic-icon">🔢</div>
                        <h3 class="topic-title">Integrales Definidas e Indefinidas</h3>
                        <p class="topic-description">Fundamentos básicos de integración y el teorema fundamental del cálculo.</p>
                    </div>
                    
                    <div class="topic-card" onclick="showPage('por-partes')">
                        <div class="topic-icon">🧮</div>
                        <h3 class="topic-title">Integración por Partes</h3>
                        <p class="topic-description">Técnica avanzada para integrar productos de funciones usando la regla ILATE.</p>
                    </div>
                    
                    <div class="topic-card" onclick="showPage('volumen-revolucion')">
                        <div class="topic-icon">⚛️</div>
                        <h3 class="topic-title">Volumen de un Sólido de Revolución</h3>
                        <p class="topic-description">Cálculo de volúmenes de figuras.</p>
                    </div>
                    
                    <div class="topic-card" onclick="showPage('longitud-arco')">
                        <div class="topic-icon">📏</div>
                        <h3 class="topic-title">Longitud de Arco</h3>
                        <p class="topic-description">Determinación de la longitud de una curva en un intervalo dado.</p>
                    </div>

                    <div class="topic-card" onclick="showPage('movimiento-particula')">
                        <div class="topic-icon">🏃</div>
                        <h3 class="topic-title">Movimiento de una Partícula</h3>
                        <p class="topic-description">Aplicación de integrales para analizar posición, velocidad y aceleración.</p>
                    </div>
                    
                    <div class="topic-card" onclick="showPage('funciones-trigonometricas')">
                        <div class="topic-icon">📐</div>
                        <h3 class="topic-title">Funciones Trigonométricas</h3>
                        <p class="topic-description">Integrales con sen, cos, tan y sus combinaciones.</p>
                    </div>
                    
                    <div class="topic-card" onclick="showPage('metodo-sustitucion')">
                        <div class="topic-icon">🔄</div>
                        <h3 class="topic-title">Método de Sustitución</h3>
                        <p class="topic-description">Simplificación de integrales mediante sustitución o transformación de variables.</p>
                    </div>
                    
                    <div class="topic-card" onclick="showPage('sustitucion-trigonometrica')">
                        <div class="topic-icon">📊</div>
                        <h3 class="topic-title">Sustitución Trigonométrica</h3>
                        <p class="topic-description">Uso de identidades trigonométricas para resolver integrales.</p>
                    </div>
                    
                    <div class="topic-card" onclick="showPage('fracciones-parciales')">
                        <div class="topic-icon">➗</div>
                        <h3 class="topic-title">Fracciones Parciales</h3>
                        <p class="topic-description">Descomposición de fracciones racionales para facilitar la integración.</p>
                    </div>
                    
                    <div class="topic-card" onclick="showPage('area-bajo-curva')">
                        <div class="topic-icon">📈</div>
                        <h3 class="topic-title">Área bajo la Curva</h3>
                        <p class="topic-description">Aplicaciones geométricas y cálculo de áreas mediante integrales definidas.</p>
                    </div>

                    <div class="topic-card" onclick="showPage('trabajo-w')">
                        <div class="topic-icon">💪</div>
                        <h3 class="topic-title">Trabajo (W)</h3>
                        <p class="topic-description">Cálculo del trabajo realizado por una fuerza variable.</p>
                    </div>
                </div>
            </section>
        </div>
    `,

    'definidas-indefinidas': `
        <div class="container">
            <section class="topic-header animate-in">
                <h1><i class="fas fa-calculator"></i> Integrales Definidas e Indefinidas</h1>
            </section>

            <div class="content-card animate-in">
                <h3><i class="fas fa-book"></i> Teoría</h3>
                <div style="line-height: 1.8;">
                    <p><strong>Integral Indefinida:</strong> Es la operación inversa de la derivación. Si $F'(x) = f(x)$, 
                    entonces $\\int f(x)dx = F(x) + C$, donde $C$ es la constante de integración.</p>
                    
                    <p><strong>Integral Definida:</strong> $\\int_{a}^{b}f(x)dx$ representa el área bajo la curva de $f(x)$ 
                    desde $x = a$ hasta $x = b$.</p>
                    
                    <h4 style="margin-top: 2rem; color: var(--primary);">Propiedades importantes:</h4>
                    <ul style="margin-left: 2rem; margin-top: 1rem;">
                        <li>$\\int_{a}^{b}f(x)dx = F(b) - F(a)$ (Teorema Fundamental del Cálculo)</li>
                        <li>$\\int_{a}^{b}f(x)dx = -\\int_{b}^{a}f(x)dx$</li>
                        <li>$\\int_{a}^{a}f(x)dx = 0$</li>
                        <li>$\\int_{a}^{b}[f(x) + g(x)]dx = \\int_{a}^{b}f(x)dx + \\int_{a}^{b}g(x)dx$</li>
                    </ul>
                </div>
            </div>

            <div class="content-card video-section animate-in">
                <h3><i class="fas fa-video"></i> Video Explicativo</h3>
                <div class="video-container">
                    <!-- Reemplaza el src con la URL de tu video de YouTube -->
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/dXPo1i4qSEE?si=o-vCUSdZD6wU3CjP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>

            <div class="content-card examples-section animate-in">
                <h3><i class="fas fa-lightbulb"></i> Ejemplos Resueltos</h3>
                
                <div class="example-item">
                    <h4 style="color: var(--accent); margin-bottom: 1rem;">Ejemplo 1: Integral Indefinida</h4>
                    <p><strong>Problema:</strong> Calcular la integral indefinida de $x^2$.</p>
                    <p><strong>Solución:</strong></p>
                    <p>Para resolver $\\int x^2dx$, aplicamos la regla de la potencia para integrales, que establece que $\\int x^n dx = \\frac{x^{n+1}}{n+1} + C$.</p>
                    <p>Así, tenemos:</p>
                    $$ \\int x^2dx = \\frac{x^{2+1}}{2+1} + C = \\frac{x^3}{3} + C $$
                    <p><strong>Verificación:</strong> Para verificar el resultado, derivamos la solución:</p>
                    $$ \\frac{d}{dx}\\left(\\frac{x^3}{3} + C\\right) = \\frac{1}{3} \\cdot 3x^2 + 0 = x^2 $$
                    <p>El resultado coincide con la función original, por lo tanto, la solución es correcta. $\\checkmark$</p>
                </div>

                <div class="example-item">
                    <h4 style="color: var(--accent); margin-bottom: 1rem;">Ejemplo 2: Integral Definida</h4>
                    <p><strong>Problema:</strong> Calcular la integral definida de $x^2$ desde $0$ hasta $2$.</p>
                    <p><strong>Solución:</strong></p>
                    <p>Primero, encontramos la integral indefinida de $x^2$, que es $\\frac{x^3}{3}$.</p>
                    <p>Luego, aplicamos el Teorema Fundamental del Cálculo, evaluando la antiderivada en los límites superior e inferior y restando los resultados:</p>
                    $$ \\int_{0}^{2}x^2dx = \\left[\\frac{x^3}{3}\\right]_0^2 $$
                    <p>Evaluamos en el límite superior ($x=2$):</p>
                    $$ \\frac{2^3}{3} = \\frac{8}{3} $$
                    <p>Evaluamos en el límite inferior ($x=0$):</p>
                    $$ \\frac{0^3}{3} = 0 $$
                    <p>Restamos los resultados:</p>
                    $$ \\frac{8}{3} - 0 = \\frac{8}{3} $$
                    <p><strong>Interpretación:</strong> El área bajo la curva $y = x^2$ desde $x = 0$ hasta $x = 2$ es $\\frac{8}{3}$ unidades cuadradas.</p>
                </div>
                
                <div class="example-item">
                    <h4 style="color: var(--accent); margin-bottom: 1rem;">Ejemplo 3: Integral Indefinida con Múltiples Términos</h4>
                    <p><strong>Problema:</strong> Calcular la integral indefinida de $3x^2 - 2x + 5$.</p>
                    <p><strong>Solución:</strong></p>
                    <p>Aplicamos la propiedad de linealidad de la integral, que nos permite integrar cada término por separado:</p>
                    $$ \\int (3x^2 - 2x + 5) dx = \\int 3x^2 dx - \\int 2x dx + \\int 5 dx $$
                    <p>Ahora, integramos cada término usando la regla de la potencia:</p>
                    <ul>
                        <li>$\\int 3x^2 dx = 3 \\frac{x^{2+1}}{2+1} + C_1 = 3 \\frac{x^3}{3} + C_1 = x^3 + C_1$</li>
                        <li>$\\int 2x dx = 2 \\frac{x^{1+1}}{1+1} + C_2 = 2 \\frac{x^2}{2} + C_2 = x^2 + C_2$</li>
                        <li>$\\int 5 dx = 5x + C_3$</li>
                    </ul>
                    <p>Combinando los resultados y las constantes de integración en una sola constante $C$:</p>
                    $$ \\int (3x^2 - 2x + 5) dx = x^3 - x^2 + 5x + C $$
                    <p><strong>Verificación:</strong> Derivamos la solución:</p>
                    $$ \\frac{d}{dx}(x^3 - x^2 + 5x + C) = 3x^2 - 2x + 5 $$
                    <p>El resultado coincide con la función original. $\\checkmark$</p>
                </div>
            </div>
        </div>
    `,

    'por-partes': `
        <div class="container">
            <section class="topic-header animate-in">
                <h1><i class="fas fa-puzzle-piece"></i> Integración por Partes</h1>
            </section>

            <div class="content-card animate-in">
                <h3><i class="fas fa-book"></i> Teoría</h3>
                <div style="line-height: 1.8;">
                    <p><strong>Fórmula:</strong></p>
                    <div style="background: var(--primary); color: white; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; text-align: center; font-size: 1.2rem; font-weight: 600;">
                        $$ \\int u dv = uv - \\int v du $$
                    </div>
                    
                    <p>Esta técnica es útil cuando tenemos el producto de dos funciones. 
                    La clave está en elegir correctamente $u$ y $dv$.</p>
                    
                    <h4 style="margin-top: 2rem; color: var(--primary);">Regla ILATE para elegir $u$:</h4>
                    <div class="liate-grid">
                        <div class="liate-item">
                            <strong style="color: var(--success);">I</strong>nversas trigonométricas
                        </div>
                        <div class="liate-item">
                            <strong style="color: var(--success);">L</strong>ogarítmicas
                        </div>
                        <div class="liate-item">
                            <strong style="color: var(--success);">A</strong>lgebraicas
                        </div>
                        <div class="liate-item">
                            <strong style="color: var(--success);">T</strong>rigonométricas
                        </div>
                        <div class="liate-item">
                            <strong style="color: var(--success);">E</strong>xponenciales
                        </div>
                    </div>
                </div>
            </div>

            <div class="content-card video-section animate-in">
                <h3><i class="fas fa-video"></i> Video Explicativo</h3>
                <div class="video-container">
                    <!-- Reemplaza el src con la URL de tu video de YouTube -->
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/93kW5colCAU?si=KH1cviJsBbL0QiLZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>

            <div class="content-card examples-section animate-in">
                <h3><i class="fas fa-lightbulb"></i> Ejemplos Resueltos</h3>
                
                <div class="example-item">
                    <h4 style="color: var(--accent); margin-bottom: 1rem;">Ejemplo 1: $\\int x \\cdot e^x dx$</h4>
                    <p><strong>Problema:</strong> Calcular la integral $\\int x \\cdot e^x dx$ utilizando integración por partes.</p>
                    <p><strong>Paso 1:</strong> Identificar $u$ y $dv$ usando la regla ILATE.</p>
                    <p>Según ILATE, las funciones algebraicas (como $x$) tienen prioridad sobre las exponenciales (como $e^x$).</p>
                    <ul>
                        <li>Sea $u = x$. Entonces, derivando obtenemos $du = dx$.</li>
                        <li>Sea $dv = e^x dx$. Entonces, integrando obtenemos $v = \\int e^x dx = e^x$.</li>
                    </ul>
                    <p><strong>Paso 2:</strong> Aplicar la fórmula de integración por partes: $\\int u dv = uv - \\int v du$.</p>
                    <p>Sustituimos $u, dv, v,$ y $du$ en la fórmula:</p>
                    $$ \\int x \\cdot e^x dx = x \\cdot e^x - \\int e^x dx $$
                    <p>Ahora, resolvemos la integral restante:</p>
                    $$ \\int e^x dx = e^x $$
                    <p>Sustituimos este resultado de nuevo en la expresión:</p>
                    $$ \\int x \\cdot e^x dx = x \\cdot e^x - e^x + C $$
                    <p>Podemos factorizar $e^x$ para simplificar el resultado:</p>
                    $$ \\int x \\cdot e^x dx = e^x(x - 1) + C $$
                    <p><strong>Verificación:</strong> Para verificar el resultado, derivamos la solución:</p>
                    $$ \\frac{d}{dx}[e^x(x-1) + C] = \\frac{d}{dx}(e^x(x-1)) + \\frac{d}{dx}(C) $$
                    <p>Aplicamos la regla del producto para $e^x(x-1)$:</p>
                    $$ \\frac{d}{dx}(e^x(x-1)) = e^x \\cdot \\frac{d}{dx}(x-1) + (x-1) \\cdot \\frac{d}{dx}(e^x) $$
                    $$ = e^x \\cdot 1 + (x-1) \\cdot e^x $$
                    $$ = e^x + xe^x - e^x $$
                    $$ = xe^x $$
                    <p>El resultado coincide con la función original, por lo tanto, la solución es correcta. $\\checkmark$</p>
                </div>

                <div class="example-item">
                    <h4 style="color: var(--accent); margin-bottom: 1rem;">Ejemplo 2: $\\int \\ln(x) dx$</h4>
                    <p><strong>Problema:</strong> Calcular la integral $\\int \\ln(x) dx$ utilizando integración por partes.</p>
                    <p><strong>Paso 1:</strong> Identificar $u$ y $dv$.</p>
                    <p>Aunque solo hay una función explícita, podemos considerar que $\\ln(x)$ es el término logarítmico y $dx$ es el término algebraico (constante 1).</p>
                    <ul>
                        <li>Sea $u = \\ln(x)$. Entonces, $du = \\frac{1}{x} dx$.</li>
                        <li>Sea $dv = dx$. Entonces, $v = \\int dx = x$.</li>
                    </ul>
                    <p><strong>Paso 2:</strong> Aplicar la fórmula de integración por partes: $\\int u dv = uv - \\int v du$.</p>
                    <p>Sustituimos $u, dv, v,$ y $du$ en la fórmula:</p>
                    $$ \\int \\ln(x) dx = \\ln(x) \\cdot x - \\int x \\cdot \\frac{1}{x} dx $$
                    $$ \\int \\ln(x) dx = x\\ln(x) - \\int 1 dx $$
                    <p>Resolvemos la integral restante:</p>
                    $$ \\int 1 dx = x $$
                    <p>Sustituimos este resultado de nuevo en la expresión:</p>
                    $$ \\int \\ln(x) dx = x\\ln(x) - x + C $$
                    <p>Podemos factorizar $x$ para simplificar el resultado:</p>
                    $$ \\int \\ln(x) dx = x(\\ln(x) - 1) + C $$
                    <p><strong>Verificación:</strong> Derivamos la solución usando la regla del producto:</p>
                    $$ \\frac{d}{dx}[x(\\ln(x) - 1) + C] = 1 \\cdot (\\ln(x) - 1) + x \\cdot \\frac{d}{dx}(\\ln(x) - 1) $$
                    $$ = \\ln(x) - 1 + x \\cdot \\frac{1}{x} $$
                    $$ = \\ln(x) - 1 + 1 $$
                    $$ = \\ln(x) $$
                    <p>El resultado coincide con la función original. $\\checkmark$</p>
                </div>
            </div>
        </div>
    `,

    'volumen-revolucion': `
        <div class="container">
            <section class="topic-header animate-in">
                <h1><i class="fas fa-cube"></i> Volumen de un Sólido de Revolución</h1>
            </section>

            <div class="content-card animate-in">
                <h3><i class="fas fa-book"></i> Teoría</h3>
                <div style="line-height: 1.8;">
                    <p>El volumen de un sólido de revolución se puede calcular utilizando el método de los discos o el método de las arandelas.</p>
                    
                    <h4 style="margin-top: 2rem; color: var(--primary);">Método de los Discos (rotación alrededor del eje X):</h4>
                    <p>Si la región está acotada por $y = f(x)$, el eje X, $x=a$ y $x=b$, el volumen $V$ se calcula como:</p>
                    $$ V = \\pi \\int_{a}^{b} [f(x)]^2 dx $$

                    <h4 style="margin-top: 2rem; color: var(--primary);">Método de las Arandelas (rotación alrededor del eje X, con hueco):</h4>
                    <p>Si la región está entre $y = f(x)$ (radio exterior) y $y = g(x)$ (radio interior), donde $f(x) \\ge g(x)$ en el intervalo $[a, b]$, el volumen $V$ se calcula como:</p>
                    $$ V = \\pi \\int_{a}^{b} ([f(x)]^2 - [g(x)]^2) dx $$
                    <p>Para rotaciones alrededor del eje Y, las funciones deben estar en términos de $y$ ($x=f(y)$), y la integración se realiza con respecto a $y$.</p>
                </div>
            </div>

            <div class="content-card video-section animate-in">
                <h3><i class="fas fa-video"></i> Video Explicativo</h3>
                <div class="video-container">
                    <!-- Reemplaza el src con la URL de tu video de YouTube -->
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/HqVsHjxKJmo?si=d17UybKBrFLR5RWz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>

            <div class="content-card examples-section animate-in">
                <h3><i class="fas fa-lightbulb"></i> Ejemplos Resueltos</h3>
                
                <div class="example-item">
                    <h4 style="color: var(--accent); margin-bottom: 1rem;">Ejemplo 1: Volumen de un Cono</h4>
                    <p><strong>Problema:</strong> Encuentra el volumen del sólido generado al girar la región acotada por la recta $y = x$, el eje X, y la recta $x = 3$ alrededor del eje X.</p>
                    <p><strong>Solución:</strong></p>
                    <p>En este caso, la función es $f(x) = x$, y los límites de integración son $a=0$ y $b=3$. Usaremos el método de los discos.</p>
                    <p>Aplicamos la fórmula del volumen por el método de los discos:</p>
                    $$ V = \\pi \\int_{0}^{3} (x)^2 dx $$
                    <p>Resolvemos la integral:</p>
                    $$ V = \\pi \\int_{0}^{3} x^2 dx = \\pi \\left[\\frac{x^3}{3}\\right]_0^3 $$
                    <p>Evaluamos en los límites:</p>
                    $$ V = \\pi \\left(\\frac{3^3}{3} - \\frac{0^3}{3}\\right) $$
                    $$ V = \\pi (9) $$
                    $$ V = 9\\pi \\text{ unidades cúbicas} $$
                    <p>Este resultado corresponde al volumen de un cono con radio $3$ y altura $3$, lo cual es consistente con la geometría generada al rotar la recta $y=x$ desde $x=0$ hasta $x=3$ alrededor del eje X.</p>
                </div>

                <div class="example-item">
                    <h4 style="color: var(--accent); margin-bottom: 1rem;">Ejemplo 2: Volumen de una Esfera</h4>
                    <p><strong>Problema:</strong> Encuentra el volumen del sólido generado al girar la región acotada por la curva $y = \\sqrt{r^2 - x^2}$ y el eje X alrededor del eje X. (Esta es la ecuación de un semicírculo de radio $r$).</p>
                    <p><strong>Solución:</strong></p>
                    <p>La función es $f(x) = \\sqrt{r^2 - x^2}$, y los límites de integración son $a=-r$ y $b=r$. Usaremos el método de los discos.</p>
                    <p>Aplicamos la fórmula del volumen por el método de los discos:</p>
                    $$ V = \\pi \\int_{-r}^{r} (\\sqrt{r^2 - x^2})^2 dx $$
                    $$ V = \\pi \\int_{-r}^{r} (r^2 - x^2) dx $$
                    <p>Resolvemos la integral:</p>
                    $$ V = \\pi \\left[r^2x - \\frac{x^3}{3}\\right]_{-r}^{r} $$
                    <p>Evaluamos en los límites:</p>
                    $$ V = \\pi \\left[\\left(r^2(r) - \\frac{r^3}{3}\\right) - \\left(r^2(-r) - \\frac{(-r)^3}{3}\\right)\\right] $$
                    $$ V = \\pi \\left[\\left(r^3 - \\frac{r^3}{3}\\right) - \\left(-r^3 + \\frac{r^3}{3}\\right)\\right] $$
                    $$ V = \\pi \\left(\\frac{3r^3 - r^3}{3}\\right) - \\left(\\frac{-3r^3 + r^3}{3}\\right)\\right] $$
                    $$ V = \\pi \\left(\\frac{2r^3}{3} + \\frac{2r^3}{3}\\right) $$
                    $$ V = \\frac{4}{3}\\pi r^3 \\text{ unidades cúbicas} $$
                    <p>Este resultado es la fórmula conocida para el volumen de una esfera, lo cual confirma la aplicación correcta del método.</p>
                </div>
            </div>
        </div>
    `,

    'longitud-arco': `
        <div class="container">
            <section class="topic-header animate-in">
                <h1><i class="fas fa-ruler-combined"></i> Longitud de Arco</h1>
            </section>

            <div class="content-card animate-in">
                <h3><i class="fas fa-book"></i> Teoría</h3>
                <div style="line-height: 1.8;">
                    <p>La longitud de arco de una curva $y = f(x)$ en el intervalo $[a, b]$ se calcula con la siguiente fórmula:</p>
                    $$ L = \\int_{a}^{b} \\sqrt{1 + \\left[f'(x)\\right]^2} dx $$
                    <p>Si la curva está definida por $x = g(y)$ en el intervalo $[c, d]$, la fórmula es:</p>
                    $$ L = \\int_{c}^{d} \\sqrt{1 + \\left[g'(y)\\right]^2} dy $$
                    <p>Es importante que la función sea derivable y continua en el intervalo dado.</p>
                </div>
            </div>

            <div class="content-card video-section animate-in">
                <h3><i class="fas fa-video"></i> Video Explicativo</h3>
                <div class="video-container">
                    <!-- Reemplaza el src con la URL de tu video de YouTube -->
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/Fg9C0cckeek?si=D-b-LxPaLlKRjoJ3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>

            <div class="content-card examples-section animate-in">
                <h3><i class="fas fa-lightbulb"></i> Ejemplos Resueltos</h3>
                
                <div class="example-item">
                    <h4 style="color: var(--accent); margin-bottom: 1rem;">Ejemplo 1: Longitud de un Segmento de Recta</h4>
                    <p><strong>Problema:</strong> Encuentra la longitud de la curva $y = 2x + 1$ de $x = 0$ a $x = 2$.</p>
                    <p><strong>Solución:</strong></p>
                    <p>Primero, encontramos la derivada de la función $f(x) = 2x + 1$:</p>
                    $$ f'(x) = \\frac{d}{dx}(2x + 1) = 2 $$
                    <p>Luego, calculamos el cuadrado de la derivada:</p>
                    $$ \\left[f'(x)\\right]^2 = 2^2 = 4 $$
                    <p>Ahora, sustituimos en la fórmula de la longitud de arco con los límites de integración $a=0$ y $b=2$:</p>
                    $$ L = \\int_{0}^{2} \\sqrt{1 + 4} dx $$
                    $$ L = \\int_{0}^{2} \\sqrt{5} dx $$
                    <p>Como \\sqrt{5} es una constante, podemos sacarla de la integral:</p>
                    $$ L = \\sqrt{5} \\int_{0}^{2} 1 dx $$
                    <p>Integramos y evaluamos en los límites:</p>
                    $$ L = \\sqrt{5} \\left[x\\right]_0^2 $$
                    $$ L = \\sqrt{5} (2 - 0) $$
                    $$ L = 2\\sqrt{5} \\text{ unidades} $$
                    <p>Este resultado es consistente con la distancia entre los puntos $(0,1)$ y $(2,5)$ en un plano cartesiano, calculada con el teorema de Pitágoras.</p>
                </div>

                <div class="example-item">
                    <h4 style="color: var(--accent); margin-bottom: 1rem;">Ejemplo 2: Longitud de Arco de una Parábola</h4>
                    <p><strong>Problema:</strong> Calcular la longitud de arco de la curva $y = x^{3/2}$ desde $x=0$ hasta $x=4$.</p>
                    <p><strong>Solución:</strong></p>
                    <p>Primero, encontramos la derivada de la función $f(x) = x^{3/2}$:</p>
                    $$ f'(x) = \\frac{3}{2}x^{1/2} $$
                    <p>Luego, calculamos el cuadrado de la derivada:</p>
                    $$ \\left[f'(x)\\right]^2 = \\left(\\frac{3}{2}x^{1/2}\\right)^2 = \\frac{9}{4}x $$
                    <p>Ahora, sustituimos en la fórmula de la longitud de arco con los límites de integración $a=0$ y $b=4$:</p>
                    $$ L = \\int_{0}^{4} \\sqrt{1 + \\frac{9}{4}x} dx $$
                    <p>Para resolver esta integral, usamos el método de sustitución. Sea $u = 1 + \\frac{9}{4}x$.</p>
                    <p>Entonces, $du = \\frac{9}{4} dx$, lo que implica $dx = \\frac{4}{9} du$.</p>
                    <p>Cambiamos los límites de integración:</p>
                    <ul>
                        <li>Si $x=0$, $u = 1 + \\frac{9}{4}(0) = 1$.</li>
                        <li>Si $x=4$, $u = 1 + \\frac{9}{4}(4) = 1 + 9 = 10$.</li>
                    </ul>
                    <p>Sustituimos en la integral:</p>
                    $$ L = \\int_{1}^{10} \\sqrt{u} \\left(\\frac{4}{9}\\right) du $$
                    $$ L = \\frac{4}{9} \\int_{1}^{10} u^{1/2} du $$
                    <p>Integramos con respecto a $u$:</p>
                    $$ L = \\frac{4}{9} \\left[\\frac{u^{3/2}}{3/2}\\right]_{1}^{10} $$
                    $$ L = \\frac{4}{9} \\left[\\frac{2}{3}u^{3/2}\\right]_{1}^{10} $$
                    $$ L = \\frac{8}{27} \\left[u^{3/2}\\right]_{1}^{10} $$
                    <p>Evaluamos en los límites:</p>
                    $$ L = \\frac{8}{27} (10^{3/2} - 1^{3/2}) $$
                    $$ L = \\frac{8}{27} (10\\sqrt{10} - 1) \\text{ unidades} $$
                </div>
            </div>
        </div>
    `,

    'movimiento-particula': `
        <div class="container">
            <section class="topic-header animate-in">
                <h1><i class="fas fa-running"></i> Movimiento de una Partícula</h1>
            </section>

            <div class="content-card animate-in">
                <h3><i class="fas fa-book"></i> Teoría</h3>
                <div style="line-height: 1.8;">
                    <p>Las integrales son fundamentales para analizar el movimiento de una partícula en el tiempo. Dada la aceleración, podemos encontrar la velocidad; dada la velocidad, podemos encontrar la posición.</p>
                    <ul style="margin-left: 2rem; margin-top: 1rem;">
                        <li>Si conocemos la función de velocidad $v(t)$, la función de posición $s(t)$ se obtiene integrando la velocidad:
                            $$ s(t) = \\int v(t) dt $$
                            Para encontrar la constante de integración $C$, se necesita una condición inicial (la posición en un tiempo específico).
                        </li>
                        <li>Si conocemos la función de aceleración $a(t)$, la función de velocidad $v(t)$ se obtiene integrando la aceleración:
                            $$ v(t) = \\int a(t) dt $$
                            De manera similar, se necesita una condición inicial (la velocidad en un tiempo específico) para encontrar la constante de integración.
                        </li>
                        <li>El <strong>desplazamiento total</strong> de la partícula en un intervalo de tiempo $[t_1, t_2]$ es la integral definida de la velocidad:
                            $$ \\text{Desplazamiento} = \\int_{t_1}^{t_2} v(t) dt $$
                            El desplazamiento puede ser positivo, negativo o cero, indicando la posición final respecto a la inicial.
                        </li>
                        <li>La <strong>distancia total recorrida</strong> en un intervalo de tiempo $[t_1, t_2]$ es la integral definida del valor absoluto de la velocidad:
                            $$ \\text{Distancia Total} = \\int_{t_1}^{t_2} |v(t)| dt $$
                            La distancia total siempre es no negativa, ya que considera el camino total recorrido sin importar la dirección.
                        </li>
                    </ul>
                </div>
            </div>

            <div class="content-card video-section animate-in">
                <h3><i class="fas fa-video"></i> Video Explicativo</h3>
                <div class="video-container">
                    <!-- Reemplaza el src con la URL de tu video de YouTube -->
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/eu8htnVgf4k?si=P66CVLSrgZhZpCvi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>

            <div class="content-card examples-section animate-in">
                <h3><i class="fas fa-lightbulb"></i> Ejemplos Resueltos</h3>
                
                <div class="example-item">
                    <h4 style="color: var(--accent); margin-bottom: 1rem;">Ejemplo 1: Posición desde la Velocidad</h4>
                    <p><strong>Problema:</strong> La velocidad de una partícula está dada por $v(t) = 2t - 4$ m/s. Si en $t=0$ la posición inicial es $s(0) = 3$ m, encuentra la función de posición $s(t)$.</p>
                    <p><strong>Solución:</strong></p>
                    <p>Para encontrar la función de posición $s(t)$, integramos la función de velocidad $v(t)$:</p>
                    $$ s(t) = \\int v(t) dt = \\int (2t - 4) dt $$
                    <p>Aplicamos las reglas de integración:</p>
                    $$ s(t) = 2\\frac{t^2}{2} - 4t + C $$
                    $$ s(t) = t^2 - 4t + C $$
                    <p>Ahora, usamos la condición inicial $s(0) = 3$ para encontrar el valor de la constante de integración $C$. Sustituimos $t=0$ y $s(t)=3$ en la ecuación de posición:</p>
                    $$ 3 = (0)^2 - 4(0) + C $$
                    $$ 3 = 0 - 0 + C $$
                    $$ C = 3 $$
                    <p>Finalmente, sustituimos el valor de $C$ en la función de posición:</p>
                    $$ s(t) = t^3 - t^2 + 3t + 1 \\text{ metros} $$
                    <p>Esta es la función que describe la posición de la partícula en cualquier momento $t$.</p>
                </div>

                <div class="example-item">
                    <h4 style="color: var(--accent); margin-bottom: 1rem;">Ejemplo 2: Desplazamiento y Distancia Total</h4>
                    <p><strong>Problema:</strong> Una partícula se mueve con velocidad $v(t) = t^2 - 4t + 3$ m/s. Calcula el desplazamiento y la distancia total recorrida en el intervalo de tiempo $[0, 4]$ segundos.</p>
                    <p><strong>Solución:</strong></p>
                    <p><strong>Desplazamiento:</strong></p>
                    <p>El desplazamiento se calcula integrando la velocidad directamente:</p>
                    $$ \\text{Desplazamiento} = \\int_{0}^{4} (t^2 - 4t + 3) dt $$
                    $$ = \\left[\\frac{t^3}{3} - 2t^2 + 3t\\right]_{0}^{4} $$
                    $$ = \\left(\\frac{4^3}{3} - 2(4)^2 + 3(4)\\right) - \\left(\\frac{0^3}{3} - 2(0)^2 + 3(0)\\right) $$
                    $$ = \\left(\\frac{64}{3} - 32 + 12\\right) - (0) $$
                    $$ = \\frac{64}{3} - 20 = \\frac{64 - 60}{3} = \\frac{4}{3} \\text{ metros} $$
                    <p>El desplazamiento es de $\\frac{4}{3}$ metros.</p>

                    <p><strong>Distancia Total Recorrida:</strong></p>
                    <p>Para la distancia total, necesitamos integrar el valor absoluto de la velocidad. Primero, encontramos cuándo la velocidad es cero para determinar los intervalos donde la partícula cambia de dirección:</p>
                    $$ v(t) = t^2 - 4t + 3 = 0 $$
                    $$ (t-1)(t-3) = 0 $$
                    <p>Así, $t=1$ y $t=3$ son los puntos donde la velocidad es cero.</p>
                    <p>Analizamos el signo de $v(t)$ en los intervalos $[0,1]$, $[1,3]$ y $[3,4]$:</p>
                    <ul>
                        <li>$[0,1]$: Por ejemplo, $v(0.5) = (0.5)^2 - 4(0.5) + 3 = 0.25 - 2 + 3 = 1.25 > 0$ (se mueve a la derecha)</li>
                        <li>$[1,3]$: Por ejemplo, $v(2) = (2)^2 - 4(2) + 3 = 4 - 8 + 3 = -1 < 0$ (se mueve a la izquierda)</li>
                        <li>$[3,4]$: Por ejemplo, $v(3.5) = (3.5)^2 - 4(3.5) + 3 = 12.25 - 14 + 3 = 1.25 > 0$ (se mueve a la derecha)</li>
                    </ul>
                    <p>Entonces, la distancia total es:</p>
                    $$ \\text{Distancia Total} = \\int_{0}^{1} (t^2 - 4t + 3) dt + \\left|\\int_{1}^{3} (t^2 - 4t + 3) dt\\right| + \\int_{3}^{4} (t^2 - 4t + 3) dt $$
                    <p>Calculamos cada integral por separado:</p>
                    <p>$\\int_{0}^{1} (t^2 - 4t + 3) dt = \\left[\\frac{t^3}{3} - 2t^2 + 3t\\right]_{0}^{1} = \\left(\\frac{1}{3} - 2 + 3\\right) - 0 = \\frac{1}{3} + 1 = \\frac{4}{3}$</p>
                    <p>$\\int_{1}^{3} (t^2 - 4t + 3) dt = \\left[\\frac{t^3}{3} - 2t^2 + 3t\\right]_{1}^{3} = \\left(\\frac{3^3}{3} - 2(3)^2 + 3(3)\\right) - \\left(\\frac{1^3}{3} - 2(1)^2 + 3(1)\\right)$</p>
                    $$ = (9 - 18 + 9) - (\\frac{1}{3} - 2 + 3) = 0 - (\\frac{4}{3}) = -\\frac{4}{3} $$
                    <p>$\\int_{3}^{4} (t^2 - 4t + 3) dt = \\left[\\frac{t^3}{3} - 2t^2 + 3t\\right]_{3}^{4} = \\left(\\frac{4^3}{3} - 2(4)^2 + 3(4)\\right) - \\left(\\frac{3^3}{3} - 2(3)^2 + 3(3)\\right)$</p>
                    $$ = (\\frac{64}{3} - 32 + 12) - (9 - 18 + 9) = (\\frac{64}{3} - 20) - 0 = \\frac{4}{3} $$
                    <p>Sumamos las distancias (tomando el valor absoluto de la integral negativa):</p>
                    $$ \\text{Distancia Total} = \\frac{4}{3} + \\left|-\\frac{4}{3}\\right| + \\frac{4}{3} = \\frac{4}{3} + \\frac{4}{3} + \\frac{4}{3} = \\frac{12}{3} = 4 \\text{ metros} $$
                    <p>La distancia total recorrida es de $4$ metros.</p>
                </div>
            </div>
        </div>
    `,

    'funciones-trigonometricas': `
        <div class="container">
            <section class="topic-header animate-in">
                <h1><i class="fas fa-wave-square"></i> Integrales de Funciones Trigonométricas</h1>
            </section>

            <div class="content-card animate-in">
                <h3><i class="fas fa-book"></i> Teoría</h3>
                <div style="line-height: 1.8;">
                    <p>Las integrales de funciones trigonométricas básicas son fundamentales en cálculo. Aquí se presentan algunas de las más comunes:</p>
                    <ul style="margin-left: 2rem; margin-top: 1rem;">
                        <li>$$ \\int \\sin(x) dx = -\\cos(x) + C $$</li>
                        <li>$$ \\int \\cos(x) dx = \\sin(x) + C $$</li>
                        <li>$$ \\int \\tan(x) dx = -\\ln|\\cos(x)| + C = \\ln|\\sec(x)| + C $$</li>
                        <li>$$ \\int \\cot(x) dx = \\ln|\\sin(x)| + C $$</li>
                        <li>$$ \\int \\sec(x) dx = \\ln|\\sec(x) + \\tan(x)| + C $$</li>
                        <li>$$ \\int \\csc(x) dx = -\\ln|\\csc(x) + \\cot(x)| + C $$</li>
                        <li>$$ \\int \\sec^2(x) dx = \\tan(x) + C $$</li>
                        <li>$$ \\int \\csc^2(x) dx = -\\cot(x) + C $$</li>
                        <li>$$ \\int \\sec(x)\\tan(x) dx = \\sec(x) + C $$</li>
                        <li>$$ \\int \\csc(x)\\cot(x) dx = -\\csc(x) + C $$</li>
                    </ul>
                    <p style="margin-top: 1rem;">Para integrales más complejas que involucran potencias o productos de funciones trigonométricas, a menudo se utilizan identidades trigonométricas o el método de sustitución.</p>
                </div>
            </div>

            <div class="content-card video-section animate-in">
                <h3><i class="fas fa-video"></i> Video Explicativo</h3>
                <div class="video-container">
                    <!-- Reemplaza el src con la URL de tu video de YouTube -->
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/klhmTnwGFAs?si=6_u365pmlDnai1vQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>

            <div class="content-card examples-section animate-in">
                <h3><i class="fas fa-lightbulb"></i> Ejemplos Resueltos</h3>
                
                <div class="example-item">
                    <h4 style="color: var(--accent); margin-bottom: 1rem;">Ejemplo 1: Integral de Seno</h4>
                    <p><strong>Problema:</strong> Calcular la integral $\\int \\sin(3x) dx$.</p>
                    <p><strong>Solución:</strong></p>
                    <p>Utilizamos el método de sustitución. Sea $u = 3x$. Entonces, $du = 3dx$, lo que implica $dx = \\frac{1}{3}du$.</p>
                    <p>Sustituimos en la integral:</p>
                    $$ \\int \\sin(u) \\frac{1}{3}du = \\frac{1}{3} \\int \\sin(u) du $$
                    <p>Ahora, integramos $\\sin(u)$:</p>
                    $$ \\frac{1}{3} (-\\cos(u)) + C = -\\frac{1}{3}\\cos(u) + C $$
                    <p>Finalmente, sustituimos $u$ de nuevo por $3x$:</p>
                    $$ \\int \\sin(3x) dx = -\\frac{1}{3}\\cos(3x) + C $$
                </div>

                <div class="example-item">
                    <h4 style="color: var(--accent); margin-bottom: 1rem;">Ejemplo 2: Integral de Potencia de Seno y Coseno</h4>
                    <p><strong>Problema:</strong> Calcular la integral $\\int \\sin^3(x) \\cos(x) dx$.</p>
                    <p><strong>Solución:</strong></p>
                    <p>Utilizamos el método de sustitución. Observamos que la derivada de $\\sin(x)$ es $\\cos(x)$, que aparece en el integrando.</p>
                    <p>Sea $u = \\sin(x)$.</p>
                    <p>Entonces, $du = \\cos(x) dx$.</p>
                    <p>Sustituimos $u$ y $du$ en la integral original:</p>
                    $$ \\int u^3 du $$
                    <p>Ahora, integramos con respecto a $u$ usando la regla de la potencia:</p>
                    $$ \\int u^3 du = \\frac{u^{3+1}}{3+1} + C = \\frac{u^4}{4} + C $$
                    <p>Finalmente, sustituimos $u$ de nuevo por $\\sin(x)$ para obtener la solución en términos de $x$:</p>
                    $$ \\int \\sin^3(x) \\cos(x) dx = \\frac{\\sin^4(x)}{4} + C $$
                </div>
            </div>
        </div>
    `,

    'metodo-sustitucion': `
        <div class="container">
            <section class="topic-header animate-in">
                <h1><i class="fas fa-exchange-alt"></i> Método de Sustitución</h1>
            </section>

            <div class="content-card animate-in">
                <h3><i class="fas fa-book"></i> Teoría</h3>
                <div style="line-height: 1.8;">
                    <p>El <strong>Método de Sustitución</strong> (también conocido como <strong>Cambio de Variable</strong>) es una técnica fundamental en cálculo integral utilizada para simplificar integrales complejas. Se basa en la regla de la cadena para la derivación, pero aplicada en reversa.</p>
                    
                    <p>La idea principal es transformar una integral difícil de resolver en una más sencilla mediante la introducción de una nueva variable. Si tenemos una integral de la forma $\\int f(g(x))g'(x) dx$, podemos hacer la sustitución $u = g(x)$. Al derivar $u$ con respecto a $x$, obtenemos $du = g'(x) dx$. La integral original se transforma entonces en:</p>
                    $$ \\int f(u) du $$
                    
                    <p>Una vez que se resuelve esta integral más simple en términos de $u$, el último paso es sustituir $u$ de nuevo por su expresión original en términos de $x$ ($g(x)$) para obtener el resultado final. Este método es especialmente útil cuando una parte del integrando es la derivada de otra parte, o cuando una redefinición de la variable simplifica drásticamente la estructura de la integral.</p>
                    
                    <p style="margin-top: 1rem;">Para integrales definidas, es crucial recordar que los límites de integración también deben transformarse a la nueva variable $u$.</p>
                </div>
            </div>

            <div class="content-card video-section animate-in">
                <h3><i class="fas fa-video"></i> Video Explicativo</h3>
                <div class="video-container">
                    <!-- Reemplaza el src con la URL de tu video de YouTube que cubra ambos conceptos -->
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/aI9HUxh7o8w?si=7buL6RpwL2mkvLYY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>

            <div class="content-card examples-section animate-in">
                <h3><i class="fas fa-lightbulb"></i> Ejemplos Resueltos</h3>
                
                <div class="example-item">
                    <h4 style="color: var(--accent); margin-bottom: 1rem;">Ejemplo 1: Sustitución Simple</h4>
                    <p><strong>Problema:</strong> Calcular la integral $\\int 2x(x^2+1)^3 dx$.</p>
                    <p><strong>Solución:</strong></p>
                    <p>Observamos que la derivada de $(x^2+1)$ es $2x$, que aparece en el integrando. Esto sugiere una sustitución.</p>
                    <p>Sea $u = x^2+1$.</p>
                    <p>Entonces, $du = \\frac{d}{dx}(x^2+1) dx = 2x dx$.</p>
                    <p>Sustituimos $u$ y $du$ en la integral original:</p>
                    $$ \\int (x^2+1)^3 (2x dx) = \\int u^3 du $$
                    <p>Ahora, integramos con respecto a $u$ usando la regla de la potencia:</p>
                    $$ \\int u^3 du = \\frac{u^{3+1}}{3+1} + C = \\frac{u^4}{4} + C $$
                    <p>Finalmente, sustituimos $u$ de nuevo por $x^2+1$ para obtener la solución en términos de $x$:</p>
                    $$ \\int 2x(x^2+1)^3 dx = \\frac{(x^2+1)^4}{4} + C $$
                </div>

                <div class="example-item">
                    <h4 style="color: var(--accent); margin-bottom: 1rem;">Ejemplo 2: Sustitución con Ajuste de Constante</h4>
                    <p><strong>Problema:</strong> Calcular la integral $\\int x \\cos(x^2) dx$.</p>
                    <p><strong>Solución:</strong></p>
                    <p>Sea $u = x^2$.</p>
                    <p>Entonces, $du = 2x dx$. Para tener $x dx$ en el integrando, dividimos por 2: $\\frac{1}{2}du = x dx$.</p>
                    <p>Sustituimos $u$ y $\\frac{1}{2}du$ en la integral original:</p>
                    $$ \\int \\cos(x^2) (x dx) = \\int \\cos(u) \\frac{1}{2} du $$
                    $$ = \\frac{1}{2} \\int \\cos(u) du $$
                    <p>Ahora, integramos con respecto a $u$:</p>
                    $$ = \\frac{1}{2} \\sin(u) + C $$
                    <p>Finalmente, sustituimos $u$ de nuevo por $x^2$:</p>
                    $$ \\int x \\cos(x^2) dx = \\frac{1}{2} \\sin(x^2) + C $$
                </div>

                <div class="example-item">
                    <h4 style="color: var(--accent); margin-bottom: 1rem;">Ejemplo 3: Cambio de Variable para Simplificar el Integrando</h4>
                    <p><strong>Problema:</strong> Calcular la integral $\\int x\\sqrt{x+1} dx$.</p>
                    <p><strong>Solución:</strong></p>
                    <p>Sea $u = x+1$. De esta sustitución, podemos despejar $x$: $x = u-1$.</p>
                    <p>También necesitamos encontrar $dx$ en términos de $du$. Derivando $u = x+1$ con respecto a $x$, obtenemos $du/dx = 1$, por lo que $du = dx$.</p>
                    <p>Ahora, sustituimos $x$, $\\sqrt{x+1}$ y $dx$ en la integral original:</p>
                    $$ \\int (u-1)\\sqrt{u} du $$
                    <p>Distribuimos $\\sqrt{u}$ (que es $u^{1/2}$):</p>
                    $$ \\int (u \\cdot u^{1/2} - 1 \\cdot u^{1/2}) du $$
                    $$ \\int (u^{3/2} - u^{1/2}) du $$
                    <p>Integramos término a término usando la regla de la potencia:</p>
                    $$ \\frac{u^{3/2+1}}{3/2+1} - \\frac{u^{1/2+1}}{1/2+1} + C $$
                    $$ \\frac{2}{5}u^{5/2} - \\frac{2}{3}u^{3/2} + C $$
                    $$ \\frac{2}{5}u^{5/2} - \\frac{2}{3}u^{3/2} + C $$
                    <p>Finalmente, sustituimos $u$ de nuevo por $x+1$:</p>
                    $$ \\int x\\sqrt{x+1} dx = \\frac{2}{5}(x+1)^{5/2} - \\frac{2}{3}(x+1)^{3/2} + C $$
                </div>

                <div class="example-item">
                    <h4 style="color: var(--accent); margin-bottom: 1rem;">Ejemplo 4: Cambio de Variable en Integral Definida</h4>
                    <p><strong>Problema:</strong> Calcular la integral definida $\\int_{0}^{1} x(x^2+1)^3 dx$.</p>
                    <p><strong>Solución:</strong></p>
                    <p>Sea $u = x^2+1$.</p>
                    <p>Entonces, $du = 2x dx$, lo que implica $x dx = \\frac{1}{2} du$.</p>
                    <p>Ahora, cambiamos los límites de integración para la nueva variable $u$:</p>
                    <ul>
                        <li>Límite inferior: Cuando $x=0$, $u = (0)^2+1 = 1$.</li>
                        <li>Límite superior: Cuando $x=1$, $u = (1)^2+1 = 2$.</li>
                    </ul>
                    <p>Sustituimos en la integral con los nuevos límites:</p>
                    $$ \\int_{1}^{2} u^3 \\left(\\frac{1}{2} du\\right) = \\frac{1}{2} \\int_{1}^{2} u^3 du $$
                    <p>Integramos con respecto a $u$:</p>
                    $$ = \\frac{1}{2} \\left[\\frac{u^4}{4}\\right]_{1}^{2} $$
                    <p>Evaluamos en los límites:</p>
                    $$ = \\frac{1}{2} \\left(\\frac{2^4}{4} - \\frac{1^4}{4}\\right) $$
                    $$ = \\frac{1}{2} \\left(4 - \\frac{1}{4}\\right) $$
                    $$ = \\frac{1}{2} \\left(\\frac{16-1}{4}\\right) $$
                    $$ = \\frac{1}{2} \\cdot \\frac{15}{4} = \\frac{15}{8} $$
                    <p>El valor de la integral definida es $\\frac{15}{8}$.</p>
                </div>
            </div>
        </div>
    `,

    'sustitucion-trigonometrica': `
        <div class="container">
            <section class="topic-header animate-in">
                <h1><i class="fas fa-chart-line"></i> Sustitución Trigonométrica</h1>
            </section>

            <div class="content-card animate-in">
                <h3><i class="fas fa-book"></i> Teoría</h3>
                <div style="line-height: 1.8;">
                    <p>La sustitución trigonométrica es un método de integración que se utiliza para resolver integrales que contienen expresiones de la forma $\\sqrt{a^2 - x^2}$, $\\sqrt{a^2 + x^2}$, o $\\sqrt{x^2 - a^2}$. Se basa en el uso de identidades trigonométricas para simplificar el integrando.</p>
                    
                    <h4 style="margin-top: 2rem; color: var(--primary);">Casos comunes:</h4>
                    <ul style="margin-left: 2rem; margin-top: 1rem;">
                        <li><strong>Para $\\sqrt{a^2 - x^2}$:</strong> Sea $x = a\\sin(\\theta)$, entonces $dx = a\\cos(\\theta) d\\theta$.
                            <br>Esto implica $\\sqrt{a^2 - x^2} = \\sqrt{a^2 - a^2\\sin^2(\\theta)} = \\sqrt{a^2(1 - \\sin^2(\\theta))} = \\sqrt{a^2\\cos^2(\\theta)} = a|\\cos(\\theta)|$.
                        </li>
                        <li><strong>Para $\\sqrt{a^2 + x^2}$:</strong> Sea $x = a\\tan(\\theta)$, entonces $dx = a\\sec^2(\\theta) d\\theta$.
                            <br>Esto implica $\\sqrt{a^2 + x^2} = \\sqrt{a^2 + a^2\\tan^2(\\theta)} = \\sqrt{a^2(1 + \\tan^2(\\theta))} = \\sqrt{a^2\\sec^2(\\theta)} = a|\\sec(\\theta)|$.
                        </li>
                        <li><strong>Para $\\sqrt{x^2 - a^2}$:</strong> Sea $x = a\\sec(\\theta)$, entonces $dx = a\\sec(\\theta)\\tan(\\theta) d\\theta$.
                            <br>Esto implica $\\sqrt{x^2 - a^2} = \\sqrt{a^2\\sec^2(\\theta) - a^2} = \\sqrt{a^2(\\sec^2(\\theta) - 1)} = \\sqrt{a^2\\tan^2(\\theta)} = a|\\tan(\\theta)|$.
                        </li>
                    </ul>
                    <p style="margin-top: 1rem;">Después de integrar en términos de $\\theta$, se debe regresar a la variable original $x$ utilizando un triángulo rectángulo de referencia.</p>
                </div>
            </div>

            <div class="content-card video-section animate-in">
                <h3><i class="fas fa-video"></i> Video Explicativo</h3>
                <div class="video-container">
                    <!-- Reemplaza el src con la URL de tu video de YouTube -->
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/Q9o8sZ8m4II?si=a26T454xd2vGgSoO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>

            <div class="content-card examples-section animate-in">
                <h3><i class="fas fa-lightbulb"></i> Ejemplos Resueltos</h3>
                
                <div class="example-item">
                    <h4 style="color: var(--accent); margin-bottom: 1rem;">Ejemplo 1: $\\int \\frac{1}{\\sqrt{1 - x^2}} dx$</h4>
                    <p><strong>Problema:</strong> Calcular la integral $\\int \\frac{1}{\\sqrt{1 - x^2}} dx$.</p>
                    <p><strong>Solución:</strong></p>
                    <p>Esta integral tiene la forma $\\sqrt{a^2 - x^2}$ con $a=1$. Hacemos la sustitución $x = \\sin(\\theta)$.</p>
                    <ul>
                        <li>$x = \\sin(\\theta)$</li>
                        <li>$dx = \\cos(\\theta) d\\theta$</li>
                        <li>$\\sqrt{1 - x^2} = \\sqrt{1 - \\sin^2(\\theta)} = \\sqrt{\\cos^2(\\theta)} = \\cos(\\theta)$ (asumiendo $-\\frac{\\pi}{2} \\le \\theta \\le \\frac{\\pi}{2}$ donde $\\cos(\\theta) \\ge 0$)</li>
                    </ul>
                    <p>Sustituimos en la integral:</p>
                    $$ \\int \\frac{1}{\\cos(\\theta)} (\\cos(\\theta) d\\theta) = \\int 1 d\\theta $$
                    <p>Integramos:</p>
                    $$ = \\theta + C $$
                    <p>Finalmente, regresamos a la variable original $x$. Como $x = \\sin(\\theta)$, entonces $\\theta = \\arcsin(x)$.</p>
                    $$ \\int \\frac{1}{\\sqrt{1 - x^2}} dx = \\arcsin(x) + C $$
                </div>

                <div class="example-item">
                    <h4 style="color: var(--accent); margin-bottom: 1rem;">Ejemplo 2: $\\int \\frac{1}{x^2\\sqrt{x^2 + 4}} dx$</h4>
                    <p><strong>Problema:</strong> Calcular la integral $\\int \\frac{1}{x^2\\sqrt{x^2 + 4}} dx$.</p>
                    <p><strong>Solución:</strong></p>
                    <p>Esta integral tiene la forma $\\sqrt{x^2 + a^2}$ con $a=2$. Hacemos la sustitución $x = 2\\tan(\\theta)$.</p>
                    <ul>
                        <li>$x = 2\\tan(\\theta)$</li>
                        <li>$dx = 2\\sec^2(\\theta) d\\theta$</li>
                        <li>$x^2 = 4\\tan^2(\\theta)$</li>
                        <li>$\\sqrt{x^2 + 4} = \\sqrt{4\\tan^2(\\theta) + 4} = \\sqrt{4\\sec^2(\\theta)} = 2\\sec(\\theta)$</li>
                    </ul>
                    <p>Sustituimos en la integral:</p>
                    $$ \\int \\frac{1}{(4\\tan^2(\\theta))(2\\sec(\\theta))} (2\\sec^2(\\theta) d\\theta) $$
                    $$ = \\int \\frac{2\\sec^2(\\theta)}{8\\tan^2(\\theta)\\sec(\\theta)} d\\theta $$
                    $$ = \\int \\frac{\\sec(\\theta)}{4\\tan^2(\\theta)} d\\theta $$
                    <p>Reescribimos en términos de seno y coseno:</p>
                    $$ = \\frac{1}{4} \\int \\frac{1/\\cos(\\theta)}{\\sin^2(\\theta)/\\cos^2(\\theta)} d\\theta $$
                    $$ = \\frac{1}{4} \\int \\frac{\\cos^2(\\theta)}{\\cos(\\theta)\\sin^2(\\theta)} d\\theta $$
                    $$ = \\frac{1}{4} \\int \\frac{\\cos(\\theta)}{\\sin^2(\\theta)} d\\theta $$
                    $$ = \\frac{1}{4} \\int \\cot(\\theta)\\csc(\\theta) d\\theta $$
                    <p>Integramos:</p>
                    $$ = \\frac{1}{4} (-\\csc(\\theta)) + C = -\\frac{1}{4}\\csc(\\theta) + C $$
                    <p>Para regresar a $x$, usamos el triángulo rectángulo definido por $x = 2\\tan(\\theta)$, lo que significa $\\tan(\\theta) = x/2$.</p>
                    
                    <p>Del triángulo, $\\csc(\\theta) = \\frac{\\text{hipotenusa}}{\\text{opuesto}} = \\frac{\\sqrt{x^2+4}}{x}$.</p>
                    <p>Sustituimos de nuevo en la solución:</p>
                    $$ \\int \\frac{1}{x^2\\sqrt{x^2 + 4}} dx = -\\frac{1}{4} \\frac{\\sqrt{x^2+4}}{x} + C $$
                </div>
            </div>
        </div>
    `,

    'fracciones-parciales': `
        <div class="container">
            <section class="topic-header animate-in">
                <h1><i class="fas fa-divide"></i> Fracciones Parciales</h1>
            </section>

            <div class="content-card animate-in">
                <h3><i class="fas fa-book"></i> Teoría</h3>
                <div style="line-height: 1.8;">
                    <p>El método de fracciones parciales se utiliza para integrar funciones racionales (cocientes de polinomios) cuando el grado del numerador es menor que el grado del denominador. El objetivo es descomponer la fracción original en una suma de fracciones más simples que son más fáciles de integrar.</p>
                    
                    <h4 style="margin-top: 2rem; color: var(--primary);">Casos de Descomposición:</h4>
                    <ul style="margin-left: 2rem; margin-top: 1rem;">
                        <li><strong>Factores lineales no repetidos:</strong> Para cada factor $(ax+b)$ en el denominador, se incluye un término $\\frac{A}{ax+b}$.</li>
                        <li><strong>Factores lineales repetidos:</strong> Para cada factor $(ax+b)^n$ en el denominador, se incluyen $n$ términos: $\\frac{A_1}{ax+b} + \\frac{A_2}{(ax+b)^2} + \\dots + \\frac{A_n}{(ax+b)^n}$.</li>
                        <li><strong>Factores cuadráticos irreducibles no repetidos:</strong> Para cada factor $(ax^2+bx+c)$ en el denominador, se incluye un término $\\frac{Ax+B}{ax^2+bx+c}$.</li>
                        <li><strong>Factores cuadráticos irreducibles repetidos:</strong> Para cada factor $(ax^2+bx+c)^n$ en el denominador, se incluyen $n$ términos: $\\frac{A_1x+B_1}{ax^2+bx+c} + \\frac{A_2x+B_2}{(ax^2+bx+c)^2} + \\dots + \\frac{A_nx+B_n}{(ax^2+bx+c)^n}$.</li>
                    </ul>
                    <p style="margin-top: 1rem;">Después de descomponer la fracción, se resuelven los coeficientes ($A, B$, etc.) y se integra cada fracción parcial resultante.</p>
                </div>
            </div>

            <div class="content-card video-section animate-in">
                <h3><i class="fas fa-video"></i> Video Explicativo</h3>
                <div class="video-container">
                    <!-- Reemplaza el src con la URL de tu video de YouTube -->
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/uwDKdolLkns?si=yd-c25UY81imTHK3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>

            <div class="content-card examples-section animate-in">
                <h3><i class="fas fa-lightbulb"></i> Ejemplos Resueltos</h3>
                
                <div class="example-item">
                    <h4 style="color: var(--accent); margin-bottom: 1rem;">Ejemplo 1: Factores Lineales No Repetidos</h4>
                    <p><strong>Problema:</strong> Calcular la integral $\\int \\frac{1}{x^2 - 1} dx$.</p>
                    <p><strong>Solución:</strong></p>
                    <p>Primero, factorizamos el denominador: $x^2 - 1 = (x-1)(x+1)$.</p>
                    <p>Descomponemos la fracción en fracciones parciales:</p>
                    $$ \\frac{1}{(x-1)(x+1)} = \\frac{A}{x-1} + \\frac{B}{x+1} $$
                    <p>Multiplicamos ambos lados por $(x-1)(x+1)$:</p>
                    $$ 1 = A(x+1) + B(x-1) $$
                    <p>Para encontrar $A$ y $B$:</p>
                    <ul>
                        <li>If $x=1$: $1 = A(1+1) + B(1-1) \\Rightarrow 1 = 2A \\Rightarrow A = \\frac{1}{2}$</li>
                        <li>If $x=-1$: $1 = A(-1+1) + B(-1-1) \\Rightarrow 1 = -2B \\Rightarrow B = -\\frac{1}{2}$</li>
                    </ul>
                    <p>Ahora, reescribimos la integral:</p>
                    $$ \\int \\left(\\frac{1/2}{x-1} - \\frac{1/2}{x+1}\\right) dx $$
                    $$ = \\frac{1}{2} \\int \\frac{1}{x-1} dx - \\frac{1}{2} \\int \\frac{1}{x+1} dx $$
                    <p>Integramos cada término (usando sustitución simple $u=x-1$ y $v=x+1$ si es necesario):</p>
                    $$ = \\frac{1}{2} \\ln|x-1| - \\frac{1}{2} \\ln|x+1| + C $$
                    <p>Podemos simplificar usando propiedades de logaritmos:</p>
                    $$ = \\frac{1}{2} \\ln\\left|\\frac{x-1}{x+1}\\right| + C $$
                </div>

                <div class="example-item">
                    <h4 style="color: var(--accent); margin-bottom: 1rem;">Ejemplo 2: Factores Lineales Repetidos</h4>
                    <p><strong>Problema:</strong> Calcular la integral $\\int \\frac{x+2}{x(x-1)^2} dx$.</p>
                    <p><strong>Solución:</strong></p>
                    <p>Descomponemos la fracción en fracciones parciales:</p>
                    $$ \\frac{x+2}{x(x-1)^2} = \\frac{A}{x} + \\frac{B}{x-1} + \\frac{C}{(x-1)^2} $$
                    <p>Multiplicamos ambos lados por $x(x-1)^2$:</p>
                    $$ x+2 = A(x-1)^2 + Bx(x-1) + Cx $$
                    <p>Para encontrar $A, B, C$:</p>
                    <ul>
                        <li>If $x=0$: $0+2 = A(0-1)^2 + B(0) + C(0) \\Rightarrow 2 = A(1) \\Rightarrow A = 2$</li>
                        <li>If $x=1$: $1+2 = A(0) + B(0) + C(1) \\Rightarrow 3 = C \\Rightarrow C = 3$</li>
                        <li>Para $B$, podemos elegir otro valor de $x$, por ejemplo $x=2$:
                            $2+2 = A(2-1)^2 + B(2)(2-1) + C(2)$
                            $4 = A + 2B + 2C$
                            Sustituimos $A=2$ y $C=3$:
                            $4 = 2 + 2B + 6$
                            $4 = 8 + 2B$
                            $-4 = 2B \\Rightarrow B = -2$
                        </li>
                    </ul>
                    <p>Ahora, reescribimos la integral:</p>
                    $$ \\int \\left(\\frac{2}{x} - \\frac{2}{x-1} + \\frac{3}{(x-1)^2}\\right) dx $$
                    $$ = 2\\int \\frac{1}{x} dx - 2\\int \\frac{1}{x-1} dx + 3\\int (x-1)^{-2} dx $$
                    <p>Integramos cada término:</p>
                    $$ = 2\\ln|x| - 2\\ln|x-1| - \\frac{3}{x-1} + C $$
                    <p>Simplificamos los logaritmos:</p>
                    $$ = \\ln\\left|\\frac{x^2}{(x-1)^2}\\right| - \\frac{3}{x-1} + C $$
                </div>
            </div>
        </div>
    `,

    'area-bajo-curva': `
        <div class="container">
            <section class="topic-header animate-in">
                <h1><i class="fas fa-area-chart"></i> Área bajo la Curva</h1>
            </section>

            <div class="content-card animate-in">
                <h3><i class="fas fa-book"></i> Teoría</h3>
                <div style="line-height: 1.8;">
                    <p>La integral definida es una herramienta poderosa para calcular el área de una región plana. Geométricamente, $\\int_{a}^{b} f(x) dx$ representa el área neta entre la curva $y=f(x)$ y el eje X en el intervalo $[a, b]$. Si $f(x)$ es positiva en el intervalo, el resultado es el área. Si es negativa, el resultado es el negativo del área. Si la función cruza el eje X, se deben calcular las áreas de cada sección por separado y sumarlas como valores absolutos si se busca el área total.</p>
                    
                    <h4 style="margin-top: 2rem; color: var(--primary);">Casos importantes:</h4>
                    <ul style="margin-left: 2rem; margin-top: 1rem;">
                        <li><strong>Área entre una curva y el eje X:</strong> Si $f(x) \\ge 0$ en $[a, b]$, el área $A = \\int_{a}^{b} f(x) dx$. Si $f(x) \\le 0$, el área $A = -\\int_{a}^{b} f(x) dx = \\int_{a}^{b} |f(x)| dx$.</li>
                        <li><strong>Área entre dos curvas:</strong> Si $f(x) \\ge g(x)$ en $[a, b]$, el área $A = \\int_{a}^{b} [f(x) - g(x)] dx$. Aquí, $f(x)$ es la función "superior" y $g(x)$ es la función "inferior".</li>
                    </ul>
                    <p style="margin-top: 1rem;">Para encontrar los límites de integración, a menudo es necesario encontrar los puntos de intersección de las curvas involucradas.</p>
                </div>
            </div>

            <div class="content-card video-section animate-in">
                <h3><i class="fas fa-video"></i> Video Explicativo</h3>
                <div class="video-container">
                    <!-- Reemplaza el src con la URL de tu video de YouTube -->
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/5ZrfmQEVMjk?si=e38zENQvMTwr6K_z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>

            <div class="content-card examples-section animate-in">
                <h3><i class="fas fa-lightbulb"></i> Ejemplos Resueltos</h3>
                
                <div class="example-item">
                    <h4 style="color: var(--accent); margin-bottom: 1rem;">Ejemplo 1: Área bajo una Parábola</h4>
                    <p><strong>Problema:</strong> Calcular el área bajo la curva $y = x^2$ desde $x=0$ hasta $x=2$.</p>
                    <p><strong>Solución:</strong></p>
                    <p>Dado que $y = x^2$ es no negativa en el intervalo $[0, 2]$, el área se calcula directamente con la integral definida:</p>
                    $$ A = \\int_{0}^{2} x^2 dx $$
                    <p>Integramos:</p>
                    $$ A = \\left[\\frac{x^3}{3}\\right]_{0}^{2} $$
                    <p>Evaluamos en los límites:</p>
                    $$ A = \\frac{2^3}{3} - \\frac{0^3}{3} = \\frac{8}{3} - 0 = \\frac{8}{3} \\text{ unidades cuadradas} $$
                </div>

                <div class="example-item">
                    <h4 style="color: var(--accent); margin-bottom: 1rem;">Ejemplo 2: Área entre dos Curvas</h4>
                    <p><strong>Problema:</strong> Calcular el área de la región acotada por las curvas $y = x^2$ y $y = x+2$.</p>
                    <p><strong>Solución:</strong></p>
                    <p>Primero, encontramos los puntos de intersección igualando las dos funciones:</p>
                    $$ x^2 = x+2 $$
                    $$ x^2 - x - 2 = 0 $$
                    $$ (x-2)(x+1) = 0 $$
                    <p>Los puntos de intersección son $x=-1$ y $x=2$. Estos serán nuestros límites de integración.</p>
                    <p>En el intervalo $[-1, 2]$, necesitamos determinar cuál función es la "superior". Podemos probar un punto intermedio, por ejemplo $x=0$:</p>
                    <ul>
                        <li>$y = x^2 \\Rightarrow y = 0^2 = 0$</li>
                        <li>$y = x+2 \\Rightarrow y = 0+2 = 2$</li>
                    </ul>
                    <p>Como $2 > 0$, la función $y = x+2$ es la superior en este intervalo.</p>
                    <p>Ahora, calculamos el área usando la fórmula $A = \\int_{a}^{b} [f(x) - g(x)] dx$:</p>
                    $$ A = \\int_{-1}^{2} [(x+2) - x^2] dx $$
                    $$ A = \\int_{-1}^{2} (-x^2 + x + 2) dx $$
                    <p>Integramos:</p>
                    $$ A = \\left[-\\frac{x^3}{3} + \\frac{x^2}{2} + 2x\\right]_{-1}^{2} $$
                    <p>Evaluamos en los límites:</p>
                    $$ A = \\left(-\\frac{2^3}{3} + \\frac{2^2}{2} + 2(2)\\right) - \\left(-\\frac{(-1)^3}{3} + \\frac{(-1)^2}{2} + 2(-1)\\right) $$
                    $$ A = \\left(-\\frac{8}{3} + 2 + 4\\right) - \\left(\\frac{1}{3} + \\frac{1}{2} - 2\\right) $$
                    $$ A = \\left(-\\frac{8}{3} + 2 + 4\\right) - \\left(\\frac{1}{3} + \\frac{1}{2} - 2\\right) $$
                    $$ A = \\left(\\frac{-8+18}{3}\\right) - \\left(\\frac{2+3-12}{6}\\right) $$
                    $$ A = \\frac{10}{3} + \\frac{7}{6} $$
                    $$ A = \\frac{20}{6} + \\frac{7}{6} = \\frac{27}{6} = \\frac{9}{2} \\text{ unidades cuadradas} $$
                </div>
            </div>
        </div>
    `,

    'trabajo-w': `
        <div class="container">
            <section class="topic-header animate-in">
                <h1><i class="fas fa-hard-hat"></i> Trabajo (W)</h1>
            </section>

            <div class="content-card animate-in">
                <h3><i class="fas fa-book"></i> Teoría</h3>
                <div style="line-height: 1.8;">
                    <p>En física, el <strong>trabajo (W)</strong> realizado por una fuerza es una medida de la energía transferida cuando una fuerza actúa sobre un objeto y este se desplaza. Se calcula como la integral de la fuerza con respecto al desplazamiento.</p>
                    
                    <h4 style="margin-top: 2rem; color: var(--primary);">Fuerza Constante:</h4>
                    <p>Si una fuerza constante $F$ actúa sobre un objeto y lo desplaza una distancia $d$ en la dirección de la fuerza, el trabajo se calcula como:</p>
                    <div style="background: var(--primary); color: white; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; text-align: center; font-size: 1.2rem; font-weight: 600;">
                        $$ W = F \\cdot d $$
                    </div>

                    <h4 style="margin-top: 2rem; color: var(--primary);">Fuerza Variable:</h4>
                    <p>Cuando la fuerza $F(x)$ varía con la posición $x$, el trabajo realizado al mover un objeto desde una posición inicial $a$ hasta una posición final $b$ se calcula mediante la integral definida:</p>
                    <div style="background: var(--primary); color: white; padding: 1.5rem; border-radius: 12px; margin: 1rem 0; text-align: center; font-size: 1.2rem; font-weight: 600;">
                        $$ W = \\int_{a}^{b} F(x) dx $$
                    </div>
                    <p style="margin-top: 1rem;">Esta es la aplicación directa de la integral para sumar los "pequeños trabajos" realizados por la fuerza en cada infinitesimal desplazamiento.</p>
                </div>
            </div>

            <div class="content-card video-section animate-in">
                <h3><i class="fas fa-video"></i> Video Explicativo</h3>
                <div class="video-container">
                    <!-- Reemplaza el src con la URL de tu video de YouTube sobre el cálculo de trabajo con integrales -->
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/uijikXbIZW0?si=7TPIUEJw1dxQ1rlw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>

            <div class="content-card examples-section animate-in">
                <h3><i class="fas fa-lightbulb"></i> Ejemplos Resueltos</h3>
                
                <div class="example-item">
                    <h4 style="color: var(--accent); margin-bottom: 1rem;">Ejemplo 1: Trabajo con Fuerza Constante</h4>
                    <p><strong>Problema:</strong> Un objeto es empujado con una fuerza constante de $10$ Newtons a lo largo de una distancia de $5$ metros. Calcula el trabajo realizado.</p>
                    <p><strong>Solución:</strong></p>
                    <p>Dado que la fuerza es constante, aplicamos la fórmula simple $W = F \\cdot d$:</p>
                    $$ W = 10 \\text{ N} \\cdot 5 \\text{ m} $$
                    $$ W = 50 \\text{ Joules (J)} $$
                    <p>El trabajo realizado es de $50$ Joules.</p>
                </div>

                <div class="example-item">
                    <h4 style="color: var(--accent); margin-bottom: 1rem;">Ejemplo 2: Trabajo con Fuerza Variable (Ley de Hooke)</h4>
                    <p><strong>Problema:</strong> Se necesita estirar un resorte $0.2$ metros más allá de su longitud natural. Si la constante del resorte es $k = 400$ N/m (según la Ley de Hooke, $F(x) = kx$), ¿cuánto trabajo se requiere?</p>
                    <p><strong>Solución:</strong></p>
                    <p>La fuerza necesaria para estirar un resorte es $F(x) = kx$. En este caso, $k=400$ N/m, entonces $F(x) = 400x$.</p>
                    <p>Queremos estirar el resorte desde su posición natural ($x=0$) hasta $0.2$ metros ($x=0.2$). Aplicamos la fórmula de trabajo para fuerza variable:</p>
                    $$ W = \\int_{0}^{0.2} 400x dx $$
                    <p>Integramos:</p>
                    $$ W = \\left[400 \\frac{x^2}{2}\\right]_{0}^{0.2} $$
                    $$ W = \\left[200x^2\\right]_{0}^{0.2} $$
                    <p>Evaluamos en los límites:</p>
                    $$ W = 200(0.2)^2 - 200(0)^2 $$
                    $$ W = 200(0.04) - 0 $$
                    $$ W = 8 \\text{ Joules (J)} $$
                    <p>Se requieren $8$ Joules de trabajo para estirar el resorte $0.2$ metros.</p>
                </div>
            </div>
        </div>
    `,

    about: `
        <div class="container">
            <section class="topic-header animate-in">
                <h1><i class="fas fa-user-graduate"></i> Sobre Mí</h1>
            </section>

            <div style="display: grid; grid-template-columns: 1fr; gap: 2rem; align-items: start; max-width: 600px; margin: 0 auto;">
                <div class="content-card animate-in" style="text-align: center;">
                    <div style="width: 140px; height: 140px; background: var(--gradient-1); border-radius: 50%; margin: 0 auto 2rem; display: flex; align-items: center; justify-content: center; font-size: 3rem;">
                        <img width=90px src="usuario.png"></img>
                    </div>
                        <h3 style="margin-bottom: 1rem; color: var(--primary);">Mis Datos </h3>
                    <ul style="list-style: none; padding: 0; margin: 0; text-align: left; max-width: 350px; margin: 0 auto;">
                        <li style="margin-bottom: 0.8rem; font-size: 1.1rem; color: var(--text);">
                            <i class="fas fa-user-circle" style="margin-right: 0.8rem; color: var(--secondary);"></i> 
                            <strong>Nombre:</strong> BARRE TIGUA JOSÉ DAVID
                        </li>
                        <li style="margin-bottom: 0.8rem; font-size: 1.1rem; color: var(--text);">
                            <i class="fas fa-book-open" style="margin-right: 0.8rem; color: var(--secondary);"></i> 
                            <strong>SIN-S-MA-2-12</strong>
                        </li>
                        <li style="margin-bottom: 0.8rem; font-size: 1.1rem; color: var(--text);">
                            <i class="fas fa-layer-group" style="margin-right: 0.8rem; color: var(--secondary);"></i> 
                            <strong>SEGUNDO SEMESTRE</strong>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    `
};

// === NAVIGATION FUNCTIONS ===
// Función para mostrar una página específica
function showPage(pageName) {
    currentPage = pageName;
    const content = document.getElementById('content');
    
    // Efecto de desvanecimiento de salida
    content.style.opacity = '0';
    content.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        // Limpia el renderizado anterior de MathJax para evitar duplicados o residuos
        // Asegúrate de que MathJax.startup.document exista antes de intentar limpiarlo
        if (typeof MathJax !== 'undefined' && MathJax.startup && MathJax.startup.document) {
            MathJax.startup.document.clear(); 
        }

        content.innerHTML = pages[pageName] || pages['home']; // Carga la página o vuelve a 'home'
        
        // Efecto de desvanecimiento de entrada
        content.style.opacity = '1';
        content.style.transform = 'translateY(0)';
        
        // Anima los elementos con la clase 'animate-in'
        const animateElements = content.querySelectorAll('.animate-in');
        animateElements.forEach((el, index) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                el.style.transition = 'all 0.6s ease';
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, index * 100); // Retraso escalonado para un efecto más agradable
        });

        // Anima el círculo de progreso si está en la página de inicio
        if (pageName === 'home') {
            setTimeout(() => {
                const progressFill = document.querySelector('.progress-fill');
                if (progressFill) {
                    // Calcula el offset para 80% (283 es la circunferencia total)
                    const offset = 283 - (283 * 0.80); 
                    progressFill.style.strokeDashoffset = offset; 
                }
            }, 500); // Pequeño retraso para que la animación sea visible
        }

        // ** IMPORTANTE: Vuelve a renderizar las ecuaciones LaTeX después de cargar el nuevo contenido **
        // MathJax.typesetPromise([content]) es crucial para que los símbolos se muestren bien en contenido dinámico.
        // Le indicamos a MathJax que procese específicamente el elemento 'content'.
        if (typeof MathJax !== 'undefined') {
            MathJax.typesetPromise([content]);
        }

    }, 200); // Retraso para el efecto de desvanecimiento
}

// Función para mostrar/ocultar la solución de un ejercicio
function toggleSolution(button) {
    const solutionContent = button.nextElementSibling;
    if (solutionContent.classList.contains('hidden')) {
        solutionContent.classList.remove('hidden');
        button.textContent = 'Ocultar Solución';
    } else {
        solutionContent.classList.add('hidden');
        button.textContent = 'Mostrar Solución';
    }
    // Vuelve a renderizar MathJax para asegurar que las ecuaciones ocultas se muestren correctamente
    if (typeof MathJax !== 'undefined') {
        MathJax.typesetPromise([solutionContent]);
    }
}


// === SMOOTH TRANSITIONS & INTERACTIVITY ===
// Se ejecuta cuando el DOM está completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    const content = document.getElementById('content');
    content.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    
    // Asegura que MathJax esté completamente cargado antes de llamar a showPage por primera vez
    // Esto previene problemas de renderizado inicial.
    // La promesa MathJax.startup.promise se resuelve cuando MathJax está listo.
    if (typeof MathJax !== 'undefined' && MathJax.startup && MathJax.startup.promise) {
        MathJax.startup.promise.then(() => {
            showPage('home'); // Carga la página de inicio al cargar la aplicación
        }).catch(err => {
            console.error("Error cargando MathJax:", err);
            showPage('home'); // Carga la página de inicio incluso si MathJax falla
        });
    } else {
        // Fallback si MathJax no se define o no tiene startup/promise por alguna razón
        console.warn("MathJax no está completamente cargado o configurado. Las ecuaciones podrían no renderizarse.");
        showPage('home'); 
    }
    
    // Añade efectos de hover a los botones de navegación
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Añade efectos de click a los botones de navegación y tarjetas de temas
    document.addEventListener('click', function(e) {
        if (e.target.matches('.nav-btn') || e.target.matches('.topic-card')) {
            e.target.style.transform = 'scale(0.95)';
            setTimeout(() => {
                e.target.style.transform = '';
            }, 150);
        }
    });

    // Añade animación flotante a los elementos del héroe
    const heroElements = document.querySelectorAll('.hero h1, .hero p');
    heroElements.forEach((el, index) => {
        el.style.animation = `fadeInUp 1s ease ${index * 0.2}s forwards`;
        el.style.opacity = '0'; // Asegura que estén ocultos al inicio
    });
});

// === KEYBOARD NAVIGATION ===
// Navegación con teclado (ej. Escape para volver a inicio)
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        showPage('home');
    }
});

// === RESPONSIVE MENU ===
// Función para alternar el menú móvil (no implementado visualmente en este ejemplo, pero listo para usar)
function toggleMobileMenu() {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('mobile-open');
}

// === THEME TOGGLE (Optional feature) ===
// Función para cambiar entre temas (claro/oscuro)
function toggleTheme() {
    document.documentElement.classList.toggle('light-theme');
}
