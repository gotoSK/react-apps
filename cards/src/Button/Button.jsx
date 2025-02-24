// Styling React Components with CSS:
// 1. EXTERNAL
// 2. MODULES
// 3. INLINE

import styles from './Button.module.css'

function Button() {
    const inlineStyleObj = {
        backgroundColor: "rgb(255, 127, 127)",
        color: "rgb(46, 46, 46)",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
    }
    return (
        // Module demo css
        // <button className={styles.button1}>Click Here</button>

        // Inline demo for css
        <button style={inlineStyleObj}>Click Here</button>
    );
}

export default Button