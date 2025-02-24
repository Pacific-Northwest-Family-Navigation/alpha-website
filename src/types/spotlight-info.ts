export type BaseSpotlightInfo = {
    id: string,
}

export type BasicSpotlightInfo = BaseSpotlightInfo & {
    name: string,
    year: number,
    order:number,
    startDate: Date,
    endDate: Date,
    visible: boolean
}

export type SpotlightInfo = {
    spotlights: BasicSpotlightInfo[]
    currentSpotlightId: string
}