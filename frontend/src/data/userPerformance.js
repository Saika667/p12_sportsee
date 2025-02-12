class userPerformance {
    constructor (kind, data) {
        this.kind = kind
        this.data = data
        this.format()
    }

    format() {
        const maxValue = this.data.reduce((acc, curr) => curr.value > acc ? curr.value : acc , 0)
        const tmpData = []
        for (const [id, kind] of Object.entries(this.kind)) {
            tmpData.push({
                category: this.translateKinds(kind),
                fullMark: maxValue,
                performanceValue: this.data.find(elt => elt.kind === parseInt(id)).value
            })
        }
        this.data = tmpData.reverse()
    }

    translateKinds(kind) {
        const translations = {
            "cardio": "Cardio",
            "energy": "Énergie",
            "endurance": "Endurance",
            "strength": "Force",
            "speed": "Vitesse",
            "intensity": "Intensité",
        }

        return translations[kind] ?? ''
    }
}

export default userPerformance