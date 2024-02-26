
export class Job {
    id!: number
    status_name!: string
    place_name!: string
    rsponsible_person_name!: string
    request_name!: string
    telephone!: string
    job_topic!: string
    job_detail!: string
    status!: number
    place!: number
    rsponsible_person!: number
}

export class CreateJob {
    id!: number
    request_name!: string
    telephone!: string
    job_topic!: string
    job_detail!: string
    status!: number
    place!: number
    rsponsible_person!: number
}


export class JobStatus {
    id!: number
    name!: string
}


export class Place {
    id!: number
    name!: string
}

export class Person {
    id!: number
    name!: string
}