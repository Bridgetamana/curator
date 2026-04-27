import { useState } from "react";
import { Link } from "react-router";
import styles from "./ProfileDropdown.module.css";
import avatar from "../../assets/avatar.webp";

export default function ProfileDropdown() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.profileDropdown}>
            <button
                type="button"
                className={styles.trigger}
                aria-haspopup="menu"
                aria-expanded={isOpen}
                aria-label="Open profile menu"
                onClick={() => setIsOpen((open) => !open)}
            >
                <img src={avatar} alt="Arthur Vance" className={styles.avatar} />
            </button>

            {isOpen && (
                <div className={styles.menu} role="menu" aria-label="Profile menu">
                    <div className={styles.profileInfo}>
                        <span className={styles.name}>Arthur Vance</span>
                        <span className={styles.email}>arthur@curator.app</span>
                    </div>

                    <div className={styles.menuActions}>
                        <Link
                            className={styles.menuLink}
                            to="/setting"
                            role="menuitem"
                            onClick={() => setIsOpen(false)}
                        >
                            Settings
                        </Link>
                        <button
                            type="button"
                            className={styles.menuButton}
                            role="menuitem"
                            onClick={() => setIsOpen(false)}
                        >
                            Log out
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}