export type Patient = {
    id: string
    name: string
    caretaker: string
    email: string
    date: Date
    symptoms: string
    
}

export type DraftPatient = Omit<Patient, 'id'> // Utilities Types, en este caso omito el 'id'