import {Particles as P} from "react-tsparticles"
import { useColorModeValue } from '@chakra-ui/react'
import styles from './Particles.module.css'

const Particles = () => {
    const bgColor = useColorModeValue('#FFFFFF', '#1A202C')
    const dotColor = useColorModeValue('#000000', '#FFFFFF')
    return (
        <P 
            className={styles.ParticlesCanvas}
            options={{
                background: {
                color: {
                    value: bgColor,
                },
                },
                fpsLimit: 120,
                interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    },
                    resize: true,
                },
                modes: {
                    bubble: {
                        distance: 400,
                        duration: 2,
                        opacity: 0.8,
                        size: 40,
                    },
                    push: {
                        quantity: 4,
                    },
                    repulse: {
                        distance: 100,
                        duration: 0.4,
                    },
                },
                },
                particles: {
                color: {
                    value: dotColor
                },
                links: {
                    color: dotColor,
                    distance: 80,
                    enable: true,
                    opacity: 0.25,
                    width: 1,
                    triangles: {
                        blink: true,
                        enable: true,                        
                    }
                },
                collisions: {
                    enable: true,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outMode: "bounce",
                    random: false,
                    speed: 2,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        area: 800,
                    },
                    value: 150,
                    limit: 200,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    random: true,
                    value: 5,
                },
                },
                detectRetina: true,
            }} 
        />
    )
}

export default Particles