import { useState } from 'react'
import { Select, ComboboxItem, Loader } from '@mantine/core'

import type { Patient } from './types'
import { apiGetPatientsList } from './utils'

export default function SelectExample() {
    const [loading, setLoading] = useState<boolean>(false)
    const [patientsList, setPatientsList] = useState<Patient[]>([])
    const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null)

    const selectedPatientName = selectedPatient
        ? `${selectedPatient.firstName} ${selectedPatient.lastName}`
        : 'none'

    const loadPatientData = async () => {
        console.log('loadPatientData...')
        setPatientsList([])
        setSelectedPatient(null)
        try {
            setLoading(true)
            const patients = await apiGetPatientsList()
            setPatientsList(patients)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    const selectPatient = (value: String) => {
        console.log('selectPatient...')
        const patient = patientsList.find(p => p.id === value)
        setSelectedPatient(patient ?? null)
    }

    return (
        <div>
            <Select
                label="Patients list"
                placeholder="Select a patient"
                rightSection={loading ? <Loader size={13} /> : null}
                onClick={loadPatientData}
                onOptionSubmit={selectPatient}
                data={
                    patientsList.map(({ id, firstName, lastName }) => ({
                        value: id,
                        label: `${firstName} ${lastName}`,
                    })) as ComboboxItem[]
                }></Select>
            <div style={{ padding: '20px' }}>Selected Patient: {selectedPatientName}</div>
        </div>
    )
}
