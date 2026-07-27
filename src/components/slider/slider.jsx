import styles from "./slider.module.css";

function PriceRangeSlider({ min, max, minVal, maxVal, onMinChange, onMaxChange, step = 500 }) {
  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxVal - step);
    onMinChange(value); 
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minVal + step);
    onMaxChange(value);
  };

  const minPercent = ((minVal - min) / (max - min)) * 100;
  const maxPercent = ((maxVal - min) / (max - min)) * 100;

  return (
    <div className={styles.priceRange}>
      <div className={styles.priceRangeValues}>
        <span>${minVal}</span>
        <span>${maxVal}</span>
      </div>

      <div className={styles.priceRangeSliderContainer}>
        <div className={styles.priceRangeTrack} />
        <div
          className={styles.priceRangeTrackActive}
          style={{ left: `${minPercent}%`, right: `${100 - maxPercent}%` }}
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={minVal}
          onChange={handleMinChange}
          className={`${styles.priceRangeInput} ${styles.priceRangeInputMin}`}
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={maxVal}
          onChange={handleMaxChange}
          className={`${styles.priceRangeInput} ${styles.priceRangeInputMax}`}
        />
      </div>
    </div>
  );
}

export default PriceRangeSlider;