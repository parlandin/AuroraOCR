import styles from "./loadingComponent.module.css";
import React from "react";

export interface LoadingComponentProps {
  isLoading: boolean;
  percentage?: number;
  percentageNumberShow?: boolean;
}

const LoadingComponent: React.FC<LoadingComponentProps> = ({
  isLoading,
  percentage,
  percentageNumberShow = false,
}) => {
  if (!isLoading) return null;

  const progressStyle =
    percentage !== undefined ? { width: `${percentage}%` } : {};
  const showPercentage = percentage !== undefined;

  return (
    <div className={styles.loading__container}>
      <div className={styles.loading}>
        <div className={styles.loading__spinner}>
          <div className={styles.loading__spinner_magnify}>
            <div className={styles.loading__spinner_circle}></div>
            <div className={styles.loading__spinner_handle}></div>
          </div>
        </div>
      </div>

      {showPercentage && (
        <div className={styles.loading__progress}>
          <div className={styles.loading__progress_bar}>
            <div
              className={styles.loading__progress_bar_fill}
              style={progressStyle}
            ></div>
          </div>
          {percentageNumberShow && (
            <div className={styles.loading__progress_number}>
              {Math.round(percentage)}%
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default LoadingComponent;
