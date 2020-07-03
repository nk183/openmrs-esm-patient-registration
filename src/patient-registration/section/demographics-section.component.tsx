import React from 'react';
import { FormValues } from './../patient-registration.component';
import { NameInput } from '../input/custom-input/name-input.component';
import { UnidentifiedPatientInput } from '../input/custom-input/unidentified-patient-input.component';
import { SelectInput } from '../input/basic-input/select-input.component';
import { DateInput } from '../input/basic-input/date-input.component';
import { EstimatedAgeInput } from '../input/custom-input/estimated-age-input.component';
import { CheckboxInput } from '../input/basic-input/checkbox-input.component';
import styles from './section.css';

interface DemographicsSectionProps {
  setFieldValue(field: string, value: any, shouldValidate?: boolean): void;
  values: FormValues;
}

export const DemographicsSection: React.FunctionComponent<DemographicsSectionProps> = ({ setFieldValue, values }) => {
  return (
    <section className={styles.formSection}>
      <h2 className={styles.sectionTitle}>Demographics</h2>
      <section className={styles.formGroup}>
        <h3 className={styles.formGroupTitle}>Name</h3>
        <NameInput givenName="givenName" middleName="middleName" familyName="familyName" />
        <UnidentifiedPatientInput label="Unidentified Patient" name="unidentifiedPatient" setName={setFieldValue} />
      </section>
      <section className={styles.formGroup}>
        <h3 className={styles.formGroupTitle}>Gender</h3>
        <SelectInput name="gender" options={['Male', 'Female', 'Other', 'Unknown']} />
      </section>
      <section className={styles.formGroup}>
        <h3 className={styles.formGroupTitle}>Birthdate</h3>
        <DateInput name="birthdate" />
        {values.birthdateEstimated ? (
          <EstimatedAgeInput yearsName="yearsEstimated" monthsName="monthsEstimated" setBirthdate={setFieldValue} />
        ) : null}
        <CheckboxInput label="Estimated Birthdate" name="birthdateEstimated" />
      </section>
    </section>
  );
};
