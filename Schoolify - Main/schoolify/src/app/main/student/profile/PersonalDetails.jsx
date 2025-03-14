import React from 'react';
import styles from '../styles/Profile.module.css';

const PersonalDetails = ({ data }) => {
  if (!data) return null;

  return (
    <div className={styles.detailsCard}>
      <h2>Personal Details</h2>
      <div className={styles.detailsRow}>
        <div className={styles.detailLabel}>Full Name:</div>
        <div className={styles.detailValue}>{data.fullName}</div>
      </div>
      <div className={styles.detailsRow}>
        <div className={styles.detailLabel}>Student ID:</div>
        <div className={styles.detailValue}>{data.studentId}</div>
      </div>
      <div className={styles.detailsRow}>
        <div className={styles.detailLabel}>Date of Birth:</div>
        <div className={styles.detailValue}>{data.dateOfBirth}</div>
      </div>
      <div className={styles.detailsRow}>
        <div className={styles.detailLabel}>Grade:</div>
        <div className={styles.detailValue}>{data.grade}</div>
      </div>
      <div className={styles.detailsRow}>
        <div className={styles.detailLabel}>School:</div>
        <div className={styles.detailValue}>{data.school}</div>
      </div>
      <div className={styles.detailsRow}>
        <div className={styles.detailLabel}>Address:</div>
        <div className={styles.detailValue}>{data.address}</div>
      </div>
    </div>
  );
};

export default PersonalDetails;