export class Place {
    constructor(public id: string,
                public title: string,
                public description: string,
                public imamgeUrl: string,
                public price: number,
                public availableFrom: Date,
                public availableTo: Date,
                public userId: string
                ) {

    }
}
