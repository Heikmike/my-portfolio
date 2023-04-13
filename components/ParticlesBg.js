import { useCallback } from "react"
import Particles from "react-particles"
import { loadFull } from "tsparticles"

export default function ParticlesBg() {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fpsLimit: 120,
                fullScreen: {
                    enable: true,
                    zIndex: -1,
                },
                interactivity: {
                    detectsOn: 'window',
                    events: {
                        onClick: {
                            enable: true,
                            mode: 'push',
                        },
                        onHover: {
                            enable: true,
                            mode: 'repulse',
                        },
                        resize: true,
                    },
                    modes: {
                        bubble: {
                            distance: 40,
                            duration: 2,
                            opacity: 0.4,
                            size: 40,
                        },
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 150,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: '#ffffff',
                    },
                    links: {
                        color: '#ffffff',
                        distance: 150,
                        enable: true,
                        opacity: 0.7,
                        width: 2,
                        triangles: {
                            enable: true,
                            color: '#db7093',
                            opacity: 0.5,
                        },
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        direction: 'none',
                        enable: true,
                        outMode: 'bounce',
                        random: true,
                        speed: 4,
                        straight: false,
                        attract: {
                            enable: false,
                            rotateX: 600,
                            rotateY: 1200,
                        },
                    },
                    number: {
                        density: {
                            enable: true,
                            value_area: 2000,
                        },
                        value: 60,
                    },
                    opacity: {
                        value: 0.9,
                    },
                    shape: {
                        type: 'circle',
                    },
                    size: {
                        random: true,
                        value: 5,
                    },
                },
                detectRetina: true,
            }}
        />
    );
}
