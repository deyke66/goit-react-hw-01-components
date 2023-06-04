import styles from './statistics.module.css';

export const Statistics = props => {
  const { title, stats } = props;
  return (
    <section className="statistics">
      {title && <h2 className={styles.title}>Upload stats</h2>}

      <ul className={styles.stat_list}>
        {stats.map(item => (
          <li key={item.id} className={styles.item} style={{
            backgroundColor: randomBackgroundColor()
          }}>
            <span className={styles.label}>{item.label}</span>
            <span className="percentage">{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

function randomBackgroundColor() {
  return `#${Math.floor(Math.random()*16777215).toString(16)}`
}