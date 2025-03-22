import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import styles from '../styles/Profile.module.css';

const PersonalDetails = () => {
  const [schoolId, setSchoolId] = useState(null);
  const [studentId, setStudentId] = useState(null);
  const [studentData, setStudentData] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedSchoolId = localStorage.getItem("school_id");
      const storedStudentId = localStorage.getItem("student_id");

      setSchoolId(storedSchoolId);
      setStudentId(storedStudentId);

      if (storedStudentId && storedSchoolId) {
        fetchStudentData(storedStudentId, storedSchoolId);
      }
    }
  }, []);

  const fetchStudentData = async (student_id, school_id) => {
    const { data, error } = await supabase
      .from('students') // Your table name in Supabase
      .select('*')
      .eq('student_id', student_id)
      .eq('school_id', school_id)
      .single(); // Fetch a single record

    if (error) {
      console.error('Error fetching student data:', error);
    } else {
      setStudentData(data);
    }
  };

  if (!studentData) return <p>Loading...</p>;

  return (
    <div className={styles.detailsCard}>
      <h2>Personal Details</h2>
      <div className={styles.detailsRow}>
        <div className={styles.detailLabel}>Full Name:</div>
        <div className={styles.detailValue}>{studentData.student_name || 'N/A'}</div>
      </div>
      <div className={styles.detailsRow}>
        <div className={styles.detailLabel}>Student ID:</div>
        <div className={styles.detailValue}>{studentData.student_id || 'N/A'}</div>
      </div>
      <div className={styles.detailsRow}>
        <div className={styles.detailLabel}>Email:</div>
        <div className={styles.detailValue}>{studentData.student_email || 'N/A'}</div>
      </div>
      <div className={styles.detailsRow}>
        <div className={styles.detailLabel}>Grade:</div>
        <div className={styles.detailValue}>{studentData.student_grade || 'N/A'}</div>
      </div>
      <div className={styles.detailsRow}>
        <div className={styles.detailLabel}>School:</div>
        <div className={styles.detailValue}>{studentData.school_id || 'N/A'}</div>
      </div>
    </div>
  );
};

export default PersonalDetails;