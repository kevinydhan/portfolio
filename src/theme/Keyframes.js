import { keyframes } from 'styled-components'

class Keyframes {
    static slide = keyframes`
        from {
            transform: translateY(-30px);
            opacity: 0;
        }

        to {
            transform: translateY(0);
            opacity: 1;
        }
    `
}

export default Keyframes
