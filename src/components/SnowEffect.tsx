import { useEffect } from "react";

const SnowEffect = () => {
    useEffect(() => {
        const snowflakes: HTMLDivElement[] = [];
        const numSnowflakes = 50;
        const container = document.body;

        // Create snowflakes
        for (let i = 0; i < numSnowflakes; i++) {
            const snowflake = document.createElement("div");
            snowflake.className = "snowflake";
            snowflake.innerHTML = "❄";

            // Random initial position
            const startX = Math.random() * 100;
            snowflake.style.left = startX + "%";
            snowflake.style.top = "-10px";

            // Random size between 10px and 20px
            const size = Math.random() * 10 + 10;
            snowflake.style.fontSize = size + "px";

            // Random animation duration between 3s and 8s (slower = more realistic)
            const duration = Math.random() * 5 + 3;
            snowflake.style.animationDuration = duration + "s";

            // Random delay so they don't all start at once
            snowflake.style.animationDelay = Math.random() * 2 + "s";

            // Random horizontal drift (some move left, some right)
            const drift = (Math.random() - 0.5) * 100; // -50px to +50px
            snowflake.style.setProperty("--drift", drift + "px");

            // Random opacity for depth
            snowflake.style.opacity = (Math.random() * 0.4 + 0.6).toString();

            container.appendChild(snowflake);
            snowflakes.push(snowflake);
        }

        // Cleanup function
        return () => {
            snowflakes.forEach((snowflake) => {
                if (snowflake.parentNode) {
                    snowflake.parentNode.removeChild(snowflake);
                }
            });
        };
    }, []);

    return null;
};

export default SnowEffect;

