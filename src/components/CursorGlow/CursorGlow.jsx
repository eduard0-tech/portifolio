import React, { useEffect } from 'react';

const CursorGlow = () => {
    useEffect(() => {
        const handleMouseMove = (e) => {
            // Atualiza as variáveis CSS --x e --y com a posição do mouse
            document.documentElement.style.setProperty('--x', `${e.clientX}px`);
            document.documentElement.style.setProperty('--y', `${e.clientY}px`);
        };

        window.addEventListener('mousemove', handleMouseMove);

        // Limpa o evento quando o componente é desmontado
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return <div id="cursor-glow"></div>;
};

export default CursorGlow;