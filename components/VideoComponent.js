import React from 'react';
import styles from '../styles/VideoComponent.module.css';

const VideoComponent = () => {
    return (
        <div className={styles['video-player']}>
            <div className={styles.content}>
                <h2>Explore TOINGG in <span>GPT</span> Store</h2>
                <ul>
                    <li>Interactive Communication: Engage in single or batch calls using TOINGG GPT.</li>
                    <li>Advanced Features: Leverage GPT for real-time sentiment analysis during calls.</li>
                    <li>Data Export: Conveniently export call logs to CSV.</li>
                    <li>Enhanced Usability: Tailored for users familiar with CSV functionalities.</li>
                </ul>
                <a href="#" className={styles['try-now-button']}>Try now</a>
            </div>
        </div>
    );
}

export default VideoComponent;