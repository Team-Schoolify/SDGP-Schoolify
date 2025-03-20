import React from 'react';
import styles from '../styles/Profile.module.css';
import React, { useEffect, useState } from 'react';

const GuardianDetails = ({ data }) => {
  if (!data) return null;

 

  return (
    <div className={styles.detailsCard}>
      <h2>Parent/Guardian Details</h2>
      <div className={styles.detailsRow}>
        <div className={styles.detailLabel}>Full Name:</div>
        <div className={styles.detailValue}>{data.fullName}</div>
      </div>
      <div className={styles.detailsRow}>
        <div className={styles.detailLabel}>Relationship to the Student:</div>
        <div className={styles.detailValue}>{data.relationship}</div>
      </div>
      <div className={styles.detailsRow}>
        <div className={styles.detailLabel}>Phone Number:</div>
        <div className={styles.detailValue}>{data.phoneNumber}</div>
      </div>
      <div className={styles.detailsRow}>
        <div className={styles.detailLabel}>Job:</div>
        <div className={styles.detailValue}>{data.job}</div>
      </div>
      <div className={styles.detailsRow}>
        <div className={styles.detailLabel}>Address:</div>
        <div className={styles.detailValue}>{data.address}</div>
      </div>
    </div>
  );
};

export default GuardianDetails;