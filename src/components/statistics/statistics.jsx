import styles from './statistics.module.css';

export const Statistics = props => {
  const { title, stats } = props;
  return (
    <section className="statistics">
      {title && <h2 className={styles.title}>Upload stats</h2>}

      <ul className={styles.stat_list}>
        {stats.map(item => (
          <li key={item.id} className={styles.item} style={{
            backgroundColor: generateDarkBackgroundColor()
          }}>
            <span className={styles.label}>{item.label}</span>
            <span className="percentage">{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

// function randomBackgroundColor() {
//   return `#${Math.floor(Math.random()*16777215).toString(16)}`
// }

function generateDarkBackgroundColor() {
  let color = '#';
  
  let red = Math.floor(Math.random() * 128).toString(16);
  let green = Math.floor(Math.random() * 128).toString(16);
  let blue = Math.floor(Math.random() * 128).toString(16);
  
  if (red.length === 1) {
    red = '0' + red;
  }
  
  if (green.length === 1) {
    green = '0' + green;
  }
  
  if (blue.length === 1) {
    blue = '0' + blue;
  }
  
  color += red + green + blue;
  
  return color;
}