import React, { useEffect, useState } from 'react';
import styles from '../styles/Profile.module.css';

const PersonalDetails = ({ data }) => {
  const [schoolId, setSchoolId] = useState(null);
  const [studentId, setStudentId] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedSchoolId = localStorage.getItem("school_id");
      const storedStudentId = localStorage.getItem("student_id");

      setSchoolId(storedSchoolId);
      setStudentId(storedStudentId);
    }
  }, []);

  if (!data) return null;

  return (
    <div className={styles.detailsCard}>
      <h2>Personal Details</h2>
      <div className={styles.detailsRow}>
        <div className={styles.detailLabel}>Full Name:</div>
        <div className={styles.detailValue}>{data.fullName || 'N/A'}</div>
      </div>
      <div className={styles.detailsRow}>
        <div className={styles.detailLabel}>Student ID:</div>
        <div className={styles.detailValue}>{data.studentId || studentId || 'N/A'}</div>
      </div>
      <div className={styles.detailsRow}>
        <div className={styles.detailLabel}>Date of Birth:</div>
        <div className={styles.detailValue}>{data.dateOfBirth || 'N/A'}</div>
      </div>
      <div className={styles.detailsRow}>
        <div className={styles.detailLabel}>Grade:</div>
        <div className={styles.detailValue}>{data.grade || 'N/A'}</div>
      </div>
      <div className={styles.detailsRow}>
        <div className={styles.detailLabel}>School:</div>
        <div className={styles.detailValue}>{data.school || schoolId || 'N/A'}</div>
      </div>
      <div className={styles.detailsRow}>
        <div className={styles.detailLabel}>Address:</div>
        <div className={styles.detailValue}>{data.address || 'N/A'}</div>
      </div>
    </div>
  );
};

export default PersonalDetails;