import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <nav className={`${styles.navbar} glass`}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    AASA Tool
                </Link>
                <div className={styles.links}>
                    <Link href="/lookup" className={styles.link}>Lookup</Link>
                    <Link href="/generator" className={styles.link}>Generator</Link>
                    <Link href="https://buymeacoffee.com/mirhadiali" target="_blank" className={styles.coffeeBtn}>
                        ☕ Buy Me a Coffee
                    </Link>
                </div>
            </div>
        </nav>
    );
}
