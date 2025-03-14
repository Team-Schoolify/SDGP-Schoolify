import React from 'react';
import pool from '../../lib/db';
import PersonalDetails from '../../components/PersonalDetails';
import GuardianDetails from '../../components/GuardianDetails';
import styles from '../../styles/Profile.module.css';

export default async function ProfilePage() {
  // Replace this with your actual user identification logic
  const userId = 1;

  let userData = null;

  try {
    // 1. Fetch basic user info from the "users" table, including profile_image_url
    const userQuery = 'SELECT first_name, last_name, profile_image_url FROM users WHERE id = $1';
    const userResult = await pool.query(userQuery, [userId]);

    if (userResult.rows.length === 0) {
      return <div>No user data found.</div>;
    }

    const { first_name, last_name, profile_image_url } = userResult.rows[0];

    // 2. Fetch personal details from the "personal_details" table
    const personalQuery = `
      SELECT full_name, student_id, date_of_birth, grade, school, address 
      FROM personal_details 
      WHERE user_id = $1
    `;
    const personalResult = await pool.query(personalQuery, [userId]);
    const personalDetails = personalResult.rows[0] || null;

    // 3. Fetch guardian details from the "guardian_details" table
    const guardianQuery = `
      SELECT full_name, relationship, phone_number, job, address 
      FROM guardian_details 
      WHERE user_id = $1
    `;
    const guardianResult = await pool.query(guardianQuery, [userId]);
    const guardianDetails = guardianResult.rows[0] || null;

    // Consolidate fetched data
    userData = {
      firstName: first_name,
      lastName: last_name,
      profileImage: profile_image_url, // fetched profile image URL
      personalDetails,
      guardianDetails,
    };
  } catch (error) {
    console.error('Error fetching user data:', error);
  }

  if (!userData) {
    return <div>Error loading user data.</div>;
  }

  return (
    <div className={styles.container}>
      {/* Blue area reserved for your existing navigation bar */}
      <div className={styles.navbarSpace}></div>

      {/* Profile icon and user name */}
      <div className={styles.profileHeader}>
        <img
          src={userData.profileImage || '/profile-icon.png'}
          alt="Profile Icon"
          className={styles.profileIcon}
        />
        <h1 className={styles.userName}>
          {userData.firstName} {userData.lastName}
        </h1>
      </div>

      {/* Details Section */}
      <div className={styles.detailsContainer}>
        <PersonalDetails data={userData.personalDetails} />
        <GuardianDetails data={userData.guardianDetails} />
      </div>
    </div>
  );
}