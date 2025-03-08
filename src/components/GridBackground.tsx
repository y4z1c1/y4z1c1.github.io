import { useEffect, useRef } from 'react';

// simple grid background with interactive cubes
const GridBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouseRef = useRef({ x: 0, y: 0 });
    const lastActiveTimeRef = useRef<{ [key: string]: number }>({});
    const animationStartTimeRef = useRef<number>(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas size
        const updateSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        // Track mouse position
        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };

        // Initialize animation start time
        animationStartTimeRef.current = performance.now();

        // Draw the grid
        const draw = (_timestamp: number) => {
            if (!ctx) return;

            // Current time for animation and tracking
            const currentTime = performance.now();
            const elapsedTime = currentTime - animationStartTimeRef.current;

            // Clear with background color
            ctx.fillStyle = '#252525';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Grid settings
            const cellSize = 20;
            const gap = 20;
            const totalSize = cellSize + gap;

            // Calculate grid dimensions
            const cols = Math.ceil(canvas.width / totalSize) + 1;
            const rows = Math.ceil(canvas.height / totalSize) + 1;

            // Set cell style
            ctx.fillStyle = 'rgba(100, 100, 100, 0.2)';

            // Draw cells
            for (let row = 0; row < rows; row++) {
                for (let col = 0; col < cols; col++) {
                    const x = col * totalSize;
                    const y = row * totalSize;

                    // Cell center
                    const centerX = x + cellSize / 2;
                    const centerY = y + cellSize / 2;

                    // Distance from mouse
                    const dx = mouseRef.current.x - centerX;
                    const dy = mouseRef.current.y - centerY;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    // Breathing animation - using elapsed time for consistent animation
                    // Slower breathing with 5000ms cycle
                    const breatheFactor = Math.sin(elapsedTime / 5000 + (row * col * 0.02)) * 0.05 + 1;

                    // Mouse influence with distance-based delay
                    const maxDist = 400;
                    const delay = Math.min(1, distance / maxDist);

                    // Cell identifier for tracking last active time
                    const cellId = `${row}-${col}`;

                    // Check if cell is currently under influence
                    const isActive = distance < maxDist;

                    // Update last active time if cell is under influence
                    if (isActive) {
                        lastActiveTimeRef.current[cellId] = currentTime;
                    }

                    // Get time since cell was last active
                    const lastActiveTime = lastActiveTimeRef.current[cellId] || 0;
                    const timeSinceActive = currentTime - lastActiveTime;

                    // Scale down over 2 seconds after cursor leaves
                    const scaleDownDuration = 2000; // 2 seconds
                    let mouseEffect = 0;

                    if (isActive) {
                        // Normal active scaling when under cursor influence
                        mouseEffect = 0.4 * (1 - distance / maxDist) * (1 - delay * 0.3);
                    } else if (timeSinceActive < scaleDownDuration) {
                        // Gradually scale down after cursor leaves
                        // Using easeOutCubic for smoother animation
                        const progress = timeSinceActive / scaleDownDuration;
                        const easing = 1 - Math.pow(1 - progress, 3); // easeOutCubic
                        const lastEffect = 0.4 * (1 - Math.min(distance, maxDist) / maxDist) * (1 - delay * 0.3);
                        mouseEffect = lastEffect * (1 - easing);
                    }

                    // Combined scale
                    const scale = 1 + mouseEffect + (breatheFactor - 1) * 0.5;

                    // Draw cell
                    ctx.save();
                    ctx.translate(centerX, centerY);
                    ctx.scale(scale, scale);
                    ctx.translate(-cellSize / 2, -cellSize / 2);

                    // Rounded rectangle
                    const radius = 3;
                    ctx.beginPath();
                    ctx.moveTo(radius, 0);
                    ctx.lineTo(cellSize - radius, 0);
                    ctx.quadraticCurveTo(cellSize, 0, cellSize, radius);
                    ctx.lineTo(cellSize, cellSize - radius);
                    ctx.quadraticCurveTo(cellSize, cellSize, cellSize - radius, cellSize);
                    ctx.lineTo(radius, cellSize);
                    ctx.quadraticCurveTo(0, cellSize, 0, cellSize - radius);
                    ctx.lineTo(0, radius);
                    ctx.quadraticCurveTo(0, 0, radius, 0);
                    ctx.closePath();
                    ctx.fill();

                    ctx.restore();
                }
            }

            // Continue animation
            requestAnimationFrame(draw);
        };

        // Initialize
        updateSize();
        window.addEventListener('resize', updateSize);
        document.addEventListener('mousemove', handleMouseMove);

        // Start animation
        const animationId = requestAnimationFrame(draw);

        // Cleanup
        return () => {
            window.removeEventListener('resize', updateSize);
            document.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 -z-10"
            style={{ backgroundColor: 'transparent' }}
        />
    );
};

export default GridBackground; 